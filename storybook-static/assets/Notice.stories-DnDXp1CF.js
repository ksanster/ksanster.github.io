import{j as l}from"./jsx-runtime-u17CrQMm.js";import{N as m}from"./effect-fade-element-Dkwm1YZ3.js";import{r as u}from"./iframe-DKNI9sP2.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";import"./preload-helper-PPVm8Dsz.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,V={title:"Shared/UI/Notice",component:m,argTypes:{type:{control:"radio",options:["info","warning","error"],description:"Тип уведомления",table:{defaultValue:{summary:"info"}}},delay:{control:"number",description:"Время до автоматического закрытия (секунды)",table:{defaultValue:{summary:"5"}}},prefix:{control:"boolean",description:"Отображать заголовок перед текстом уведомления",table:{defaultValue:{summary:"false"}}},closeable:{control:"boolean",description:"Отображать кнопку закрытия",table:{defaultValue:{summary:"true"}}},children:{control:"text",description:"Содержимое уведомления"}},args:{type:"info",delay:5,prefix:!1,closeable:!0,children:"Это информационное уведомление",onClose:g()}},n={args:{type:"info",children:"Это информационное уведомление"}},t={args:{type:"warning",children:"Пожалуйста, обратите внимание"}},o={args:{type:"error",children:"Произошла ошибка при выполнении операции"}},s={args:{type:"info",children:"Уведомление с кнопкой закрытия",closeable:!0}},i={args:{type:"info",children:"Уведомление без кнопки закрытия",closeable:!1}},a={render:r=>{const[p,d]=u.useState(!0);return p?l.jsx(m,{...r,onClose:()=>d(!1),children:r.children}):l.jsx("div",{children:"Уведомление скрыто"})},args:{type:"info",children:"Нажмите кнопку закрытия, чтобы скрыть уведомление",delay:10,prefix:!0}},c={render:()=>{const[r,p]=u.useState([{id:1,type:"info",message:"Информационное уведомление"},{id:2,type:"warning",message:"Предупреждение"},{id:3,type:"error",message:"Ошибка"}]),d=e=>{p(r.filter(f=>f.id!==e))};return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:r.map(e=>l.jsx(m,{type:e.type,onClose:()=>d(e.id),children:e.message},e.id))})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: 'Это информационное уведомление'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    children: 'Пожалуйста, обратите внимание'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    children: 'Произошла ошибка при выполнении операции'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: 'Уведомление с кнопкой закрытия',
    closeable: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: 'Уведомление без кнопки закрытия',
    closeable: false
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible) {
      return <div>Уведомление скрыто</div>;
    }
    return <Notice {...args} onClose={() => setIsVisible(false)}>
        {args.children}
      </Notice>;
  },
  args: {
    type: 'info',
    children: 'Нажмите кнопку закрытия, чтобы скрыть уведомление',
    delay: 10,
    prefix: true
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = useState([{
      id: 1,
      type: 'info',
      message: 'Информационное уведомление'
    }, {
      id: 2,
      type: 'warning',
      message: 'Предупреждение'
    }, {
      id: 3,
      type: 'error',
      message: 'Ошибка'
    }]);
    const removeNotification = (id: number) => {
      setNotifications(notifications.filter(n => n.id !== id));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        {notifications.map(notification => <Notice key={notification.id} type={notification.type as 'info' | 'warning' | 'error'} onClose={() => removeNotification(notification.id)}>
            {notification.message}
          </Notice>)}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const C=["Info","Warning","Error","WithCloseButton","WithoutCloseButton","InteractiveExample","MultipleNotifications"];export{o as Error,n as Info,a as InteractiveExample,c as MultipleNotifications,t as Warning,s as WithCloseButton,i as WithoutCloseButton,C as __namedExportsOrder,V as default};
