import { TabItem } from './TabItem.jsx';

// figma node: 7:11415 .tabs__header (20 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "items=" + __venc(p.items) + '|' + "position=" + __venc(p.position);

export function TabsHeader(_p = {}) {
  const props = { ..._p, items: _p.items ?? "6", position: _p.position ?? "bottom" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <TabItem
        style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"top"}
        state={"default"}
      />
      <TabItem
        style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"top"}
        state={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <TabItem
        style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"top"}
        state={"default"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"top"} state={"default"} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <TabItem
        style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"bottom"}
        state={"default"}
      />
      <TabItem
        style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"bottom"}
        state={"default"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <TabItem
        style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"bottom"}
        state={"default"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 56,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"active"} />}</div>
      <div style={{
          position: "relative",
          width: 53,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TabItem showIcon={false} size={"default"} position={"bottom"} state={"default"} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"left"}
        state={"default"}
      />
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderRight: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderBottom: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      borderLeft: "1px solid var(--color-neutral-borders-colorbordersecondary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--size-padding-padding) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TabItem
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"active"}
      />
      <TabItem
        style={{ position: "relative", width: 101, flexShrink: 0 }}
        showIcon={false}
        size={"default"}
        position={"right"}
        state={"default"}
      />
    </div>
  );
  const __impls = {
    // figma: items=6, position=top
    "items=6|position=top": __body0,
    // figma: items=5, position=top
    "items=5|position=top": __body1,
    // figma: items=4, position=top
    "items=4|position=top": __body2,
    // figma: items=3, position=top
    "items=3|position=top": __body3,
    // figma: items=2, position=top
    "items=2|position=top": __body4,
    // figma: items=6, position=bottom
    "items=6|position=bottom": __body5,
    // figma: items=5, position=bottom
    "items=5|position=bottom": __body6,
    // figma: items=4, position=bottom
    "items=4|position=bottom": __body7,
    // figma: items=3, position=bottom
    "items=3|position=bottom": __body8,
    // figma: items=2, position=bottom
    "items=2|position=bottom": __body9,
    // figma: items=6, position=left
    "items=6|position=left": __body10,
    // figma: items=5, position=left
    "items=5|position=left": __body11,
    // figma: items=4, position=left
    "items=4|position=left": __body12,
    // figma: items=3, position=left
    "items=3|position=left": __body13,
    // figma: items=2, position=left
    "items=2|position=left": __body14,
    // figma: items=6, position=right
    "items=6|position=right": __body15,
    // figma: items=5, position=right
    "items=5|position=right": __body16,
    // figma: items=4, position=right
    "items=4|position=right": __body17,
    // figma: items=3, position=right
    "items=3|position=right": __body18,
    // figma: items=2, position=right
    "items=2|position=right": __body19,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default TabsHeader;
