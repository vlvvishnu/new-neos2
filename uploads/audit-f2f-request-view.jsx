// F2F (Face-to-Face) Encounter Audit — Request View + detail drawer.
// Mirrors the app's existing Eligibility/Authorization request-view pattern
// (SectionBand host, filter-chip strap, dense grid table, right slide-out
// drawer with accordions) with F2F-audit-specific columns and content.
const { useState: useF } = React;

// Column set mirrors the attached table screenshot exactly.
const F2F_COLS = "150px 140px 90px 120px 85px 100px 95px 130px 140px 120px 75px 75px 130px 150px 100px 90px";
const F2F_HEADS = ["Name","MRN","Branch","Referral Source","SOC","Audit Trigger","Audit Date","F2F Encounter Date","F2F Encounter Due Date","Days Remaining","EHR Sync","AT Status","Auditor","F2F Requirements Met?","View Details","Reviewed?"];
const F2F_INFO_COLS = new Set(["F2F Encounter Due Date","Days Remaining"]);

const f2fRows = [
  { name:"Marvin Mckinney", mrn:"B6100062245601", branch:"Bcode", refSrc:"Institution", soc:"07/08/25", trigger:"485", auditDate:"08/11/25", encounter:"07/15/25", due:"08/07/25", remain:"Closed", remainKind:"closed", ehr:true, auditor:"E5 Agent", req:"Met" },
  { name:"Rachel Martin", mrn:"B6789012345685", branch:"Bcode", refSrc:"Institution", soc:"06/26/25", trigger:"Pre-Bill", auditDate:"08/11/25", encounter:"07/11/25", due:"07/26/25", remain:"15 days left", remainKind:"warn", ehr:true, auditor:"E5 Agent", req:"Not Met" },
  { name:"John Doe", mrn:"B6100054445634", branch:"Bcode", refSrc:"Institution", soc:"08/08/25", trigger:"Pre-Bill", auditDate:"08/10/25", encounter:"07/10/25", due:"09/07/25", remain:"Closed", remainKind:"closed", ehr:true, auditor:"E5 Agent", req:"Met" },
  { name:"John Peel", mrn:"B6789012345685", branch:"Bcode", refSrc:"Community", soc:"06/26/25", trigger:"485", auditDate:"08/10/25", encounter:"07/01/25", due:"07/26/25", remain:"Closed", remainKind:"closed", ehr:true, auditor:"Fiona Gallagher", req:"Met" },
  { name:"Kena White", mrn:"B6789012345678", branch:"Bcode", refSrc:"Institution", soc:"08/05/25", trigger:"Referral", auditDate:"08/10/25", encounter:"07/07/25", due:"09/04/25", remain:"Closed", remainKind:"closed", ehr:true, auditor:"E5 Agent", req:"Met" },
  { name:"William Peel", mrn:"B6789012345685", branch:"Bcode", refSrc:"Institution", soc:"07/12/25", trigger:"485", auditDate:"08/07/25", encounter:"07/27/25", due:"08/12/25", remain:"01 day left", remainKind:"danger", ehr:true, auditor:"Ethan Hunt", req:"Not Met" },
  { name:"Sarah Lee", mrn:"B6789012345720", branch:"Bcode", refSrc:"Institution", soc:"08/09/25", trigger:"Referral", auditDate:"08/07/25", encounter:"07/08/25", due:"09/08/25", remain:"Closed", remainKind:"closed", ehr:false, auditor:"E5 Agent", req:"Met" },
  { name:"Joseph Dyan", mrn:"B6100054445634", branch:"Bcode", refSrc:"Community", soc:"05/18/25", trigger:"Pre-Bill", auditDate:"08/07/25", encounter:"—", due:"06/17/25", remain:"Past Due", remainKind:"danger", ehr:true, auditor:"Ethan Hunt", req:"Not Met" },
];

function F2FFilterChip({ label, onRemove }) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:10,background:"#f4f6f9",border:"1px solid #d8dee6",borderRadius:6,padding:"6px 10px",font:"400 12px/16px Roboto",color:"#334155",whiteSpace:"nowrap",flexShrink:0}}>
      {label}
      {onRemove && <span onClick={onRemove} style={{cursor:"pointer",color:"#94a3b8",fontWeight:600}}>×</span>}
    </span>
  );
}

function F2FFilterStrap({ onOpenFilters }) {
  const [chips, setChips] = useF([{ id:"req", label:"F2F Requirements: All" }, { id:"status", label:"Status: Open" }]);
  return (
    <div style={{background:"rgba(163,203,255,.28)",padding:"10px 32px",display:"flex",alignItems:"center",gap:14}}>
      <span style={{fontSize:14,color:"#6660A6",flexShrink:0}}>▽</span>
      <div className="chip-scroll" style={{display:"flex",alignItems:"center",gap:14,flexWrap:"nowrap",overflowX:"auto",flex:"1 1 auto",minWidth:0}}>
        {chips.map(c=>(<F2FFilterChip key={c.id} label={c.label} onRemove={()=>setChips(l=>l.filter(x=>x.id!==c.id))} />))}
      </div>
      <button type="button" onClick={onOpenFilters} style={{background:"transparent",border:"none",color:"#6660A6",font:"500 13px/18px Roboto",cursor:"pointer",padding:"5px 4px",flexShrink:0}}>+ Add More Filters</button>
      <input placeholder="Search patient, MRN…" style={{width:220,height:32,borderRadius:6,border:"1px solid #cbd5e1",padding:"0 12px",font:"400 13px/18px Roboto",flexShrink:0}} />
    </div>
  );
}

function SparkleBadge() {
  const star = (size, fill) => (
    <path d="M12 2c.6 3.2 1.2 4.6 2 5.5.9.9 2.3 1.5 5.5 2-3.2.6-4.6 1.2-5.5 2-.9.9-1.5 2.3-2 5.5-.6-3.2-1.2-4.6-2-5.5-.9-.9-2.3-1.5-5.5-2 3.2-.6 4.6-1.2 5.5-2 .9-.9 1.5-2.3 2-5.5z" fill={fill}/>
  );
  return (
    <span style={{position:"absolute",top:-9,right:-9,width:22,height:22}}>
      <svg width="22" height="22" viewBox="0 0 24 24">{star(24,"#F5B92B")}</svg>
      <svg width="11" height="11" viewBox="0 0 24 24" style={{position:"absolute",bottom:-3,left:-4}}>{star(24,"#39A6E0")}</svg>
    </span>
  );
}

function ReqMetPill({ status }) {
  const met = status === "Met";
  return (
    <span style={{position:"relative",display:"inline-flex",justifySelf:"center",background:met?"#EAF9EA":"#FDEDEC",border:`1px solid ${met?"#8fd19e":"#f3b4ae"}`,borderRadius:6,padding:"5px 22px",font:"400 13px/18px Roboto",color:met?"#2E7D32":"#C0392B",textDecoration:"underline"}}>
      {status}
      <SparkleBadge />
    </span>
  );
}

function DaysRemainingPill({ text, kind }) {
  if (kind === "closed") {
    return <span style={{display:"inline-flex",justifySelf:"center",background:"#EFFCEF",color:"#3E9F4A",borderRadius:4,padding:"4px 14px",font:"400 12px/16px Roboto"}}>{text}</span>;
  }
  const bg = kind === "warn" ? "#E9A227" : "#C0392B";
  return <span style={{display:"inline-flex",justifySelf:"center",background:bg,color:"#fff",borderRadius:4,padding:"4px 14px",font:"500 12px/16px Roboto",whiteSpace:"nowrap"}}>{text}</span>;
}

function ThumbsUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M7 22h11a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2.5l1-4.5a1.8 1.8 0 0 0-1.8-2.3c-.5 0-1 .2-1.3.6L9 11H7v11z" fill="#8C97A6"/>
      <rect x="2" y="11" width="4" height="11" rx="1" fill="#8C97A6"/>
    </svg>
  );
}

function F2FTableRow({ r, onView }) {
  return (
    <div style={{display:"grid",gridTemplateColumns:F2F_COLS,alignItems:"center",padding:"14px 12px",borderBottom:"1px solid #eef0f3",font:"400 13px/18px Roboto",color:"#3A424A",gap:6}}>
      <div style={{fontWeight:400}}>{r.name}</div>
      <div style={{color:"#3A424A"}}>{r.mrn}</div>
      <div>{r.branch}</div>
      <div>{r.refSrc}</div>
      <div>{r.soc}</div>
      <div>{r.trigger}</div>
      <div>{r.auditDate}</div>
      <div>{r.encounter}</div>
      <div>{r.due}</div>
      <DaysRemainingPill text={r.remain} kind={r.remainKind} />
      <div style={{textAlign:"center"}}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">{r.ehr
          ? <path d="M20 6L9 17l-5-5" stroke="#3E9F4A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
          : <path d="M18 6L6 18M6 6l12 12" stroke="#CF1322" strokeWidth="2.6" strokeLinecap="round"/>}
        </svg>
      </div>
      <div style={{textAlign:"center"}}><ThumbsUpIcon /></div>
      <div>{r.auditor}</div>
      <ReqMetPill status={r.req} />
      <div style={{textAlign:"center"}}>
        <span onClick={()=>onView(r)} style={{color:"#1677FF",cursor:"pointer",fontSize:16,fontWeight:700}}>→</span>
      </div>
      <div style={{textAlign:"center"}}>
        <input type="checkbox" style={{width:16,height:16,accentColor:"#1677FF",cursor:"pointer"}} />
      </div>
    </div>
  );
}

