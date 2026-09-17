// Notifications Center — Notifications Request View.
// Mirrors the Eligibility Request View (ERV) layout: filter strip, title cluster,
// Style-A status summary box + Automation (AT) Status row beneath it, grid table
// with expand-caret child table, pagination, review mode.
const { useState: useNOT, useEffect: useNOTE, useRef: useNOTR } = React;

// ── Mock data ─────────────────────────────────────────────────
const NOT_ROWS = [
  { id:"n1",  name:"Marvin Mckinney",    mrn:"B6100062245601", serviceLine:"Home Health", branchId:"BC001", event:"EOE",     reportName:"OASIS Start of Care",   physFacility:"Physician", physFacilityName:"Reyes, Alan",        faxNumber:"(214) 555-0117", commMethod:"Fax",          assessmentType:"Start of Care",  status:"Completed",   clinician:"Sarah Mitchell",   dueDate:"05/30/25", mode:"gear",   at:"thumb"     },
  { id:"n2",  name:"Esther Howard",      mrn:"B6789012345678", serviceLine:"Hospice",     branchId:"BC001", event:"Discharge",   reportName:"Plan of Care Summary",  physFacility:"Facility",  physFacilityName:"Lakeview Medical Grp",  faxNumber:"(469) 555-0142", commMethod:"Email",        assessmentType:"Recertification", status:"In Progress", clinician:"James Thornton",  dueDate:"05/29/25", mode:"gear",   at:"hourglass" },
  { id:"n3",  name:"Wade Warren",        mrn:"B6789012345685", serviceLine:"Home Health",         branchId:"BC002", event:"EOE",  reportName:"Therapy Eval Report",   physFacility:"Physician", physFacilityName:"Nadar, Priya",      faxNumber:"(512) 555-0163", commMethod:"Portal Upload",assessmentType:"Resumption",     status:"Overdue",     clinician:"Linda Patel",     dueDate:"05/27/25", mode:"gear",   at:"warning"   },
  { id:"n4",  name:"Cameron Williamson", mrn:"B6100054445634", serviceLine:"Hospice", branchId:"BC002", event:"Discharge",     reportName:"OASIS Recertification",physFacility:"Physician", physFacilityName:"Hale, Marcus",      faxNumber:"(214) 555-0198", commMethod:"Fax",          assessmentType:"Recertification", status:"Completed",   clinician:"Robert Chen",     dueDate:"05/26/25", mode:"person", at:"thumb"     },
  { id:"n5",  name:"Robert Fox",         mrn:"V6789012345686", serviceLine:"Home Health",     branchId:"BC003", event:"EOE",reportName:"Discharge Summary",     physFacility:"Facility",  physFacilityName:"Northside Clinic",     faxNumber:"(832) 555-0124", commMethod:"Fax",          assessmentType:"Discharge",       status:"Overdue",     clinician:"Maria Gonzalez",  dueDate:"05/24/25", mode:"gear",   at:"warning"   },
  { id:"n6",  name:"Jenny Wilson",       mrn:"B6789012345711", serviceLine:"Hospice",         branchId:"BC001", event:"Discharge",   reportName:"Therapy Progress Note", physFacility:"Physician", physFacilityName:"Cho, Helen",        faxNumber:"(469) 555-0175", commMethod:"Email",        assessmentType:"Follow Up",       status:"In Progress", clinician:"David Kim",       dueDate:"05/22/25", mode:"gear",   at:"hourglass" },
  { id:"n7",  name:"Jacob Jones",        mrn:"B6789012345716", serviceLine:"Home Health", branchId:"BC002", event:"EOE",     reportName:"OASIS Follow Up",       physFacility:"Facility",  physFacilityName:"Cedar Park Health",    faxNumber:"(512) 555-0109", commMethod:"Print & Mail", assessmentType:"Follow Up",       status:"Completed",   clinician:"Angela Foster",   dueDate:"05/20/25", mode:"gear",   at:"thumb"     },
  { id:"n8",  name:"Leslie Alexander",   mrn:"B6789012345697", serviceLine:"Hospice",     branchId:"BC001", event:"Discharge",  reportName:"Plan of Care Summary",  physFacility:"Physician", physFacilityName:"Haddad, Omar",      faxNumber:"(214) 555-0186", commMethod:"Portal Upload",assessmentType:"Start of Care",  status:"In Progress", clinician:"Sarah Mitchell",  dueDate:"05/19/25", mode:"person", at:"hourglass" },
  { id:"n9",  name:"Guy Hawkins",        mrn:"L700093345918",  serviceLine:"Home Health",         branchId:"BC003", event:"EOE",     reportName:"Therapy Eval Report",   physFacility:"Physician", physFacilityName:"Nadar, Priya",      faxNumber:"(832) 555-0151", commMethod:"Fax",          assessmentType:"Resumption",     status:"Overdue",     clinician:"Linda Patel",     dueDate:"05/16/25", mode:"gear",   at:"warning"   },
  { id:"n10", name:"Jane Cooper",        mrn:"B6789012345720", serviceLine:"Hospice", branchId:"BC001", event:"Discharge",   reportName:"OASIS Start of Care",   physFacility:"Facility",  physFacilityName:"Lakeview Medical Grp", faxNumber:"(469) 555-0133", commMethod:"Email",        assessmentType:"Start of Care",  status:"Completed",   clinician:"Nancy Brooks",    dueDate:"05/14/25", mode:"gear",   at:"thumb"     },
  { id:"n11", name:"Kristin Watson",     mrn:"B6789012345801", serviceLine:"Home Health",     branchId:"BC002", event:"EOE",     reportName:"OASIS Recertification",physFacility:"Physician", physFacilityName:"Reyes, Alan",       faxNumber:"(214) 555-0102", commMethod:"Fax",          assessmentType:"Recertification", status:"In Progress", clinician:"Kevin Walsh",     dueDate:"05/12/25", mode:"person", at:"hourglass" },
  { id:"n12", name:"Cody Fisher",        mrn:"B6789012345802", serviceLine:"Hospice",         branchId:"BC001", event:"Discharge",reportName:"Therapy Progress Note", physFacility:"Facility",  physFacilityName:"Northside Clinic",     faxNumber:"(512) 555-0148", commMethod:"Print & Mail", assessmentType:"Follow Up",       status:"Overdue",     clinician:"Patricia Simmons",dueDate:"05/09/25", mode:"gear",   at:"warning"   },
  { id:"n13", name:"Kathryn Murphy",     mrn:"B6789012345803", serviceLine:"Home Health", branchId:"BC003", event:"EOE",   reportName:"Discharge Summary",     physFacility:"Physician", physFacilityName:"Hale, Marcus",      faxNumber:"(832) 555-0139", commMethod:"Email",        assessmentType:"Discharge",       status:"Completed",   clinician:"Michael Torres",  dueDate:"05/06/25", mode:"gear",   at:"thumb"     },
  { id:"n14", name:"Devon Lane",         mrn:"B6789012345804", serviceLine:"Hospice",     branchId:"BC001", event:"Discharge",  reportName:"Plan of Care Summary",  physFacility:"Facility",  physFacilityName:"Cedar Park Health",    faxNumber:"(469) 555-0157", commMethod:"Portal Upload",assessmentType:"Recertification", status:"In Progress", clinician:"Sandra Hughes",   dueDate:"05/02/25", mode:"gear",   at:"hourglass" },
  { id:"n15", name:"Dianne Russell",     mrn:"B6789012345805", serviceLine:"Home Health",         branchId:"BC002", event:"EOE",     reportName:"Therapy Eval Report",   physFacility:"Physician", physFacilityName:"Cho, Helen",        faxNumber:"(214) 555-0166", commMethod:"Fax",          assessmentType:"Start of Care",  status:"Overdue",     clinician:"Christopher Lane",dueDate:"04/28/25", mode:"gear",   at:"warning"   },
  { id:"n16", name:"Arlene McCoy",       mrn:"B6789012345806", serviceLine:"Hospice", branchId:"BC001", event:"Discharge",   reportName:"OASIS Follow Up",       physFacility:"Facility",  physFacilityName:"Lakeview Medical Grp", faxNumber:"(512) 555-0111", commMethod:"Email",        assessmentType:"Follow Up",       status:"Completed",   clinician:"Rebecca Flores",  dueDate:"04/25/25", mode:"person", at:"thumb"     },
  { id:"n17", name:"Theresa Webb",       mrn:"B6789012345901", serviceLine:"Home Health",     branchId:"BC003", event:"EOE",     reportName:"OASIS Recertification",physFacility:"Physician", physFacilityName:"Haddad, Omar",      faxNumber:"(832) 555-0127", commMethod:"Portal Upload",assessmentType:"Recertification", status:"In Progress", clinician:"Daniel Morgan",   dueDate:"04/22/25", mode:"gear",   at:"hourglass" },
  { id:"n18", name:"Darlene Robertson",  mrn:"B6789012345902", serviceLine:"Hospice",         branchId:"BC001", event:"Discharge",reportName:"Therapy Progress Note", physFacility:"Facility",  physFacilityName:"Northside Clinic",     faxNumber:"(214) 555-0173", commMethod:"Fax",          assessmentType:"Resumption",     status:"Overdue",     clinician:"Catherine Bell",  dueDate:"04/18/25", mode:"gear",   at:"warning"   },
  { id:"n19", name:"Courtney Henry",     mrn:"B6789012345903", serviceLine:"Home Health", branchId:"BC002", event:"EOE",  reportName:"Plan of Care Summary",  physFacility:"Physician", physFacilityName:"Reyes, Alan",       faxNumber:"(469) 555-0184", commMethod:"Print & Mail", assessmentType:"Start of Care",  status:"Completed",   clinician:"Steven Murphy",   dueDate:"04/15/25", mode:"gear",   at:"thumb"     },
  { id:"n20", name:"Ralph Edwards",      mrn:"B6789012345904", serviceLine:"Hospice",     branchId:"BC001", event:"Discharge",   reportName:"Discharge Summary",     physFacility:"Facility",  physFacilityName:"Cedar Park Health",    faxNumber:"(512) 555-0195", commMethod:"Email",        assessmentType:"Discharge",       status:"In Progress", clinician:"Jennifer Cole",   dueDate:"04/12/25", mode:"person", at:"hourglass" },
  { id:"n21", name:"Annette Black",      mrn:"B6789012345905", serviceLine:"Home Health",         branchId:"BC003", event:"EOE",     reportName:"Therapy Eval Report",   physFacility:"Physician", physFacilityName:"Nadar, Priya",      faxNumber:"(832) 555-0146", commMethod:"Fax",          assessmentType:"Follow Up",       status:"Overdue",     clinician:"Andrew Price",    dueDate:"04/10/25", mode:"gear",   at:"warning"   },
  { id:"n22", name:"Marvin Mckinney",    mrn:"B6100062245601", serviceLine:"Hospice",     branchId:"BC001", event:"Discharge",   reportName:"OASIS Follow Up",       physFacility:"Facility",  physFacilityName:"Lakeview Medical Grp", faxNumber:"(214) 555-0117", commMethod:"Email",        assessmentType:"Follow Up",       status:"Completed",   clinician:"Sarah Mitchell",  dueDate:"04/08/25", mode:"gear",   at:"thumb"     },
  { id:"n23", name:"Esther Howard",      mrn:"B6789012345678", serviceLine:"Home Health", branchId:"BC002", event:"EOE",     reportName:"OASIS Start of Care",   physFacility:"Physician", physFacilityName:"Hale, Marcus",      faxNumber:"(469) 555-0142", commMethod:"Portal Upload",assessmentType:"Start of Care",  status:"In Progress", clinician:"James Thornton",  dueDate:"04/05/25", mode:"gear",   at:"hourglass" },
  { id:"n24", name:"Jane Cooper",        mrn:"B6789012345720", serviceLine:"Hospice",         branchId:"BC001", event:"Discharge",  reportName:"Therapy Progress Note", physFacility:"Facility",  physFacilityName:"Northside Clinic",     faxNumber:"(469) 555-0133", commMethod:"Fax",          assessmentType:"Recertification", status:"Overdue",     clinician:"Nancy Brooks",    dueDate:"04/03/25", mode:"person", at:"warning"   },
];
if (typeof window !== "undefined") window.NOT_ROWS = NOT_ROWS;

