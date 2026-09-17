// Eligibility Batch View — batch file submissions under Eligibility Center.
// Mirrors the Eligibility Request View shell: filter bar, title + clickable
// status summary, horizontally scrollable grid, docs slideout.
const { useState: useEBV } = React;

const EBV_STATUS = [
  { id:"all",        label:"All Batches",           color:"rgb(21,95,130)"  },
  { id:"submitted",  label:"CH Submitted",          color:"rgb(14,165,233)" },
  { id:"received",   label:"Response File Received",color:"rgb(22,163,74)"  },
  { id:"exceptions", label:"Exceptions",            color:"rgb(249,115,22)" },
];
const EBV_PILL = {
  submitted:  { bg:"#eff8fd", bd:"#0ea5e9", c:"#0284c7", label:"CH Submitted" },
  pending:    { bg:"#f8fafc", bd:"#94a3b8", c:"#475569", label:"Pending" },
  received:   { bg:"#f0fdf4", bd:"#16a34a", c:"#16a34a", label:"Response File Received" },
  exceptions: { bg:"#fff7ed", bd:"#f97316", c:"#ea580c", label:"Exceptions" },
};

const EBV_ROWS = [
  { id:"b1",  file:"ELIG_BATCH_20250415_A.csv", dl:"04/15/25 08:12 AM", ul:"04/15/25 07:40 AM", batch:"BID-100241", by:"Jessica Moore",  total:1,   status:"received"   },
];

const EBV_COLS = [
  { key:"file",   label:"File Name",        w:"minmax(240px,2.2fr)", sort:true },
  { key:"dl",     label:"Download Time",    w:"minmax(150px,1.2fr)", sort:true },
  { key:"ul",     label:"Upload Time",      w:"minmax(150px,1.2fr)", sort:true },
  { key:"batch",  label:"Batch ID",         w:"minmax(120px,1fr)",   sort:true },
  { key:"by",     label:"File Submitted By",w:"minmax(150px,1.2fr)", sort:true },
  { key:"total",  label:"Total Records",    w:"minmax(110px,0.9fr)", sort:true, align:"center" },
  { key:"status", label:"Batch Status",     w:"minmax(200px,1.6fr)", sort:true, align:"center" },
  { key:"docs",   label:"Docs",             w:"64px",                sort:false, align:"center" },
];
const EBV_GRID = EBV_COLS.map(c=>c.w).join(" ");
const EBV_TABLE_W = 1240;

function EBVDocIcon({ size=18, tint="#3F7EA1" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{display:"block"}} aria-hidden="true">
      <path d="M6 2.75h7.2L19 8.55V19.5a1.75 1.75 0 0 1-1.75 1.75H6A1.75 1.75 0 0 1 4.25 19.5v-15A1.75 1.75 0 0 1 6 2.75z" fill="#fff" stroke={tint} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 2.9v5.1h5" fill="none" stroke={tint} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14.4 11.6v5.2a2.85 2.85 0 0 1-5.7 0V10.2a1.75 1.75 0 0 1 3.5 0v6.1a.85.85 0 0 1-1.7 0v-4.7" fill="none" stroke="#BE6DA8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EBVStatusPill({ kind }) {
  const s = EBV_PILL[kind] || EBV_PILL.pending;
  return <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"4px 12px",borderRadius:4,background:s.bg,border:`1px solid ${s.bd}`,color:s.c,font:"500 11px/16px Roboto",whiteSpace:"nowrap",minWidth:170,boxSizing:"border-box"}}>{s.label}</span>;
}

