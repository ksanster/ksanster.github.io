import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-DKNI9sP2.js";import"./index-iPWmtVBe.js";import{M as m,a as t}from"./effect-fade-element-Dkwm1YZ3.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,S={title:"Shared/UI/Modal",component:m,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{size:{control:"select",options:["s","m","l"],description:"Размер модального окна"},isOpen:{control:"boolean",description:"Открыто ли модальное окно"},onClose:{action:"closed",description:"Callback при закрытии модального окна"},children:{description:"Содержимое модального окна"}},decorators:[(i,a)=>{const[c,n]=l.useState(a.args.isOpen??!1),p=()=>n(!0),d=()=>{n(!1),a.args.onClose?.()};return s.jsxs("div",{style:{minHeight:"400px"},children:[s.jsx(t,{onClick:p,children:"Открыть modal"}),s.jsx(i,{args:{...a.args,isOpen:c,onClose:d}})]})}],args:{isOpen:!1,onClose:g(),children:s.jsxs(s.Fragment,{children:[s.jsx("h3",{style:{marginTop:0},children:"Заголовок"}),s.jsx("br",{}),s.jsx("p",{children:"Это пример кастомного содержимого внутри модального окна."}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(t,{children:"Действие"})]})}},e={args:{size:"s"}},r={args:{size:"m"},parameters:{docs:{description:{story:"Модальное окно среднего размера"}}}},o={args:{size:"l"},parameters:{docs:{description:{story:"Модальное окно большого размера"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 's'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Модальное окно среднего размера'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'l'
  },
  parameters: {
    docs: {
      description: {
        story: 'Модальное окно большого размера'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const y=["Default","Medium","Large"];export{e as Default,o as Large,r as Medium,y as __namedExportsOrder,S as default};