// ── Helpers ───────────────────────────────────────────────────
const notPad = (n) => String(n).padStart(2, "0");
const NOT_AT_MAP = { completed:"thumb", warning:"warning", inprogress:"hourglass" };
const notIcon = (k, fb) => (typeof window !== "undefined" && window.__resources && window.__resources[k]) || fb;

// Automation (AT) Status row — icons match the row-level AT Status cell exactly.
const NOT_AT_ITEMS = [
  { id:"completed",  label:"Completed",       kind:"thumb",     get icon(){ return notIcon("atCompleted","icons/at-completed.png"); } },
  { id:"warning",    label:"Needs Attention", kind:"warning",   get icon(){ return notIcon("atNeedsAttention","icons/at-needs-attention.png"); }, num:"#d97706", caret:true },
  { id:"inprogress", label:"In Progress",     kind:"hourglass", get icon(){ return notIcon("atInProgress","icons/at-in-progress.png"); } },
];

function NOTATIcon({ kind }) {
  if (kind === "thumb")     return <img title="Completed"       alt="Completed"       src={notIcon("atCompleted","icons/at-completed.png")} style={{width:18,height:18,objectFit:"contain"}} />;
  if (kind === "warning")   return <img title="Needs Attention" alt="Needs Attention" src={notIcon("atNeedsAttention","icons/at-needs-attention.png")} style={{width:18,height:18,objectFit:"contain"}} />;
  if (kind === "hourglass") return <img title="In Progress"     alt="In Progress"     src={notIcon("atInProgress","icons/at-in-progress.png")} style={{width:18,height:18,objectFit:"contain"}} />;
  return <span style={{color:"#cbd5e1"}}>—</span>;
}

