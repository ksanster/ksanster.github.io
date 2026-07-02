import{j as o}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{e as g}from"./effect-fade-element-Dkwm1YZ3.js";import{r as h}from"./iframe-DKNI9sP2.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";import"./preload-helper-PPVm8Dsz.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,l=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"currenColor",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.25096 2.65985C6.15149 2.44672 5.84842 2.44672 5.74895 2.65985L5.10675 4.03589C4.88662 4.50755 4.5075 4.88667 4.03585 5.10679L2.65981 5.74899C2.44667 5.84846 2.44667 6.15154 2.65981 6.25101L4.03585 6.89321C4.5075 7.11333 4.88662 7.49245 5.10675 7.96411L5.74895 9.34015C5.84842 9.55328 6.15149 9.55328 6.25096 9.34015L6.89316 7.96411C7.11329 7.49245 7.49241 7.11333 7.96406 6.89321L9.3401 6.25101C9.55324 6.15154 9.55324 5.84846 9.3401 5.74899L7.96406 5.10679C7.49241 4.88667 7.11329 4.50755 6.89316 4.03589L6.25096 2.65985Z",fill:"currentColor"})}),j={title:"Shared/UI/Select",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"text",description:"Текущее выбранное значение"},options:{control:"object",description:"Массив опций для выбора"},prefix:{control:"text",description:"Префикс перед выбранным значением"},isBold:{control:"boolean",description:"Жирный текст кнопки"},disabled:{control:"boolean",description:"Отключен ли селект"},onChange:{action:"changed",description:"Callback при изменении значения"}},decorators:[(d,c)=>{const[u,m]=h.useState(c.context.args.value),v=b=>{m(b)};return o.jsx("div",{style:{width:200,height:100},children:o.jsx(d,{args:{...c.context.args,onChange:v,value:u}})})}],args:{onChange:x()}},i=[{value:"select1",label:"Селект 1"},{value:"select2",label:"Селект 2"},{value:"select3",label:"Селект 3"}],p=[{value:"select1",label:"Профиль",icon:l},{value:"select3",label:"Уведомления"}],e={args:{options:i,value:"select1"}},s={args:{options:p,value:"select1"},parameters:{docs:{description:{story:"Селекты с иконками"}}}},t={args:{options:p,value:"select1",prefix:"prefix:"},parameters:{docs:{description:{story:"Селекты с иконками"}}}},a={args:{options:[{value:"select1",label:"Селект 1"},{value:"select2",label:"Селект 2",disabled:!0},{value:"select3",label:"Селект 3"}],value:"select1"},parameters:{docs:{description:{story:"Селекты с иконками"}}}},r={args:{options:i},parameters:{docs:{description:{story:"Состояние без активной селекта"}}}},n={args:{prefix:"Prefix: ",options:[{value:"select1",label:"Очень длинное название селекта 1"},{value:"select2",label:"Селект 2",icon:l},{value:"select3",label:"Селект 3",disabled:!0},{value:"select4",label:"Селект 4"},{value:"select5",label:"Селект 5",icon:l}],value:"select1"},parameters:{docs:{description:{story:"Демонстрация поведения с большим количеством селектов"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItems,
    value: 'select1'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItemsWithIcons,
    value: 'select1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Селекты с иконками'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItemsWithIcons,
    value: 'select1',
    prefix: 'prefix:'
  },
  parameters: {
    docs: {
      description: {
        story: 'Селекты с иконками'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'select1',
      label: 'Селект 1'
    }, {
      value: 'select2',
      label: 'Селект 2',
      disabled: true
    }, {
      value: 'select3',
      label: 'Селект 3'
    }],
    value: 'select1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Селекты с иконками'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Состояние без активной селекта'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: 'Prefix: ',
    options: [{
      value: 'select1',
      label: 'Очень длинное название селекта 1'
    }, {
      value: 'select2',
      label: 'Селект 2',
      icon: icon
    }, {
      value: 'select3',
      label: 'Селект 3',
      disabled: true
    }, {
      value: 'select4',
      label: 'Селект 4'
    }, {
      value: 'select5',
      label: 'Селект 5',
      icon: icon
    }],
    value: 'select1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация поведения с большим количеством селектов'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const w=["Default","WithIcons","WithPrefix","WithDisabledOption","NoActiveTab","ManySelect"];export{e as Default,n as ManySelect,r as NoActiveTab,a as WithDisabledOption,s as WithIcons,t as WithPrefix,w as __namedExportsOrder,j as default};
