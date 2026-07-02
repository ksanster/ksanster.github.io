import{j as o}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{S as d}from"./Switch-BL-Zkdet.js";import{R as p}from"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,F={title:"Shared/UI/Switch",component:d,parameters:{layout:"centered"},argTypes:{checked:{control:{type:"boolean"},description:"Состояние переключателя (включен/выключен)"},disabled:{control:{type:"boolean"},description:"Переключатель недоступен"},children:{control:{type:"text"},description:"Текст метки-лейбла для переключателя"}},args:{checked:!1,disabled:!1,onChange:m()},render:e=>o.jsx(d,{...e,children:o.jsx("span",{style:{color:"#FFFFFF",fontSize:"12px"},children:e.children})})},r={args:{checked:!0}},s={args:{checked:!1}},a={args:{checked:!0,disabled:!0}},c={args:{checked:!0,children:"Включить подсказки"}},n={args:{checked:!1,disabled:!0,children:"Включить подсказки"}},t={render:e=>{const[i,l]=p.useState(e.checked||!1),h=()=>{l(!i)};return o.jsx(d,{...e,checked:i,onChange:h,children:o.jsx("span",{style:{color:"#FFFFFF",fontSize:"12px"},children:e.children||"Переключатель"})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    children: 'Включить подсказки'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    children: 'Включить подсказки'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(args.checked || false);
    const handleChange = () => {
      setChecked(!checked);
    };
    return <Switch {...args} checked={checked} onChange={handleChange}>
        <span style={{
        color: '#FFFFFF',
        fontSize: '12px'
      }}>
          {args.children || 'Переключатель'}
        </span>
      </Switch>;
  }
}`,...t.parameters?.docs?.source}}};const b=["On","Off","Disabled","WithLabel","WithLabelDisabled","Interactive"];export{a as Disabled,t as Interactive,s as Off,r as On,c as WithLabel,n as WithLabelDisabled,b as __namedExportsOrder,F as default};