const NOT_DASH = <span style={{color:"#cbd5e1"}}>—</span>;

// ── Filter bar ────────────────────────────────────────────────
function NOTFilterChip({ label, onRemove }) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:10,background:"#f4f6f9",border:"1px solid #d8dee6",borderRadius:6,padding:"6px 10px",font:"400 12px/16px Roboto",color:"#334155",whiteSpace:"nowrap",flexShrink:0}}>
      {label}
      <button type="button" title="Remove filter" onClick={onRemove} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",color:"#64748b",fontSize:13,lineHeight:1,cursor:"pointer",padding:0}}>✕</button>
    </span>
  );
}

const NOT_FILTER_FIELDS = [
  { key:"assessmentType", label:"Assessment Type" },
  { key:"status",         label:"Status" },
  { key:"clinician",      label:"Assigned Clinician" },
];

function NOTFilterBar({ chips, datePicker, fieldFilters, onFieldFilters, onClearAll, searchValue, onSearch }) {
  const [open, setOpen] = useNOT(false);
  const [dpOpen, setDpOpen] = useNOT(false);
  const dref = useNOTR(null);
  useNOTE(()=>{ if(!dpOpen) return; const h=(e)=>{ if(dref.current && !dref.current.contains(e.target)) setDpOpen(false); }; document.addEventListener("mousedown",h); return ()=>document.removeEventListener("mousedown",h); },[dpOpen]);
  const DP = typeof window !== "undefined" && window.DatePicker;
  const FP = typeof window !== "undefined" && window.FilterPopover;
  const labelOf = (k) => (NOT_FILTER_FIELDS.find(f=>f.key===k) || {}).label || k;
  const fieldTags = [];
  (fieldFilters||[]).forEach(f => f.values.forEach(v => fieldTags.push({
    id:`${f.field}:${v}`, label:`${labelOf(f.field)}: ${v}`,
    onRemove: () => onFieldFilters(fieldFilters.map(x => x.field===f.field ? {...x, values:x.values.filter(y=>y!==v)} : x).filter(x=>x.values.length)),
  })));
  return (
    <div style={{background:"#eef4fb",borderBottom:"1px solid #e2e8f0",padding:"10px 24px",display:"flex",alignItems:"center",gap:14,flexWrap:"nowrap"}}>
      <div style={{position:"relative",flexShrink:0}} ref={dref}>
        <button type="button" onClick={()=>setDpOpen(v=>!v)} style={{background:"#fff",border:"1px solid #d8d8d8",borderRadius:4,padding:"5px 12px",font:"400 12px/16px Roboto",color:"#0f172a",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8,whiteSpace:"nowrap"}}>
          {`Notification Initiated Date : ${datePicker.value ? datePicker.value.start + " – " + datePicker.value.end : "All"}`}
          <span style={{color:"#94a3b8",fontSize:9}}>▾</span>
        </button>
        {datePicker.value && (
          <button type="button" title="Clear date range" onClick={()=>{ datePicker.onChange(null); setDpOpen(false); }} style={{position:"absolute",right:-6,top:-6,width:16,height:16,borderRadius:"50%",border:"1px solid #d8d8d8",background:"#fff",color:"#64748b",font:"400 10px/1 Roboto",cursor:"pointer",padding:0,display:"inline-flex",alignItems:"center",justifyContent:"center"}}>✕</button>
        )}
        {dpOpen && DP && <DP value={datePicker.value} available={datePicker.available} onChange={(d)=>{ datePicker.onChange(d); setDpOpen(false); }} />}
      </div>
      <div style={{position:"relative",flexShrink:0}}>
        <button type="button" onClick={()=>setOpen(v=>!v)} style={{background:"transparent",border:"none",cursor:"pointer",color:"#2563eb",font:"500 12px/16px Roboto",display:"inline-flex",alignItems:"center",gap:6,padding:"5px 4px",whiteSpace:"nowrap"}}>
          <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,borderRadius:"50%",background:"#2563eb",color:"#fff",fontSize:10,fontWeight:600,lineHeight:1}}>+</span>
          Add More Filters
        </button>
        {open && FP && <FP fields={NOT_FILTER_FIELDS} rows={NOT_ROWS} initial={fieldFilters} onApply={(f)=>{ onFieldFilters(f); setOpen(false); }} onClose={()=>setOpen(false)} />}
      </div>
      <div className="chip-scroll" style={{display:"flex",alignItems:"center",gap:14,flexWrap:"nowrap",overflowX:"auto",flex:"1 1 auto",minWidth:0}}>
        {chips.map(c => <NOTFilterChip key={c.id} label={c.label} onRemove={c.onRemove} />)}
        {fieldTags.map(t => <NOTFilterChip key={t.id} label={t.label} onRemove={t.onRemove} />)}
      </div>
      {(chips.length + fieldTags.length) > 0 && (
        <button type="button" onClick={onClearAll} style={{background:"transparent",border:"none",cursor:"pointer",color:"#2563eb",font:"500 12px/16px Roboto",padding:"5px 4px",flexShrink:0,whiteSpace:"nowrap"}}>Clear all</button>
      )}
      <div style={{position:"relative",flexShrink:0}}>
        <img src={notIcon("searchIcon","icons/search.svg")} alt="search" style={{width:14,height:14,objectFit:"contain",position:"absolute",left:10,top:"50%",transform:"translateY(-50%)"}} />
        <input type="text" value={searchValue} onChange={e=>onSearch(e.target.value)} placeholder="Search Patient Records" style={{width:240,background:"#fff",border:"1px solid #93c5e8",borderRadius:6,padding:"6px 12px 6px 32px",font:"400 12px/16px Roboto",color:"#0f172a",outline:"none"}} />
      </div>
    </div>
  );
}

