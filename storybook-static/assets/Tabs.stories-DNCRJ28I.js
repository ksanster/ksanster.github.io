import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{T as u}from"./effect-fade-element-Dkwm1YZ3.js";import{r as g}from"./iframe-DKNI9sP2.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";import"./preload-helper-PPVm8Dsz.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,m=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"currenColor",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.25096 2.65985C6.15149 2.44672 5.84842 2.44672 5.74895 2.65985L5.10675 4.03589C4.88662 4.50755 4.5075 4.88667 4.03585 5.10679L2.65981 5.74899C2.44667 5.84846 2.44667 6.15154 2.65981 6.25101L4.03585 6.89321C4.5075 7.11333 4.88662 7.49245 5.10675 7.96411L5.74895 9.34015C5.84842 9.55328 6.15149 9.55328 6.25096 9.34015L6.89316 7.96411C7.11329 7.49245 7.49241 7.11333 7.96406 6.89321L9.3401 6.25101C9.55324 6.15154 9.55324 5.84846 9.3401 5.74899L7.96406 5.10679C7.49241 4.88667 7.11329 4.50755 6.89316 4.03589L6.25096 2.65985Z",fill:"currentColor"})}),L={title:"Shared/UI/Tabs",component:u,parameters:{layout:"centered",docs:{description:{component:"Компонент вкладок для навигации между различными разделами контента."}}},tags:["autodocs"],argTypes:{items:{description:"Массив элементов вкладок",control:"object",table:{type:{summary:"TabItem[]"},defaultValue:{summary:"[]"}}},activeItemId:{description:"ID активной вкладки",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},onChange:{description:"Колбэк, вызываемый при изменении активной вкладки",action:"changed",table:{type:{summary:"(key: string) => void"}}},color:{description:"Цвет табов",control:"radio",options:["gold","darkBlue","darkBlue-white"],table:{type:{summary:"gold | darkBlue | darkBlue-white"},defaultValue:{summary:"gold"}}},size:{description:"Размер вкладок",control:"radio",options:["s","m"],table:{type:{summary:"s | m"},defaultValue:{summary:"s"}}}},decorators:[(c,i)=>{const[d,l]=g.useState(i.context.args.activeItemId),p=b=>{l(b)};return n.jsx(c,{args:{...i.context.args,onChange:p,activeItemId:d}})}],args:{onChange:I()}},o=[{id:"tab1",label:"Вкладка 1"},{id:"tab2",label:"Вкладка 2"},{id:"tab3",label:"Вкладка 3"}],y=[{id:"tab1",label:"Профиль",icon:m},{id:"tab2",icon:m},{id:"tab3",label:"Уведомления"}],e={args:{items:o,activeItemId:"tab1",size:"s"}},t={args:{items:o,activeItemId:"tab2",size:"m"},parameters:{docs:{description:{story:"Вкладки среднего размера (m)"}}}},a={args:{items:y,activeItemId:"tab2",size:"s"},parameters:{docs:{description:{story:"Вкладки с иконками"}}}},s={args:{items:o,size:"s"},parameters:{docs:{description:{story:"Состояние без активной вкладки"}}}},r={args:{items:[{id:"tab1",label:"Очень длинное название вкладки 1"},{id:"tab2",label:"Вкладка 2"},{id:"tab3",label:"Вкладка 3"},{id:"tab4",label:"Вкладка 4"},{id:"tab5",label:"Вкладка 5"}],activeItemId:"tab3",size:"s"},parameters:{docs:{description:{story:"Демонстрация поведения с большим количеством вкладок"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    activeItemId: 'tab1',
    size: 's'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    activeItemId: 'tab2',
    size: 'm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Вкладки среднего размера (m)'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItemsWithIcons,
    activeItemId: 'tab2',
    size: 's'
  },
  parameters: {
    docs: {
      description: {
        story: 'Вкладки с иконками'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    size: 's'
  },
  parameters: {
    docs: {
      description: {
        story: 'Состояние без активной вкладки'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'tab1',
      label: 'Очень длинное название вкладки 1'
    }, {
      id: 'tab2',
      label: 'Вкладка 2'
    }, {
      id: 'tab3',
      label: 'Вкладка 3'
    }, {
      id: 'tab4',
      label: 'Вкладка 4'
    }, {
      id: 'tab5',
      label: 'Вкладка 5'
    }],
    activeItemId: 'tab3',
    size: 's'
  },
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация поведения с большим количеством вкладок'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const w=["Default","MediumSize","WithIcons","NoActiveTab","ManyTabs"];export{e as Default,r as ManyTabs,t as MediumSize,s as NoActiveTab,a as WithIcons,w as __namedExportsOrder,L as default};