function F2FAuditTable({ onView }) {
  return (
    <div style={{margin:"0 32px 32px",background:"#fff",borderRadius:2,boxShadow:"0 0 0 1px #e4e4e4",overflow:"hidden",overflowX:"auto"}}>
      <div style={{display:"grid",gridTemplateColumns:F2F_COLS,padding:"14px 12px",gap:6,background:"#f4f4f4",boxShadow:"0 0 0 1px #e0e0e0"}}>
        {F2F_HEADS.map(h=>(
          <div key={h} style={{display:"flex",alignItems:"center",gap:5,font:"600 13px/17px Roboto",color:"#0f172a"}}>
            <span style={{fontSize:10,color:"#94a3b8"}}>⇕</span>
            <span>{h}</span>
            {F2F_INFO_COLS.has(h) && <span title="Info" style={{display:"inline-flex",width:13,height:13,borderRadius:"50%",border:"1px solid #94a3b8",color:"#94a3b8",fontSize:9,alignItems:"center",justifyContent:"center"}}>i</span>}
          </div>
        ))}
      </div>
      {f2fRows.map((r,i)=>(<F2FTableRow key={i} r={r} onView={onView} />))}
    </div>
  );
}

// ── Detail drawer accordion row ─────────────────────────────────
function F2FAccordion({ title, status, open, onToggle, children }) {
  const statusColor = status==="warn" ? "#D7A718" : status==="fail" ? "#CF1322" : "#3E9F4A";
  const statusBg = status==="warn" ? "#FFF9EC" : status==="fail" ? "#FFF4F4" : "#EFFCEF";
  return (
    <div style={{border:"1px solid #d9d9d9",borderRadius:5,overflow:"hidden",width:"100%"}}>
      <div onClick={onToggle} style={{display:"flex",alignItems:"center",gap:10,padding:"14px 17px",background:open?"#E8F3FF":"#F6F6F6",cursor:"pointer",userSelect:"none"}}>
        <span style={{display:"inline-block",transform:open?"rotate(90deg)":"none",transition:"transform .15s",fontSize:11,color:"rgba(0,0,0,.5)"}}>▸</span>
        <span style={{font:"500 14px/19px Roboto",color:"rgba(0,0,0,.85)"}}>{title}</span>
        <span style={{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:6,background:statusBg,color:statusColor,borderRadius:4,padding:"3px 10px",font:"500 12px/16px Roboto"}}>
          {status==="pass" ? "Met" : status==="warn" ? "Review" : "Not Found"}
        </span>
      </div>
      {open && <div style={{padding:"20px 17px",background:"#fff"}}>{children}</div>}
    </div>
  );
}

function HomeboundCriterion({ label, met }) {
  return (
    <label style={{display:"flex",alignItems:"flex-start",gap:10,padding:"10px 0",borderBottom:"1px solid #f1f3f5",cursor:"pointer"}}>
      <input type="checkbox" checked={met} readOnly style={{marginTop:3,width:15,height:15,accentColor:"#1677FF"}} />
      <span style={{font:"400 13px/18px Roboto",color:"#3A424A"}}>{label}</span>
    </label>
  );
}

