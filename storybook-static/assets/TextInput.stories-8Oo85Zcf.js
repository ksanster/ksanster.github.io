import{j as p}from"./jsx-runtime-u17CrQMm.js";import"./index-iPWmtVBe.js";import{f as d}from"./effect-fade-element-Dkwm1YZ3.js";import"./iframe-DKNI9sP2.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u=p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",fill:"none",children:p.jsx("path",{d:"M10.2463 3.5C10.6625 3.5 11 3.83747 11 4.25375V10.8934C11 10.9601 10.9735 11.024 10.9264 11.0711C10.8283 11.1692 10.6692 11.1692 10.5711 11.0711L9 9.5H4.25375C3.83747 9.5 3.5 9.16253 3.5 8.74625V8H7.9925C8.82507 8 9.5 7.32507 9.5 6.4925V3.5H10.2463ZM7.495 1.5C8.05005 1.5 8.5 1.94995 8.5 2.505V6.24625C8.5 6.66253 8.16253 7 7.74625 7H3L1.42891 8.57109C1.38179 8.61821 1.31789 8.64468 1.25125 8.64468C1.11249 8.64468 1 8.53219 1 8.39343V2.25375C1 1.83747 1.33747 1.5 1.75375 1.5H7.495Z",fill:"#FEEAC9"})}),v={title:"Shared/UI/TextInput",component:d,parameters:{layout:"centered"},argTypes:{size:{control:{type:"radio",options:["s","m"]},description:"Размер компонента (s или m)"},isHideMode:{control:!1,description:"Режим скрытия пароля"},isDisabled:{control:{type:"boolean"},description:"Отключенное состояние"},mode:{control:{type:"radio",options:["normal","success","error"]},description:"Режим отображения (normal, success, error)"},placeholder:{control:{type:"text"},description:"Текст плейсхолдера"},message:{control:{type:"text"},description:"Сообщение под полем ввода"},icon:{control:{type:"object"},description:"Иконка слева от поля ввода"},onChange:{action:"changed",description:"Обработчик изменения значения"}},args:{size:"m",isHideMode:!1,isDisabled:!1,mode:"normal",placeholder:"",message:"",icon:void 0,onChange:m()}},e={},r={args:{placeholder:"Введите текст..."}},s={args:{placeholder:"Введите текст..."},play:async({canvasElement:l})=>{const i=l.querySelector("input");i&&(i.value="Привет, мир!",i.dispatchEvent(new Event("input",{bubbles:!0})))}},o={args:{isDisabled:!0,placeholder:"Компонент недоступен"}},a={args:{mode:"success",placeholder:"Нет ошибки",message:"Значение корректно"}},n={args:{mode:"error",placeholder:"Ошибка ввода",message:"Поле обязательно для заполнения"}},t={args:{placeholder:"Введите текст с иконкой",icon:u}},c={args:{isHideMode:!0,placeholder:"Введите пароль"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите текст...'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите текст...'
  },
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector('input');
    if (input) {
      // Имитируем ввод текста
      input.value = 'Привет, мир!';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Компонент недоступен'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'success',
    placeholder: 'Нет ошибки',
    message: 'Значение корректно'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'error',
    placeholder: 'Ошибка ввода',
    message: 'Поле обязательно для заполнения'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите текст с иконкой',
    icon: Icon
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isHideMode: true,
    placeholder: 'Введите пароль'
  }
}`,...c.parameters?.docs?.source}}};const x=["Default","WithPlaceholder","WithValue","Disabled","Success","Error","WithIcons","Password"];export{e as Default,o as Disabled,n as Error,c as Password,a as Success,t as WithIcons,r as WithPlaceholder,s as WithValue,x as __namedExportsOrder,v as default};