// ── Title cluster ─────────────────────────────────────────────
function NOTTitleCluster() {
  return (
    <div>
      <div style={{font:"500 15px/20px Roboto",color:"#0f172a"}}>HH/HO Notifications</div>
      <div style={{font:"400 12px/18px Roboto",color:"#94a3b8",marginTop:6}}>Status Summary of Notifications Sent to Physicians &amp; Facilities</div>
    </div>
  );
}

// ── Automation (AT) Status summary (Style A — matches Assessment Request View) ──
const NOT_AT_STATUS = [
  { id:"all",        label:"All Records",     color:"#64748b" },
  { id:"completed",  label:"Completed",       color:"#16a34a" },
  { id:"warning",    label:"Needs Attention", color:"#d97706", caret:true },
  { id:"inprogress", label:"In Progress",     color:"#3f7ba8" },
];

function NOTAutomationStatus({ atCounts, atFilter, onFilter, subMenuRows, atReasonFilter, onReasonFilter }) {
  const [openMenu, setOpenMenu] = useNOT(false);
  const rootRef = useNOTR(null);
  useNOTE(()=>{ if(!openMenu) return; const h=(e)=>{ if(rootRef.current && !rootRef.current.contains(e.target)) setOpenMenu(false); }; document.addEventListener("mousedown",h); return ()=>document.removeEventListener("mousedown",h); },[openMenu]);
  const NAMenuCmp = typeof window!=="undefined" && window.NAReasonMenu;
  const breakdown = {};
  (subMenuRows||[]).filter(r=>r.at==="warning").forEach(r=>{ breakdown[r.event] = (breakdown[r.event]||0)+1; });
  const breakdownList = Object.keys(breakdown).map(k=>({ label:k, count:breakdown[k] }));
  return (
    <div ref={rootRef} style={{display:"flex",alignItems:"stretch",border:"1px solid #e2e8f0",borderRadius:8,background:"#fff",overflow:"visible"}}>
      <div style={{padding:"14px 16px",background:"#f8fafc",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",justifyContent:"center",font:"500 13px/18px Roboto",color:"#333",flexShrink:0,borderRadius:"8px 0 0 8px"}}>
        <span>Automation</span><span>(AT) Status</span>
      </div>
      <div style={{display:"flex",alignItems:"flex-start"}}>
        {NOT_AT_STATUS.map(s=>{
          const active = s.id!=="all" && atFilter===s.id;
          const dim = atFilter && atFilter!=="all" && !active;
          return (
            <div key={s.id} role="button" title={s.label} onClick={()=>onFilter(active?null:(s.id==="all"?null:s.id))}
              style={{position:"relative",flex:"0 0 auto",width:s.caret?152:132,boxSizing:"border-box",padding:"10px 16px 12px",cursor:"pointer",opacity:(dim&&s.id!=="all")?0.35:1,transition:"opacity .12s,background .12s",background:active?"#f8fafc":"transparent"}}
              onMouseEnter={e=>{ if(!active&&!dim) e.currentTarget.style.background="#fafbfc"; }}
              onMouseLeave={e=>{ if(!active) e.currentTarget.style.background="transparent"; }}>
              <div style={{height:3,borderRadius:2,background:s.color,opacity:active?1:0.85,marginBottom:8,marginLeft:-9,marginRight:-9}}></div>
              <div style={{display:"flex",alignItems:"center",gap:5,font:"400 12px/16px Roboto",color:(dim&&s.id==="all")?"#b0b0b0":"#333",whiteSpace:"nowrap"}}>
                {s.id!=="all" && <NOTATIcon kind={NOT_AT_MAP[s.id]} />}
                {s.label}
                {s.caret && (
                  <span title="Sub-status breakdown" onClick={e=>{ e.stopPropagation(); setOpenMenu(o=>!o); }} style={{width:14,height:14,display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#2563eb",marginLeft:1}}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 8 L19 8 L12 17 Z" fill="currentColor"></path></svg>
                  </span>
                )}
              </div>
              <div style={{display:"flex",alignItems:"center",gap:4,marginTop:4}}>
                <span style={{font:"600 18px/22px Roboto",color:(dim&&s.id==="all")?"#b0b0b0":"#0f172a"}}>{notPad(atCounts[s.id]||0)}</span>
              </div>
              {atFilter && atFilter!=="all" && s.id==="all" && (
                <button type="button" onClick={e=>{ e.stopPropagation(); onFilter(null); }} style={{marginTop:4,background:"transparent",border:"none",padding:0,cursor:"pointer",color:"#2563eb",font:"500 12px/16px Roboto",display:"inline-flex",alignItems:"center",gap:4}}><span style={{fontSize:11}}>↻</span>Reset</button>
              )}
              {s.caret && openMenu && NAMenuCmp && (
                <NAMenuCmp reasons={breakdownList} selected={atReasonFilter} onApply={sel=>{ onReasonFilter && onReasonFilter(sel); onFilter("warning"); }} onClose={()=>setOpenMenu(false)} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Table ─────────────────────────────────────────────────────
const NOT_COLS = [
  { key:"name",             label:"Patient Name",            grid:"minmax(120px,1.35fr)", sortable:true  },
  { key:"mrn",              label:"MRN",                     grid:"minmax(108px,1.2fr)",  sortable:true  },
  { key:"serviceLine",      label:"Service line",            grid:"minmax(84px,0.95fr)",  sortable:true  },
  { key:"branchId",         label:"Branch ID",               grid:"minmax(70px,0.75fr)",  sortable:true  },
  { key:"event",            label:"Event",                   grid:"minmax(92px,1fr)",     sortable:false },
  { key:"taskType",         label:"Task/Note type",          grid:"minmax(150px,2fr)",    sortable:true  },
  { key:"taskArrived",      label:"Task arrived time",       grid:"minmax(120px,1.35fr)", sortable:true  },
  { key:"dueDate",          label:"Notif. Init Date",        grid:"minmax(92px,1fr)",     sortable:true  },
  { key:"reportName",       label:"Report name",             grid:"minmax(102px,1.15fr)", sortable:false },
  { key:"physFacility",     label:"Physician/Facility",      grid:"minmax(84px,0.95fr)",  sortable:true  },
  { key:"physFacilityName", label:"Physician/Facility name", grid:"minmax(102px,1.15fr)", sortable:true  },
  { key:"faxNumber",        label:"Fax number",              grid:"minmax(92px,1fr)",     sortable:true  },
  { key:"commMethod",       label:"Communication method",    grid:"minmax(96px,1.05fr)",  sortable:true  },
  { key:"at",               label:"AT Status",               grid:"64px",  sortable:true,  align:"center" },
  { key:"reviewed",         label:"Reviewed?",               grid:"74px",  sortable:false, align:"center" },
];
const NOT_GRID = NOT_COLS.map(c=>c.grid).join(" ");

function NOTSortArrows({ active, dir }) {
  const up   = active && dir==="asc"  ? "#2563eb" : "rgba(0,0,0,0.25)";
  const down = active && dir==="desc" ? "#2563eb" : "rgba(0,0,0,0.25)";
  return (
    <svg width="10" height="15" viewBox="0 0 9 14" fill="none" style={{marginRight:3,flex:"none"}}>
      <path d="M7.74699 7.40234H1.25301C1.05823 7.40234 0.949473 7.608 1.0701 7.7484L4.31708 11.5135C4.41003 11.6213 4.58899 11.6213 4.68291 11.5135L7.9299 7.7484C8.05053 7.608 7.94177 7.40234 7.74699 7.40234Z" fill={down}/>
      <path d="M7.9299 6.24825L4.68291 2.48317C4.58997 2.3754 4.41101 2.3754 4.31708 2.48317L1.0701 6.24825C0.949473 6.38865 1.05823 6.59431 1.25301 6.59431H7.74699C7.94177 6.59431 8.05053 6.38865 7.9299 6.24825Z" fill={up}/>
    </svg>
  );
}

function NOTTableHeader({ sortKey, sortDir, onSort }) {
  return (
    <div style={{display:"grid",gridTemplateColumns:NOT_GRID,alignItems:"center",background:"#f8fafc",borderBottom:"1px solid #e2e8f0",height:40,padding:"0 12px",gap:6,position:"sticky",top:0,zIndex:6,boxShadow:"0 1px 0 #e2e8f0"}}>
      {NOT_COLS.map(c=>(
        <div key={c.key} onClick={c.sortable?()=>onSort(c.key):undefined}
          style={{font:"500 11px/14px Roboto",color:"#64748b",display:"flex",alignItems:"center",justifyContent:c.align==="center"?"center":"flex-start",cursor:c.sortable?"pointer":"default",userSelect:"none",overflow:"hidden",whiteSpace:"nowrap"}}>
          {c.sortable && <NOTSortArrows active={sortKey===c.key} dir={sortDir} />}
          {c.label}
        </div>
      ))}
    </div>
  );
}

// Task/Note details, derived from the parent record.
const NOT_TASK_TYPE = "HOSPICE POC UPDATE TO PRIMARY PHYSICIAN";
function notTaskArrived(row) {
  const seed = parseInt(row.id.replace(/\D/g,""),10) || 1;
  const [mm,dd,yy] = row.dueDate.split("/");
  return `${mm}/${dd}/${yy} ${notPad(7 + (seed%9))}:${notPad((seed*7)%60)} AM`;
}

function NOTTableRow({ row, reviewed, onReviewed, accent="#2563eb" }) {
  const cell = (align) => ({font:"500 12px/16px Roboto",color:"#333333",display:"flex",alignItems:"center",justifyContent:align==="center"?"center":"flex-start",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0});
  return (
    <div style={{display:"grid",gridTemplateColumns:NOT_GRID,alignItems:"center",height:48,padding:"0 11px",border:"1px solid #e2e8f0",borderRadius:6,marginBottom:8,boxShadow:"0 1px 2px rgba(15,23,42,0.03)",background:"#fff",gap:6}}>
      <div style={cell()}>
        <span title={row.name} style={{font:"500 13px/16px Roboto",color:"#333333",overflow:"hidden",textOverflow:"ellipsis"}}>{row.name}</span>
      </div>
      <div style={cell()}>{row.mrn}</div>
      <div style={cell()}>{row.serviceLine}</div>
      <div style={{...cell(),color:"#3b82f6",fontWeight:600}}>{row.branchId}</div>
      <div style={cell()} title={row.event}><span style={{overflow:"hidden",textOverflow:"ellipsis"}}>{row.event}</span></div>
      <div style={cell()} title={NOT_TASK_TYPE}><span style={{overflow:"hidden",textOverflow:"ellipsis"}}>{NOT_TASK_TYPE}</span></div>
      <div style={cell()} title="Task arrived time">{notTaskArrived(row)}</div>
      <div style={cell()} title="Notification Initiated Date (transaction start)">{row.dueDate || NOT_DASH}</div>
      <div style={cell()} title={row.reportName}><span style={{overflow:"hidden",textOverflow:"ellipsis"}}>{row.reportName}</span></div>
      <div style={cell()}>{row.physFacility}</div>
      <div style={cell()} title={row.physFacilityName}><span style={{overflow:"hidden",textOverflow:"ellipsis"}}>{row.physFacilityName}</span></div>
      <div style={cell()}>{row.faxNumber || NOT_DASH}</div>
      <div style={cell()}>{row.commMethod || NOT_DASH}</div>
      <div style={cell("center")}><NOTATIcon kind={row.at} /></div>
      <div style={cell("center")} onClick={(e)=>e.stopPropagation()}>
        <span role="checkbox" aria-checked={!!reviewed} tabIndex={0} onClick={()=>onReviewed(row.id)}
          style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,border:`1px solid ${reviewed?accent:"#d8d8d8"}`,borderRadius:3,background:reviewed?accent:"#fff",cursor:"pointer"}}>
          {reviewed && <span style={{color:"#fff",fontSize:11,lineHeight:1,fontWeight:700}}>✓</span>}
        </span>
      </div>
    </div>
  );
}

// ── Pagination ────────────────────────────────────────────────
function NOTPagination({ total, page, perPage, onPage, onPerPage }) {
  return null;
  const pages = Math.max(1, Math.ceil(total/perPage));
  const start = total === 0 ? 0 : (page-1)*perPage+1;
  const end = Math.min(page*perPage, total);
  const Btn = ({children,active,disabled,onClick}) => (
    <button type="button" onClick={onClick} disabled={disabled} style={{width:28,height:28,borderRadius:4,border:`1px solid ${active?"#2563eb":"#e2e8f0"}`,background:active?"#2563eb":"#fff",color:active?"#fff":disabled?"#cbd5e1":"#333333",font:"400 12px/16px Roboto",cursor:disabled?"default":"pointer",padding:0}}>{children}</button>
  );
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #e2e8f0",padding:"12px 24px"}}>
      <div style={{display:"flex",alignItems:"center",gap:16}}>
        <span style={{font:"400 12px/16px Roboto",color:"#94a3b8"}}>Showing {start}–{end} of {total}</span>
        <label style={{display:"inline-flex",alignItems:"center",gap:6,font:"400 12px/16px Roboto",color:"#94a3b8"}}>
          Rows
          <select value={perPage} onChange={(e)=>onPerPage(parseInt(e.target.value,10))} style={{border:"1px solid #e2e8f0",borderRadius:4,padding:"3px 6px",font:"400 12px/16px Roboto",color:"#333333",background:"#fff",outline:"none"}}>
            {[10,15,25,50].map(n=><option key={n} value={n}>{n}</option>)}
          </select>
        </label>
      </div>
      <div style={{display:"flex",gap:6}}>
        <Btn onClick={()=>onPage(page-1)} disabled={page===1}>‹</Btn>
        {Array.from({length:Math.min(pages,5)},(_,i)=>i+1).map(n=><Btn key={n} active={n===page} onClick={()=>onPage(n)}>{n}</Btn>)}
        <Btn onClick={()=>onPage(page+1)} disabled={page>=pages}>›</Btn>
      </div>
    </div>
  );
}

// ── Notifications Request View (main) ─────────────────────────
function NotificationsRequestView({ review, onExitReview }) {
  const [atFilter, setAtFilter]         = useNOT(null);
  const [atReasonFilter, setAtReason]   = useNOT(null);
  const [searchQ, setSearchQ]           = useNOT("");
  const [sortKey, setSortKey]           = useNOT(null);
  const [sortDir, setSortDir]           = useNOT("asc");
  const [fieldFilters, setFieldFilters] = useNOT([]);
  const [reviewedSet, setReviewedSet]   = useNOT({});
  const [page, setPage]                 = useNOT(1);
  const [perPage, setPerPage]           = useNOT(10);
  const [dateRange, setDateRange]       = useNOT(()=> window.defaultDateRange([...new Set(NOT_ROWS.map(r=>r.dueDate))], 30));

  const toggleReviewed = (id) => setReviewedSet(m=>({...m,[id]:!m[id]}));
  const onSort = (k) => { if(sortKey===k) setSortDir(d=>d==="asc"?"desc":"asc"); else { setSortKey(k); setSortDir("asc"); } };

  // Reset to page 1 whenever the composed filter set changes.
  const filterSig = JSON.stringify([atFilter,searchQ,fieldFilters,dateRange,review,perPage]);
  useNOTE(()=>{ setPage(1); }, [filterSig]);

  // Compose: field filters ∧ search ∧ date ∧ AT status.
  let base = NOT_ROWS.filter(r => fieldFilters.every(f => f.values.includes(r[f.field])));
  if (searchQ.trim()) { const q = searchQ.toLowerCase(); base = base.filter(r=>[r.name,r.assessmentType,r.status].join(" ").toLowerCase().includes(q)); }
  if (dateRange) base = base.filter(r=>window.dateInRange(r.dueDate, dateRange));
  const needsReview = (r) => r.at==="warning" || r.status==="Overdue";
  if (review) base = base.filter(r => needsReview(r) && !reviewedSet[r.id]);

  const atCounts = { all: base.length };
  NOT_AT_ITEMS.forEach(s=>{ atCounts[s.id] = base.filter(r=>r.at===s.kind).length; });

  let rows = atFilter ? base.filter(r=>r.at===NOT_AT_MAP[atFilter]) : base;
  if (atReasonFilter && atReasonFilter.length) rows = rows.filter(r=>r.at==="warning" && atReasonFilter.includes(r.event));
  if (sortKey) {
    rows = [...rows].sort((a,b)=>{
      const av = (a[sortKey]==null?"":a[sortKey]).toString().toLowerCase();
      const bv = (b[sortKey]==null?"":b[sortKey]).toString().toLowerCase();
      if (av<bv) return sortDir==="asc"?-1:1;
      if (av>bv) return sortDir==="asc"?1:-1;
      return 0;
    });
  }
  const total = rows.length;
  const pageRows = rows;

  const chips = [];
  if (atFilter) { const a = NOT_AT_ITEMS.find(x=>x.id===atFilter); chips.push({ id:"at", label:`AT Status: ${a?a.label:atFilter}`, onRemove:()=>{ setAtFilter(null); setAtReason(null); } }); }
  (atReasonFilter||[]).forEach(rsn=>chips.push({ id:"rsn-"+rsn, label:`Reason: ${rsn}`, onRemove:()=>setAtReason(prev=>{ const nx=(prev||[]).filter(x=>x!==rsn); return nx.length?nx:null; }) }));
  if (review) {
    [
      { id:"rv-at",  label:"Automation Status: Needs Attention" },
      { id:"rv-od",  label:"Status: Overdue" },
      { id:"rv-nr",  label:"Reviewed : Not Reviewed" },
    ].forEach(c=>chips.push({ ...c, onRemove:()=>onExitReview&&onExitReview() }));
  }
  const clearAll = () => { setAtFilter(null); setAtReason(null); setFieldFilters([]); if(review && onExitReview) onExitReview(); };

  const ScrollBodyCmp = (typeof window!=="undefined" && window.ScrollBody) || null;
  const Body = ({children}) => ScrollBodyCmp ? <ScrollBodyCmp>{children}</ScrollBodyCmp> : <div className="ws-scrollbody" style={{maxHeight:"calc(100vh - 400px)",overflowY:"auto",paddingTop:8}}>{children}</div>;

  return (
    <div style={{background:"#fff"}} data-screen-label="01 Notifications">
      <NOTFilterBar
        chips={chips}
        datePicker={{ value:dateRange, available:[...new Set(NOT_ROWS.map(r=>r.dueDate))], onChange:setDateRange }}
        fieldFilters={fieldFilters} onFieldFilters={setFieldFilters}
        onClearAll={clearAll} searchValue={searchQ} onSearch={setSearchQ} />
      <div style={{padding:"20px 24px 0",display:"flex",alignItems:"center",gap:32,flexWrap:"wrap"}}>
        <div style={{flex:"1 1 380px",minWidth:0}}>
          <NOTTitleCluster />
        </div>
        <div style={{flex:"0 1 auto",minWidth:0}}>
          <NOTAutomationStatus atCounts={atCounts} atFilter={atFilter} onFilter={v=>{ setAtFilter(v); if(!v) setAtReason(null); }} subMenuRows={base}
            atReasonFilter={atReasonFilter} onReasonFilter={sel=>setAtReason(sel && sel.length ? sel : null)} />
        </div>
      </div>
      <div style={{padding:"18px 24px 0"}}>
        <NOTTableHeader sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
        <Body>
          {pageRows.length===0 ? (
            <div style={{padding:"48px 24px",textAlign:"center",font:"400 13px/18px Roboto",color:"#94a3b8",border:"1px solid #e2e8f0",borderRadius:6,background:"#fff"}}>No notifications match the current filters.</div>
          ) : pageRows.map(r=>(
            <NOTTableRow key={r.id} row={r} reviewed={!!reviewedSet[r.id]} onReviewed={toggleReviewed} />
          ))}
        </Body>
      </div>
      <NOTPagination total={total} page={page} perPage={perPage} onPage={(p)=>setPage(Math.min(Math.max(1,p), Math.max(1,Math.ceil(total/perPage))))} onPerPage={setPerPage} />
    </div>
  );
}

if (typeof window !== "undefined") Object.assign(window, { NotificationsRequestView });
