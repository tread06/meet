(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{206:function(e,t,n){},208:function(e,t,n){},227:function(e,t,n){},390:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(68),i=n.n(o),s=(n(206),n(22)),c=n.n(s),l=n(48),u=n(27),d=n(33),h=n(28),f=n(29),p=(n(208),n(2)),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={detailsHidden:!0},e.toggleDetails=function(){var t=!e.state.detailsHidden;e.setState({detailsHidden:t})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"event",children:[Object(p.jsx)("h2",{className:"event-name",children:this.props.event.summary}),Object(p.jsx)("div",{className:"divider"}),Object(p.jsx)("p",{className:"event-date-time",children:this.props.event.start.dateTime}),Object(p.jsx)("p",{className:"event-location",children:this.props.event.location}),!this.state.detailsHidden&&Object(p.jsxs)("div",{className:"event-details",children:[Object(p.jsx)("div",{className:"divider"}),Object(p.jsx)("p",{className:"event-description",children:this.props.event.description})]}),Object(p.jsx)("button",{className:"toggle-details-button",onClick:this.toggleDetails,children:this.state.detailsHidden?"Show Details":"Hide Details"})]})}}]),n}(a.Component),m=v,b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events.slice(0,this.props.count);return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(m,{event:e})},e.id)}))})}}]),n}(a.Component),j=b,g=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#1e3c74",a}return n}(g),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#cc1f00",a}return n}(g),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleClick=function(t){document.querySelector(".suggestions").contains(t.target)||e.setState({showSuggestions:!1})},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"City was not found. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)("label",{for:"city",children:"City Search"}),Object(p.jsx)(w,{text:this.state.infoText}),Object(p.jsx)("input",{id:"city",type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Search cities"}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:"See all cities"},"all")]})]})}}]),n}(a.Component),y=x,k=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value,a="";(n<=0||n>32)&&(a="Select a number from 1 to 32"),e.setState({numberOfEvents:n,errorText:a}),e.props.updateEventCount(n)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"NumberOfEvents",children:[Object(p.jsx)("label",{className:"numberLabel",for:"numberEvents",children:"Number of Events"}),Object(p.jsx)("input",{id:"numberEvents",type:"number",className:"number-input",value:this.state.numberOfEvents,onChange:this.handleInputChanged,min:"0"}),Object(p.jsx)(O,{text:this.state.errorText})]})}}]),n}(a.Component),S=k,C=n(195),N=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],T=n(122),E=n.n(T),L=n(77),A=n.n(L),W=function(e){var t=e.map((function(e){return e.location}));return Object(C.a)(new Set(t))},Z=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return A.a.done(),e.abrupt("return",N);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),A.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,I();case 10:if(!(n=e.sent)){e.next=20;break}return D(),a="https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,E.a.get(a);case 16:return(r=e.sent).data&&(o=W(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),A.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&B(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},B=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){return Object(p.jsx)("div",{className:"banner",children:Object(p.jsx)("h1",{className:"banner-text",children:"~MeetApp~"})})},q=n(193);n(227);var J=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("div",{className:"spacer",children:" "}),Object(p.jsx)("h2",{children:"Welcome to"}),Object(p.jsx)("h1",{children:"MeetApp"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{className:"google-btn",children:[Object(p.jsx)("div",{className:"google-icon-wrapper",children:Object(p.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://tread06.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},U=n(391),F=n(392),z=n(396),H=n(187),_=n(188),P=n(80),G=n(196);function Y(e){var t=function(e){var t=e.active,n=e.payload;e.label;return t&&n&&n.length?Object(p.jsxs)("div",{className:"custom-chart-tooltip",children:[Object(p.jsx)("p",{className:"tooltip-label",children:"".concat(n[0].value)}),Object(p.jsx)("p",{className:"tooltip-number",children:"Events: ".concat(n[1].value)})]}):null};return Object(p.jsx)(U.a,{className:"event-chart",height:400,children:Object(p.jsxs)(F.a,{width:800,height:400,margin:{top:20,right:50,bottom:20,left:5},children:[Object(p.jsx)(z.a,{stroke:"#f89982"}),Object(p.jsx)(H.a,{type:"category",dataKey:"city",name:"city",stroke:"#cc1f00"}),Object(p.jsx)(_.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1,stroke:"#cc1f00"}),Object(p.jsx)(P.a,{content:Object(p.jsx)(t,{})}),Object(p.jsx)(G.a,{data:e.data,fill:"#cc1f00"})]})})}var K=n(20),V=n(398),X=n(189),Q=n(97);var $=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(K.a)(n,2),o=r[0],i=r[1],s=["#AC92EB","#4FC1EB","#A0D568","#FFCE54","#ED5564"];Object(a.useEffect)((function(){for(var e=["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.includes(e)})).length;return{name:e,value:n}})),n=e.length-1;n>=0;--n)e[n].value<=0&&e.splice(n,1);i(e)}),[t]);var c=Math.PI/180;return Object(p.jsx)(U.a,{className:"event-pie-chart",height:400,children:Object(p.jsx)(V.a,{width:400,height:400,children:Object(p.jsx)(X.a,{isAnimationActive:!1,data:o,cy:200,labelLine:!1,outerRadius:80,fill:"#cc1f00",dataKey:"value",label:function(e){var t=e.cx,n=e.cy,a=e.midAngle,r=e.innerRadius,o=e.outerRadius,i=e.percent,s=(e.index,e.name),l=r+.5*(o-r),u=t+l*Math.cos(-a*c),d=n+l*Math.sin(-a*c);return Object(p.jsx)("text",{className:"pie-text",x:u,y:d,fill:"#000",textAnchor:u>t?"start":"end",dominantBaseline:"central",children:"".concat(s," ").concat((100*i).toFixed(0),"%")})},children:o.map((function(e,t){return Object(p.jsx)(Q.a,{fill:s[t%s.length]},"cell-".concat(t))}))})})})},ee=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],eventCount:32,isLoading:!0,online:navigator.onLine,showWelcomeScreen:!1},e.getChartData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e.updateEvents=function(t){e.setState({isLoading:!0}),Z().then((function(n){e.updateOnlineStatus(),e.setState({online:navigator.onLine});var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a}),e.setState({isLoading:!1})}))},e.updateEventCount=function(t){e.setState({eventCount:t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.mounted=!0,this.setState({isLoading:!0}),!window.location.href.startsWith("http://localhost")&&this.state.online||!this.mounted){e.next=7;break}return this.initializeLocalOrOffline(),e.abrupt("return");case 7:this.initilaizeOnline();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initializeLocalOrOffline",value:function(){var e=this;Z().then((function(t){e.mounted&&e.setState({events:t,locations:W(t)}),e.setState({isLoading:!1})}))}},{key:"initilaizeOnline",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("access_token"),e.next=3,M(t);case 3:if(!e.sent.error){e.next=7;break}e.t0=!1,e.next=8;break;case 7:e.t0=!0;case 8:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n||window.location.href.startsWith("http://localhost"))}),(r||n)&&this.mounted&&Z().then((function(e){o.mounted&&o.setState({events:e,locations:W(e)}),o.setState({isLoading:!1})}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOnlineStatus",value:function(){this.setState({online:navigator.onLine})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(p.jsx)("div",{className:"App"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{text:this.state.online?"":"MeetApp is offline. Events may not be up to date."}),Object(p.jsx)(R,{}),Object(p.jsx)(y,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(p.jsx)(S,{updateEventCount:this.updateEventCount}),Object(p.jsx)("div",{className:"loading-spinner",children:Object(p.jsx)(q.BeatLoader,{loading:this.state.isLoading,color:"#cc1f00",size:40})}),Object(p.jsxs)("div",{className:"data",children:[Object(p.jsx)($,{events:this.state.events}),Object(p.jsx)(Y,{data:this.getChartData()})]}),Object(p.jsx)(j,{events:this.state.events,count:this.state.eventCount}),Object(p.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){I()}})]})}}]),n}(a.Component),te=ee,ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,399)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},oe=n(125);oe.config("308af35634c648faa2f3aa7e26e79217").install(),i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(te,{})}),document.getElementById("root")),oe.notify(new Error("Test Atatus Setup")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ae(t,e)}))}}(),re()}},[[390,1,2]]]);
//# sourceMappingURL=main.a2ff8a9d.chunk.js.map