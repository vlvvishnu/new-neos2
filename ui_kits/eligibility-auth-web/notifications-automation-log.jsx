// Notifications Automation Log — same structure as the ERV / CDM automation logs,
// driven by window.NOT_ROWS so the log and the request view never disagree.
const { useState: useNOTL, useRef: useNOTLR, useEffect: useNOTLE } = React;

const NOT_LOG_COLS = [
  { key:"ref",         label:"Ref ID",                 w:"minmax(130px,1.2fr)", sort:true },
  { key:"name",        label:"Patient Name",           w:"minmax(140px,1.4fr)", sort:true },
  { key:"serviceLine", label:"Service line",           w:"minmax(110px,1.1fr)", sort:true },
  { key:"event",       label:"Event",                  w:"minmax(100px,1fr)",   sort:true },
  { key:"st",          label:"Transaction Start time",  w:"minmax(160px,1.6fr)", sort:true },
  { key:"et",          label:"Transaction end time",    w:"minmax(160px,1.6fr)", sort:true },
  { key:"at",          label:"AT Status",              w:"80px",                sort:false, align:"center" },
];
const NOT_LOG_GRID = NOT_LOG_COLS.map(c=>c.w).join(" ");

const NOT_LOG_CARDS = [
  { id:"all",       label:"All Transactions", color:"rgb(21,95,130)",   match:()=>true,                icon:null },
  { id:"thumb",     label:"Completed",        color:"rgb(14,165,233)",  match:(r)=>r.at==="thumb",     get icon(){ return (window.__resources&&window.__resources.atCompleted)||"icons/at-completed.png"; } },
  { id:"warning",   label:"Needs Attention",  color:"rgb(245,158,11)",  match:(r)=>r.at==="warning",   get icon(){ return (window.__resources&&window.__resources.atNeedsAttention)||"icons/at-needs-attention.png"; } },
  { id:"hourglass", label:"In Progress",      color:"rgb(148,163,184)", match:(r)=>r.at==="hourglass", get icon(){ return (window.__resources&&window.__resources.atInProgress)||"icons/at-in-progress.png"; } },
];
const NOT_LOG_FIELDS = [
  { key:"serviceLine", label:"Service line" },
  { key:"event",       label:"Event" },
  { key:"status",      label:"Status" },
];
const notlPad = (n)=>String(n).padStart(2,"0");

function NOTLogATIcon({ kind }) {
  const res = (typeof window!=="undefined" && window.__resources) || {};
  if (kind==="thumb")     return <img title="Completed"       alt="Completed"       src={res.atCompleted||"icons/at-completed.png"} style={{width:18,height:18,objectFit:"contain"}} />;
  if (kind==="warning")   return <img title="Needs Attention" alt="Needs Attention" src={res.atNeedsAttention||"icons/at-needs-attention.png"} style={{width:18,height:18,objectFit:"contain"}} />;
  if (kind==="hourglass") return <img title="In Progress"     alt="In Progress"     src={res.atInProgress||"icons/at-in-progress.png"} style={{width:18,height:18,objectFit:"contain"}} />;
  return <span style={{color:"#cbd5e1"}}>—</span>;
}

function NOTLogSortArrows({ active, dir }) {
  const up   = active && dir==="asc"  ? "#2563eb" : "rgba(0,0,0,0.25)";
  const down = active && dir==="desc" ? "#2563eb" : "rgba(0,0,0,0.25)";
  return (
    <svg width="10" height="15" viewBox="0 0 9 14" fill="none" style={{marginRight:3,flex:"none"}}>
      <path d="M7.74699 7.40234H1.25301C1.05823 7.40234 0.949473 7.608 1.0701 7.7484L4.31708 11.5135C4.41003 11.6213 4.58899 11.6213 4.68291 11.5135L7.9299 7.7484C8.05053 7.608 7.94177 7.40234 7.74699 7.40234Z" fill={down}/>
      <path d="M7.9299 6.24825L4.68291 2.48317C4.58997 2.3754 4.41101 2.3754 4.31708 2.48317L1.0701 6.24825C0.949473 6.38865 1.05823 6.59431 1.25301 6.59431H7.74699C7.94177 6.59431 8.05053 6.38865 7.9299 6.24825Z" fill={up}/>
    </svg>
  );
}

function NOTLogChip({ label, onRemove }) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:10,background:"#f4f6f9",border:"1px solid #d8dee6",borderRadius:6,padding:"6px 10px",font:"400 12px/16px Roboto",color:"#334155",whiteSpace:"nowrap",flexShrink:0}}>
      {label}
      <button type="button" onClick={onRemove} title="Remove filter" style={{border:"none",background:"transparent",color:"#64748b",fontSize:13,lineHeight:1,cursor:"pointer",padding:0}}>✕</button>
    </span>
  );
}

