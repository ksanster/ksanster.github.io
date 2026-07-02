import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{g as p,a as t,u as m}from"./effect-fade-element-Dkwm1YZ3.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";const j={title:"Shared/UI/Tooltip",component:p,parameters:{layout:"centered",docs:{description:{component:"Компонент тултипа для отображения всплывающих подсказок."}}},tags:["!autodocs"],argTypes:{text:{control:{type:"text"},description:"Текст тултипа"},preview:{control:{type:"boolean"},description:"Превью режим (показывать автоматически один раз)"},placement:{control:{type:"select"},options:["auto","top","bottom","left","right"],description:"Позиционирование тултипа"},delay:{control:{type:"number"},description:"Задержка перед показом (мс)"}},args:{text:"Текст тултипа",preview:!1,placement:"auto",delay:0}},r={args:{text:"Автоматическое позиционирование",children:e.jsx(t,{children:"Наведи на меня"})}},n={args:{text:"Тултип сверху",placement:"top",children:e.jsx(t,{children:"Кнопка с тултипом сверху"})}},o={args:{text:"Тултип снизу",placement:"bottom",children:e.jsx(t,{children:"Кнопка с тултипом снизу"})}},a={args:{text:"Тултип слева",placement:"left",children:e.jsx(t,{children:"Кнопка с тултипом слева"})}},s={args:{text:"Тултип справа",placement:"right",children:e.jsx(t,{children:"Кнопка с тултипом справа"})}},c={args:{text:"Тултип с задержкой 500ms",delay:500,children:e.jsx(t,{children:"Наведи и подожди"})}},i={args:{text:"Тултип с превью",preview:!0,children:e.jsx(t,{children:"Кнопка с тултипом"})},decorators:[l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center"},children:[e.jsx(l,{}),e.jsx(t,{onClick:()=>{m.getState().clear()},children:"Сбросить shown-flag"})]})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Автоматическое позиционирование',
    children: <BaseButton>Наведи на меня</BaseButton>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Тултип сверху',
    placement: 'top',
    children: <BaseButton>Кнопка с тултипом сверху</BaseButton>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Тултип снизу',
    placement: 'bottom',
    children: <BaseButton>Кнопка с тултипом снизу</BaseButton>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Тултип слева',
    placement: 'left',
    children: <BaseButton>Кнопка с тултипом слева</BaseButton>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Тултип справа',
    placement: 'right',
    children: <BaseButton>Кнопка с тултипом справа</BaseButton>
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Тултип с задержкой 500ms',
    delay: 500,
    children: <BaseButton>Наведи и подожди</BaseButton>
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Тултип с превью',
    preview: true,
    children: <BaseButton>Кнопка с тултипом</BaseButton>
  },
  decorators: [Story => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      justifyContent: 'center'
    }}>
          <Story />
          <BaseButton onClick={() => {
        useTooltipStorage.getState().clear();
      }}>
            Сбросить shown-flag
          </BaseButton>
        </div>;
  }]
}`,...i.parameters?.docs?.source}}};const S=["AutoPlacement","TopPlacement","BottomPlacement","LeftPlacement","RightPlacement","WithDelay","WithPreview"];export{r as AutoPlacement,o as BottomPlacement,a as LeftPlacement,s as RightPlacement,n as TopPlacement,c as WithDelay,i as WithPreview,S as __namedExportsOrder,j as default};
