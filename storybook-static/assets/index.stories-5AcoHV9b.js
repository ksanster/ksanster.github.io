import{j as c}from"./jsx-runtime-u17CrQMm.js";import{R as y}from"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";const t=[20,25,30,40,50,60,70,80,90,95],w={white:[{l:[100],c:0,h:0}],black:[{l:[0],c:0,h:0}],gray:[{l:t,c:0,h:0}],gold:[{l:t,c:50,h:85},{l:t,c:40,h:85}],brightGreen:[{l:t,c:90,h:140}],green:[{l:t,c:90,h:150},{l:t,c:40,h:150}],emerald:[{l:t,c:90,h:160}],red:[{l:t,c:90,h:30},{l:t,c:40,h:30}],darkOrange:[{l:t,c:90,h:40}],orange:[{l:t,c:90,h:65},{l:t,c:40,h:65}],yellow:[{l:t,c:90,h:75},{l:t,c:40,h:75}],lightBlue:[{l:t,c:90,h:210}],darkBlue:[{l:t,c:10,h:275}],electricBlue:[{l:t,c:90,h:258},{l:t,c:40,h:258}],blue:[{l:t,c:90,h:275},{l:t,c:40,h:275}],violet:[{l:t,c:90,h:295},{l:t,c:40,h:295}]},T=n=>n*Math.PI/180;function $(n,e,i){const r=T(i),a=e*Math.cos(r),s=e*Math.sin(r);return{L:n,a,b:s}}function R({L:n,a:e,b:i}){const r=n+.3963377774*e+.2158037573*i,a=n-.1055613458*e-.0638541728*i,s=n-.0894841775*e-1.291485548*i,o=r*r*r,l=a*a*a,d=s*s*s,h=4.0767416621*o-3.3077115913*l+.2309699292*d,p=-1.2684380046*o+2.6097574011*l-.3413193965*d,u=-.0041960863*o-.7034186147*l+1.707614701*d;return{r:h,g:p,b:u}}function j(n,e,i){return R($(n,e,i))}function m(n,e,i,r=1e-10){const{r:a,g:s,b:o}=j(n,e,i);return a>=-r&&a<=1+r&&s>=-r&&s<=1+r&&o>=-r&&o<=1+r}function z(n,e,{cUpper:i=.5,precision:r=1e-5,maxIter:a=40}={}){let s=0,o=i;if(m(n,o,e)){let l=o;for(let d=0;d<10;d++)if(l*=2,!m(n,l,e)){o=l;break}if(m(n,o,e))return o}for(let l=0;l<a&&o-s>r;l++){const d=(s+o)/2;m(n,d,e)?s=d:o=d}return s}function N(n,e,i){const r=z(n,e);return i/100*r}function A(n){return Array.isArray(n)?n:[n]}function E(n){return n<.62}function L(n){return n.toPrecision(4)}async function O(n){try{await navigator.clipboard.writeText(n)}catch{const e=document.createElement("textarea");e.value=n,e.style.position="fixed",e.style.opacity="0",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}const _={title:"Tokens/Colors",parameters:{layout:"fullscreen"},tags:["autodocs","!dev"]},g=()=>{const n=w,e=Object.keys(n),[i,r]=y.useState(null),a=y.useRef(null);y.useEffect(()=>()=>{a.current&&window.clearTimeout(a.current)},[]);function s(o){const l=`var(${o})`;O(l),r(l),a.current&&window.clearTimeout(a.current),a.current=window.setTimeout(()=>r(null),1200)}return c.jsxs("div",{style:{minHeight:"100vh",padding:20,background:"rgba(0,0,0,0.55)",boxSizing:"border-box",fontFamily:"ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"},children:[c.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:16,alignItems:"baseline",padding:"10px 12px",borderRadius:12,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.9)",marginBottom:16},children:c.jsxs("div",{style:{display:"grid",gap:2},children:[c.jsx("div",{style:{fontWeight:800,letterSpacing:.6},children:"TOKENS / COLORS"}),c.jsx("div",{style:{fontSize:12,opacity:.8},children:"Click a swatch to copy the CSS variable name."})]})}),c.jsx("div",{style:{display:"grid",gap:12},children:e.flatMap(o=>{const l=n[o];if(!Array.isArray(l))throw new TypeError(`Color "${o}" must be an array`);return l.map((d,h)=>{const{h:p,c:u}=d,C=A(d.l);return c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"220px 1fr",gap:14,alignItems:"center",padding:12,borderRadius:14,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.08)"},children:[c.jsxs("div",{style:{color:"rgba(255,255,255,0.92)"},children:[c.jsx("div",{style:{fontWeight:800,letterSpacing:.6,textTransform:"uppercase"},children:o}),c.jsxs("div",{style:{fontSize:12,opacity:.75,marginTop:4},children:["h: ",p]}),c.jsxs("div",{style:{fontSize:12,opacity:.75},children:["c: ",u]})]}),c.jsx("div",{style:{display:"grid",gridAutoFlow:"column",gridAutoColumns:"92px",gap:10,overflowX:"auto",paddingBottom:2},children:C.map(b=>{const f=b/100,k=N(f,p,u),x=`oklch(${f} ${L(k)} ${p})`,v=E(f),S=`--${o}-l${b}-c${u}-h${p}`;return c.jsx("div",{onClick:()=>s(S),title:`Click to copy:
${S}

${x}`,style:{height:64,borderRadius:10,background:x,border:"1px solid rgba(255,255,255,0.10)",boxShadow:"0 1px 0 rgba(0,0,0,0.25)",padding:8,boxSizing:"border-box",cursor:"pointer",userSelect:"none"},children:c.jsxs("div",{style:{fontSize:12,fontWeight:800,letterSpacing:.2,color:v?"rgba(255,255,255,0.92)":"rgba(0,0,0,0.78)",textShadow:v?"0 1px 0 rgba(0,0,0,0.35)":"none"},children:["l: ",b]})},`${o}-${b}-${u}-${p}`)})})]},`${o}-${u}-${p}-${h}`)})})}),i&&c.jsxs("div",{style:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.85)",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 4px 16px rgba(0,0,0,0.3)",pointerEvents:"none"},children:["Copied ",i]})]})};g.__docgenInfo={description:"",methods:[],displayName:"Palette"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const tokens: ColorsConfig = colors;
  const colorNames = Object.keys(tokens);
  const [copied, setCopied] = React.useState<string | null>(null);
  const toastTimerRef = React.useRef<number | null>(null);
  React.useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);
  function handleCopy(varName: string) {
    const variable = \`var(\${varName})\`;
    copyToClipboard(variable);
    setCopied(variable);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setCopied(null), 1200);
  }
  return <div style={{
    minHeight: '100vh',
    padding: 20,
    background: 'rgba(0,0,0,0.55)',
    boxSizing: 'border-box',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'
  }}>
      {/* Header */}
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      alignItems: 'baseline',
      padding: '10px 12px',
      borderRadius: 12,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.08)',
      color: 'rgba(255,255,255,0.9)',
      marginBottom: 16
    }}>
        <div style={{
        display: 'grid',
        gap: 2
      }}>
          <div style={{
          fontWeight: 800,
          letterSpacing: 0.6
        }}>
            TOKENS / COLORS
          </div>
          <div style={{
          fontSize: 12,
          opacity: 0.8
        }}>
            Click a swatch to copy the CSS variable name.
          </div>
        </div>
      </div>

      {/* Rows: выводим ВСЕ комбинации как отдельные строки */}
      <div style={{
      display: 'grid',
      gap: 12
    }}>
        {colorNames.flatMap(colorName => {
        const combos = tokens[colorName];
        if (!Array.isArray(combos)) {
          throw new TypeError(\`Color "\${colorName}" must be an array\`);
        }
        return combos.map((combo: ColorCombination, idx: number) => {
          const {
            h,
            c
          } = combo;
          const lValues = normalizeLs(combo.l);
          return <div key={\`\${colorName}-\${c}-\${h}-\${idx}\`} style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: 14,
            alignItems: 'center',
            padding: 12,
            borderRadius: 14,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
                {/* Left label */}
                <div style={{
              color: 'rgba(255,255,255,0.92)'
            }}>
                  <div style={{
                fontWeight: 800,
                letterSpacing: 0.6,
                textTransform: 'uppercase'
              }}>
                    {colorName}
                  </div>
                  <div style={{
                fontSize: 12,
                opacity: 0.75,
                marginTop: 4
              }}>
                    h: {h}
                  </div>
                  <div style={{
                fontSize: 12,
                opacity: 0.75
              }}>c: {c}</div>
                </div>

                {/* Swatches row (shades in a row) */}
                <div style={{
              display: 'grid',
              gridAutoFlow: 'column',
              gridAutoColumns: '92px',
              gap: 10,
              overflowX: 'auto',
              paddingBottom: 2
            }}>
                  {lValues.map(l => {
                const L = l / 100;
                const realC = okcolorPercentToC(L, h, c);
                const value = \`oklch(\${L} \${formatC(realC)} \${h})\`;
                const lightText = isDarkBgFromL(L);
                const varName = \`--\${colorName}-l\${l}-c\${c}-h\${h}\`;
                return <div key={\`\${colorName}-\${l}-\${c}-\${h}\`} onClick={() => handleCopy(varName)} title={\`Click to copy:\\n\${varName}\\n\\n\${value}\`} style={{
                  height: 64,
                  borderRadius: 10,
                  background: value,
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 1px 0 rgba(0,0,0,0.25)',
                  padding: 8,
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}>
                        <div style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 0.2,
                    color: lightText ? 'rgba(255,255,255,0.92)' : 'rgba(0,0,0,0.78)',
                    textShadow: lightText ? '0 1px 0 rgba(0,0,0,0.35)' : 'none'
                  }}>
                          l: {l}
                        </div>
                      </div>;
              })}
                </div>
              </div>;
        });
      })}
      </div>

      {/* Toast */}
      {copied && <div style={{
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(0,0,0,0.85)',
      color: '#fff',
      padding: '10px 16px',
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
      pointerEvents: 'none'
    }}>
          Copied {copied}
        </div>}
    </div>;
}`,...g.parameters?.docs?.source}}};const F=["Palette"];export{g as Palette,F as __namedExportsOrder,_ as default};