function F2FDetailDrawer({ row, onClose }) {
  const r = row || {};
  const [open, setOpen] = useF({ timely:false, eligible:false, primary:false, homebound:true, skilled:false, docs:false, log:false });
  const toggle = (k)=>setOpen(o=>({...o,[k]:!o[k]}));
  const homeboundFail = r.req !== "Met";
  return (
    <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex"}}>
      <div onClick={onClose} style={{position:"absolute",inset:0,background:"rgba(15,23,42,.45)"}} />
      <div style={{position:"relative",marginLeft:"auto",width:"min(1600px, 96vw)",height:"100%",background:"#fff",display:"flex",flexDirection:"column",boxShadow:"-8px 0 30px rgba(0,0,0,.15)"}}>
        <div style={{height:72,background:"#F7F7F9",display:"flex",alignItems:"center",padding:"0 32px",flexShrink:0}}>
          <div style={{font:"500 16px/20px Roboto",color:"#3A424A"}}>{r.name || "Patient"} <span style={{color:"#6A717D",fontWeight:400}}>· MRN {r.mrn}</span></div>
          <button onClick={onClose} style={{marginLeft:"auto",background:"transparent",border:"none",cursor:"pointer",fontSize:20,color:"#6A717D"}}>✕</button>
        </div>
        <div style={{flex:1,overflow:"auto",display:"flex",gap:40,padding:"24px 40px 40px"}} className="ws-scrollbody">
          <div style={{width:624,flexShrink:0,display:"flex",flexDirection:"column",gap:17}}>
            <div style={{font:"400 13px/19px Roboto",color:"#6A717D"}}>
              Ms. {r.name || "Patient"} presents with a diagnosis consistent with the referral for home health services; the clinical summary below reflects the discharge documentation on file for this episode.
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <span style={{font:"600 22px/24px Roboto",color:"#333",textTransform:"capitalize"}}>F2F Encounter Audit Summary</span>
              <span style={{background:homeboundFail?"#FDEDEC":"#EAF9EA",color:homeboundFail?"#C0392B":"#2E7D32",borderRadius:4,padding:"6px 14px",font:"500 13px/16px Roboto"}}>F2F Requirements: {r.req || "Not Met"}</span>
            </div>
            <div style={{height:1,background:"#dadada",alignSelf:"stretch",margin:"2px 0"}} />
            <div style={{display:"flex",flexDirection:"column",gap:16,width:"100%"}}>
              <F2FAccordion title="Timely Encounter" status="pass" open={open.timely} onToggle={()=>toggle("timely")}>
                <div style={{font:"400 13px/18px Roboto",color:"#3A424A"}}>Encounter performed on {r.encounter} — within 90 days prior / 30 days after SOC ({r.soc}).</div>
              </F2FAccordion>
              <F2FAccordion title="Eligible Practitioner" status="pass" open={open.eligible} onToggle={()=>toggle("eligible")}>
                <div style={{font:"400 13px/18px Roboto",color:"#3A424A"}}>Encounter documented by a physician, NP, PA, or certifying practitioner permitted to perform the F2F encounter.</div>
              </F2FAccordion>
              <F2FAccordion title="Primary Home Health Reason" status="pass" open={open.primary} onToggle={()=>toggle("primary")}>
                <div style={{font:"400 13px/18px Roboto",color:"#3A424A"}}>Encounter documentation identifies the primary reason for home health services and supports medical necessity.</div>
              </F2FAccordion>

              <F2FAccordion title="Homebound Status" status={homeboundFail ? "fail" : "pass"} open={open.homebound} onToggle={()=>toggle("homebound")}>
                <div style={{display:"flex",alignItems:"center",gap:10,background:homeboundFail?"#FFF4F4":"#EFFCEF",border:`1px solid ${homeboundFail?"#FFCFC9":"#c9ecc9"}`,borderRadius:6,padding:"12px 16px",marginBottom:16}}>
                  <span style={{fontSize:15}}>{homeboundFail ? "⚠" : "✓"}</span>
                  <div>
                    <div style={{font:"500 13px/18px Roboto",color:"#0f172a"}}>Homebound Reason</div>
                    <div style={{font:"400 13px/18px Roboto",color:"#3A424A"}}>{homeboundFail ? "No Reason Found" : "Considerable and taxing effort required to leave home"}</div>
                  </div>
                  <span style={{marginLeft:"auto",color:"#1677FF",font:"500 13px/16px Roboto",cursor:"pointer"}}>Sources (0)</span>
                </div>
                <div style={{font:"500 13px/18px Roboto",color:"#0f172a",marginBottom:6}}>CMS Homebound Criteria</div>
                <HomeboundCriterion met={!homeboundFail} label="Because of illness or injury, the patient needs supportive devices, special transportation, or the assistance of another person to leave the home." />
                <HomeboundCriterion met={!homeboundFail} label="Leaving home is medically contraindicated." />
                <HomeboundCriterion met={!homeboundFail} label="Leaving home requires a considerable and taxing effort by the patient." />
                <HomeboundCriterion met={false} label="Absences from the home are infrequent, of short duration, or for medical care." />
              </F2FAccordion>

              <F2FAccordion title="Skilled Service Need" status="pass" open={open.skilled} onToggle={()=>toggle("skilled")}>
                <div style={{font:"400 13px/18px Roboto",color:"#3A424A"}}>Plan of care documents a skilled nursing or therapy need consistent with the certifying diagnosis.</div>
              </F2FAccordion>
              <F2FAccordion title="Documentation & Signature" status="pass" open={open.docs} onToggle={()=>toggle("docs")}>
                <div style={{font:"400 13px/18px Roboto",color:"#3A424A"}}>Encounter note is signed and dated by the certifying practitioner within the required timeframe.</div>
              </F2FAccordion>
              <F2FAccordion title="Audit Log" status="pass" open={open.log} onToggle={()=>toggle("log")}>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {[["Automated audit completed","Today, 9:04 AM"],["Discharge summary linked","Yesterday, 4:41 PM"],["F2F requirement flagged for review","2 days ago"]].map(([t,d])=>(
                    <div key={t} style={{display:"flex",justifyContent:"space-between",font:"400 13px/18px Roboto",color:"#3A424A"}}><span>{t}</span><span style={{color:"#94a3b8"}}>{d}</span></div>
                  ))}
                </div>
              </F2FAccordion>
            </div>
          </div>

          <div style={{flex:1,minWidth:0,background:"#F7F7F9",borderRadius:6,display:"flex",flexDirection:"column"}}>
            <div style={{padding:"14px 20px",font:"500 13px/18px Roboto",color:"#3A424A",borderBottom:"1px solid #e5e7eb"}}>Discharge Summary — {r.name || "Patient"}</div>
            <div style={{flex:1,padding:20,display:"flex",flexDirection:"column",gap:16,overflow:"auto"}}>
              {[0,1].map(i=>(
                <div key={i} style={{alignSelf:"center",width:"90%",aspectRatio:"773/1093",background:"repeating-linear-gradient(135deg, #fff 0 14px, #eef1f5 14px 28px)",boxShadow:"0 3px 10px rgba(0,0,0,.08)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{font:"400 12px/16px ui-monospace,monospace",color:"#94a3b8"}}>discharge summary — page {i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function F2FAuditRequestView() {
  const [drawerRow, setDrawerRow] = useF(null);
  return (
    <div>
      <F2FFilterStrap />
      <F2FAuditTable onView={setDrawerRow} />
      {drawerRow && <F2FDetailDrawer row={drawerRow} onClose={()=>setDrawerRow(null)} />}
    </div>
  );
}

function F2FAuditSection({ sub, onSub }) {
  const subTabs = [{ label:"F2F Request View", icon:"☰" }, { label:"Automation Log", icon:"" }];
  return (
    <div>
      <SectionBand title="F2F Encounter Audit Center" subTabs={subTabs} activeSub={sub} onSub={onSub} showReview={false} />
      {sub===0
        ? <F2FAuditRequestView />
        : <div style={{padding:60,textAlign:"center",color:"#94a3b8",font:"400 14px/20px Roboto"}}>Automation Log — coming soon</div>}
    </div>
  );
}

// ── Pre-Bill Audit grid — columns/data from Figma frame "Group 1410083925" ──
const PB_COLS = [
  { key:"name", label:"Name", grid:"minmax(130px,1.3fr)" },
  { key:"mrn", label:"MRN", grid:"minmax(120px,1.1fr)" },
  { key:"branch", label:"Branch", grid:"minmax(70px,0.7fr)" },
  { key:"soc", label:"SOC", grid:"minmax(80px,0.8fr)" },
  { key:"trigger", label:"Audit Trigger", grid:"minmax(100px,1fr)" },
  { key:"auditDate", label:"Audit Date", grid:"minmax(90px,0.9fr)" },
  { key:"compliance", label:"Pre-Bill Audit Compliance", grid:"200px", align:"center" },
  { key:"pct", label:"Compliance%", grid:"90px", align:"center", info:true },
  { key:"next", label:"Suggested Next Step", grid:"minmax(120px,1.1fr)", align:"center" },
  { key:"ehr", label:"EHR Sync", grid:"72px", align:"center" },
  { key:"at", label:"AT Status", grid:"72px", align:"center" },
  { key:"agent", label:"Auditor", grid:"minmax(100px,1fr)" },
  { key:"docs", label:"Docs", grid:"52px", align:"center" },
  { key:"details", label:"View Details", grid:"minmax(90px,1fr)", align:"center" },
  { key:"reviewed", label:"Reviewed?", grid:"78px", align:"center" },
];
const PB_GRID = PB_COLS.map(c=>c.grid).join(" ");

const pbRows = [
  { name:"Marvin Mckinney", mrn:"B6100062245601", branch:"Bcode", soc:"05/11/25", trigger:"Admission", auditDate:"05/11/25", met:false, source:"ai", pct:78, next:1, ehr:true, agent:"E5 Agent" },
  { name:"Rachel Martin", mrn:"B6789012345685", branch:"Bcode", soc:"05/11/25", trigger:"Admission", auditDate:"05/11/25", met:true, source:"ai", pct:100, next:null, ehr:false, agent:"Bob Smith" },
  { name:"John Doe", mrn:"B6100054445634", branch:"Bcode", soc:"05/11/25", trigger:"Admission", auditDate:"05/11/25", met:true, source:"ai", pct:100, next:null, ehr:true, agent:"E5 Agent" },
  { name:"John Peel", mrn:"B6789012345685", branch:"Bcode", soc:"05/11/25", trigger:"Discharge", auditDate:"05/11/25", met:true, source:"override", pct:100, next:null, ehr:true, agent:"Fiona Gallagher" },
  { name:"Kena White", mrn:"B6789012345678", branch:"Bcode", soc:"05/11/25", trigger:"Admission", auditDate:"05/11/25", met:true, source:"ai", pct:100, next:null, ehr:true, agent:"Fiona Gallagher" },
  { name:"Joseph Dyan", mrn:"B6100054445634", branch:"Bcode", soc:"05/05/25", trigger:"Admission", auditDate:"05/05/25", met:false, source:"ai", pct:25, next:2, ehr:true, agent:"E5 Agent" },
  { name:"Sarah Lee", mrn:"B6789012345720", branch:"Bcode", soc:"05/11/25", trigger:"Admission", auditDate:"05/11/25", met:true, source:"ai", pct:100, next:null, ehr:true, agent:"Diana Ross" },
  { name:"Harry Jacobs", mrn:"B6789012345685", branch:"Bcode", soc:"05/05/25", trigger:"Discharge", auditDate:"05/05/25", met:true, source:"ai", pct:100, next:null, ehr:true, agent:"E5 Agent" },
  { name:"William Peel", mrn:"B6789012345685", branch:"Bcode", soc:"05/05/25", trigger:"Discharge", auditDate:"05/05/25", met:false, source:"ai", pct:65, next:1, ehr:false, agent:"Ethan Hunt" },
];

const IconCheckCircle = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.8"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconWarnTriangle = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 4l9 15H3l9-15z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/><rect x="11.15" y="10" width="1.7" height="4.5" rx=".8" fill={color}/><circle cx="12" cy="17" r="1" fill={color}/></svg>
);
const IconPersonEdit = ({ color }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="7" r="4" fill={color}/><path d="M2 21c0-4.4 3.6-7 8-7 1 0 2 .15 2.9.43" stroke={color} strokeWidth="0" fill={color}/><path d="M17.5 13.5l3 3L12 25l-3.6.6.6-3.6 8.5-8.5z" fill={color}/></svg>
);
const IconSparkleSmall = ({ color }) => (
  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M12 2c.6 3.2 1.2 4.6 2 5.5.9.9 2.3 1.5 5.5 2-3.2.6-4.6 1.2-5.5 2-.9.9-1.5 2.3-2 5.5-.6-3.2-1.2-4.6-2-5.5-.9-.9-2.3-1.5-5.5-2 3.2-.6 4.6-1.2 5.5-2 .9-.9 1.5-2.3 2-5.5z" fill={color}/></svg>
);
const IconBulbBadge = ({ n }) => (
  <span style={{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid #e2b455",borderRadius:5,padding:"3px 9px",font:"500 12px/16px Roboto",color:"#8a6d1f",background:"#fff"}}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" fill="#E2B455"/><rect x="9" y="19" width="6" height="2" rx="1" fill="#E2B455"/></svg>
    {String(n).padStart(2,"0")}
  </span>
);

function PBComplianceCell({ met, source }) {
  const R = (window.__resources||{});
  const src = !met ? (R.tagNotMet||"assets/tag-not-met.svg") : source==="override" ? (R.tagMetOverride||"assets/tag-met-override.svg") : (R.tagMet||"assets/tag-met.svg");
  return (
    <img src={src} alt={met?"Met":"Not Met"} style={{height:40,width:"auto",display:"block",objectFit:"contain"}} />
  );
}

function PBHeadCell({ c }) {
  return (
    <div style={{font:"500 11px/14px Roboto",color:"#64748b",textAlign:c.align||"left",display:"flex",alignItems:"center",justifyContent:c.align==="center"?"center":"flex-start",userSelect:"none",overflow:"hidden",whiteSpace:"nowrap"}}>
      <SortArrows active={false} dir="asc" />
      {c.label}
      {c.info && <InfoCircle />}
    </div>
  );
}

function PBTableRow({ r, onView, reviewed, onReviewed }) {
  const cellBase = (align)=>({ font:"500 12px/16px Roboto", color:"#333333", textAlign:align||"left", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" });
  return (
    <div style={{display:"grid",gridTemplateColumns:PB_GRID,alignItems:"center",height:48,padding:"0 11px",border:"1px solid #e2e8f0",borderRadius:6,marginBottom:8,boxShadow:"0 1px 2px rgba(15,23,42,0.03)",background:"#fff",gap:8}}>
      <div style={cellBase()}>{r.name}</div>
      <div style={cellBase()}>{r.mrn}</div>
      <div style={cellBase()}>{r.branch}</div>
      <div style={cellBase()}>{r.soc}</div>
      <div style={cellBase()}>{r.trigger}</div>
      <div style={cellBase()}>{r.auditDate}</div>
      <div style={{...cellBase("center"),display:"flex",justifyContent:"center"}}><PBComplianceCell met={r.met} source={r.source} /></div>
      <div style={cellBase("center")}>{r.pct}%</div>
      <div style={cellBase("center")}>{r.next ? <IconBulbBadge n={r.next} /> : <span style={{color:"#cbd5e1"}}>—</span>}</div>
      <div style={{...cellBase("center"),display:"flex",justifyContent:"center"}}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">{r.ehr
          ? <path d="M20 6L9 17l-5-5" stroke="#3E9F4A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
          : <path d="M18 6L6 18M6 6l12 12" stroke="#CF1322" strokeWidth="2.6" strokeLinecap="round"/>}
        </svg>
      </div>
      <div style={{...cellBase("center"),display:"flex",justifyContent:"center"}}><ERVATIcon kind={r.met?"thumb":"warning"} /></div>
      <div style={cellBase()}>{r.agent}</div>
      <div style={{...cellBase("center"),display:"flex",justifyContent:"center"}}><DocIcon size={18} /></div>
      <div style={cellBase("center")} onClick={(e)=>e.stopPropagation()}>
        <a href="#" onClick={(e)=>{e.preventDefault(); onView&&onView(r);}} style={{color:"#2563eb",font:"500 12px/16px Roboto",textDecoration:"none"}}>View Details</a>
      </div>
      <div style={cellBase("center")}>
        <span role="checkbox" aria-checked={!!reviewed} tabIndex={0} onClick={()=>onReviewed&&onReviewed()} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,border:`1px solid ${reviewed?"#2563eb":"#d8d8d8"}`,borderRadius:3,background:reviewed?"#2563eb":"#fff",cursor:"pointer"}}>
          {reviewed && <span style={{color:"#fff",fontSize:11,lineHeight:1,fontWeight:700}}>✓</span>}
        </span>
      </div>
    </div>
  );
}

function PreBillAuditGrid({ onView, rows, reviewed, onReviewed }) {
  const list = rows || pbRows;
  return (
    <div style={{padding:"0 24px 24px"}}>
      <div style={{display:"grid",gridTemplateColumns:PB_GRID,alignItems:"center",background:"#f8fafc",borderBottom:"1px solid #e2e8f0",height:40,padding:"0 12px",gap:8,marginBottom:8}}>
        {PB_COLS.map(c=>(<PBHeadCell key={c.key} c={c} />))}
      </div>
      <ScrollBody>
        {list.length===0
          ? <div style={{padding:"48px 24px",textAlign:"center",font:"400 13px/18px Roboto",color:"#94a3b8",border:"1px solid #e2e8f0",borderRadius:6,background:"#fff"}}>No pre-bill audits match the current filters.</div>
          : list.map((r,i)=>(<PBTableRow key={i} r={r} onView={onView} reviewed={reviewed && !!reviewed[r.mrn+i]} onReviewed={()=>onReviewed && onReviewed(r.mrn+i)} />))}
        <div style={{padding:"16px 24px",font:"400 12px/16px Roboto",color:"#94a3b8",textAlign:"center"}}>End of list — {list.length} of 120 patients shown</div>
      </ScrollBody>
    </div>
  );
}

// ── Pre-Bill status summary chips (mirrors Eligibility strip) ────────
const PB_STATUS = [
  { id:"all",      label:"All Patients",        color:"#64748b", weight:1.0 },
  { id:"met",      label:"Requirements Met",    color:"#16a34a", weight:1.2 },
  { id:"unmet",    label:"Requirements Unmet",  color:"#dc2626", weight:1.3 },
  { id:"ai",       label:"AI Processed",        color:"#3f7ba8", weight:1.0 },
  { id:"override", label:"Auditor Override",    color:"#7c3aed", weight:1.2 },
  { id:"partial",  label:"Compliance < 100%",   color:"#d97706", weight:1.2 },
  { id:"nosync",   label:"EHR Not Synced",      color:"#f97316", weight:1.1 },
];
const pbPad2 = (n)=>String(n).padStart(2,"0");
function pbFilterByStatus(rows, id) {
  if (!id || id==="all") return rows;
  if (id==="met") return rows.filter(r=>r.met);
  if (id==="unmet") return rows.filter(r=>!r.met);
  if (id==="ai") return rows.filter(r=>r.source==="ai");
  if (id==="override") return rows.filter(r=>r.source==="override");
  if (id==="partial") return rows.filter(r=>r.pct<100);
  if (id==="nosync") return rows.filter(r=>!r.ehr);
  return rows;
}
function pbCounts(allRows, activeStatus) {
  const sub = pbFilterByStatus(allRows, activeStatus);
  return {
    byChip: {
      all: pbPad2(allRows.length),
      met: pbPad2(sub.filter(r=>r.met).length),
      unmet: pbPad2(sub.filter(r=>!r.met).length),
      ai: pbPad2(sub.filter(r=>r.source==="ai").length),
      override: pbPad2(sub.filter(r=>r.source==="override").length),
      partial: pbPad2(sub.filter(r=>r.pct<100).length),
      nosync: pbPad2(sub.filter(r=>!r.ehr).length),
    },
    at: {
      completed: pbPad2(sub.filter(r=>r.met).length),
      needsAttn: pbPad2(sub.filter(r=>!r.met).length),
      inProgress: pbPad2(sub.filter(r=>r.pct<100 && r.met).length),
    },
  };
}

function PBTitleCluster() {
  return (
    <div>
      <div style={{display:"flex",alignItems:"baseline",gap:6,flexWrap:"wrap"}}>
        <span style={{font:"500 15px/20px Roboto",color:"#0f172a"}}>Pre-Bill Audit Request View —</span>
        <span style={{font:"500 15px/20px Roboto",color:"#2563eb"}}>All Patients</span>
      </div>
      <div style={{font:"400 12px/18px Roboto",color:"#94a3b8",marginTop:6}}>Status Summary of Pre-Bill Audit Compliance</div>
      <div style={{marginTop:10,background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:6,padding:"8px 12px",font:"400 12px/16px Roboto",color:"#64748b",display:"inline-block"}}>Click View Details To Open The Pre-Bill Audit Summary</div>
    </div>
  );
}

function PBStatusStrip({ counts, activeStatus, onPick }) {
  const byChip = counts.byChip;
  return (
    <div style={{display:"flex",alignItems:"stretch",border:"1px solid #e2e8f0",borderRadius:8,background:"#fff",overflow:"hidden"}}>
      <div style={{padding:"14px 16px",background:"#f8fafc",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",font:"500 13px/18px Roboto",color:"#0f172a",flexShrink:0}}>
        <span>Pre-Bill Audit</span>
        <span>Compliance</span>
      </div>
      {PB_STATUS.map(s=>{
        const active = activeStatus === s.id;
        const dim = activeStatus && !active;
        return (
          <div key={s.id} onClick={()=>onPick(active?null:s.id)}
            style={{flex:`${s.weight} 1 0`,minWidth:0,padding:"10px 12px",borderRight:"1px solid #f1f5f9",cursor:"pointer",opacity:dim && s.id!=="all"?0.35:1,transition:"opacity .12s, background .12s",background:active?"#f8fafc":"transparent"}}>
            <div style={{height:3,borderRadius:2,background:s.color,opacity:active?1:0.85,marginBottom:8}}></div>
            <div style={{font:"400 12px/16px Roboto",color:"#333333",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{s.label}</div>
            <div style={{font:"600 18px/22px Roboto",color:"#0f172a",marginTop:4}}>{byChip[s.id]}</div>
          </div>
        );
      })}
    </div>
  );
}

function PBAutomationStatus({ counts, atFilter, onFilter }) {
  const at = counts.at;
  const items = [
    { id:"completed",  label:"Completed",       n:at.completed,  icon:(window.__resources&&window.__resources.atCompleted)||"icons/at-completed.png" },
    { id:"warning",    label:"Needs Attention", n:at.needsAttn,  icon:(window.__resources&&window.__resources.atNeedsAttention)||"icons/at-needs-attention.png" },
    { id:"inprogress", label:"In Progress",     n:at.inProgress, icon:(window.__resources&&window.__resources.atInProgress)||"icons/at-in-progress.png" },
  ];
  return (
    <div style={{display:"flex",alignItems:"center",font:"400 13px/16px Roboto",color:"#333333"}}>
      <span style={{color:"#94a3b8",marginRight:12}}>Automation (AT) Status :</span>
      {items.map((s,i)=>{
        const active = atFilter === s.id;
        const dim = atFilter && !active;
        return (
          <React.Fragment key={s.id}>
            {i>0 && <span style={{width:1,height:18,background:"#e2e8f0",margin:"0 12px"}}></span>}
            <button type="button" onClick={()=>onFilter(active?null:s.id)} title={`Filter: ${s.label}`}
              style={{background:"transparent",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8,padding:"2px 6px",borderRadius:4,opacity:dim?0.4:1,transition:"opacity .12s"}}>
              <img src={s.icon} alt="" style={{width:18,height:18,objectFit:"contain"}} />
              <span style={{color:"#0f172a",fontSize:14}}>{s.label}</span>
              <span style={{fontWeight:600,color:"#0f172a",fontSize:15}}>{s.n}</span>
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}

const PB_FILTER_FIELDS = [
  { key:"branch",  label:"Branch" },
  { key:"trigger", label:"Audit Trigger" },
  { key:"agent",   label:"Auditor" },
];

function PreBillRequestView({ review, onExitReview }) {
  const [drawerRow, setDrawerRow] = useF(null);
  const [statusFilter, setStatusFilter] = useF(null);
  const [atFilter, setAtFilter] = useF(null);
  const [searchQ, setSearchQ] = useF("");
  const [fieldFilters, setFieldFilters] = useF([]);
  const [reviewedSet, setReviewedSet] = useF({});
  const toggleReviewed = (k)=>setReviewedSet(s=>({...s,[k]:!s[k]}));

  const scoped = pbRows.filter(r => fieldFilters.every(f => f.values.includes(r[f.field])));
  const searched = searchQ ? scoped.filter(r=>[r.name,r.mrn,r.agent].join(" ").toLowerCase().includes(searchQ.toLowerCase())) : scoped;
  const counts = pbCounts(searched, statusFilter);
  let rows = pbFilterByStatus(searched, statusFilter);
  if (atFilter === "completed") rows = rows.filter(r=>r.met);
  if (atFilter === "warning") rows = rows.filter(r=>!r.met);
  if (atFilter === "inprogress") rows = rows.filter(r=>r.met && r.pct<100);
  if (review) rows = rows.filter((r,i)=>(!r.met || r.pct<100) && !reviewedSet[r.mrn+i]);

  const chips = [];
  if (statusFilter) {
    const s = PB_STATUS.find(x=>x.id===statusFilter);
    chips.push({ id:"status", label:`Compliance: ${s?s.label:statusFilter}`, onRemove:()=>setStatusFilter(null) });
  }
  if (atFilter) {
    const labels = { completed:"Completed", warning:"Needs Attention", inprogress:"In Progress" };
    chips.push({ id:"at", label:`AT Status: ${labels[atFilter]}`, onRemove:()=>setAtFilter(null) });
  }
  if (review) {
    [{ id:"rv-unmet", label:"Compliance: Requirements Unmet" },{ id:"rv-nr", label:"Reviewed : Not Reviewed" }]
      .forEach(c=>chips.push({ ...c, onRemove:()=>onExitReview&&onExitReview() }));
  }

  return (
    <div style={{background:"#fff"}}>
      <ERVFilterBar chips={chips} filterFields={PB_FILTER_FIELDS} filterRows={pbRows} fieldFilters={fieldFilters} onFieldFilters={setFieldFilters}
        datePicker={{label:"Audit Date", value:null, available:[...new Set(pbRows.map(r=>r.auditDate))], onChange:()=>{}}}
        onClearFilters={review ? (()=>onExitReview&&onExitReview()) : null} searchValue={searchQ} onSearch={setSearchQ} />
      <div style={{padding:"20px 24px 0",display:"flex",alignItems:"flex-start",gap:32,flexWrap:"wrap"}}>
        <div style={{flex:"1 1 380px",minWidth:0}}><PBTitleCluster /></div>
        <div style={{flex:"1 1 520px",minWidth:0}}>
          <PBStatusStrip counts={counts} activeStatus={statusFilter} onPick={(v)=>{ setStatusFilter(v); if(v) setAtFilter(null); }} />
        </div>
      </div>
      <div style={{padding:"8px 24px",display:"flex",justifyContent:"flex-end",position:"relative",top:-8}}>
        <PBAutomationStatus counts={counts} atFilter={atFilter} onFilter={(v)=>{ setAtFilter(v); if(v) setStatusFilter(null); }} />
      </div>
      <PreBillAuditGrid rows={rows} onView={setDrawerRow} reviewed={reviewedSet} onReviewed={toggleReviewed} />
      {drawerRow && <PBDetailDrawer row={drawerRow} onClose={()=>setDrawerRow(null)} />}
    </div>
  );
}

// ── Pre-Bill detail drawer — matches Figma "Slideout" frame ──────────
const PB_DOCS = {
  election:  { label:"Hospice Election Form",  get src(){ return (window.__resources&&window.__resources.document1)||"assets/document-1.png"; } },
  discharge: { label:"Discharge Summary",      get src(){ return (window.__resources&&window.__resources.document2)||"assets/document-2.png"; } },
};
const PB_AUDIT_GROUPS = [
  { key:"TC", label:"TC", rows:[
    { indicator:"Hospice Election Form is present", value:"Hospice Election Form (Banking form 10-1314) is present", matches:"Met", docs:["election"] },
    { indicator:"Undulicated hospice physician narrative present", value:"Original unduplicated physician narrative with prognosis for life expectancy of 6 months or less.", matches:"Unmet", docs:["discharge"] },
    { indicator:"Effective Date of election>=1st day of Hospice care", value:"Election effective date is the first day of hospice care or later, not before election statement date.", matches:"Unmet", docs:["election","discharge"] },
    { indicator:"Patient Name is completed on the election form.", value:"Patient Name is completed on the election form.", matches:"Met", docs:["election"] },
    { indicator:"Patient/Authorized signature present", value:"Patient/authorized signature and date are present on the election form.", matches:"Met", docs:["election"] },
    { indicator:"Attending Physician name is complete in election form.", value:"Elected Attending Physician name is completed on the election form.", matches:"Met", docs:["election","discharge"] },
    { indicator:"CTI and Narrative signed and dated by the same physician", value:"Narrative signed and dated by the same Physician that signs the CTI.", matches:"Met", docs:["election","discharge"] },
  ]},
  { key:"DSC", label:"DSC", rows:[
    { indicator:"Change in Designated attending physician form present", value:"CHANGE IN DESIGNATED ATTENDING PHYSICIAN form completed and attached to medical record.", matches:"Unmet", docs:["discharge"] },
    { indicator:"Separate Hospice CTI noted on Initial Hospice plan of care", value:"Attending physician has a separate Hospice CTI noted on the Initial Hospice Plan of Care.", matches:"Met", docs:["election","discharge"] },
    { indicator:"CTI requirements complete and signed timely", value:"Certification of Terminal Illness is complete and signed within required timeframe.", matches:"Met", docs:["discharge"] },
    { indicator:"Initial or Recertification CTI has correct benefit period dates.", value:"CTI benefit period dates align with the election period on file.", matches:"Met", docs:["election"] },
    { indicator:"F2F attestation requirements", value:"Face-to-face attestation is present and signed by the certifying physician.", matches:"Met", docs:["discharge"] },
    { indicator:"F2F before physician recert", value:"Face-to-face encounter occurred prior to the physician recertification date.", matches:"Met", docs:["election","discharge"] },
  ]},
  { key:"Billing", label:"Billing", rows:[
    { indicator:"EOB requested 5 days of effective date", value:"Explanation of Benefits requested within 5 days of the effective date.", matches:"Met", docs:["election"] },
    { indicator:"EOB addendum furnished in 5 days of request", value:"EOB addendum furnished within 5 days of request.", matches:"Met", docs:["election"] },
    { indicator:"EOB requested 5 days oe greater after effective date", value:"EOB requested 5 or more days after the effective date.", matches:"Unmet", docs:["discharge"] },
    { indicator:"EOB addendum furnished in 5 days of request", value:"EOB addendum furnished within 5 days of request.", matches:"Met", docs:["election"] },
    { indicator:"SIA billable units are appropriate", value:"Skilled in-home aide billable units match the plan of care.", matches:"Met", docs:["election","discharge"] },
  ]},
];
// A fully-compliant patient has every indicator Met; otherwise the base set applies.
function pbGroupsFor(row) {
  if (!row || row.met === false) return PB_AUDIT_GROUPS;
  return PB_AUDIT_GROUPS.map(g => ({ ...g, rows: g.rows.map(r => ({ ...r, matches:"Met" })) }));
}

// Which team the signed-in user belongs to — their accordion opens by default.
const PB_USER_TEAM = "TC";

const PB_ROW_GRID = "46px 1.15fr 1.35fr 56px 52px 60px";
const PB_ROW_GRID_COMPACT = "0.92fr 1fr 44px 26px 30px";

function PBMatchPill({ value, source }) {
  const met = value === "Met";
  const R = (window.__resources||{});
  const src = !met ? (R.iconUnmetAi||"assets/icon-unmet-ai.svg") : source==="user" ? (R.iconMetUser||"assets/icon-met-user.svg") : (R.iconMetAi||"assets/icon-met-ai.svg");
  return <img src={src} alt={value} title={value} style={{height:26,width:"auto",display:"block",objectFit:"contain"}} />;
}

function PBAuditGroup({ group, showOnlyUnmet, reviewed, onToggleReviewed, onRequestReview, onEdit, editRow, compact, selected, onSelect }) {
  const [open, setOpen] = useF(group.key === PB_USER_TEAM);
  const rows = showOnlyUnmet ? group.rows.filter(r=>r.matches==="Unmet") : group.rows;
  const unmet = group.rows.filter(r=>r.matches==="Unmet").length;
  if (showOnlyUnmet && rows.length===0) return null;
  const teamColor = group.key==="TC" ? "#1677FF" : group.key==="DSC" ? "#0EA5A5" : "#B8860B";
  return (
    <div>
      <div onClick={()=>{ if(!editRow) setOpen(v=>!v); }} style={{opacity:editRow?0.18:1,pointerEvents:editRow?"none":"auto",display:"flex",alignItems:"center",gap:10,height:52,background:"#F5F7FA",borderTop:"1px solid #d9dee5",borderBottom:"1px solid #d9dee5",padding:"0 14px",cursor:"pointer",userSelect:"none"}}>
        <span style={{fontSize:11,color:"#666673",display:"inline-block",transform:open?"none":"rotate(-90deg)",transition:"transform .15s"}}>▼</span>
        <span style={{font:"600 14px/18px Inter, Roboto",color:"#333340"}}>{group.label}</span>
        <span style={{background:"#fff",border:"1px solid #d9dee5",borderRadius:20,padding:"3px 10px",font:"500 11px/15px Roboto",color:"#475569"}}>{group.rows.length} items</span>
        {unmet > 0
          ? <span style={{background:"#FFEDEC",border:"1px solid #f6c9c4",borderRadius:20,padding:"3px 10px",font:"500 11px/15px Roboto",color:"#D6392C"}}>{unmet} unmet</span>
          : <span style={{background:"#EFFCEF",border:"1px solid #c7e8c9",borderRadius:20,padding:"3px 10px",font:"500 11px/15px Roboto",color:"#2E9E4A"}}>All met</span>}
      </div>
      {open && rows.map((r,i)=>{
        const isSel = selected && selected.indicator === r.indicator;
        const isEditing = editRow && editRow.indicator === r.indicator;
        const dimmed = editRow && !isEditing;
        return (
          <React.Fragment key={i}>
          <div onClick={()=>{ if(!dimmed) onSelect(r); }} style={{display:"grid",gridTemplateColumns:compact?PB_ROW_GRID_COMPACT:PB_ROW_GRID,alignItems:"center",gap:compact?14:12,padding:compact?"14px 10px":"14px 10px",borderBottom:"1px solid #eef1f5",cursor:dimmed?"not-allowed":"pointer",background:isEditing?"#F5F9FF":(isSel&&!dimmed?"#E8F1FE":"#fff"),boxShadow:isEditing?"0 -10px 24px rgba(15,23,42,.10), 0 2px 6px rgba(15,23,42,.05)":(isSel&&!dimmed?"inset 3px 0 0 #1677FF":"none"),borderRadius:isEditing?"10px 10px 0 0":0,margin:isEditing?(compact?"8px 8px 0":"10px 14px 0"):0,border:isEditing?"1px solid #e6ebf1":"none",borderBottom:isEditing?"none":undefined,position:isEditing?"relative":"static",zIndex:isEditing?6:"auto",transition:"opacity .16s ease, background .16s ease, margin .16s ease",opacity:dimmed?0.18:1,pointerEvents:dimmed?"none":"auto",userSelect:dimmed?"none":"auto"}}>
            {!compact && <div style={{font:"600 12px/16px Roboto",color:teamColor}}>{group.key}</div>}
            <div style={{font:"400 13px/18px Roboto",color:"#333"}}>{r.indicator}</div>
            <div style={{font:"400 13px/18px Roboto",color:"#2E9E4A"}}>{r.value}</div>
            <div style={{display:"flex",justifyContent:"center"}}><PBMatchPill value={r.matches} source={r.reviewSource} /></div>
            <div style={{display:"flex",justifyContent:"center"}} onClick={(e)=>e.stopPropagation()}>
              {!isEditing && <img src={(window.__resources&&window.__resources.iconEdit)||"assets/icon-edit.svg"} alt="Edit" title="Edit audit finding" onClick={()=>onEdit(r)} style={{width:17,height:17,cursor:"pointer"}} />}
            </div>
            <div style={{display:"flex",justifyContent:"center"}} onClick={(e)=>e.stopPropagation()}>
              {!isEditing && <input id={"pbchk-"+group.key+"-"+i} type="checkbox" checked={!!reviewed[group.key+"-"+i]}
                onChange={()=>{
                  const key = group.key+"-"+i;
                  if (r.matches === "Unmet" && !reviewed[key]) {
                    const box = document.getElementById("pbchk-"+key);
                    const rect = box ? box.getBoundingClientRect() : null;
                    onRequestReview({ key, row:r, team:group.key, anchor: rect ? { x:rect.left+rect.width/2, y:rect.top } : null });
                  }
                  else onToggleReviewed(key);
                }}
                style={{width:15,height:15,accentColor:"#1677FF",cursor:"pointer"}} />}
            </div>
          </div>
          {isEditing && <PBEditPanel row={r} inline compact={compact} onClose={()=>onEdit(null)} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// Reviewer-activity log, derived from the audit indicator set.
function pbAuditLog(groups) {
  const people = ["E5 Agent","Fiona Gallagher","Bob Smith","Ethan Hunt","Diana Ross"];
  const stamps = ["05/11/25 09:04 AM","05/11/25 09:06 AM","05/10/25 04:41 PM","05/10/25 04:38 PM","05/09/25 11:12 AM","05/09/25 10:02 AM"];
  const notes  = ["Auto-detected from source document","Reviewer confirmed against election form","Overridden after chart review","Document re-linked to indicator","Flagged for follow-up with the agency"];
  const out = [];
  (groups || PB_AUDIT_GROUPS).forEach(g => g.rows.forEach((r,i) => {
    out.push({
      team: g.key,
      indicator: r.indicator,
      value: r.value,
      from: r.matches === "Unmet" ? "Met" : "Unmet",
      to: r.matches,
      by: people[(i + g.key.length) % people.length],
      note: notes[(i + g.rows.length) % notes.length],
      at: stamps[(i + g.key.length) % stamps.length],
    });
  }));
  return out;
}

const PB_LOG_GRID = "1.2fr 1.4fr 96px 96px 120px 1.2fr 140px";

function PBAuditLogTable({ indicator, onClear, groups }) {
  const all = pbAuditLog(groups);
  const rows = indicator ? all.filter(l => l.indicator === indicator) : all;
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",minHeight:0,background:"#fff"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"12px 16px 0"}}>
        <span style={{font:"400 12px/16px Roboto",color:"#94a3b8"}}>Showing for</span>
        <span style={{display:"inline-flex",alignItems:"center",gap:10,background:"#f4f6f9",border:"1px solid #d8dee6",borderRadius:6,padding:"5px 10px",font:"400 12px/16px Roboto",color:"#334155",maxWidth:520}}>
          <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{indicator || "All audit indicators"}</span>
          {indicator && <span onClick={onClear} title="Show all activity" style={{cursor:"pointer",color:"#64748b",fontWeight:600}}>✕</span>}
        </span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:PB_LOG_GRID,gap:10,padding:"12px 16px 8px",font:"500 11px/15px Roboto",color:"#64748b",borderBottom:"1px solid #e2e8f0"}}>
        <div>Audit Indicator</div><div>Value</div><div>Changed From</div><div>Changed To</div><div>Changed By</div><div>Notes</div><div>Time Stamp</div>
      </div>
      <div className="pb-thin-scroll" style={{flex:1,overflow:"auto"}}>
        {rows.map((l,i)=>(
          <div key={i} style={{display:"grid",gridTemplateColumns:PB_LOG_GRID,gap:10,padding:"12px 16px",borderBottom:"1px solid #eef1f5",font:"400 12px/17px Roboto",color:"#333",alignItems:"start"}}>
            <div>{l.indicator}</div>
            <div style={{color:"#475569"}}>{l.value}</div>
            <div style={{color:"#94a3b8"}}>{l.from}</div>
            <div style={{color:l.to==="Met"?"#2E9E4A":"#D6392C",fontWeight:500}}>{l.to}</div>
            <div>{l.by}</div>
            <div style={{color:"#475569"}}>{l.note}</div>
            <div style={{color:"#94a3b8",whiteSpace:"nowrap"}}>{l.at}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PBDocumentViewer({ docs, indicator, onClearFilter, groups }) {
  const [tab, setTab] = useF(0);
  const [zooms, setZooms] = useF({});
  const single = docs.length === 1;
  const zoomOf = (i)=>zooms[i] || 1;
  const setZoom = (i, fn)=>setZooms(z=>({ ...z, [i]: Math.min(3, Math.max(0.5, +fn(z[i]||1).toFixed(2))) }));
  const zoomBtn = { width:26, height:26, borderRadius:4, border:"1px solid #d8dee6", background:"#fff", cursor:"pointer", font:"500 14px/1 Roboto", color:"#334155" };
  return (
    <React.Fragment>
      <div style={{display:"flex",background:"#fff",borderBottom:"1px solid #e5e7eb",flexShrink:0}}>
        {[{ label:"Document", sub: docs.length ? `${docs.length} supporting document${docs.length>1?"s":""}` : "No document selected" },
          { label:"Audit Log", sub:"Reviewer activity" }].map((t,i)=>(
          <div key={t.label} onClick={()=>setTab(i)} style={{padding:"10px 20px",cursor:"pointer",borderBottom:`2px solid ${tab===i?"#1677FF":"transparent"}`,background:tab===i?"#F5F9FF":"transparent"}}>
            <div style={{font:`${tab===i?500:400} 13px/18px Roboto`,color:tab===i?"#1677FF":"#334155"}}>{t.label}</div>
            <div style={{font:"400 11px/15px Roboto",color:"#94a3b8"}}>{t.sub}</div>
          </div>
        ))}
      </div>
      {tab===0 ? (
        docs.length === 0 ? (
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,padding:32,textAlign:"center"}}>
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="#b6c0cd" strokeWidth="1.4"/><path d="M15 2v5h5" stroke="#b6c0cd" strokeWidth="1.4"/><path d="M8 13h8M8 17h5" stroke="#b6c0cd" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <div style={{font:"500 15px/20px Roboto",color:"#64748b"}}>No document loaded</div>
            <div style={{font:"400 13px/18px Roboto",color:"#94a3b8",maxWidth:320}}>Click an audit indicator on the left to see the source document that supports it.</div>
          </div>
        ) : (
          <div className="pb-thin-scroll" style={{flex:1,overflow:"auto",padding:16,background:"#e9ebef"}}>
            <div style={{display:"grid",gridTemplateColumns:single?"1fr":"1fr 1fr",gap:20,alignItems:"start"}}>
              {docs.map((d,i)=>(
                <div key={i} style={{display:"flex",flexDirection:"column",minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,padding:"0 4px 10px"}}>
                    <span style={{font:"500 13px/18px Roboto",color:"#1a1a1a"}}>Document {i+1} — {d.label}</span>
                    <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
                      <button type="button" onClick={()=>setZoom(i, z=>z-0.25)} style={zoomBtn}>−</button>
                      <span style={{font:"400 12px/16px Roboto",color:"#334155",minWidth:40,textAlign:"center"}}>{Math.round(zoomOf(i)*100)}%</span>
                      <button type="button" onClick={()=>setZoom(i, z=>z+0.25)} style={zoomBtn}>+</button>
                    </div>
                  </div>
                  <div className="pb-thin-scroll" style={{background:"#fff",boxShadow:"0 3px 10px rgba(0,0,0,.12)",overflow:"auto",aspectRatio:"1 / 1.4142",maxHeight:"72vh",width:"100%"}}>
                    <img src={d.src} alt={d.label} style={{width:`${zoomOf(i)*100}%`,height:"auto",display:"block",transition:"width .12s"}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        <PBAuditLogTable indicator={indicator} onClear={onClearFilter} groups={groups} />
      )}
    </React.Fragment>
  );
}

function PBEditPanel({ row, onClose, inline, compact }) {
  const twoDocs = (row.docs || []).length > 1;
  const [noRef, setNoRef] = useF(false);
  const [status, setStatus] = useF("");
  const [notes, setNotes] = useF("");
  const [statusOpen, setStatusOpen] = useF(false);
  return (
    <div style={{background:"#fff",position:"relative",zIndex:6,margin:compact?"0 8px 10px":"0 14px 14px",border:"1px solid #e6ebf1",borderTop:"none",borderRadius:"0 0 10px 10px",boxShadow:"0 18px 40px rgba(15,23,42,.14), 0 4px 10px rgba(15,23,42,.05)"}}>
      <div style={{width:"100%",background:"#fff",borderRadius:"0 0 10px 10px",overflow:"hidden"}}>
        <div style={{padding:compact?"12px 12px 14px":"18px 18px 20px",borderBottom:"1px solid #e2e8f0"}}>
          <div style={{font:`400 ${compact?12:13}px/18px Roboto`,color:"#64748b",marginBottom:compact?8:12}}>Annotate References</div>
          <div style={{display:"flex",alignItems:"center",gap:8,border:"1px solid #bcd9f7",background:"#f2f8ff",borderRadius:4,padding:compact?"10px 10px":"14px 16px",cursor:"pointer"}}>
            <svg width={compact?14:16} height={compact?14:16} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9.2" stroke="#1677FF" strokeWidth="1.6"/><path d="M12 8v8M8 12h8" stroke="#1677FF" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <span style={{font:`500 ${compact?12:13}px/17px Roboto`,color:"#1677FF",textDecoration:"underline"}}>Click document to annotate reference</span>
          </div>
          <label style={{display:"flex",alignItems:"center",gap:9,marginTop:compact?11:16,cursor:"pointer"}}>
            <input type="checkbox" checked={noRef} onChange={()=>setNoRef(v=>!v)} style={{width:15,height:15,accentColor:"#1677FF",cursor:"pointer"}} />
            <span style={{font:`400 ${compact?12:13}px/17px Roboto`,color:"#333"}}>No Reference to Annotate</span>
          </label>
        </div>
        <div style={{padding:compact?"12px":"18px"}}>
          <div style={{display:"flex",alignItems:"center",gap:8,position:"relative",flexWrap:"wrap"}}>
            <span style={{font:`400 ${compact?12:13}px/17px Roboto`,color:"#475569"}}>{twoDocs ? "Do both documents match :" : "Manual Status Override :"}</span>
            <span onClick={()=>setStatusOpen(v=>!v)} style={{display:"inline-flex",alignItems:"center",gap:6,font:`400 ${compact?12:13}px/17px Roboto`,color:"#1677FF",cursor:"pointer"}}>
              {status || (twoDocs ? "Select Match" : "Select Status")} <span style={{fontSize:9}}>▾</span>
            </span>
            {statusOpen && (
              <div style={{position:"absolute",top:26,left:compact?0:140,background:"#fff",border:"1px solid #e6e8ec",borderRadius:8,boxShadow:"0 10px 26px rgba(15,23,42,.14)",zIndex:5,minWidth:210}}>
                {(twoDocs
                  ? [{ label:"Both documents match", kind:"met" },{ label:"Documents do not match", kind:"unmet" }]
                  : [{ label:"Requirement Met", kind:"met" },{ label:"Requirement Unmet", kind:"unmet" }]
                ).map((o,i)=>(
                  <div key={o.label} onClick={()=>{ setStatus(o.label); setStatusOpen(false); }} style={{display:"flex",alignItems:"center",gap:10,padding:"11px 16px",font:"400 14px/19px Roboto",color:status===o.label?"#1677FF":"#333",background:status===o.label?"#F5F9FF":"transparent",cursor:"pointer",borderTop:i>0?"1px solid #eef1f5":"none",whiteSpace:"nowrap"}}>
                    {o.kind==="met"
                      ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#3E9F4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      : <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 4l9 15H3l9-15z" stroke="#F04E23" strokeWidth="1.7" strokeLinejoin="round"/><rect x="11.2" y="9.5" width="1.6" height="4.6" rx=".8" fill="#F04E23"/><circle cx="12" cy="16.4" r=".95" fill="#F04E23"/></svg>}
                    {o.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{font:`500 ${compact?12:13}px/17px Roboto`,color:"#1a1a1a",margin:compact?"12px 0 6px":"16px 0 8px"}}>Auditor Notes</div>
          <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Enter Notes"
            style={{width:"100%",minHeight:compact?60:84,resize:"vertical",border:"1px solid #cbd5e1",borderRadius:4,padding:compact?"8px 10px":"10px 12px",font:`400 ${compact?12:13}px/17px Roboto`,color:"#0f172a",outline:"none",boxSizing:"border-box"}} />
          <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:compact?10:14,marginTop:compact?12:18}}>
            <span onClick={onClose} style={{font:`400 ${compact?12:13}px/17px Roboto`,color:"#64748b",cursor:"pointer"}}>Cancel</span>
            <button type="button" onClick={onClose} style={{background:"#1677FF",border:"none",borderRadius:4,padding:compact?"7px 14px":"8px 18px",font:`500 ${compact?12:13}px/17px Roboto`,color:"#fff",cursor:"pointer"}}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PBDetailDrawer({ row, onClose }) {
  const r = row || {};
  const [showOnlyUnmet, setShowOnlyUnmet] = useF(false);
  const [reviewed, setReviewed] = useF({});
  const [selected, setSelected] = useF(null);
  const [reviewPrompt, setReviewPrompt] = useF(null);
  const [editRow, setEditRow] = useF(null);
  const [changedDocs, setChangedDocs] = useF([]);
  const [shown, setShown] = useF(false);
  React.useEffect(()=>{ const t = requestAnimationFrame(()=>setShown(true)); return ()=>cancelAnimationFrame(t); }, []);
  const close = () => { setShown(false); setTimeout(()=>onClose&&onClose(), 260); };
  const toggleReviewed = (k)=>setReviewed(o=>({...o,[k]:!o[k]}));
  const activeDocs = selected ? (selected.docs||[]).map(k=>PB_DOCS[k]).filter(Boolean) : [];
  const compare = activeDocs.length > 1;
  const groups = pbGroupsFor(r);
  const totalUnmet = groups.reduce((n,g)=>n+g.rows.filter(x=>x.matches==="Unmet").length,0);
  const tcUnmet = groups.find(g=>g.key==="TC").rows.filter(x=>x.matches==="Unmet").length;
  const allMet = totalUnmet === 0;
  return (
    <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex"}}>
      <div onClick={close} style={{position:"absolute",inset:0,background:"rgba(15,23,42,.45)",opacity:shown?1:0,transition:"opacity .26s ease"}} />
      <div style={{position:"relative",marginLeft:"auto",width:"min(1875px, 98vw)",height:"100%",background:"#fff",display:"flex",flexDirection:"column",boxShadow:"-8px 0 30px rgba(0,0,0,.15)",transform:shown?"translateX(0)":"translateX(100%)",transition:"transform .3s cubic-bezier(.22,.61,.36,1)"}}>
        <div style={{height:72,boxShadow:"0 4px 4px rgba(0,0,0,0.06)",display:"flex",alignItems:"center",padding:"0 24px",flexShrink:0,gap:14}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#3F7EA1"/></svg>
          <span style={{font:"500 20px/24px Roboto",color:"rgba(0,0,0,.75)",textTransform:"capitalize"}}>{r.name || "Patient"} - {r.mrn}</span>
          <span style={{font:"500 20px/24px Roboto",color:"rgba(0,0,0,.75)",marginLeft:20}}>SOC : {r.soc}</span>
          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:11}}>
            <span style={{font:"400 16px/24px Roboto",color:"rgba(0,0,0,.75)"}}>Audit Date :</span>
            <span style={{display:"inline-flex",alignItems:"center",gap:8,borderRadius:6,boxShadow:"inset 0 0 0 1px #1677FF",padding:"2px 16px",font:"400 14px/22px Roboto",color:"#1677FF"}}>
              {r.auditDate || "07/18/25"}-Pre-Bill <span style={{fontSize:10}}>▾</span>
            </span>
            <span onClick={close} style={{cursor:"pointer",fontSize:22,color:"#333",marginLeft:14}}>✕</span>
          </div>
        </div>

        <div style={{padding:"20px 24px 0"}}>
          <div style={{display:"flex",alignItems:"center",gap:16,paddingBottom:16,borderBottom:"1px solid #e5e7eb"}}>
            <span style={{font:"600 20px/24px Roboto",color:"#1a1a1a"}}>Prebill Audit Summary</span>
            <span style={{display:"inline-flex",alignItems:"center",gap:8,background:allMet?"#2E9E4A":"#D6392C",color:"#fff",borderRadius:20,padding:"7px 16px",font:"500 13px/16px Roboto"}}>{allMet ? "✓ Pre-bill Requirement Met" : "✕ Pre-bill Requirement Unmet"}</span>
          </div>
        </div>

        <div style={{flex:1,overflow:"hidden",display:"flex",padding:"16px 24px 24px",gap:24}}>
          <div style={{width:compare?"27%":"44%",minWidth:compare?300:420,display:"flex",flexDirection:"column",position:"relative",transition:"width .22s ease, min-width .22s ease"}}>
            <div style={{display:"flex",alignItems:"center",gap:14,paddingBottom:14,flexShrink:0}}>
              <span style={{font:"700 16px/20px Roboto",color:allMet?"#2E9E4A":"#D6392C"}}>{allMet ? "All Indicators Met In TC" : `${tcUnmet} Unmet In TC`}</span>
              <span style={{background:allMet?"#EFFCEF":"#FFEDEC",color:allMet?"#2E9E4A":"#D6392C",borderRadius:4,padding:"4px 10px",font:"500 12px/16px Roboto"}}>{allMet ? "0 Unmet overall" : `${totalUnmet} Unmet overall`}</span>
              <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:10}}>
                <span style={{font:"400 13px/18px Roboto",color:"#333"}}>Show Only Unmet</span>
                <span onClick={()=>setShowOnlyUnmet(v=>!v)} style={{width:36,height:20,borderRadius:10,background:showOnlyUnmet?"#1677FF":"#d1d5db",position:"relative",cursor:"pointer",transition:"background .15s",display:"inline-block",flexShrink:0}}>
                  <span style={{position:"absolute",top:2,left:showOnlyUnmet?18:2,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left .15s"}} />
                </span>
              </div>
            </div>
            <div className={editRow?"":"pb-thin-scroll"} style={{flex:1,minHeight:0,overflowY:editRow?"hidden":"auto",overflowX:"hidden",paddingRight:1}}>
              <div style={{border:"1px solid #e5e7eb",borderRadius:6,overflow:"hidden"}}>
              <div style={{display:"grid",gridTemplateColumns:compare?PB_ROW_GRID_COMPACT:PB_ROW_GRID,gap:compare?14:12,padding:"10px 10px",font:"400 12px/16px Roboto",color:"rgba(0,0,0,.65)",background:"#fafbfc",borderBottom:"1px solid #e5e7eb",position:"sticky",top:0,zIndex:2,opacity:editRow?0.18:1,pointerEvents:editRow?"none":"auto",transition:"opacity .12s"}}>
                {!compare && <div>Team</div>}<div>Audit Indicator</div><div>Audit Value</div>
                <div style={{textAlign:"center"}}>Matches</div>
                <div style={{textAlign:"center"}}>{compare?"":"Edit"}</div>
                <div style={{textAlign:"center"}}>{compare?"":"Review"}</div>
              </div>
              <div className="pb-thin-scroll" style={{flex:1,overflow:"auto"}}>
              {groups.map(g=>(<PBAuditGroup key={g.key} group={g} showOnlyUnmet={showOnlyUnmet} reviewed={reviewed} onToggleReviewed={toggleReviewed} onRequestReview={(p)=>{ setReviewPrompt(p); setChangedDocs([]); setSelected(p.row); }} onEdit={(r)=>{ if(r) setSelected(r); setEditRow(r); }} editRow={editRow} compact={compare} selected={selected} onSelect={setSelected} />))}
              </div>
              </div>
            </div>
          </div>

          <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0,background:"#f4f5f7",borderRadius:6,overflow:"hidden"}}>
            <PBDocumentViewer docs={activeDocs} indicator={selected ? selected.indicator : null} onClearFilter={()=>setSelected(null)} groups={groups} />
          </div>
        </div>

        {reviewPrompt && (()=>{
          const promptDocs = (reviewPrompt.row.docs||[]).map(k=>PB_DOCS[k]).filter(Boolean);
          const multi = promptDocs.length > 1;
          const toggleDoc = (label)=>setChangedDocs(l=>l.includes(label)?l.filter(x=>x!==label):[...l,label]);
          const allSelected = changedDocs.length === promptDocs.length && promptDocs.length>0;
          return (
            <div style={{position:"fixed",left:Math.max(300, (reviewPrompt.anchor?reviewPrompt.anchor.x:600)),top:(reviewPrompt.anchor?reviewPrompt.anchor.y-14:200),transform:"translate(-50%, -100%)",background:"#fff",borderRadius:10,boxShadow:"0 12px 34px rgba(15,23,42,.22)",border:"1px solid #e2e8f0",padding:"16px 20px",display:"flex",flexDirection:"column",gap:12,zIndex:1200,width:560}}>
              <span style={{position:"absolute",bottom:-7,left:"50%",transform:"translateX(-50%) rotate(45deg)",width:12,height:12,background:"#fff",borderRight:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"}} />
              <div style={{display:"flex",alignItems:"flex-start",gap:10}}>
                <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:22,height:22,borderRadius:"50%",background:"#FFEDEC",color:"#D6392C",font:"600 12px/1 Roboto",flexShrink:0,marginTop:1}}>!</span>
                <div style={{minWidth:0}}>
                  <div style={{font:"500 14px/19px Roboto",color:"#1a1a1a"}}>This finding is unmet — was a document changed?</div>
                  <div style={{font:"400 12px/17px Roboto",color:"#64748b",marginTop:3,maxWidth:640}}>{reviewPrompt.row.indicator}</div>
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                {promptDocs.map((d,i)=>{
                  const on = changedDocs.includes(d.label);
                  return (
                    <span key={d.label} onClick={()=>toggleDoc(d.label)} style={{display:"inline-flex",alignItems:"center",gap:8,border:`1px solid ${on?"#1677FF":"#d8dee6"}`,background:on?"#EAF3FF":"#fff",color:on?"#1677FF":"#334155",borderRadius:6,padding:"6px 12px",font:"400 12px/16px Roboto",cursor:"pointer"}}>
                      <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:14,height:14,borderRadius:3,border:`1px solid ${on?"#1677FF":"#c3ccd6"}`,background:on?"#1677FF":"#fff",color:"#fff",fontSize:10,lineHeight:1}}>{on?"✓":""}</span>
                      Document {i+1} — {d.label}
                    </span>
                  );
                })}
                {multi && (
                  <span onClick={()=>setChangedDocs(allSelected?[]:promptDocs.map(d=>d.label))} style={{font:"500 12px/16px Roboto",color:"#1677FF",cursor:"pointer",padding:"6px 4px"}}>
                    {allSelected ? "Clear all" : "Both documents changed"}
                  </span>
                )}
                <span onClick={()=>setChangedDocs([])} style={{font:"400 12px/16px Roboto",color:"#64748b",cursor:"pointer",padding:"6px 4px"}}>No document changed</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10,justifyContent:"flex-end"}}>
                <span style={{marginRight:"auto",font:"400 11px/15px Roboto",color:"#94a3b8"}}>
                  {changedDocs.length ? `Marking ${changedDocs.length} document${changedDocs.length>1?"s":""} as changed` : "No document marked as changed"}
                </span>
                <button type="button" onClick={()=>{ setReviewPrompt(null); setChangedDocs([]); }} style={{background:"#fff",border:"1px solid #d8dee6",borderRadius:4,padding:"7px 14px",font:"400 12px/16px Roboto",color:"#334155",cursor:"pointer"}}>Cancel</button>
                <button type="button" onClick={()=>{ toggleReviewed(reviewPrompt.key); setReviewPrompt(null); setChangedDocs([]); }} style={{background:"#2563eb",border:"none",borderRadius:4,padding:"7px 16px",font:"500 12px/16px Roboto",color:"#fff",cursor:"pointer"}}>Mark as Reviewed</button>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

function PreBillAuditSection({ sub, onSub }) {
  const subTabs = [
    { label: "Prebill Audit Request View", icon: "☰" },
    { label: "Automation Log",             icon: ""  },
  ];
  const [review, setReview] = useF(false);
  const AutoLog = typeof window !== "undefined" && window.ERVAutomationLogView;
  return (
    <div>
      <SectionBand title="Pre-Bill Audit Center" subTabs={subTabs} activeSub={sub||0} onSub={onSub} showReview={true} review={review} onReview={()=>setReview(v=>!v)} />
      {(sub||0)===0
        ? <PreBillRequestView review={review} onExitReview={()=>setReview(false)} />
        : (AutoLog ? <AutoLog onRefClick={()=>{}} /> : <div style={{padding:60,textAlign:"center",color:"#94a3b8",font:"400 14px/20px Roboto"}}>Loading log…</div>)}
    </div>
  );
}
