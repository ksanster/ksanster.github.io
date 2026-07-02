import{j as d}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{I as u}from"./effect-fade-element-Dkwm1YZ3.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";const e=d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",children:d.jsx("path",{d:"M18.1834 14L9.67502 5.49162C9.21941 5.03601 9.21941 4.29732 9.67502 3.84171C10.1306 3.3861 10.8693 3.3861 11.3249 3.84171L20.6583 13.175C21.1139 13.6307 21.1139 14.3693 20.6583 14.825L11.3249 24.1583C10.8693 24.6139 10.1306 24.6139 9.67502 24.1583C9.21941 23.7027 9.21941 22.964 9.67502 22.5084L18.1834 14Z"})}),x={title:"Shared/UI/Button/IconButton",component:u,parameters:{layout:"centered"},argTypes:{kind:{control:{type:"select"},options:["regular","outline","overlay","ghost"],description:"Вид оформления кнопки"},size:{control:{type:"select"},options:["xs","s","m","l"],description:"Размер кнопки, по умолчанию m"},isDimmed:{control:{type:"boolean"},description:"Приглушение цвета иконки"},isRounded:{control:{type:"boolean"},description:"Скругленный вид, по умолчанию выкл."},isFocused:{control:{type:"boolean"},description:"Отобразить точку, не для круглых кнопок"}},args:{kind:"regular",size:"m",isDimmed:!1,isRounded:!1,isFocused:!1,disabled:!1}},r={args:{children:e}},s={args:{children:e,isFocused:!0}},o={args:{children:e,disabled:!0}},n={args:{children:e,isRounded:!0}},a={args:{children:e,kind:"outline",isRounded:!0}},t={args:{children:e,kind:"overlay"}},i={args:{children:e,kind:"ghost"}},c={args:{children:e,kind:"ghost",isDimmed:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon,
    isFocused: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon,
    isRounded: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon,
    kind: 'outline',
    isRounded: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon,
    kind: 'overlay'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon,
    kind: 'ghost'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: icon,
    kind: 'ghost',
    isDimmed: true
  }
}`,...c.parameters?.docs?.source}}};const S=["Regular","RegularFocused","RegularDisabled","RegularRounded","OutlineRounded","Overlay","Ghost","GhostDimmed"];export{i as Ghost,c as GhostDimmed,a as OutlineRounded,t as Overlay,r as Regular,o as RegularDisabled,s as RegularFocused,n as RegularRounded,S as __namedExportsOrder,x as default};
