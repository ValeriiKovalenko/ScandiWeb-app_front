(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{60:function(t,e,a){},68:function(t,e,a){},70:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),r=a(32),i=a.n(r),s=a(4),o=a(5),l=a(7),u=a(6),j=(a(60),a(0)),m=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.component;return Object(j.jsx)("div",{className:"header"===t?"header-container":"main-container",children:this.props.children})}}]),a}(c.Component);m.defaultProps={component:"main-container"};var b,d=m,p=a(13),h=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"navList",children:[Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{activeClassName:"active-link",to:"/tech",children:"TECH"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{activeClassName:"active-link",to:"/clothes",children:"CLOTHES"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{activeClassName:"active-link",to:"/kids",children:"KIDS"})})]})})}}]),a}(c.Component),O=a.p+"static/media/a-logo.e2b3f410.svg",v={position:"absolute",left:"50%",top:"24px",transform:"translateX(-50%)"},y=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)(p.b,{to:"/",children:Object(j.jsx)("img",{style:v,src:O,alt:"Logo"})})}}]),a}(c.Component),f=a(34),g=a(80),x=a(82),_=new g.a({uri:"http://localhost:4000/",cache:new x.a}),N=a(81),C=_.query({query:Object(N.a)(b||(b=Object(f.a)(["\n      query GetCurrencies {\n        currencies\n      }\n    "])))}).then((function(t){return t.data.currencies})),S=a.p+"static/media/arrow-down.766d7b11.svg",k=a(37),I=a(11),w=a(26),P="ADD_TO_CART",A="REMOVE_FROM_CART",z="CHANGE_ATTRIBUTES",T=JSON.parse(localStorage.getItem("cart"))||[];var V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P:var a=t.find((function(t){return t.name===e.items.name}));if(a){var c=t.find((function(t){return t.name===e.items.name}));return c.quantity++,c.totalPrice=(c.quantity*c.fullPrice).toFixed(2),localStorage.setItem("cart",JSON.stringify(Object(w.a)(t))),Object(w.a)(t)}return localStorage.setItem("cart",JSON.stringify([].concat(Object(w.a)(t),[Object(I.a)(Object(I.a)({},e.items),{},{quantity:1})]))),[].concat(Object(w.a)(t),[Object(I.a)(Object(I.a)({},e.items),{},{quantity:1})]);case A:var n=t.find((function(t){return t.name===e.items.name}));n.quantity--,n.totalPrice=(n.quantity*n.fullPrice).toFixed(2);var r=t.indexOf(n);return 0===n.quantity&&t.splice(r,1),localStorage.setItem("cart",JSON.stringify(Object(w.a)(t))),Object(w.a)(t);case z:var i=e.attributes.attributeName,s=e.attributes.itemName,o=t.find((function(t){return t.name===s}));return o[i]=e.attributes,t;default:return t}},q="currency was changed",B=localStorage.getItem("currency")||"$";var D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q:return{value:e.value};default:return t}},M="ITEM_PAGE_CHANGE";var F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case M:return{value:e.value};default:return t}},U=Object(k.a)({cart:V,currency:D,itemPage:F}),E=Object(k.b)(U);var H=function(t){return{type:q,value:t}},L=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={currency:localStorage.getItem("currency")||"$",isHidden:!0,currencies:[],symbols:{USD:"$",JPY:"\xa5",GBP:"\xa3",AUD:"A$",RUB:"\u20bd"}},t.toggleList=function(){t.setState((function(t){return{isHidden:!t.isHidden}}))},t.chooseCurency=function(e){t.setState({currency:e.target.dataset.value,isHidden:!0}),_.currency=e.target.dataset.value},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;C.then((function(e){return t.setState({currencies:e})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this.state,c=a.currency,n=a.symbols,r=Object.keys(n).find((function(t){return n[t]===c}));E.dispatch(H({currency:c,currencyName:r})),localStorage.setItem("currency",this.state.currency),localStorage.setItem("currencyName",r)}},{key:"render",value:function(){var t=this.toggleList,e=this.chooseCurency,a=this.state,c=a.currency,n=a.isHidden,r=a.currencies,i=a.symbols,s=["arrow",n?"arrowDown":"arrowUp"].join(" ");return Object(j.jsxs)("div",{className:"currencyPicker",children:[Object(j.jsxs)("button",{type:"button",className:"currencyPicker__btn",onClick:t,children:[c," ",Object(j.jsx)("img",{className:s,src:S,alt:""})]}),Object(j.jsx)("ul",{onClick:e,className:n?"hidden":"active-list",children:r.map((function(t){return Object(j.jsxs)("li",{className:"currency","data-value":i[t],children:[i[t]," ",t]},t)}))})]})}}]),a}(c.Component),R=a.p+"static/media/cart.e425fd9b.svg",J=a(24),W=a.n(J),G=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={checked:!1},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t,e;(null===(t=this.props)||void 0===t||null===(e=t.userSize)||void 0===e?void 0:e.value)===this.props.displayValue&&this.setState({checked:!0})}},{key:"render",value:function(){var t,e,a=this.props,c=a.id,n=a.displayValue,r=a.location,i=a.attributeName,s=a.getAttributesValue,o=a.miniCart,l=a.productName;return Object(j.jsxs)("div",{className:"".concat("page"===r?"page__sizeInputBox":"cart__sizeInputBox"),children:[Object(j.jsx)("input",{checked:(null===(t=this.props)||void 0===t||null===(e=t.userSize)||void 0===e?void 0:e.value)===this.props.displayValue,onChange:function(t){o&&s(i,n)},id:n+c,className:"".concat("page"===r?"page__sizeInput":"cart__sizeInput"),name:l+c,type:"radio",value:n}),Object(j.jsx)("label",{className:"".concat("page"===r?"page__sizeLabel":"cart__sizeLabel"),htmlFor:n+c,children:n})]})}}]),a}(c.Component),$=a(83),Y=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={id:Object($.a)(),size:""},t.getSize=function(e){t.setState({size:e.target.value})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.attributes,a=t.itemName,c=t.location,n=void 0===c?"cart":c,r=t.getAttributesValue,i=t.userSize,s=t.miniCart,o=t.productName,l=this.state.size,u=this.getSize;return Object(j.jsx)("div",{className:"".concat("page"===n?"page__sizeControler":"cart__sizeControler"),children:e.map((function(t){var e=t.name;return t.items.map((function(t){var c=t.displayValue;return Object(j.jsx)(G,{miniCart:s,getAttributesValue:r,userSize:i,id:a,size:l,location:n,displayValue:c,itemName:a,getSize:u,attributeName:e,productName:o},Object($.a)())}))}))})}}]),a}(c.Component),K=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.displayValue,e=this.props.value,a=this.props.data,c=a.miniCart,n=a.getAttributesValue,r=a.itemName,i=a.id,s=a.color;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{checked:s===e,onChange:function(){return c&&n("Color",e)},id:t+i,name:i+r,type:"radio",value:t}),Object(j.jsx)("label",{style:{backgroundColor:e},htmlFor:t+i})]})}}]),a}(c.Component),X=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props.data;return Object(j.jsx)("div",{className:"swatchControler",children:e.map((function(e){var a=e.value,c=e.displayValue;return Object(j.jsx)("div",{className:"swatchControler__box",children:Object(j.jsx)(K,{data:t.props,value:a,displayValue:c})},Object($.a)())}))})}}]),a}(c.Component),Q=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.value,e=this.props.userCapacity,a=this.props.data,c=a.miniCart,n=a.getAttributesValue,r=a.itemName,i=a.id,s=a.name;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{checked:e===t,onChange:function(){return c&&n(s,t)},id:t+i,name:r+i,type:"radio",value:t}),Object(j.jsx)("label",{htmlFor:t+i,children:t})]})}}]),a}(c.Component),Z=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.data,c=e.name,n=e.miniCart,r=e.capacity;return"Capacity"!==c&&("With USB 3 ports"!==c&&"Touch ID in keyboard"!==c||n)?null:Object(j.jsx)("div",{className:"textControler",children:a.map((function(e){var a=e.value;return Object(j.jsx)("div",{className:"textControler__box",children:Object(j.jsx)(Q,{data:t.props,value:a,userCapacity:r})},Object($.a)())}))})}}]),a}(c.Component),tt=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={id:Object($.a)(),miniCart:!0},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.attributes,a=t.itemName,c=t.getAttributesValue,n=t.Color,r=t.Capacity,i=this.state,s=i.id,o=i.miniCart;return Object(j.jsx)(j.Fragment,{children:e.map((function(t){var e=t.type,i=t.items,l=t.name;return"swatch"===e?Object(j.jsx)(X,{data:i,id:s,itemName:a,getAttributesValue:c,miniCart:o,color:null===n||void 0===n?void 0:n.value},Object($.a)()):"text"!==e||Object(j.jsx)(Z,{getAttributesValue:c,data:i,name:l,id:s,itemName:a,miniCart:o,capacity:null===r||void 0===r?void 0:r.value},Object($.a)())}))})}}]),a}(c.Component);var et=function(t){return{type:P,items:t}};var at=function(t){return{type:A,items:t}};var ct=function(t){return{type:z,attributes:t}},nt=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={name:t.props.data.name,attributesValue:{}},t.addMoreItems=function(){E.dispatch(et(Object(I.a)({},t.props.data)))},t.takeOneFromCart=function(){E.dispatch(at(Object(I.a)({},t.props.data)))},t.getAttributesValue=function(e,a){E.dispatch(ct({itemName:t.props.data.name,attributeName:e,value:a}))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.data,e=t.name,a=t.fullPrice,c=t.gallery,n=t.attributes,r=t.currency,i=t.category,s=t.quantity,o=t.totalPrice,l=t.Color,u=t.Size,m=t.Capacity,b=this.addMoreItems,d=this.takeOneFromCart,p=this.getAttributesValue;return Object(j.jsxs)("li",{className:"cart__item",children:[Object(j.jsxs)("div",{className:"cart__item-info",children:[Object(j.jsx)("h4",{className:"cart__item-title",children:e}),Object(j.jsxs)("span",{children:[r,o||a]}),"clothes"===i&&Object(j.jsx)(Y,{userSize:u,attributes:n,itemName:e,getAttributesValue:p,miniCart:!0}),"tech"===i&&Object(j.jsx)(tt,{attributes:n,itemName:e,getAttributesValue:p,Color:l,Capacity:m})]}),Object(j.jsxs)("div",{className:"cart__item-quantity",children:[Object(j.jsx)("button",{onClick:b,className:"cart__item-quantity__btn plus",type:"button",children:Object(j.jsx)("span",{})}),Object(j.jsx)("span",{children:s}),Object(j.jsx)("button",{onClick:d,className:"cart__item-quantity__btn minus",type:"button",children:Object(j.jsx)("span",{})})]}),Object(j.jsx)("div",{className:"cart__item-img",children:Object(j.jsx)("img",{width:"30",src:null===c||void 0===c?void 0:c[0],alt:""})})]})}}]),a}(c.Component);nt.protoTypes={data:W.a.object.isRequired};var rt,it=nt,st={home:"/",tech:"/tech",clothes:"/clothes",techItem:"/tech/:id",clothesItem:"/clothes/:id",cart:"/cart"},ot=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={items:JSON.parse(localStorage.getItem("cart"))||[],menuIsOpen:!1,total:0,currency:""},t.toggleCartMenu=function(){t.setState((function(t){return{menuIsOpen:!t.menuIsOpen}})),t.state.menuIsOpen?window.onscroll=null:(window.scrollTo({top:0,behavior:"auto"}),window.onscroll=function(){return window.scrollTo({top:0,behavior:"auto"})})},t.countTotal=function(e){var a=e.reduce((function(t,e){return t+e.quantity*e.fullPrice}),0).toFixed(2),c=E.getState().currency.value.currency;t.setState({total:a,currency:c})},t.closeOverlay=function(e){e.target===e.currentTarget&&t.toggleCartMenu()},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;E.subscribe((function(){var e=E.getState().cart;t.setState({items:e}),t.countTotal(e)}))}},{key:"componentWillUnmount",value:function(){this.setState=function(){}}},{key:"render",value:function(){var t=this.state,e=t.items,a=t.menuIsOpen,c=t.total,n=t.currency,r=this.toggleCartMenu,i=this.closeOverlay,s=["cart__menu",a?"":"hidden"].join(" ");return Object(j.jsxs)("div",{className:"cart",children:[Object(j.jsxs)("button",{className:"cart__btn",type:"button",onClick:r,children:[e.length>0&&Object(j.jsx)("div",{className:"cart__counter",children:e.length}),Object(j.jsx)("img",{className:"cart__icon",src:R,alt:""})]}),Object(j.jsx)("div",{className:s,children:Object(j.jsx)("div",{onClick:i,className:"cart__overlay",children:Object(j.jsxs)("div",{className:"cart__feeling",children:[Object(j.jsxs)("h3",{className:"cart__feeling-title",children:["My Bag,"," ",Object(j.jsxs)("span",{className:"cart__feeling-count",children:[e.length," ",e.length>1||0===e.length?"items":"item"]})]}),Object(j.jsx)("ul",{className:"cart__list",children:e.map((function(t){return Object(j.jsx)(it,{data:t},Object($.a)())}))}),Object(j.jsxs)("div",{className:"cart__total-price",children:[Object(j.jsx)("span",{className:"cart__total-price__title",children:"Total"}),Object(j.jsxs)("span",{className:"cart__total-price__price",children:[n,c]})]}),e.length>0&&Object(j.jsxs)("div",{className:"cart__controls",children:[Object(j.jsxs)(p.b,{to:st.cart,children:[" ",Object(j.jsx)("button",{onClick:r,type:"button",className:"cart__controls-bag",children:"VIEW BAG"})]}),Object(j.jsx)("button",{type:"button",className:"cart__controls-check",children:"CHECK OUT"})]})]})})})]})}}]),a}(c.Component),lt=(a(68),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"userBar",children:[Object(j.jsx)(L,{}),Object(j.jsx)(ot,{})]})}}]),a}(c.Component)),ut=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)(d,{component:"header",children:[Object(j.jsx)(h,{}),Object(j.jsx)(y,{}),Object(j.jsx)(lt,{})]})})}}]),a}(c.Component);function jt(){return _.query({query:Object(N.a)(rt||(rt=Object(f.a)(["\n        ","\n      "])),"{\n  category {\n    products {\n      name\n      gallery\n      description\n      category\n      attributes{\n        id\n        name\n        type\n        items {\n          displayValue\n          value\n          id\n        }\n      }\n      prices {\n        amount\n        currency\n      }\n      inStock\n    }\n  }\n}\n")}).then(mt).then((function(t){return t.category.products}))}function mt(t){return t.data}var bt=a.p+"static/media/emptyCart.e4a558c4.svg";var dt=function(t){return{type:M,value:t}},pt=a(20),ht=(a(49),a(50),a(51),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={currency:localStorage.getItem("currency")||E.getState().currency.value||"$",currencyName:localStorage.getItem("currencyName")||E.getState().currency.value||"USD",fullPrice:""},t.addToCart=function(){var e,a=null===(e=t.props.item.prices)||void 0===e?void 0:e.find((function(e){return e.currency===t.state.currencyName})).amount,c=t.state.currency;E.dispatch(et(Object(I.a)(Object(I.a)({},t.props.item),{},{fullPrice:a,currency:c}))),pt.defaults.styling="material",pt.defaults.icons="material",Object(pt.success)({title:"You put ".concat(t.props.item.name," in your cart"),animateSpeed:"fast",delay:1500,sticker:!1})},t.putInStore=function(){var e,a=null===(e=t.props.item.prices)||void 0===e?void 0:e.find((function(e){return e.currency===t.state.currencyName})).amount,c=t.state.currency;E.dispatch(dt(Object(I.a)(Object(I.a)({},t.props.item),{},{fullPrice:a,currency:c})))},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;E.subscribe((function(){var e,a;return t.setState({currency:null===(e=E.getState().currency.value)||void 0===e?void 0:e.currency,currencyName:null===(a=E.getState().currency.value)||void 0===a?void 0:a.currencyName})}))}},{key:"componentWillUnmount",value:function(){this.setState=function(t,e){}}},{key:"render",value:function(){var t,e=this.state,a=e.currency,c=e.currencyName,n=this.props,r=n.item,i=n.from,s=r.name,o=r.prices,l=r.gallery,u=this.addToCart,m=this.putInStore,b=null===o||void 0===o||null===(t=o.find((function(t){return t.currency===c})))||void 0===t?void 0:t.amount;return Object(j.jsxs)("li",{className:"productItem",children:[Object(j.jsxs)(p.b,{to:i+"/"+s.split(" ").join("_"),onClick:m,children:[Object(j.jsx)("div",{className:"frame",children:Object(j.jsx)("img",{className:"productItem__img",src:l[0],alt:""})}),Object(j.jsx)("h4",{children:s}),Object(j.jsxs)("span",{children:[a," ",b]})]}),Object(j.jsx)("button",{onClick:u,type:"button",className:"addToCartBtn",children:Object(j.jsx)("img",{className:"productItem__icon",width:"24",height:"24",src:bt,alt:""})})]})}}]),a}(c.Component)),Ot=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={results:[]},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;jt().then((function(e){return t.setState({results:e})}))}},{key:"render",value:function(){var t=this.state.results,e=this.props,a=e.category,c=e.from;return Object(j.jsx)("ul",{className:"productList",children:t.map((function(t){return t.category===a&&Object(j.jsx)(ht,{from:c,item:t,choosenCurrency:_.currency},Object($.a)())}))})}}]),a}(c.Component),vt=a(10),yt=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.category,a=t.location;return Object(j.jsxs)("section",{className:"products",children:[Object(j.jsx)("h2",{className:"products__title",children:e.toUpperCase()}),Object(j.jsx)(Ot,{category:e,from:a.pathname})]})}}]),a}(c.Component),ft=Object(vt.e)(yt),gt=a(45),xt=a.n(gt),_t=a(54),Nt=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={activeImg:""},t.openImage=function(e){var a=e.target.dataset.main;t.setState({activeImg:a})},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t,e;this.setState({activeImg:null===(t=this.props)||void 0===t||null===(e=t.gallery)||void 0===e?void 0:e[0]})}},{key:"render",value:function(){var t=this.openImage,e=this.props.gallery,a=this.state.activeImg;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"itemPage__gallery",children:null===e||void 0===e?void 0:e.map((function(e){return Object(j.jsx)("div",{className:"itemPage__gallery-box",children:Object(j.jsx)("img",{"data-main":e,onClick:t,width:"100",src:e,alt:""})},Object($.a)())}))}),Object(j.jsx)("div",{className:"itemPage__main-img",children:Object(j.jsx)("img",{src:a||(null===e||void 0===e?void 0:e[0]),alt:""})})]})}}]),a}(c.Component);Nt.defaultProps={gallery:[]};var Ct=Nt,St=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={item:{},itemName:"",size:"",price:"",currency:""},t.getPrice=function(){var e=t.state.item.prices,a=localStorage.getItem("currencyName"),c=null===e||void 0===e?void 0:e.find((function(t){return t.currency===a})).amount,n=localStorage.getItem("currency");t.setState({price:c,currency:n}),E.subscribe((function(){a=E.getState().currency.value.currencyName||localStorage.getItem("currencyName");var c=E.getState().currency.value.currency,n=null===e||void 0===e?void 0:e.find((function(t){return t.currency===a})).amount;t.setState({price:n,currency:c})}))},t.getAttributesValue=function(e,a){E.dispatch(ct({itemName:t.state.itemName,attributeName:e,value:a}))},t.addToCart=function(){E.dispatch(et(Object(I.a)(Object(I.a)({},t.state.item),{},{fullPrice:t.state.price,currency:t.state.currency}))),pt.defaults.styling="material",pt.defaults.icons="material",Object(pt.success)({title:"You put ".concat(t.state.item.name," in your cart"),animateSpeed:"fast",delay:1500,sticker:!1})},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=Object(_t.a)(xt.a.mark((function t(){var e=this;return xt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({itemName:this.props.match.params.id.split("_").join(" ")});case 2:return t.next=4,jt().then((function(t){var a=t.find((function(t){return t.name===e.state.itemName}));e.setState({item:a})}));case 4:""===this.state.price&&this.getPrice();case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setState=function(t,e){}}},{key:"render",value:function(){var t=this.getSize,e=this.addToCart,a=this.getAttributesValue,c=this.state,n=c.item,r=c.price,i=c.currency,s=c.itemName,o=n.name,l=n.gallery,u=n.attributes,m=n.description;return Object(j.jsxs)("article",{className:"itemPage",children:[Object(j.jsx)(Ct,{gallery:l}),Object(j.jsxs)("div",{className:"itemPage__info",children:[Object(j.jsx)("h2",{className:"itemPage__info-title",children:o}),null===u||void 0===u?void 0:u.map((function(e){var c=e.name,n=(e.type,e.items);return"Size"===c?Object(j.jsxs)("div",{className:"sizeBar",children:[Object(j.jsxs)("h3",{className:"itemPage__attribute-title",children:[c,":"]})," ",Object(j.jsx)(Y,{getSize:t,attributes:u,itemName:c,location:"page",getAttributesValue:a})]},Object($.a)()):"Color"===c?Object(j.jsxs)("div",{className:"colorBar",children:[Object(j.jsxs)("h3",{className:"itemPage__attribute-title",children:[c,":"]})," ",Object(j.jsx)(X,{data:n,id:Object($.a)(),itemName:s})]},Object($.a)()):"Capacity"===c||"With USB 3 ports"===c||"Touch ID in keyboard"===c?Object(j.jsxs)("div",{className:"settingsBar",children:[Object(j.jsxs)("h3",{className:"itemPage__attribute-title",children:[c,":"]})," ",Object(j.jsx)(Z,{data:n,name:c,id:Object($.a)(),itemName:s},Object($.a)())]},Object($.a)()):null})),Object(j.jsxs)("h3",{className:"itemPage__info-price",children:[Object(j.jsx)("span",{className:"itemPage__info-price-title",children:"Price:"}),Object(j.jsxs)("span",{children:[i,r]})]}),Object(j.jsx)("button",{onClick:e,className:"itemPage__info-btn",children:"ADD TO CART"}),Object(j.jsx)("div",{className:"itemPage__info-descr",dangerouslySetInnerHTML:{__html:m}})]})]})}}]),a}(c.Component),kt=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={idx:0},t.swipeForward=function(){var e=t.state.idx,a=t.props.gallery;t.setState((function(t){var c=a.length-1;return e<c?{idx:t.idx+1}:{idx:0}}))},t.swipeBack=function(){var e=t.state.idx,a=t.props.gallery;t.setState((function(t){var c=a.length-1;return e>0?{idx:t.idx-1}:{idx:c}}))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.gallery,a=t.name,c=this.state.idx,n=this.swipeForward,r=this.swipeBack;return Object(j.jsxs)("div",{className:"cart__item-gallery",children:[Object(j.jsx)("img",{src:e[c],alt:a}),e.length>1&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"cart__item-gallery-btn left",onClick:r}),Object(j.jsx)("button",{type:"button",className:"cart__item-gallery-btn right",onClick:n})]})]})}}]),a}(c.Component),It=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).addMoreItems=function(){E.dispatch(et(Object(I.a)({},t.props.item)))},t.takeOneFromCart=function(){E.dispatch(at(Object(I.a)({},t.props.item)))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props.item,a=e.name,c=e.category,n=e.currency,r=e.totalPrice,i=e.attributes,s=e.quantity,o=e.gallery,l=e.fullPrice,u=e.Color,m=e.Capacity,b=e.Size,d=this.addMoreItems,h=this.takeOneFromCart,O=a.split(" ").join("_");return Object(j.jsxs)("div",{className:"cartPageItem",children:[Object(j.jsxs)("div",{className:"cartPageItem__info",children:[Object(j.jsx)("h3",{className:"cartPageItem__name",children:Object(j.jsxs)(p.b,{to:"/".concat(c,"/").concat(O),children:[a," "]})}),Object(j.jsx)("span",{className:"cartPageItem__price",children:n+(r||l)}),null===i||void 0===i?void 0:i.map((function(e){var a=e.name,c=(e.type,e.items);return"Size"===a?Object(j.jsxs)("div",{className:"sizeBar",children:[Object(j.jsxs)("h3",{className:"itemPage__attribute-title",children:[a,":"]})," ",Object(j.jsx)(Y,{userSize:b,attributes:i,itemName:a,location:"page",productName:t.props.item.name,miniCart:!1})]},Object($.a)()):"Color"===a?Object(j.jsxs)("div",{className:"colorBar",children:[Object(j.jsxs)("h3",{className:"itemPage__attribute-title",children:[a,":"]})," ",Object(j.jsx)(X,{data:c,id:Object($.a)(),itemName:a,color:null===u||void 0===u?void 0:u.value})]},Object($.a)()):"Capacity"===a||"With USB 3 ports"===a||"Touch ID in keyboard"===a?Object(j.jsxs)("div",{className:"settingsBar",children:[Object(j.jsxs)("h3",{className:"itemPage__attribute-title",children:[a,":"]})," ",Object(j.jsx)(Z,{capacity:null===m||void 0===m?void 0:m.value,data:c,name:a,id:Object($.a)(),itemName:a},Object($.a)())]},Object($.a)()):null}))]}),Object(j.jsxs)("div",{className:"cartPageItem__controls",children:[Object(j.jsxs)("div",{className:"cart__item-quantity",children:[Object(j.jsx)("button",{type:"button",className:"cart__item-quantity__btn plus",onClick:d}),Object(j.jsx)("span",{children:s}),Object(j.jsx)("button",{type:"button",className:"cart__item-quantity__btn minus",onClick:h})]}),Object(j.jsx)(kt,{gallery:o,name:a})]})]})}}]),a}(c.Component),wt=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={items:[]},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=E.getState().cart;this.setState({items:e}),E.subscribe((function(){e=E.getState().cart,t.setState({items:e})}))}},{key:"componentWillUnmount",value:function(){this.setState=function(t,e){}}},{key:"render",value:function(){var t=this.state.items;return Object(j.jsxs)("section",{className:"cartPage",children:[Object(j.jsx)("h2",{className:"cartPage__title",children:"CART"}),t.length>0&&t.map((function(t){return Object(j.jsx)(It,{item:t},Object($.a)())}))||Object(j.jsx)("h3",{children:"Your cart is empty"})]})}}]),a}(c.Component),Pt=(a(70),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(vt.a,{path:st.home,component:ut}),Object(j.jsxs)(d,{children:[Object(j.jsx)(vt.a,{path:st.techItem,component:St}),Object(j.jsx)(vt.a,{exact:!0,path:st.tech,children:Object(j.jsx)(ft,{category:"tech"})}),Object(j.jsx)(vt.a,{path:st.clothesItem,component:St}),Object(j.jsx)(vt.a,{exact:!0,path:st.clothes,children:Object(j.jsx)(ft,{category:"clothes"})}),Object(j.jsx)(vt.a,{path:st.cart,component:wt})]})]})}}]),a}(c.Component)),At=a(85),zt=a(55);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p.a,{children:Object(j.jsx)(At.a,{client:_,children:Object(j.jsx)(zt.a,{store:E,children:Object(j.jsx)(Pt,{})})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.94ed33bd.chunk.js.map