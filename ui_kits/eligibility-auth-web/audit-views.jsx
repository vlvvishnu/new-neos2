// F2F (Face-to-Face) Encounter Audit — Request View + detail drawer.
// Mirrors the app's existing Eligibility/Authorization request-view pattern
// (SectionBand host, filter-chip strap, dense grid table, right slide-out
// drawer with accordions) with F2F-audit-specific columns and content.
(function(){
const { useState: useAUD } = React;

// Shared chrome pulled from the app shell (separate babel scripts → read off window).
function WSSectionBand(props){ const S = typeof window!=="undefined" && window.SectionBand; return S ? <S {...props} /> : null; }
function PBBody({ children }){ const S = typeof window!=="undefined" && window.ScrollBody; return S ? <S>{children}</S> : <div>{children}</div>; }
function PBFilterBar(props){ const B = typeof window!=="undefined" && window.ARVFilterBarChips; return B ? <B {...props} /> : null; }

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
  const [chips, setChips] = useAUD([{ id:"req", label:"F2F Requirements: All" }, { id:"status", label:"Status: Open" }]);
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
  const [open, setOpen] = useAUD({ timely:false, eligible:false, primary:false, homebound:true, skilled:false, docs:false, log:false });
  const toggle = (k)=>setOpen(o=>({...o,[k]:!o[k]}));
  const homeboundFail = r.req !== "Met";
  return (
    <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex"}}>
      <style>{".pb-thin-scroll{scrollbar-width:thin;scrollbar-color:#c3cbd6 transparent}.pb-thin-scroll::-webkit-scrollbar{width:3px;height:3px}.pb-thin-scroll::-webkit-scrollbar-track{background:transparent}.pb-thin-scroll::-webkit-scrollbar-thumb{background:#c3cbd6;border-radius:3px}.pb-thin-scroll::-webkit-scrollbar-corner{background:transparent}"}</style>
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
  const [drawerRow, setDrawerRow] = useAUD(null);
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
      <WSSectionBand title="F2F Encounter Audit Center" subTabs={subTabs} activeSub={sub} onSub={onSub} showReview={false} />
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

function PBSparkle({ color="#E2B455", size=11 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{display:"block"}}><path d="M12 2c.6 3.2 1.2 4.6 2 5.5.9.9 2.3 1.5 5.5 2-3.2.6-4.6 1.2-5.5 2-.9.9-1.5 2.3-2 5.5-.6-3.2-1.2-4.6-2-5.5-.9-.9-2.3-1.5-5.5-2 3.2-.6 4.6-1.2 5.5-2 .9-.9 1.5-2.3 2-5.5z" fill={color}/></svg>;
}
function PBOverrideMark() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="9.5" cy="7" r="3.4" fill="#1677FF"/><path d="M3.4 20c0-3.4 2.8-5.6 6.1-5.6 1 0 1.9.2 2.7.5" stroke="#1677FF" strokeWidth="1.8" strokeLinecap="round"/><path d="M15 18.6l5.2-5.2 1.7 1.7-5.2 5.2H15v-1.7z" fill="#1677FF"/></svg>;
}
function PBComplianceCell({ met, source }) {
  const src = !met ? pbIcon("icons/pb-tag-not-met.svg") : (source==="override" || source==="user") ? pbIcon("icons/pb-tag-met-override.svg") : pbIcon("icons/pb-tag-met.svg");
  const label = met ? "Met" : "Not Met";
  return <img src={src} alt={label} title={label} style={{height:42,width:"auto",display:"block",objectFit:"contain"}} />;
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
      <PBBody>
        {list.length===0
          ? <div style={{padding:"48px 24px",textAlign:"center",font:"400 13px/18px Roboto",color:"#94a3b8",border:"1px solid #e2e8f0",borderRadius:6,background:"#fff"}}>No pre-bill audits match the current filters.</div>
          : list.map((r,i)=>(<PBTableRow key={i} r={r} onView={onView} reviewed={reviewed && !!reviewed[r.mrn+i]} onReviewed={()=>onReviewed && onReviewed(r.mrn+i)} />))}
        <div style={{padding:"16px 24px",font:"400 12px/16px Roboto",color:"#94a3b8",textAlign:"center"}}>End of list — {list.length} of 120 patients shown</div>
      </PBBody>
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
  const [drawerRow, setDrawerRow] = useAUD(null);
  const [statusFilter, setStatusFilter] = useAUD(null);
  const [atFilter, setAtFilter] = useAUD(null);
  const [searchQ, setSearchQ] = useAUD("");
  const [fieldFilters, setFieldFilters] = useAUD([]);
  const [reviewedSet, setReviewedSet] = useAUD({});
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
      <PBFilterBar chips={chips} filterFields={PB_FILTER_FIELDS} filterRows={pbRows} fieldFilters={fieldFilters} onFieldFilters={setFieldFilters}
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
function pbIcon(p){ const R=(typeof window!=="undefined"&&window.__resources)||{}; const k={"icons/pb-met-ai.svg":"pbMetAi","icons/pb-met-user.svg":"pbMetUser","icons/pb-unmet-ai.svg":"pbUnmetAi","icons/pb-edit.svg":"pbEdit","icons/pb-tag-met.svg":"pbTagMet","icons/pb-tag-not-met.svg":"pbTagNotMet","icons/pb-tag-met-override.svg":"pbTagMetOverride"}[p]; return (k&&R[k])||p; }

const PB_DOCS = {
  election:  { key:"election",  label:"Hospice Election Form" },
  discharge: { key:"discharge", label:"Discharge Summary" },
  cti:       { key:"cti",       label:"Certification of Terminal Illness" },
  poc:       { key:"poc",       label:"Initial Plan of Care" },
};

// Field-level content of the two sample source documents. Every value an
// indicator is evaluated against lives here, so the comparison strip and the
// document highlight always read from the same place.
const PB_DOC_FIELDS = {
  election: {
    formId:        { label:"Form",                              value:"Hospice Election Statement \u2014 Banking form 10-1314" },
    patientName:   { label:"Patient Name",                      value:"Margaret A. Whitfield" },
    mrn:           { label:"Medical Record No.",                value:"B6789012345923" },
    dob:           { label:"Date of Birth",                     value:"03/14/1948" },
    statementDate: { label:"Election Statement Signed On",      value:"04/28/2025" },
    effectiveDate: { label:"Effective Date of Election",        value:"04/26/2025" },
    firstDay:      { label:"First Day of Hospice Care",         value:"04/29/2025" },
    benefitPeriod: { label:"Benefit Period",                    value:"04/29/2025 \u2013 07/27/2025" },
    attending:     { label:"Elected Attending Physician",       value:"Alan Reyes, MD \u2014 NPI 1487302956" },
    patientSig:    { label:"Patient / Representative Signature", value:"Margaret A. Whitfield" },
    sigDate:       { label:"Signature Date",                    value:"04/28/2025" },
    eobRequest:    { label:"EOB Requested On",                  value:"05/01/2025" },
  },
  cti: {
    title:        { label:"Document",                        value:"Certification of Terminal Illness (CTI)" },
    patientName:  { label:"Patient Name",                    value:"Margaret A. Whitfield" },
    period:       { label:"Certification Period",            value:"04/29/2025 \u2013 07/27/2025" },
    prognosis:    { label:"Prognosis Statement",             value:"Life expectancy of 6 months or less" },
    certifying:   { label:"Certifying Physician",            value:"Alan Reyes, MD \u2014 NPI 1487302956" },
    signDate:     { label:"Signature Date",                  value:"04/30/2025" },
    narrativeAtt: { label:"Narrative Attached",              value:"No" },
  },
  poc: {
    title:        { label:"Document",                        value:"Initial Hospice Plan of Care" },
    patientName:  { label:"Patient Name",                    value:"Margaret A. Whitfield" },
    startDate:    { label:"Plan Start Date",                 value:"04/29/2025" },
    attending:    { label:"Attending Physician of Record",   value:"Alan Reyes, MD" },
    ctiNoted:     { label:"Separate Hospice CTI Noted",      value:"Yes \u2014 recorded 04/30/2025" },
    siaPlanned:   { label:"SIA Units Planned",               value:"12 units" },
    reviewed:     { label:"IDG Review Date",                 value:"05/02/2025" },
  },
  discharge: {
    facility:       { label:"Facility",                          value:"Mercy Regional Medical Center" },
    admit:          { label:"Admitted",                          value:"04/19/2025" },
    discharged:     { label:"Discharged",                        value:"04/26/2025" },
    diagnosis:      { label:"Principal Diagnosis",               value:"End-stage congestive heart failure (I50.84)" },
    narrative:      { label:"Hospice Physician Narrative",       value:"Not present in the record" },
    prognosis:      { label:"Prognosis Statement",               value:"Guarded \u2014 life expectancy not stated" },
    ctiPhysician:   { label:"CTI Signed By",                     value:"Alan Reyes, MD \u2014 NPI 1487302956" },
    ctiSignDate:    { label:"CTI Signature Date",                value:"04/30/2025" },
    f2fDate:        { label:"Face-to-Face Encounter Date",       value:"04/22/2025" },
    recertDate:     { label:"Physician Recertification Date",    value:"04/30/2025" },
    attendingChange:{ label:"Change in Designated Attending Physician Form", value:"Not on file" },
    sia:            { label:"SIA Units Billed",                  value:"12 units (matches plan of care)" },
  },
};
function pbFoundValue(row){
  const ev = pbEvidenceFor(row);
  const src = (ev && ev.sources && ev.sources[0]) || null;
  return src ? src.value : row.value;
}
function pbField(doc, key){ const f = (PB_DOC_FIELDS[doc]||{})[key]; return f ? { doc, key, label:f.label, value:f.value } : null; }

// How each indicator was decided: the rule, the field(s) it was read from, and
// a short plain-language account of the comparison.
const PB_EVIDENCE = {
  "Effective Date of election>=1st day of Hospice care": {
    rule: "Effective Date of Election \u2265 First Day of Hospice Care",
    sources: [["election","effectiveDate"],["election","firstDay"]],
    summary: [
      "Election form reads an effective date of 04/26/2025; the same form records the first day of hospice care as 04/29/2025.",
      "The election therefore takes effect 3 days before care began, so the rule fails.",
      "Correct the effective date to 04/29/2025 or later, or re-date the election statement.",
    ],
  },
  "Undulicated hospice physician narrative present": {
    rule: "An original, unduplicated physician narrative with a 6-month-or-less prognosis must be on file",
    sources: [["discharge","narrative"],["discharge","prognosis"]],
    summary: [
      "No physician narrative was found anywhere in the discharge summary.",
      "The prognosis statement that is present reads \u201cGuarded\u201d and states no life expectancy, so it cannot substitute for the narrative.",
      "Obtain a signed narrative stating a life expectancy of 6 months or less.",
    ],
  },
  "Change in Designated attending physician form present": {
    rule: "A completed Change in Designated Attending Physician form must be attached when the attending changes",
    sources: [["discharge","attendingChange"],["election","attending"]],
    summary: [
      "The chart shows an attending physician elected on the election form, but the change form is marked \u201cNot on file.\u201d",
      "Because a change was recorded during the benefit period, the form is required and its absence fails the rule.",
    ],
  },
  "EOB requested 5 days oe greater after effective date": {
    rule: "EOB request date minus Effective Date of Election \u2265 5 days",
    sources: [["election","effectiveDate"],["election","eobRequest"]],
    summary: [
      "Effective date of election is 04/26/2025 and the EOB was requested on 05/01/2025 \u2014 a 5-day gap.",
      "The indicator flags requests at or beyond the 5-day mark, so this row is reported as unmet for review.",
    ],
  },
  "Hospice Election Form is present": {
    rule: "A Hospice Election Statement must be present in the record",
    sources: [["election","formId"],["election","patientName"]],
    summary: [
      "Banking form 10-1314 was located in the chart and reads as a hospice election statement.",
      "It is filed under the same patient as the claim, so the rule is met.",
    ],
  },
  "Patient Name is completed on the election form.": {
    rule: "Patient Name must be completed and match the patient on the claim",
    sources: [["election","patientName"],["election","mrn"]],
    summary: [
      "Election form carries \u201cMargaret A. Whitfield\u201d with medical record number B6789012345923.",
      "Both values match the claim header exactly, so the rule is met.",
    ],
  },
  "Patient/Authorized signature present": {
    rule: "Patient or authorized representative signature and date must both be present",
    sources: [["election","patientSig"],["election","sigDate"]],
    summary: [
      "A patient signature is present and dated 04/28/2025 on the election form.",
      "Signature and date are both complete, so the rule is met.",
    ],
  },
  "Attending Physician name is complete in election form.": {
    rule: "Elected attending physician must be named on the election form",
    sources: [["election","attending"],["discharge","ctiPhysician"]],
    summary: [
      "Election form names Alan Reyes, MD (NPI 1487302956) as the elected attending.",
      "The discharge summary lists the same physician on the CTI, so the two documents agree.",
    ],
  },
  "CTI and Narrative signed and dated by the same physician": {
    rule: "The narrative and the CTI must be signed and dated by the same physician",
    sources: [["discharge","ctiPhysician"],["discharge","ctiSignDate"]],
    summary: [
      "CTI is signed by Alan Reyes, MD on 04/30/2025.",
      "The same physician and date appear on the narrative block, so the signatures agree.",
    ],
  },
  "F2F before physician recert": {
    rule: "Face-to-face encounter date must fall before the physician recertification date",
    sources: [["discharge","f2fDate"],["discharge","recertDate"]],
    summary: [
      "Face-to-face encounter is recorded on 04/22/2025; recertification is signed 04/30/2025.",
      "The encounter precedes recertification by 8 days, so the rule is met.",
    ],
  },
  "CTI requirements complete and signed timely": {
    rule: "CTI must be complete and signed within the required timeframe",
    sources: [["discharge","ctiSignDate"],["election","firstDay"]],
    summary: [
      "Hospice care began 04/29/2025 and the CTI was signed 04/30/2025 \u2014 inside the allowed window.",
      "All required CTI elements are completed, so the rule is met.",
    ],
  },
  "Initial or Recertification CTI has correct benefit period dates.": {
    rule: "CTI benefit period must align with the election period on file",
    sources: [["election","benefitPeriod"],["discharge","ctiSignDate"]],
    summary: [
      "Election form records a benefit period of 04/29/2025 \u2013 07/27/2025.",
      "The CTI signed 04/30/2025 falls inside that period and cites the same dates, so the rule is met.",
    ],
  },
  "SIA billable units are appropriate": {
    rule: "SIA billable units must match the plan of care",
    sources: [["discharge","sia"],["election","benefitPeriod"]],
    summary: [
      "12 SIA units are billed and the discharge summary confirms they match the plan of care.",
      "Units fall inside the active benefit period, so the rule is met.",
    ],
  },
};

// Anything without a hand-written entry still gets a comparison strip, built
// from a field of each document the indicator is linked to.
function pbEvidenceFor(row) {
  if (!row) return null;
  const met = row.matches === "Met";
  const e = PB_EVIDENCE[row.indicator];
  if (e) return { rule:e.rule, summary:e.summary, met, sources:e.sources.map(p=>pbField(p[0],p[1])).filter(Boolean) };
  const keys = (row.docs||[]).map(d => {
    const ks = Object.keys(PB_DOC_FIELDS[d]||{});
    return pbField(d, ks[1] || ks[0]);
  }).filter(Boolean);
  const read = keys.map(k => ((PB_DOCS[k.doc]||{}).label) + " reads \u201c" + k.value + "\u201d for " + k.label.toLowerCase() + ".").join(" ");
  return {
    rule: row.value,
    sources: keys,
    met,
    summary: keys.length
      ? [read, met ? "The values agree with the rule as written, so the indicator is met."
                   : "The values read from the source do not satisfy the rule, so the indicator is unmet."]
      : ["No source document is linked to this indicator, so nothing could be compared automatically."],
  };
}

// Fields the selected indicator was read from \u2014 drives the document highlight.
function pbHighlightFields(indicator, groups) {
  if (!indicator) return {};
  let row = null;
  (groups || PB_AUDIT_GROUPS).forEach(g => g.rows.forEach(r => { if (r.indicator === indicator && !row) row = r; }));
  const ev = pbEvidenceFor(row || { indicator, docs:[], matches:"Met" });
  const out = {};
  (ev.sources||[]).forEach((f,i) => { out[f.doc+"."+f.key] = i+1; });
  return out;
}
// Sample source documents. Field values come from PB_DOC_FIELDS, so the page
// and the comparison strip can never disagree; fields the selected indicator
// was read from are highlighted and numbered.
function PBDocField({ doc, k, highlight, block }) {
  const f = (PB_DOC_FIELDS[doc]||{})[k];
  if (!f) return null;
  const n = highlight && highlight[doc+"."+k];
  const hl = !!n;
  return (
    <div style={{position:"relative",display:block?"block":"grid",gridTemplateColumns:block?undefined:"minmax(0,150px) minmax(0,1fr)",gap:block?4:12,alignItems:"baseline",padding:hl?"5px 8px":"5px 0",margin:hl?"0 -8px":0,borderRadius:hl?4:0,background:hl?"#FFF6D6":"transparent",outline:hl?"1.5px solid #E2A700":"none"}}>
      <div style={{font:"400 9.5px/13px Roboto",color:"#7a8493",textTransform:"uppercase",letterSpacing:".04em"}}>{f.label}</div>
      <div style={{font:"500 11.5px/16px Roboto",color:"#1a1a1a",borderBottom:"1px solid #d5dae1",paddingBottom:2,display:"flex",alignItems:"center",gap:8}}>
        <span>{f.value}</span>
        {hl && <span style={{marginLeft:"auto",flexShrink:0,background:"#E2A700",color:"#fff",borderRadius:20,padding:"1px 7px",font:"600 9px/13px Roboto",whiteSpace:"nowrap"}}>Read for this check — {n}</span>}
      </div>
    </div>
  );
}
function PBDocHeading({ children }) {
  return <div style={{font:"600 10px/14px Roboto",color:"#334155",letterSpacing:".08em",textTransform:"uppercase",borderBottom:"1.5px solid #334155",paddingBottom:4,marginTop:18,marginBottom:8}}>{children}</div>;
}
function PBElectionSheet({ highlight }) {
  return (
    <div>
      <div style={{textAlign:"center",borderBottom:"2px solid #1a1a1a",paddingBottom:10}}>
        <div style={{font:"600 9.5px/13px Roboto",color:"#64748b",letterSpacing:".14em"}}>WELLSKY HOSPICE OF THE MIDWEST</div>
        <div style={{font:"700 15px/20px Roboto",color:"#111",marginTop:4}}>HOSPICE ELECTION STATEMENT</div>
        <div style={{font:"400 9.5px/13px Roboto",color:"#64748b",marginTop:2}}>Banking form 10-1314 · Medicare Hospice Benefit · Page 1 of 1</div>
      </div>
      <PBDocHeading>Section A — Patient Identification</PBDocHeading>
      <PBDocField doc="election" k="patientName" highlight={highlight} />
      <PBDocField doc="election" k="mrn" highlight={highlight} />
      <PBDocField doc="election" k="dob" highlight={highlight} />
      <PBDocHeading>Section B — Election of Hospice Care</PBDocHeading>
      <div style={{font:"400 10.5px/16px Roboto",color:"#3f4855",marginBottom:8}}>I elect to receive Medicare-covered hospice care and understand that in electing hospice I waive Medicare coverage for treatment of the terminal illness other than that provided by the designated hospice.</div>
      <PBDocField doc="election" k="statementDate" highlight={highlight} />
      <PBDocField doc="election" k="effectiveDate" highlight={highlight} />
      <PBDocField doc="election" k="firstDay" highlight={highlight} />
      <PBDocField doc="election" k="benefitPeriod" highlight={highlight} />
      <PBDocHeading>Section C — Designated Attending Physician</PBDocHeading>
      <PBDocField doc="election" k="attending" highlight={highlight} />
      <PBDocHeading>Section D — Signatures</PBDocHeading>
      <PBDocField doc="election" k="patientSig" highlight={highlight} />
      <PBDocField doc="election" k="sigDate" highlight={highlight} />
      <PBDocHeading>Section E — Beneficiary Notices</PBDocHeading>
      <PBDocField doc="election" k="eobRequest" highlight={highlight} />
      <PBDocField doc="election" k="formId" highlight={highlight} />
      <div style={{marginTop:22,paddingTop:8,borderTop:"1px solid #d5dae1",font:"400 9px/13px Roboto",color:"#94a3b8"}}>Retain the original in the medical record. Form 10-1314 (rev. 01/2024).</div>
    </div>
  );
}
function PBDischargeSheet({ highlight }) {
  const missing = highlight && highlight["discharge.narrative"];
  return (
    <div>
      <div style={{borderBottom:"2px solid #1a1a1a",paddingBottom:10}}>
        <div style={{font:"700 14px/19px Roboto",color:"#111"}}>DISCHARGE SUMMARY</div>
        <div style={{font:"400 9.5px/13px Roboto",color:"#64748b",marginTop:2}}>Confidential medical record · Page 1 of 1</div>
      </div>
      <PBDocHeading>Encounter</PBDocHeading>
      <PBDocField doc="discharge" k="facility" highlight={highlight} />
      <PBDocField doc="discharge" k="admit" highlight={highlight} />
      <PBDocField doc="discharge" k="discharged" highlight={highlight} />
      <PBDocField doc="discharge" k="diagnosis" highlight={highlight} />
      <PBDocHeading>Hospital Course</PBDocHeading>
      <div style={{font:"400 10.5px/16px Roboto",color:"#3f4855"}}>Patient admitted with decompensated heart failure and progressive functional decline. Diuresis was optimised without sustained improvement in ejection fraction. Goals-of-care discussion held with the patient and daughter on 04/24/2025; comfort-focused care elected and hospice referral placed prior to discharge.</div>
      <PBDocHeading>Physician Narrative</PBDocHeading>
      <div style={{position:"relative",padding:missing?"8px":"8px 0",margin:missing?"0 -8px":0,borderRadius:missing?4:0,background:missing?"#FFF6D6":"transparent",outline:missing?"1.5px solid #E2A700":"none"}}>
        <div style={{border:"1px dashed #c8cfd8",borderRadius:4,padding:"14px 12px",textAlign:"center",font:"400 10.5px/15px Roboto",color:"#94a3b8",background:"#fbfcfd"}}>[ This section of the form was left blank — no narrative text was recorded ]</div>
        {missing && <span style={{position:"absolute",top:-9,right:6,background:"#E2A700",color:"#fff",borderRadius:20,padding:"1px 7px",font:"600 9px/13px Roboto"}}>Read for this check — {missing}</span>}
      </div>
      <div style={{marginTop:8}}><PBDocField doc="discharge" k="prognosis" highlight={highlight} /></div>
      <PBDocHeading>Certification of Terminal Illness</PBDocHeading>
      <PBDocField doc="discharge" k="ctiPhysician" highlight={highlight} />
      <PBDocField doc="discharge" k="ctiSignDate" highlight={highlight} />
      <PBDocField doc="discharge" k="f2fDate" highlight={highlight} />
      <PBDocField doc="discharge" k="recertDate" highlight={highlight} />
      <PBDocHeading>Attending Physician & Billing</PBDocHeading>
      <PBDocField doc="discharge" k="attendingChange" highlight={highlight} />
      <PBDocField doc="discharge" k="sia" highlight={highlight} />
      <div style={{marginTop:22,paddingTop:8,borderTop:"1px solid #d5dae1",font:"400 9px/13px Roboto",color:"#94a3b8"}}>Electronically signed by Alan Reyes, MD on 04/30/2025 at 3:12 PM.</div>
    </div>
  );
}
function PBGenericSheet({ docKey, highlight }) {
  const fields = PB_DOC_FIELDS[docKey] || {};
  const title = (fields.title && fields.title.value) || (PB_DOCS[docKey]||{}).label || "Document";
  return (
    <div>
      <div style={{borderBottom:"2px solid #1a1a1a",paddingBottom:10}}>
        <div style={{font:"700 14px/19px Roboto",color:"#111",textTransform:"uppercase"}}>{title}</div>
        <div style={{font:"400 9.5px/13px Roboto",color:"#64748b",marginTop:2}}>Confidential medical record \u00b7 Page 1 of 1</div>
      </div>
      <PBDocHeading>Recorded Values</PBDocHeading>
      {Object.keys(fields).filter(k=>k!=="title").map(k=>(<PBDocField key={k} doc={docKey} k={k} highlight={highlight} />))}
      <div style={{marginTop:22,paddingTop:8,borderTop:"1px solid #d5dae1",font:"400 9px/13px Roboto",color:"#94a3b8"}}>Electronically signed by Alan Reyes, MD on 04/30/2025.</div>
    </div>
  );
}
function PBDocSheet({ docKey, label, scale, highlight }) {
  return (
    <div style={{width:(100/scale)+"%",transform:"scale("+scale+")",transformOrigin:"top left",padding:"30px 34px 34px",boxSizing:"border-box"}}>
      {docKey === "discharge" ? <PBDischargeSheet highlight={highlight} />
        : docKey === "election" ? <PBElectionSheet highlight={highlight} />
        : <PBGenericSheet docKey={docKey} highlight={highlight} />}
    </div>
  );
}
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

// Same indicators, regrouped by the source document they were read from. A
// criterion backed by two documents appears under each — so an auditor working
// one document sees every criterion it has to satisfy, whatever the role.
function pbGroupByDocument(groups) {
  const buckets = new Map();
  groups.forEach(g => g.rows.forEach(r => {
    (r.docs && r.docs.length ? r.docs : ["unlinked"]).forEach(dk => {
      if (!buckets.has(dk)) buckets.set(dk, []);
      buckets.get(dk).push({ ...r, team: g.key });
    });
  }));
  return [...buckets.entries()].map(([dk, rows]) => ({
    key: dk,
    label: (PB_DOCS[dk] && PB_DOCS[dk].label) || "Not linked to a document",
    rows,
  }));
}

const PB_ROW_GRID = "46px 1.15fr 1.35fr 56px 60px";
const PB_ROW_GRID_COMPACT = "0.92fr 1fr 44px 30px";

function PBMatchPill({ value, source }) {
  const met = value === "Met";
  const src = !met ? pbIcon("icons/pb-unmet-ai.svg") : source==="user" ? pbIcon("icons/pb-met-user.svg") : pbIcon("icons/pb-met-ai.svg");
  const title = value + (source==="user" ? " \u00b7 auditor reviewed" : " \u00b7 AI detected");
  return <img src={src} alt={value} title={title} style={{height:24,width:"auto",display:"block",objectFit:"contain"}} />;
}

// Short forms used by the selected-row strip — the long text stays in the log.
const PB_BRIEF = {
  "Effective Date of election>=1st day of Hospice care": { rule:"Effective date must not precede first day of care", note:"Effective 3 days before care began." },
  "Undulicated hospice physician narrative present":     { rule:"Signed narrative with 6-month prognosis required", note:"Narrative section left blank." },
  "Change in Designated attending physician form present":{ rule:"Change of attending form required on file", note:"Form not on file." },
  "EOB requested 5 days oe greater after effective date": { rule:"EOB request within 5 days of effective date", note:"Requested on day 5 — at the limit." },
  "Hospice Election Form is present":                     { rule:"Election statement must be in the record", note:"Form 10-1314 found for this patient." },
  "Patient Name is completed on the election form.":      { rule:"Patient name must match the claim", note:"Name and MRN match the claim." },
  "Patient/Authorized signature present":                 { rule:"Signature and date both required", note:"Both present." },
  "Attending Physician name is complete in election form.":{ rule:"Attending must be named on the election form", note:"Same physician on both documents." },
  "CTI and Narrative signed and dated by the same physician":{ rule:"Same physician must sign CTI and narrative", note:"Signatures agree." },
  "F2F before physician recert":                          { rule:"F2F encounter must precede recertification", note:"8 days earlier." },
  "CTI requirements complete and signed timely":          { rule:"CTI signed within the required window", note:"Signed 1 day after care began." },
  "Initial or Recertification CTI has correct benefit period dates.":{ rule:"CTI dates must match the election period", note:"Dates align." },
  "SIA billable units are appropriate":                   { rule:"SIA units must match the plan of care", note:"12 units, matches plan." },
};

// Merged row that opens under the selected indicator: the rule, what each
// source document actually said, and how the comparison came out.
function PBEvidenceStrip({ row, compact, onResolve, resolvedInfo, onEdit }) {
  const ev = pbEvidenceFor(row);
  if (!ev) return null;
  const brief = PB_BRIEF[row.indicator] || {};
  const met = ev.met;
  const accent = met ? "#2E9E4A" : "#C0392B";
  const G = "22px minmax(0,1.05fr) minmax(0,1fr) minmax(0,1fr)";
  const th = { font:"500 10px/14px Roboto", color:"#8a95a3", textTransform:"uppercase", letterSpacing:".04em" };
  const td = { font:"400 12px/17px Roboto", color:"#333", minWidth:0, overflow:"hidden", textOverflow:"ellipsis" };
  return (
    <div style={{borderBottom:"1px solid #eef1f5",background:"#F6F9FE",boxShadow:"inset 2px 0 0 #6C9BD8",padding:"11px 12px 12px"}}>
      <div style={{font:"400 12px/17px Roboto",color:"#475569",marginBottom:9}}>
        <span style={{color:"#94a3b8"}}>Rule · </span>{brief.rule || ev.rule}
      </div>
      <div style={{background:"#fff",border:"1px solid #e3eaf4",borderRadius:5,overflow:"hidden"}}>
        <div style={{display:"grid",gridTemplateColumns:G,gap:10,padding:"7px 12px",background:"#F5F7FA",borderBottom:"1px solid #e3eaf4"}}>
          <div style={th}>#</div><div style={th}>Source</div><div style={th}>Field</div><div style={th}>Value found</div>
        </div>
        {(ev.sources||[]).map((f,i)=>(
          <div key={i} style={{display:"grid",gridTemplateColumns:G,gap:10,padding:"8px 12px",borderTop:i?"1px solid #eaeff6":"none",alignItems:"baseline",background:"#fff"}}>
            <div><span style={{background:"#E2A700",color:"#fff",borderRadius:20,width:14,height:14,display:"inline-flex",alignItems:"center",justifyContent:"center",font:"600 9px/1 Roboto"}}>{i+1}</span></div>
            <div style={{...td,color:"#475569"}}>{(PB_DOCS[f.doc]||{}).label}</div>
            <div style={{...td,color:"#64748b"}}>{f.label}</div>
            <div style={{...td,fontWeight:500}}>{f.value}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginTop:9}}>
        <span style={{background:met?"#EFFCEF":"#FFEDEC",border:"1px solid "+(met?"#c7e8c9":"#f6c9c4"),color:accent,borderRadius:4,padding:"2px 8px",font:"600 10px/15px Roboto"}}>{met?"Matches":"Does not match"}</span>
        <span style={{font:"400 12px/17px Roboto",color:"#475569",minWidth:0,flex:met?"1 1 auto":undefined}}>{brief.note || (ev.summary||[])[(ev.summary||[]).length-1]}</span>
        {met && (
          <button type="button" onClick={(e)=>{ e.stopPropagation(); onEdit && onEdit(); }} style={{marginLeft:"auto",flexShrink:0,display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #d8dee6",borderRadius:4,padding:"5px 12px",font:"500 12px/16px Roboto",color:"#334155",cursor:"pointer"}}>
            <img src={pbIcon("icons/pb-edit.svg")} alt="" style={{width:13,height:"auto",display:"block"}} />
            Edit
          </button>
        )}
        {!met && (resolvedInfo
          ? <span style={{marginLeft:"auto",font:"400 11px/15px Roboto",color:"#2E9E4A",whiteSpace:"nowrap"}}>Resolved by {resolvedInfo.by} · {resolvedInfo.at}</span>
          : <span style={{marginLeft:"auto",flexShrink:0,display:"flex",alignItems:"center",gap:8}}>
              <button type="button" onClick={(e)=>{ e.stopPropagation(); onEdit && onEdit(); }} style={{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #d8dee6",borderRadius:4,padding:"5px 12px",font:"500 12px/16px Roboto",color:"#334155",cursor:"pointer"}}>
                <img src={pbIcon("icons/pb-edit.svg")} alt="" style={{width:13,height:"auto",display:"block"}} />
                Edit
              </button>
              <button type="button" onClick={(e)=>{ e.stopPropagation(); onResolve && onResolve(e); }} style={{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #9ecfa6",borderRadius:4,padding:"5px 12px",font:"500 12px/16px Roboto",color:"#2E7D3A",cursor:"pointer"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 21H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2v10z" fill="#2E7D3A"/><path d="M8 11l3.6-7.2A1.6 1.6 0 0 1 14.6 5l-.7 4.2h4.6A2 2 0 0 1 20.4 12l-1.5 7.4A2 2 0 0 1 17 21H8V11z" fill="#2E7D3A"/></svg>
                Mark as Resolved
              </button>
            </span>)}
      </div>
    </div>
  );
}
function PBResolvedTag({ info }) {
  const [hover, setHover] = useAUD(false);
  if (!info) return null;
  return (
    <span onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{position:"relative",display:"inline-flex",alignItems:"center",gap:4,flexShrink:0,background:"#EFFCEF",border:"1px solid #c7e8c9",color:"#2E9E4A",borderRadius:20,padding:"1px 7px 1px 5px",font:"600 10px/14px Roboto",whiteSpace:"nowrap"}}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}><path d="M6 21H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2v10z" fill="#2E9E4A"/><path d="M8 11l3.6-7.2A1.6 1.6 0 0 1 14.6 5l-.7 4.2h4.6A2 2 0 0 1 20.4 12l-1.5 7.4A2 2 0 0 1 17 21H8V11z" fill="#2E9E4A"/></svg>
      Resolved
      {hover && (
        <span style={{position:"absolute",bottom:"calc(100% + 7px)",left:0,background:"#1f2937",color:"#fff",borderRadius:5,padding:"7px 10px",font:"400 11px/16px Roboto",whiteSpace:"nowrap",boxShadow:"0 6px 18px rgba(15,23,42,.24)",zIndex:40}}>
          Resolved by {info.by} · {info.at}
          {info.note && <span style={{display:"block",color:"#cbd5e1",maxWidth:280,whiteSpace:"normal"}}>{info.note}</span>}
        </span>
      )}
    </span>
  );
}
function pbRoleColor(k){ return k==="TC" ? "#1677FF" : k==="DSC" ? "#0EA5A5" : k==="Billing" ? "#B8860B" : "#64748b"; }
function PBAuditGroup({ group, showOnlyUnmet, reviewed, onToggleReviewed, onRequestReview, onEdit, editRow, compact, selected, onSelect, defaultOpen, resolved, onRequestResolve }) {
  const [open, setOpen] = useAUD(defaultOpen !== undefined ? defaultOpen : group.key === PB_USER_TEAM);
  const rows = showOnlyUnmet ? group.rows.filter(r=>r.matches==="Unmet") : group.rows;
  const unmet = group.rows.filter(r=>r.matches==="Unmet").length;
  if (showOnlyUnmet && rows.length===0) return null;
  const teamColor = pbRoleColor(group.key);
  return (
    <div>
      <div onClick={()=>{ if(!editRow) setOpen(v=>!v); }} style={{opacity:editRow?0.18:1,pointerEvents:editRow?"none":"auto",display:"flex",alignItems:"center",gap:10,height:52,background:"#F5F7FA",borderTop:"1px solid #d9dee5",borderBottom:"1px solid #d9dee5",padding:"0 14px",cursor:"pointer",userSelect:"none"}}>
        <span style={{fontSize:11,color:"#666673",display:"inline-block",transform:open?"none":"rotate(-90deg)",transition:"transform .15s"}}>▼</span>
        <span style={{font:"600 14px/18px Inter, Roboto",color:"#333340"}}>{group.label}</span>
        <span style={{background:"#fff",border:"1px solid #d9dee5",borderRadius:20,padding:"3px 10px",font:"500 11px/15px Roboto",color:"#475569"}}>{group.rows.length - unmet} met</span>
        {unmet > 0 && <span style={{background:"#FFEDEC",border:"1px solid #f6c9c4",borderRadius:20,padding:"3px 10px",font:"500 11px/15px Roboto",color:"#D6392C"}}>{unmet} unmet</span>}
      </div>
      {open && rows.map((r,i)=>{
        const isSel = selected && selected.indicator === r.indicator;
        const isEditing = editRow && editRow.indicator === r.indicator;
        const dimmed = editRow && !isEditing;
        return (
          <React.Fragment key={i}>
          <div onClick={()=>{ if(!dimmed) onSelect(r); }} style={{display:"grid",gridTemplateColumns:compact?PB_ROW_GRID_COMPACT:PB_ROW_GRID,alignItems:"center",gap:compact?14:12,padding:compact?"14px 10px":"14px 10px",borderBottom:"1px solid #eef1f5",cursor:dimmed?"not-allowed":"pointer",background:isEditing?"#F5F9FF":(isSel&&!dimmed?"#EBF3FD":"#fff"),boxShadow:isEditing?"0 -10px 24px rgba(15,23,42,.10), 0 2px 6px rgba(15,23,42,.05)":(isSel&&!dimmed?"inset 2px 0 0 #6C9BD8, 0 1px 6px rgba(22,119,255,.10)":"none"),borderRadius:isEditing?"10px 10px 0 0":0,margin:isEditing?(compact?"8px 8px 0":"10px 14px 0"):0,border:isEditing?"1px solid #e6ebf1":"none",borderBottom:isEditing?"none":undefined,position:isEditing?"relative":"static",zIndex:isEditing?6:"auto",transition:"opacity .16s ease, background .16s ease, margin .16s ease",opacity:dimmed?0.18:1,pointerEvents:dimmed?"none":"auto",userSelect:dimmed?"none":"auto"}}>
            {!compact && <div style={{font:"600 12px/16px Roboto",color:pbRoleColor(r.team || group.key)}}>{r.team || group.key}</div>}
            <div style={{font:(isSel&&!dimmed?"500":"400")+" 13px/18px Roboto",color:isSel&&!dimmed?"#0B3E7F":"#333",display:"flex",alignItems:"center",gap:7,minWidth:0}}>
              <span style={{minWidth:0}}>{r.indicator}</span>
              {(resolved||{})[r.indicator] && <PBResolvedTag info={resolved[r.indicator]} />}
            </div>
            <div style={{font:(isSel&&!dimmed?"500":"400")+" 13px/18px Roboto",color:isSel&&!dimmed?"#0B3E7F":"#333"}}>{pbFoundValue(r)}</div>
            <div style={{display:"flex",justifyContent:"center"}}><PBMatchPill value={r.matches} source={r.reviewSource} /></div>
            <div style={{display:"flex",justifyContent:"center"}} onClick={(e)=>e.stopPropagation()}>
              {!isEditing && <input id={"pbchk-"+group.key+"-"+i} type="checkbox" checked={!!reviewed[group.key+"-"+i]}
                onChange={()=>onToggleReviewed(group.key+"-"+i)}
                style={{width:15,height:15,accentColor:"#1677FF",cursor:"pointer"}} />}
            </div>
          </div>
          {isSel && !dimmed && !isEditing && <PBEvidenceStrip row={r} compact={compact} resolvedInfo={(resolved||{})[r.indicator]} onEdit={()=>onEdit(r)} onResolve={(e)=>{ const rect=e.currentTarget.getBoundingClientRect(); onRequestResolve && onRequestResolve(r, { x:rect.left+rect.width/2, y:rect.top }); }} />}
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

function PBAuditLogTable({ indicator, onClear, groups, extra }) {
  const all = (extra||[]).concat(pbAuditLog(groups));
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
            <div style={{color:(l.to==="Met"||l.to==="Resolved")?"#2E9E4A":"#D6392C",fontWeight:500}}>{l.to}</div>
            <div>{l.by}</div>
            <div style={{color:"#475569"}}>{l.note}</div>
            <div style={{color:"#94a3b8",whiteSpace:"nowrap"}}>{l.at}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PBDocumentViewer({ docs, indicator, onClearFilter, groups, logExtra }) {
  const highlight = pbHighlightFields(indicator, groups);
  const [tab, setTab] = useAUD(0);
  const [zooms, setZooms] = useAUD({});
  // Auditors can swap either pane for any other document in the chart.
  const linked = docs.map(d=>d.key).join("|");
  const [picked, setPicked] = useAUD(null);
  React.useEffect(()=>{ setPicked(null); }, [linked]);
  const shown = (picked || docs.map(d=>d.key)).map(k=>PB_DOCS[k]).filter(Boolean);
  const swap = (i, key)=>setPicked(p => { const next = (p || docs.map(d=>d.key)).slice(); next[i] = key; return next; });
  const single = shown.length === 1;
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
          <div className="pb-thin-scroll" style={{flex:1,overflow:"auto",padding:single?16:12,background:"#e9ebef"}}>
            <div style={{display:"grid",gridTemplateColumns:single?"minmax(0,1fr)":"1fr 1fr",gap:12,alignItems:"start",justifyContent:single?"center":"stretch",maxWidth:single?540:"none",margin:single?"0 auto":0}}>
              {shown.map((d,i)=>(
                <div key={i} style={{display:"flex",flexDirection:"column",minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,padding:"0 4px 10px"}}>
                    <span style={{position:"relative",display:"inline-flex",alignItems:"center",gap:5,minWidth:0}} title="Choose the document to compare">
                      <span style={{font:"500 13px/18px Roboto",color:"#1a1a1a",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{d.label}</span>
                      <span style={{fontSize:14,lineHeight:1,color:"#5b6674",flexShrink:0}}>▾</span>
                      <select value={d.key} onChange={e=>swap(i, e.target.value)} style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",border:"none"}}>
                        {Object.keys(PB_DOCS).map(k=>(<option key={k} value={k}>{PB_DOCS[k].label}</option>))}
                      </select>
                    </span>
                    <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
                      <button type="button" onClick={()=>setZoom(i, z=>z-0.25)} style={zoomBtn}>−</button>
                      <span style={{font:"400 12px/16px Roboto",color:"#334155",minWidth:40,textAlign:"center"}}>{Math.round(zoomOf(i)*100)}%</span>
                      <button type="button" onClick={()=>setZoom(i, z=>z+0.25)} style={zoomBtn}>+</button>
                    </div>
                  </div>
                  <div className="pb-thin-scroll" style={{background:"#fff",boxShadow:"0 3px 10px rgba(0,0,0,.12)",overflow:"auto",aspectRatio:"1 / 1.4142",maxHeight:"72vh",width:"100%"}}>
                    <PBDocSheet docKey={d.key} label={d.label} scale={zoomOf(i)} highlight={highlight} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        <PBAuditLogTable indicator={indicator} onClear={onClearFilter} groups={groups} extra={logExtra} />
      )}
    </React.Fragment>
  );
}

function PBEditPanel({ row, onClose, inline, compact }) {
  const twoDocs = (row.docs || []).length > 1;
  const [noRef, setNoRef] = useAUD(false);
  const [status, setStatus] = useAUD("");
  const [notes, setNotes] = useAUD("");
  const [statusOpen, setStatusOpen] = useAUD(false);
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
  const [showOnlyUnmet, setShowOnlyUnmet] = useAUD(false);
  const [reviewed, setReviewed] = useAUD({});
  const [selected, setSelected] = useAUD(null);
  const [reviewPrompt, setReviewPrompt] = useAUD(null);
  const [editRow, setEditRow] = useAUD(null);
  const [changedDocs, setChangedDocs] = useAUD([]);
  const [resolveNote, setResolveNote] = useAUD("");
  const [resolvedMap, setResolvedMap] = useAUD({});
  const [shown, setShown] = useAUD(false);
  React.useEffect(()=>{ const t = requestAnimationFrame(()=>setShown(true)); return ()=>cancelAnimationFrame(t); }, []);
  const close = () => { setShown(false); setTimeout(()=>onClose&&onClose(), 260); };
  const toggleReviewed = (k)=>setReviewed(o=>({...o,[k]:!o[k]}));
  const stamp = ()=>{ const d=new Date(); const p=(n)=>String(n).padStart(2,"0"); const h=d.getHours(); return `${p(d.getMonth()+1)}/${p(d.getDate())}/${String(d.getFullYear()).slice(2)} ${p(h%12||12)}:${p(d.getMinutes())} ${h<12?"AM":"PM"}`; };
  const resolveRow = (row, note)=>setResolvedMap(m=>({ ...m, [row.indicator]: { by:"Fiona Gallagher", at:stamp(), note:(note||"").trim() } }));
  const activeDocs = selected ? (selected.docs||[]).map(k=>PB_DOCS[k]).filter(Boolean) : [];
  const compare = activeDocs.length > 1;
  const groups = pbGroupsFor(r);
  const totalUnmet = groups.reduce((n,g)=>n+g.rows.filter(x=>x.matches==="Unmet").length,0);
  const tcUnmet = groups.find(g=>g.key==="TC").rows.filter(x=>x.matches==="Unmet").length;
  const allMet = totalUnmet === 0;
  const [groupBy, setGroupBy] = useAUD("role");
  const shownGroups = groupBy === "document" ? pbGroupByDocument(groups) : groups;
  return (
    <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex"}}>
      <style>{".pb-thin-scroll{scrollbar-width:thin;scrollbar-color:#c3cbd6 transparent}.pb-thin-scroll::-webkit-scrollbar{width:3px;height:3px}.pb-thin-scroll::-webkit-scrollbar-track{background:transparent}.pb-thin-scroll::-webkit-scrollbar-thumb{background:#c3cbd6;border-radius:3px}.pb-thin-scroll::-webkit-scrollbar-corner{background:transparent}"}</style>
      <div onClick={close} style={{position:"absolute",inset:0,background:"rgba(15,23,42,.45)",opacity:shown?1:0,transition:"opacity .26s ease"}} />
      <div style={{position:"relative",marginLeft:"auto",width:"min(1875px, 98vw)",height:"100%",background:"#fff",display:"flex",flexDirection:"column",boxShadow:"-8px 0 30px rgba(0,0,0,.15)",transform:shown?"translateX(0)":"translateX(100%)",transition:"transform .3s cubic-bezier(.22,.61,.36,1)"}}>
        <div style={{height:72,boxShadow:"0 4px 4px rgba(0,0,0,0.06)",display:"flex",alignItems:"center",padding:"0 24px",flexShrink:0,gap:14}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#3F7EA1"/></svg>
          <span style={{font:"500 20px/24px Roboto",color:"rgba(0,0,0,.75)",textTransform:"capitalize"}}>{r.name || "Patient"} - {r.mrn}</span>
          <span style={{font:"500 20px/24px Roboto",color:"rgba(0,0,0,.75)",marginLeft:20}}>SOC : {r.soc}</span>
          <span style={{display:"inline-flex",alignItems:"center",gap:8,background:allMet?"#2E9E4A":"#D6392C",color:"#fff",borderRadius:20,padding:"6px 14px",font:"500 13px/16px Roboto",marginLeft:16,whiteSpace:"nowrap"}}>{allMet ? "✓ Pre-bill Requirement Met" : "✕ Pre-bill Requirement Unmet"}</span>
          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:11}}>
            <span style={{font:"400 16px/24px Roboto",color:"rgba(0,0,0,.75)"}}>Audit Date :</span>
            <span style={{display:"inline-flex",alignItems:"center",gap:8,borderRadius:6,boxShadow:"inset 0 0 0 1px #1677FF",padding:"2px 16px",font:"400 14px/22px Roboto",color:"#1677FF"}}>
              {r.auditDate || "07/18/25"}-Pre-Bill <span style={{fontSize:10}}>▾</span>
            </span>
            <span onClick={close} style={{cursor:"pointer",fontSize:22,color:"#333",marginLeft:14}}>✕</span>
          </div>
        </div>


        <div style={{flex:1,overflow:"hidden",display:"flex",padding:"16px 24px 24px",gap:24}}>
          <div style={{width:"50%",minWidth:420,maxWidth:760,display:"flex",flexDirection:"column",position:"relative",transition:"width .22s ease, min-width .22s ease"}}>
            <div style={{display:"flex",alignItems:"center",gap:14,paddingBottom:14,flexShrink:0}}>
              <span style={{background:allMet?"#EFFCEF":"#FFEDEC",color:allMet?"#2E9E4A":"#D6392C",border:`1px solid ${allMet?"#c7e8c9":"#f6c9c4"}`,borderRadius:5,padding:"6px 14px",font:"600 15px/20px Roboto",whiteSpace:"nowrap"}}>{allMet ? "0 Unmet overall" : `${totalUnmet} Unmet overall`}</span>
              <select value={groupBy} onChange={e=>setGroupBy(e.target.value)} style={{border:"1px solid #d8dee6",borderRadius:5,padding:"5px 8px",font:"400 12px/16px Roboto",color:"#0f172a",background:"#fff",outline:"none",cursor:"pointer",whiteSpace:"nowrap"}}>
                <option value="role">Group by Role</option>
                <option value="document">Group by Document</option>
              </select>
              <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:10}}>
                <span style={{font:"400 13px/18px Roboto",color:"#333"}}>Show Only Unmet</span>
                <span onClick={()=>setShowOnlyUnmet(v=>!v)} style={{width:36,height:20,borderRadius:10,background:showOnlyUnmet?"#1677FF":"#d1d5db",position:"relative",cursor:"pointer",transition:"background .15s",display:"inline-block",flexShrink:0}}>
                  <span style={{position:"absolute",top:2,left:showOnlyUnmet?18:2,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left .15s"}} />
                </span>
              </div>
            </div>
            <div className={editRow?"":"pb-thin-scroll"} style={{flex:1,minHeight:0,overflowY:editRow?"hidden":"auto",overflowX:"hidden",paddingRight:1}}>
              <div style={{border:"1px solid #e5e7eb",borderRadius:6,overflow:"hidden"}}>
              <div style={{display:"grid",gridTemplateColumns:PB_ROW_GRID,gap:12,padding:"10px 10px",font:"400 12px/16px Roboto",color:"rgba(0,0,0,.65)",background:"#fafbfc",borderBottom:"1px solid #e5e7eb",position:"sticky",top:0,zIndex:2,opacity:editRow?0.18:1,pointerEvents:editRow?"none":"auto",transition:"opacity .12s"}}>
                <div>Role</div><div>Audit Indicator</div><div>Audit Value</div>
                <div style={{textAlign:"center"}}>Matches</div>
                <div style={{textAlign:"center"}}>Edit</div>
                <div style={{textAlign:"center"}}>Review</div>
              </div>
              <div className="pb-thin-scroll" style={{flex:1,overflow:"auto"}}>
              {shownGroups.map((g,gi)=>(<PBAuditGroup key={groupBy+"-"+g.key} group={g} defaultOpen={groupBy==="document" ? gi===0 : undefined} showOnlyUnmet={showOnlyUnmet} reviewed={reviewed} onToggleReviewed={toggleReviewed} onRequestReview={(p)=>{ setReviewPrompt(p); setChangedDocs([]); setResolveNote(""); setSelected(p.row); }} resolved={resolvedMap} onRequestResolve={(row, anchor)=>{ setReviewPrompt({ mode:"resolve", row, anchor, key:null }); setChangedDocs([]); setResolveNote(""); }} onEdit={(r)=>{ if(r) setSelected(r); setEditRow(r); }} editRow={editRow} compact={false} selected={selected} onSelect={setSelected} />))}
              </div>
              </div>
            </div>
          </div>

          <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0,background:"#f4f5f7",borderRadius:6,overflow:"hidden"}}>
            <PBDocumentViewer docs={activeDocs} indicator={selected ? selected.indicator : null} onClearFilter={()=>setSelected(null)} groups={groups}
              logExtra={Object.keys(resolvedMap).map(ind=>({ indicator:ind, value:"Resolution recorded", from:"Unmet", to:"Resolved", by:resolvedMap[ind].by, note:resolvedMap[ind].note || "Marked as resolved by auditor", at:resolvedMap[ind].at }))} />
          </div>
        </div>

        {reviewPrompt && (()=>{
          const isResolve = reviewPrompt.mode === "resolve";
          const promptDocs = (reviewPrompt.row.docs||[]).map(k=>PB_DOCS[k]).filter(Boolean);
          const multi = promptDocs.length > 1;
          const toggleDoc = (label)=>setChangedDocs(l=>l.includes(label)?l.filter(x=>x!==label):[...l,label]);
          const allSelected = changedDocs.length === promptDocs.length && promptDocs.length>0;
          return (
            <div style={{position:"fixed",left:Math.max(300, (reviewPrompt.anchor?reviewPrompt.anchor.x:600)),top:(reviewPrompt.anchor?reviewPrompt.anchor.y-14:200),transform:"translate(-50%, -100%)",background:"#fff",borderRadius:10,boxShadow:"0 12px 34px rgba(15,23,42,.22)",border:"1px solid #e2e8f0",padding:"16px 20px",display:"flex",flexDirection:"column",gap:12,zIndex:1200,width:560}}>
              <span style={{position:"absolute",bottom:-7,left:"50%",transform:"translateX(-50%) rotate(45deg)",width:12,height:12,background:"#fff",borderRight:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"}} />
              <div style={{display:"flex",alignItems:"flex-start",gap:10}}>
                <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:22,height:22,borderRadius:"50%",background:isResolve?"#EFFCEF":"#FFEDEC",color:isResolve?"#2E9E4A":"#D6392C",font:"600 12px/1 Roboto",flexShrink:0,marginTop:1}}>{isResolve?"✓":"!"}</span>
                <div style={{minWidth:0}}>
                  <div style={{font:"500 14px/19px Roboto",color:"#1a1a1a"}}>{isResolve ? "Mark this finding as resolved — was a document changed?" : "This finding is unmet — was a document changed?"}</div>
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
              {isResolve && (
                <div>
                  <div style={{font:"500 11px/15px Roboto",color:"#64748b",marginBottom:5}}>Resolution notes</div>
                  <textarea value={resolveNote} onChange={e=>setResolveNote(e.target.value)} placeholder="What was corrected, and where?" rows={3} style={{width:"100%",boxSizing:"border-box",resize:"vertical",border:"1px solid #d8dee6",borderRadius:5,padding:"8px 10px",font:"400 12px/17px Roboto",color:"#1a1a1a",outline:"none"}} />
                </div>
              )}
              <div style={{display:"flex",alignItems:"center",gap:10,justifyContent:"flex-end"}}>
                <span style={{marginRight:"auto",font:"400 11px/15px Roboto",color:"#94a3b8"}}>
                  {changedDocs.length ? `Marking ${changedDocs.length} document${changedDocs.length>1?"s":""} as changed` : "No document marked as changed"}
                </span>
                <button type="button" onClick={()=>{ setReviewPrompt(null); setChangedDocs([]); setResolveNote(""); }} style={{background:"#fff",border:"1px solid #d8dee6",borderRadius:4,padding:"7px 14px",font:"400 12px/16px Roboto",color:"#334155",cursor:"pointer"}}>Cancel</button>
                {isResolve
                  ? <button type="button" onClick={()=>{ resolveRow(reviewPrompt.row, resolveNote); setReviewPrompt(null); setChangedDocs([]); setResolveNote(""); }} style={{background:"#2E7D3A",border:"none",borderRadius:4,padding:"7px 16px",font:"500 12px/16px Roboto",color:"#fff",cursor:"pointer"}}>Mark as Resolved</button>
                  : <button type="button" onClick={()=>{ toggleReviewed(reviewPrompt.key); setReviewPrompt(null); setChangedDocs([]); }} style={{background:"#2563eb",border:"none",borderRadius:4,padding:"7px 16px",font:"500 12px/16px Roboto",color:"#fff",cursor:"pointer"}}>Mark as Reviewed</button>}
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
  const [review, setReview] = useAUD(false);
  const AutoLog = typeof window !== "undefined" && window.ERVAutomationLogView;
  return (
    <div>
      <WSSectionBand title="Pre-Bill Audit Center" subTabs={subTabs} activeSub={sub||0} onSub={onSub} showReview={true} review={review} onReview={()=>setReview(v=>!v)} />
      {(sub||0)===0
        ? <PreBillRequestView review={review} onExitReview={()=>setReview(false)} />
        : (AutoLog ? <AutoLog onRefClick={()=>{}} /> : <div style={{padding:60,textAlign:"center",color:"#94a3b8",font:"400 14px/20px Roboto"}}>Loading log…</div>)}
    </div>
  );
}

Object.assign(window, { F2FAuditSection, PreBillAuditSection, F2FAuditRequestView, PreBillRequestView });

})();
