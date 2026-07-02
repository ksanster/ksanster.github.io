import{j as s}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{S as c}from"./effect-fade-element-Dkwm1YZ3.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";const i=s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.25096 2.65985C6.15149 2.44672 5.84842 2.44672 5.74895 2.65985L5.10675 4.03589C4.88662 4.50755 4.5075 4.88667 4.03585 5.10679L2.65981 5.74899C2.44667 5.84846 2.44667 6.15154 2.65981 6.25101L4.03585 6.89321C4.5075 7.11333 4.88662 7.49245 5.10675 7.96411L5.74895 9.34015C5.84842 9.55328 6.15149 9.55328 6.25096 9.34015L6.89316 7.96411C7.11329 7.49245 7.49241 7.11333 7.96406 6.89321L9.3401 6.25101C9.55324 6.15154 9.55324 5.84846 9.3401 5.74899L7.96406 5.10679C7.49241 4.88667 7.11329 4.50755 6.89316 4.03589L6.25096 2.65985Z",fill:"#F7EEDB"})}),k={title:"Shared/UI/Button/SimpleButton",component:c,parameters:{layout:"centered"},argTypes:{kind:{control:{type:"select"},options:["regular","accent","danger","outline"],description:"Вид кнопки"},size:{control:{type:"select"},options:["s","m"],description:"Размер кнопки"},isCompact:{control:{type:"boolean"},description:"Компактные внутренние отступы"}},args:{kind:"regular",size:"m",disabled:!1,isCompact:!1}},e={args:{children:"regular",kind:"regular"}},r={args:{children:"accent",kind:"accent"}},n={args:{children:"danger",kind:"danger"}},o={args:{children:"outline",kind:"outline"}},t={args:{children:s.jsxs(s.Fragment,{children:[i,"Outline",i]}),kind:"outline"}},a={args:{children:i,kind:"outline",isCompact:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'regular',
    kind: 'regular'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'accent',
    kind: 'accent'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'danger',
    kind: 'danger'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'outline',
    kind: 'outline'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        {icon}
        Outline
        {icon}
      </>,
    kind: 'outline'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon,
    kind: 'outline',
    isCompact: true
  }
}`,...a.parameters?.docs?.source}}};const O=["Regular","Accent","Danger","Outline","OutlineWithIcon","OutlineIconOnly"];export{r as Accent,n as Danger,o as Outline,a as OutlineIconOnly,t as OutlineWithIcon,e as Regular,O as __namedExportsOrder,k as default};
