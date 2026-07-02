import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{R as t}from"./RadioInput-DNTeGRjq.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Shared/UI/RadioInput",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"radio"},argTypes:{checked:{control:"radio",options:[!0,!1],description:"Активная радио кнопка",type:"boolean"},disabled:{control:"radio",options:[!0,!1],description:"Заблокированная радио кнопка",type:"boolean"}},decorators:[e=>r.jsx("div",{style:{color:"var(--gold-l90-c50-h85)"},children:r.jsx(e,{})})]},a={},o={args:{checked:!0}},s={args:{checked:!1}},d={args:{disabled:!0}},n={render:e=>r.jsxs("div",{children:[r.jsx(t,{name:"radio",...e,children:"radio 1"}),r.jsx(t,{name:"radio",...e,children:"radio 2"}),r.jsx(t,{name:"radio",...e,children:"radio 3"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <RadioInput name="radio" {...args}>
          radio 1
        </RadioInput>
        <RadioInput name="radio" {...args}>
          radio 2
        </RadioInput>
        <RadioInput name="radio" {...args}>
          radio 3
        </RadioInput>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const g=["Default","Checked","Unchecked","Disabled","RadioGroup"];export{o as Checked,a as Default,d as Disabled,n as RadioGroup,s as Unchecked,g as __namedExportsOrder,l as default};
