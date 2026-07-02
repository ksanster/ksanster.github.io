import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./plus-icon-Bj14qal3.js";import{P as r}from"./currency-DhKs4rs7.js";import"./iframe-DKNI9sP2.js";import{i as h,j as g,B as _,k as R}from"./effect-fade-element-Dkwm1YZ3.js";import"./Checkbox-DzK9GS5W.js";import"./Switch-BL-Zkdet.js";import"./RadioInput-DNTeGRjq.js";import{C as x}from"./index-DaufU5mg.js";import{g as I}from"./getAvatarSrc-Df-It06Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJ1mgBB7.js";const j="_playerInfo_1mheq_1",E="_info_1mheq_8",N="_username_1mheq_15",b="_currency_1mheq_27",a={playerInfo:j,info:E,username:N,currency:b},i=({username:t,balances:u,customizations:m,onBalanceClick:p,isLoading:l})=>{const y=I(m),{playSfx:d}=h(),C=n=>{p?.(n)},f=()=>{d("buttonClick")};return e.jsxs("div",{className:a.playerInfo,children:[e.jsxs("div",{className:a.info,children:[e.jsx("div",{className:a.username,children:t}),e.jsx("div",{className:a.currency,children:u.map(n=>e.jsx(x,{balance:n,onClick:C},n.currency))})]}),e.jsx(g,{to:"/profile",onClick:f,children:e.jsx(_,{isLoading:l,imageSrc:y,size:"xxxl"})})]})};i.__docgenInfo={description:"",methods:[],displayName:"PlayerInfo",props:{username:{required:!0,tsType:{name:"string"},description:""},balances:{required:!0,tsType:{name:"Array",elements:[{name:"Currency"}],raw:"Currency[]"},description:""},customizations:{required:!0,tsType:{name:"PlayerCustomization"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},onBalanceClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(currency: Currency['currency']) => void",signature:{arguments:[{type:{name:"Currency['currency']",raw:"Currency['currency']"},name:"currency"}],return:{name:"void"}}},description:""}}};const A={title:"UI/PlayerInfo/PlayerInfo",component:i,tags:["autodocs"],argTypes:{username:{control:"text",description:"Name of player"},balances:{control:"object",description:"Currency balance object with currency type and amount"}},decorators:[t=>e.jsx(R,{children:e.jsx(t,{})})]},s={args:{username:"Степан Сергеевич",balances:[{currency:r.Chips,amount:153400}]}},c={args:{username:"Альфа-Янус Полуэктович Невструев-Задунайский",balances:[{currency:r.Chips,amount:153400}]}},o={args:{username:"Степан Сергеевич",balances:[{currency:r.Chips,amount:100},{currency:r.Hard,amount:1200},{currency:r.Unknown,amount:15342e4}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Степан Сергеевич',
    balances: [{
      currency: PROFILE_CURRENCY.Chips,
      amount: 153400
    }]
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Альфа-Янус Полуэктович Невструев-Задунайский',
    balances: [{
      currency: PROFILE_CURRENCY.Chips,
      amount: 153400
    }]
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    username: 'Степан Сергеевич',
    balances: [{
      currency: PROFILE_CURRENCY.Chips,
      amount: 100
    }, {
      currency: PROFILE_CURRENCY.Hard,
      amount: 1200
    }, {
      currency: PROFILE_CURRENCY.Unknown,
      amount: 153420000
    }]
  }
}`,...o.parameters?.docs?.source}}};const z=["Default","LongName","WithThreeCurrencies"];export{s as Default,c as LongName,o as WithThreeCurrencies,z as __namedExportsOrder,A as default};