// Clickable summary — each counter filters the grid by batch status.
function EBVSummaryStrip({ rows, active, onPick }) {
  const count = (id) => id==="all" ? rows.length : rows.filter(r=>r.status===id).length;
  return (
    <div style={{display:"flex",alignItems:"stretch",gap:0,border:"1px solid #e2e8f0",borderRadius:6,overflow:"hidden",background:"#fff"}}>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"10px 14px",background:"#f8fafc",borderRight:"1px solid #e2e8f0",font:"500 11px/15px Roboto",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.06em",whiteSpace:"nowrap"}}><span>Batch Status</span><span>Summary</span></div>
      {EBV_STATUS.map(s => {
        const isOn = active === s.id || (!active && s.id === "all");
        const dim = active && !isOn;
        return (
          <button key={s.id} type="button" onClick={()=>onPick(s.id==="all" ? null : s.id)}
            style={{border:"none",borderRight:"1px solid #eef2f7",background: isOn ? "#f4f8fc" : "#fff",cursor:"pointer",padding:"10px 16px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,opacity: dim?0.55:1,minWidth:104}}>
            <span style={{font:"600 20px/24px Roboto",color:s.color}}>{String(count(s.id)).padStart(2,"0")}</span>
            <span style={{font:"400 11px/14px Roboto",color:"#475569",textAlign:"center",textDecoration:"underline",textDecorationColor:"rgba(0,0,0,0.18)"}}>{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Docs slideout — Input and Resultant file for the batch.
function EBVDocsSlideout({ row, onClose }) {
  const files = [
    { kind:"Input File",     name: row.file,                                          size:"142 KB", when: row.ul },
    { kind:"Resultant File", name: row.file.replace(/\.csv$/, "_RESULT.csv"),          size:"188 KB", when: row.dl === "—" ? "Awaiting response" : row.dl },
  ];
  return (
    <>
      <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.18)"}} />
      <div style={{position:"fixed",top:0,right:0,bottom:0,width:520,background:"#fff",zIndex:901,display:"flex",flexDirection:"column",boxShadow:"-4px 0 24px rgba(0,0,0,0.13)"}}>
        <div style={{padding:"18px 22px",borderBottom:"1px solid #e2e8f0",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:16}}>
          <div>
            <div style={{font:"600 15px/20px Roboto",color:"#0f172a"}}>Batch Documents</div>
            <div style={{font:"400 12px/17px Roboto",color:"#64748b",marginTop:4}}>{row.batch} · {row.total} records · submitted by {row.by}</div>
          </div>
          <button type="button" onClick={onClose} style={{border:"none",background:"transparent",cursor:"pointer",color:"#64748b",fontSize:18,lineHeight:1,padding:2}}>✕</button>
        </div>
        <div style={{padding:"18px 22px",display:"flex",flexDirection:"column",gap:12,overflowY:"auto"}}>
          {files.map(f => (
            <div key={f.kind} style={{border:"1px solid #e2e8f0",borderRadius:6,padding:"14px 16px",display:"flex",alignItems:"center",gap:14,background:"#fff"}}>
              <EBVDocIcon size={26} />
              <div style={{minWidth:0,flex:1}}>
                <div style={{font:"500 12px/16px Roboto",color:"#0f172a",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.name}</div>
                <div style={{font:"400 11px/15px Roboto",color:"#64748b",marginTop:3}}>{f.kind} · {f.size} · {f.when}</div>
              </div>
              <a href="#" onClick={(e)=>e.preventDefault()} style={{font:"500 12px/16px Roboto",color:"#2563eb",textDecoration:"none",whiteSpace:"nowrap"}}>Download</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function EBVHeader({ sortKey, sortDir, onSort }) {
  return (
    <div style={{display:"grid",gridTemplateColumns:EBV_GRID,alignItems:"center",background:"#f8fafc",borderBottom:"1px solid #e2e8f0",height:40,padding:"0 12px",gap:8}}>
      {EBV_COLS.map(c => (
        <div key={c.key} onClick={c.sort?()=>onSort(c.key):undefined}
          style={{font:"500 11px/14px Roboto",color:"#64748b",display:"flex",alignItems:"center",justifyContent: c.align==="center"?"center":"flex-start",cursor:c.sort?"pointer":"default",userSelect:"none",whiteSpace:"nowrap",overflow:"hidden",gap:3}}>
          {c.sort && <span style={{color: sortKey===c.key ? "#2563eb" : "rgba(0,0,0,0.25)",fontSize:9}}>{sortKey===c.key && sortDir==="desc" ? "▼" : "▲"}</span>}
          {c.label}
        </div>
      ))}
    </div>
  );
}

function EBVRow({ row, onDocs, onTotal }) {
  const cell = (align) => ({font:"500 12px/16px Roboto",color:"#333333",display:"flex",alignItems:"center",justifyContent: align==="center"?"center":"flex-start",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0});
  return (
    <div style={{display:"grid",gridTemplateColumns:EBV_GRID,alignItems:"center",height:48,padding:"0 11px",border:"1px solid #e2e8f0",borderRadius:6,marginBottom:8,background:"#fff",boxShadow:"0 1px 2px rgba(15,23,42,0.03)",gap:8}}>
      <div style={{...cell(),color:"#2563eb"}} title={row.file}><span style={{overflow:"hidden",textOverflow:"ellipsis"}}>{row.file}</span></div>
      <div style={cell()}>{row.dl}</div>
      <div style={cell()}>{row.ul}</div>
      <div style={cell()}>{row.batch}</div>
      <div style={cell()}>{row.by}</div>
      <div style={cell("center")}><a href="#" onClick={(e)=>{e.preventDefault(); onTotal&&onTotal(row);}} title="View eligibility requests in this batch" style={{color:"#2563eb",font:"500 12px/16px Roboto",textDecoration:"none"}}>{row.total}</a></div>
      <div style={cell("center")}><EBVStatusPill kind={row.status} /></div>
      <div style={cell("center")}><span onClick={()=>onDocs(row)} title="View batch documents" style={{cursor:"pointer",display:"inline-flex"}}><EBVDocIcon size={18} /></span></div>
    </div>
  );
}

const EBV_FILTER_FIELDS = [
  { key:"batch", label:"Batch ID" },
  { key:"by",    label:"File Submitted By" },
];

function EligibilityBatchView({ fileFilter, onClearFileFilter, onTotalRecords }) {
  const [status, setStatus] = useEBV(null);
  const [searchQ, setSearchQ] = useEBV("");
  const [sortKey, setSortKey] = useEBV(null);
  const [sortDir, setSortDir] = useEBV("asc");
  const [docsRow, setDocsRow] = useEBV(null);
  const [fieldFilters, setFieldFilters] = useEBV([]);
  const [initDate, setInitDate] = useEBV(()=>window.defaultDateRange([...new Set(EBV_ROWS.map(r=>r.ul))],30));
  const onSort = (k) => { if (sortKey===k) setSortDir(d=>d==="asc"?"desc":"asc"); else { setSortKey(k); setSortDir("asc"); } };

  let rows = searchQ ? EBV_ROWS.filter(r=>[r.file,r.batch,r.by].join(" ").toLowerCase().includes(searchQ.toLowerCase())) : EBV_ROWS;
  if (fileFilter) rows = rows.filter(r=>r.file === fileFilter);
  if (initDate) rows = rows.filter(r=>window.dateInRange(r.ul, initDate));
  fieldFilters.forEach(f => { rows = rows.filter(r => f.values.includes(String(r[f.field]))); });
  const searched = rows;
  if (status) rows = rows.filter(r=>r.status===status);
  if (sortKey) rows = [...rows].sort((a,b)=>{ const av=String(a[sortKey]).toLowerCase(), bv=String(b[sortKey]).toLowerCase(); return sortDir==="asc"?av.localeCompare(bv):bv.localeCompare(av); });

  const Bar = typeof window!=="undefined" && window.ARVFilterBarChips;
  const Body = (typeof window!=="undefined" && window.ScrollBody) || (({children})=><div>{children}</div>);
  const chips = [];
  if (fileFilter) chips.push({ id:"file", label:`File Name: ${fileFilter}`, onRemove:()=>onClearFileFilter&&onClearFileFilter() });
  if (status) chips.push({ id:"st", label:`Batch Status: ${(EBV_STATUS.find(s=>s.id===status)||{}).label}`, onRemove:()=>setStatus(null) });
  const clearAll = (status||fileFilter||fieldFilters.length) ? ()=>{ setStatus(null); onClearFileFilter&&onClearFileFilter(); setFieldFilters([]); } : null;

  return (
    <div style={{background:"#fff",minHeight:"100%"}}>
      {Bar ? <Bar chips={chips} datePicker={{label:"Batch Upload Date", value:initDate, available:EBV_ROWS.map(r=>r.ul), onChange:setInitDate}} filterFields={EBV_FILTER_FIELDS} filterRows={EBV_ROWS} fieldFilters={fieldFilters} onFieldFilters={setFieldFilters} searchPlaceholder="Search Batch Files" hideSearch={false} searchValue={searchQ} onSearch={setSearchQ} onClearFilters={clearAll} /> : null}
      <div style={{padding:"20px 24px 0",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:24,flexWrap:"wrap"}}>
        <div>
          <div style={{font:"600 18px/24px Roboto",color:"#0f172a"}}>Eligibility Batch View</div>
          <div style={{font:"400 13px/18px Roboto",color:"#3A424A",marginTop:8}}>Batch eligibility files submitted to the clearing house</div>
        </div>
        <EBVSummaryStrip rows={searched} active={status} onPick={setStatus} />
      </div>
      <div style={{padding:"18px 24px 24px"}}>
        <div className="ws-hscroll" style={{overflowX:"auto",paddingBottom:4}}><div style={{minWidth:EBV_TABLE_W}}>
          <EBVHeader sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
          <Body>
            {rows.length===0
              ? <div style={{padding:"48px 24px",textAlign:"center",font:"400 13px/18px Roboto",color:"#94a3b8",border:"1px solid #e2e8f0",borderRadius:6,background:"#fff",marginTop:8}}>No batches match the current filters.</div>
              : rows.map(r=><EBVRow key={r.id} row={r} onDocs={setDocsRow} onTotal={(row)=>onTotalRecords&&onTotalRecords(row.file)} />)}
            <div style={{padding:"12px 0",font:"400 12px/16px Roboto",color:"#94a3b8",textAlign:"center"}}>End of list — {rows.length} of {EBV_ROWS.length} batches shown</div>
          </Body>
        </div></div>
      </div>
      {docsRow && <EBVDocsSlideout row={docsRow} onClose={()=>setDocsRow(null)} />}
    </div>
  );
}

Object.assign(window, { EligibilityBatchView, EBV_ROWS });
