import{j as i}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{D as x}from"./effect-fade-element-Dkwm1YZ3.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";const a=i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"currenColor",children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.25096 2.65985C6.15149 2.44672 5.84842 2.44672 5.74895 2.65985L5.10675 4.03589C4.88662 4.50755 4.5075 4.88667 4.03585 5.10679L2.65981 5.74899C2.44667 5.84846 2.44667 6.15154 2.65981 6.25101L4.03585 6.89321C4.5075 7.11333 4.88662 7.49245 5.10675 7.96411L5.74895 9.34015C5.84842 9.55328 6.15149 9.55328 6.25096 9.34015L6.89316 7.96411C7.11329 7.49245 7.49241 7.11333 7.96406 6.89321L9.3401 6.25101C9.55324 6.15154 9.55324 5.84846 9.3401 5.74899L7.96406 5.10679C7.49241 4.88667 7.11329 4.50755 6.89316 4.03589L6.25096 2.65985Z",fill:"currentColor"})}),L={title:"Shared/UI/DropdownList",component:x,parameters:{layout:"centered",docs:{description:{component:"Выпадающий список содержащий в себе кнопки и/или ссылки"}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Заголовок для выпадающего списка"},options:{control:"object",description:"Массив опций для выбора"},prefix:{control:"text",description:"Префикс перед выбранным значением"},isBold:{control:"boolean",description:"Жирный текст кнопки"}},decorators:[(m,d)=>i.jsx("div",{style:{width:200,height:100},children:i.jsx(m,{args:{...d.context.args}})})],args:{}},p=[{text:"item1"},{text:"item2"},{text:"item3"}],c=[{text:"item1",icon:a},{text:"item3"}],t={args:{options:p}},e={args:{options:c},parameters:{docs:{description:{story:"Селекты с иконками"}}}},r={args:{options:c,prefix:"prefix:"},parameters:{docs:{description:{story:"Селекты с иконками"}}}},s={args:{options:[{text:"item1"},{text:"item2"},{text:"item3"}],title:"Заголовок"},parameters:{docs:{description:{story:"Селекты с иконками"}}}},o={args:{options:p,prefix:"prefix:",title:"Заголовок"},parameters:{docs:{description:{story:"Состояние без активной селекта"}}}},n={args:{prefix:"Prefix: ",title:"Очень длинное название заголовка",options:[{text:"Очень длинное название раздела 1"},{text:"item2",icon:a},{text:"item3"},{text:"item4"},{text:"item5",icon:a}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItems
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItemsWithIcons
  },
  parameters: {
    docs: {
      description: {
        story: 'Селекты с иконками'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItemsWithIcons,
    prefix: 'prefix:'
  },
  parameters: {
    docs: {
      description: {
        story: 'Селекты с иконками'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      text: 'item1'
    }, {
      text: 'item2'
    }, {
      text: 'item3'
    }],
    title: 'Заголовок'
  },
  parameters: {
    docs: {
      description: {
        story: 'Селекты с иконками'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItems,
    prefix: 'prefix:',
    title: 'Заголовок'
  },
  parameters: {
    docs: {
      description: {
        story: 'Состояние без активной селекта'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: 'Prefix: ',
    title: 'Очень длинное название заголовка',
    options: [{
      text: 'Очень длинное название раздела 1'
    }, {
      text: 'item2',
      icon: icon
    }, {
      text: 'item3'
    }, {
      text: 'item4'
    }, {
      text: 'item5',
      icon: icon
    }]
  }
}`,...n.parameters?.docs?.source}}};const w=["Default","WithIcons","WithPrefix","WithTitle","WithTitleAndPrefix","ManyDropdownList"];export{t as Default,n as ManyDropdownList,e as WithIcons,r as WithPrefix,s as WithTitle,o as WithTitleAndPrefix,w as __namedExportsOrder,L as default};
