import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{C as t}from"./Checkbox-DzK9GS5W.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Shared/UI/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"checkbox"},argTypes:{checked:{control:"radio",options:[!0,!1],description:"Активная чекбокс",type:"boolean"},disabled:{control:"radio",options:[!0,!1],description:"Заблокированная чекбокс",type:"boolean"}},decorators:[r=>e.jsx("div",{style:{color:"var(--gold-l90-c50-h85)"},children:e.jsx(r,{})})]},c={},o={args:{checked:!0}},s={args:{checked:!1}},a={args:{disabled:!0}},n={render:r=>e.jsxs("div",{children:[e.jsx(t,{name:"checkbox",...r,children:"checkbox 1"}),e.jsx(t,{name:"checkbox",...r,children:"checkbox 2"}),e.jsx(t,{name:"checkbox",...r,children:"checkbox 3"})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <Checkbox name="checkbox" {...args}>
          checkbox 1
        </Checkbox>
        <Checkbox name="checkbox" {...args}>
          checkbox 2
        </Checkbox>
        <Checkbox name="checkbox" {...args}>
          checkbox 3
        </Checkbox>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const u=["Default","Checked","Unchecked","Disabled","RadioGroup"];export{o as Checked,c as Default,a as Disabled,n as RadioGroup,s as Unchecked,u as __namedExportsOrder,l as default};
