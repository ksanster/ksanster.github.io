import{j as o}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{d as n}from"./effect-fade-element-Dkwm1YZ3.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";const r=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"currenColor",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.25096 2.65985C6.15149 2.44672 5.84842 2.44672 5.74895 2.65985L5.10675 4.03589C4.88662 4.50755 4.5075 4.88667 4.03585 5.10679L2.65981 5.74899C2.44667 5.84846 2.44667 6.15154 2.65981 6.25101L4.03585 6.89321C4.5075 7.11333 4.88662 7.49245 5.10675 7.96411L5.74895 9.34015C5.84842 9.55328 6.15149 9.55328 6.25096 9.34015L6.89316 7.96411C7.11329 7.49245 7.49241 7.11333 7.96406 6.89321L9.3401 6.25101C9.55324 6.15154 9.55324 5.84846 9.3401 5.74899L7.96406 5.10679C7.49241 4.88667 7.11329 4.50755 6.89316 4.03589L6.25096 2.65985Z",fill:"currentColor"})}),h={title:"Shared/UI/List",component:n,parameters:{layout:"centered",docs:{description:{component:"Список содержащий в себе кнопки или ссылки"}}},tags:["autodocs"],args:{},argTypes:{options:{description:"Массив элементов списка",control:"object",table:{type:{summary:"Option[]"},defaultValue:{summary:"[]"}}},size:{description:"Размер списка",control:"radio",options:["s","m"],table:{type:{summary:"s | m"},defaultValue:{summary:"s"}}}},decorators:[i=>o.jsx("div",{style:{width:200},children:o.jsx(i,{})})]},a=[{text:"item1"},{text:"item2"},{text:"item3"}],m=[{text:"item1",icon:r},{text:"item2"},{text:"item3",icon:r}],e={args:{options:a}},t={args:{options:m}},s={args:{options:a,size:"m"},parameters:{docs:{description:{story:"Список среднего размера (m)"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItems
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: withIconItems
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItems,
    size: 'm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Список среднего размера (m)'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const y=["Default","WithIcons","MediumSize"];export{e as Default,s as MediumSize,t as WithIcons,y as __namedExportsOrder,h as default};
