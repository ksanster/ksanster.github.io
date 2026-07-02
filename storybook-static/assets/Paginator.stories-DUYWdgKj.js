import{j as p}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{P as i}from"./effect-fade-element-Dkwm1YZ3.js";import{r as u}from"./iframe-DKNI9sP2.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";import"./preload-helper-PPVm8Dsz.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,y={title:"Shared/UI/Paginator",component:i,parameters:{layout:"centered"},argTypes:{current:{control:{type:"number"},description:"Текущая страница (начиная с 1)"},total:{control:{type:"number"},description:"Всего страниц"},onChange:{description:"Обработчик перехода на страницу"}},args:{current:0,total:1,onChange:m()}},e={args:{current:1,total:10}},r={args:{current:1,total:0}},t={args:{current:1,total:3}},a={render:o=>{const s=[1,2,5,8,10];return p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:s.map(c=>p.jsx(i,{total:o.total,current:c}))})},args:{total:10}},n={render:o=>{const[s,c]=u.useState(1),l=g=>c(g);return p.jsx(i,{total:o.total,current:s,onChange:l})},args:{current:1,total:10}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    total: 10
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    total: 0
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    total: 3
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const positions = [1, 2, 5, 8, 10];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        {positions.map(pos => <Paginator total={args.total} current={pos} />)}
      </div>;
  },
  args: {
    total: 10
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    const handleChangePage = (value: number) => setPage(value);
    return <Paginator total={args.total} current={page} onChange={handleChangePage} />;
  },
  args: {
    current: 1,
    total: 10
  }
}`,...n.parameters?.docs?.source}}};const _=["Default","OnePageOrLess","ThreePages","CurrentPageInDifferentPositions","InteractiveExample"];export{a as CurrentPageInDifferentPositions,e as Default,n as InteractiveExample,r as OnePageOrLess,t as ThreePages,_ as __namedExportsOrder,y as default};