function NotificationsAutomationLogView({ onRefClick }) {
  const src = (typeof window!=="undefined" && window.NOT_ROWS) || [];
  const logRows = src.map((r,i)=>({
    id: r.id,
    ref: "NOT" + String(i+1).padStart(10,"0"),
    event: r.event,
    name: r.name,
    serviceLine: r.serviceLine,
    status: r.status,
    st: r.dueDate + " 09:39 AM",
    et: r.status==="Overdue" ? "—" : r.dueDate + " 04:12 PM",
    at: r.at,
  }));

  const [cardFilter, setCardFilter] = useNOTL(null);
  const [searchQ, setSearchQ]       = useNOTL("");
  const [sortKey, setSortKey]       = useNOTL(null);
  const [sortDir, setSortDir]       = useNOTL("asc");
  const [fieldFilters, setFieldFilters] = useNOTL([]);
  const [fpOpen, setFpOpen]         = useNOTL(false);
  const onSort = (k)=>{ if(sortKey===k) setSortDir(d=>d==="asc"?"desc":"asc"); else { setSortKey(k); setSortDir("asc"); } };

  const FP = typeof window!=="undefined" && window.FilterPopover;
  const filtered = fieldFilters.length ? logRows.filter(r=>fieldFilters.every(f=>f.values.includes(r[f.field]))) : logRows;
  const searched = searchQ ? filtered.filter(r=>Object.values(r).join(" ").toLowerCase().includes(searchQ.toLowerCase())) : filtered;
  const activeCard = cardFilter ? NOT_LOG_CARDS.find(c=>c.id===cardFilter) : null;
  const scoped = activeCard ? searched.filter(activeCard.match) : searched;
  const rows = sortKey ? [...scoped].sort((a,b)=>{ const av=(a[sortKey]||"").toString().toLowerCase(), bv=(b[sortKey]||"").toString().toLowerCase(); return sortDir==="asc"?av.localeCompare(bv):bv.localeCompare(av); }) : scoped;

  const labelOf = (k)=>(NOT_LOG_FIELDS.find(f=>f.key===k)||{}).label||k;
  const tags = [];
  fieldFilters.forEach(f=>f.values.forEach(v=>tags.push({
    id:`${f.field}:${v}`, label:`${labelOf(f.field)}: ${v}`,
    onRemove:()=>setFieldFilters(fieldFilters.map(x=>x.field===f.field?{...x,values:x.values.filter(y=>y!==v)}:x).filter(x=>x.values.length)),
  })));

  return (
    <div style={{background:"#fff",minHeight:"100%"}} data-screen-label="02 Notifications Automation Log">
      <div style={{background:"#eef4fb",borderBottom:"1px solid #e2e8f0",padding:"10px 24px",display:"flex",alignItems:"center",gap:14}}>
        <div style={{position:"relative",flexShrink:0}}>
          <button type="button" onClick={()=>setFpOpen(v=>!v)} style={{background:"transparent",border:"none",cursor:"pointer",color:"#2563eb",font:"500 12px/16px Roboto",display:"inline-flex",alignItems:"center",gap:6,padding:"5px 4px",whiteSpace:"nowrap"}}>
            <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,borderRadius:"50%",background:"#2563eb",color:"#fff",fontSize:10,fontWeight:600,lineHeight:1}}>+</span>
            Add More Filters
          </button>
          {fpOpen && FP && <FP fields={NOT_LOG_FIELDS} rows={logRows} initial={fieldFilters} onApply={(f)=>{ setFieldFilters(f); setFpOpen(false); }} onClose={()=>setFpOpen(false)} />}
        </div>
        <div className="chip-scroll" style={{display:"flex",alignItems:"center",gap:14,overflowX:"auto",flex:"1 1 auto",minWidth:0}}>
          {tags.map(t=><NOTLogChip key={t.id} label={t.label} onRemove={t.onRemove} />)}
        </div>
        {tags.length>0 && <button type="button" onClick={()=>setFieldFilters([])} style={{background:"transparent",border:"none",cursor:"pointer",color:"#2563eb",font:"500 12px/16px Roboto",padding:"5px 4px",whiteSpace:"nowrap"}}>Clear all</button>}
        <div style={{position:"relative",flexShrink:0}}>
          <img src={(window.__resources&&window.__resources.searchIcon)||"icons/search.svg"} alt="search" style={{width:14,height:14,objectFit:"contain",position:"absolute",left:10,top:"50%",transform:"translateY(-50%)"}} />
          <input type="text" value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder="Search Patient Records" style={{width:240,background:"#fff",border:"1px solid #93c5e8",borderRadius:6,padding:"6px 12px 6px 32px",font:"400 12px/16px Roboto",color:"#0f172a",outline:"none"}} />
        </div>
      </div>
      <div style={{padding:"20px 24px 0"}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:24,flexWrap:"wrap",marginBottom:12}}>
          <div>
            <div style={{font:"500 15px/20px Roboto",color:"#0f172a"}}>Automation Log</div>
            <div style={{font:"400 12px/18px Roboto",color:"#94a3b8",marginTop:6}}>Transaction Status of HH/HO Notification Workflows</div>
          </div>
          <div style={{display:"flex",gap:28,flexShrink:0,flexWrap:"wrap",justifyContent:"flex-end"}}>
            {NOT_LOG_CARDS.map(c=>{
              const active=cardFilter===c.id, dim=cardFilter&&!active, isAll=c.id==="all";
              const val=filtered.filter(c.match).length;
              return (
                <div key={c.id} role="button" onClick={()=>setCardFilter(active?null:(isAll?null:c.id))}
                  style={{minWidth:88,display:"flex",flexDirection:"column",gap:8,cursor:"pointer",opacity:(dim&&!isAll)?0.4:1,transition:"opacity .12s"}}>
                  <div style={{height:3,borderRadius:2,background:c.color,opacity:active?1:0.85}}></div>
                  <div style={{display:"flex",alignItems:"center",gap:5,font:"400 13px/17px Roboto",color:active?"#0f172a":(dim&&isAll)?"#b0b0b0":"#605D5D",whiteSpace:"nowrap"}}>
                    {c.icon && <img src={c.icon} alt="" title={c.label} style={{width:18,height:18,objectFit:"contain",flexShrink:0}} />}
                    {c.label}
                  </div>
                  <div style={{font:"500 16px/20px Roboto",color:active?"#0f172a":(dim&&isAll)?"#b0b0b0":"#605D5D"}}>{notlPad(val)}</div>
                  {cardFilter&&isAll&&(
                    <button type="button" onClick={(e)=>{e.stopPropagation();setCardFilter(null);}} style={{marginTop:2,background:"transparent",border:"none",padding:0,cursor:"pointer",color:"#2563eb",font:"500 12px/16px Roboto",display:"inline-flex",alignItems:"center",gap:4}}><span style={{fontSize:11}}>↻</span>Reset</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:6,padding:"8px 12px",font:"400 12px/16px Roboto",color:"#64748b",display:"inline-block",marginBottom:16}}>Click Ref ID to open the related notification record</div>
        <div style={{display:"grid",gridTemplateColumns:NOT_LOG_GRID,alignItems:"stretch",background:"#f8fafc",borderBottom:"1px solid #e2e8f0",minHeight:44,padding:"0 12px",gap:6}}>
          {NOT_LOG_COLS.map(c=>(
            <div key={c.key} onClick={c.sort?()=>onSort(c.key):undefined}
              style={{display:"flex",alignItems:"center",justifyContent:c.align==="center"?"center":"flex-start",gap:3,font:"500 11px/14px Roboto",color:"#64748b",whiteSpace:"nowrap",cursor:c.sort?"pointer":"default",userSelect:"none",overflow:"hidden",padding:"0 2px"}}>
              {c.sort && <NOTLogSortArrows active={sortKey===c.key} dir={sortDir} />}
              {c.label}
            </div>
          ))}
        </div>
        <div className="ws-scrollbody" style={{overflowY:"auto",maxHeight:"calc(100vh - 380px)",paddingTop:8}}>
          {rows.length===0
            ? <div style={{padding:"48px 24px",textAlign:"center",font:"400 13px/18px Roboto",color:"#94a3b8",border:"1px solid #e2e8f0",borderRadius:6,background:"#fff"}}>No records match.</div>
            : rows.map(r=>(
              <div key={r.ref} style={{display:"grid",gridTemplateColumns:NOT_LOG_GRID,alignItems:"center",minHeight:52,padding:"6px 12px",border:"1px solid #e2e8f0",borderRadius:6,marginBottom:6,background:"#fff",boxShadow:"0 1px 2px rgba(15,23,42,0.03)",gap:6,position:"relative"}}>
                <div style={{position:"absolute",left:8,top:8,bottom:8,width:3,background:"#A66092",borderRadius:2}}></div>
                <div onClick={()=>onRefClick&&onRefClick(r.id)} style={{font:"500 12px/16px Roboto",color:"#2563eb",cursor:"pointer",paddingLeft:18,display:"flex",alignItems:"center",whiteSpace:"nowrap",overflow:"hidden"}}>{r.ref}</div>
                {["name","serviceLine","event","st","et"].map(k=>(
                  <div key={k} style={{font:"500 12px/16px Roboto",color:"#333333",display:"flex",alignItems:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0,padding:"0 2px"}}>{r[k]==="—"?<span style={{color:"#cbd5e1"}}>—</span>:r[k]}</div>
                ))}
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><NOTLogATIcon kind={r.at} /></div>
              </div>
            ))}
          <div style={{padding:"12px 0",font:"400 12px/16px Roboto",color:"#94a3b8",textAlign:"center"}}>End of list — {rows.length} of {logRows.length} records shown</div>
        </div>
      </div>
    </div>
  );
}

if (typeof window !== "undefined") Object.assign(window, { NotificationsAutomationLogView });
