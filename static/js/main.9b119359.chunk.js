(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),s=n(2),r=n(3),c=n(5),o=n(4),l=n(1),u=n.n(l),h=(n(12),n(13),n(0)),m=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={shift:0},t}return Object(r.a)(n,[{key:"next",value:function(t,e,n,i){var a=t*(n-e),s=t*e;this.setState((function(t){return i&&t.shift===-a?{shift:0}:{shift:Math.max(t.shift-s,-a)}}))}},{key:"prev",value:function(t,e,n,i){var a=t*(n-e),s=t*e;this.setState((function(t){return i&&0===t.shift?{shift:-a}:{shift:Math.min(t.shift+s,0)}}))}},{key:"render",value:function(){var t=this,e=this.props,n=e.images,i=e.frameSize,a=e.itemWidth,s=e.step,r=e.animationDuration,c=e.infinite,o=this.state.shift;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"Carousel",style:{width:a*i},children:Object(h.jsx)("ul",{className:"Carousel__list",style:{transition:"transform ".concat(r,"ms ease"),transform:"translateX(".concat(o,"px)")},children:n.map((function(t,e){return Object(h.jsx)("li",{className:"Carousel__item",children:Object(h.jsx)("img",{src:t,alt:"".concat(e)})},t)}))})}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",onClick:function(){t.prev(a,s,n.length,c)},children:"Prev"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.next(a,s,n.length,c)},children:"Next"})]})]})}}]),n}(u.a.Component),p=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{className:"App__title",children:["Carousel with ",t.length," images"]}),Object(h.jsx)(m,{images:t,frameSize:3,itemWidth:130,step:3,animationDuration:1e3,infinite:!0})]})}}]),n}(u.a.Component);a.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9b119359.chunk.js.map