import"./index-iPWmtVBe.js";import{a as t}from"./effect-fade-element-Dkwm1YZ3.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-u17CrQMm.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";const u={title:"Shared/UI/Button/BaseButton",component:t,parameters:{layout:"centered"},argTypes:{kind:{control:{type:"select"},options:["outline","colored","overlay","ghost"],description:"Вид кнопки"},size:{control:{type:"select"},options:["xs","s","m"],description:"Размер кнопки"},color:{control:{type:"select"},options:["gold","red","purple"],description:'Цвет кнопки (только для kind="colored")'}},args:{kind:"outline",size:"m",color:"gold"}},r={args:{children:"outline",kind:"outline"}},e={args:{children:"colored",kind:"colored"}},o={args:{children:"overlay",kind:"overlay"}},s={args:{children:"ghost",kind:"ghost"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'outline',
    kind: 'outline'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'colored',
    kind: 'colored'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'overlay',
    kind: 'overlay'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'ghost',
    kind: 'ghost'
  }
}`,...s.parameters?.docs?.source}}};const g=["Outline","Colored","Overlay","Ghost"];export{e as Colored,s as Ghost,r as Outline,o as Overlay,g as __namedExportsOrder,u as default};
