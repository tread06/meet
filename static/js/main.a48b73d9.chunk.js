(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},56:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),s=n.n(r),i=(n(35),n(9)),c=n.n(i),l=n(10),u=n(4),d=n(8),h=n(6),p=n(5),f=(n(37),n(1)),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={detailsHidden:!0},e.toggleDetails=function(){var t=!e.state.detailsHidden;e.setState({detailsHidden:t})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h2",{className:"event-name",children:this.props.event.summary}),Object(f.jsx)("div",{className:"divider"}),Object(f.jsx)("p",{className:"event-date-time",children:this.props.event.start.dateTime}),Object(f.jsx)("p",{className:"event-location",children:this.props.event.location}),!this.state.detailsHidden&&Object(f.jsxs)("div",{className:"event-details",children:[Object(f.jsx)("div",{className:"divider"}),Object(f.jsx)("p",{className:"event-description",children:this.props.event.description})]}),Object(f.jsx)("button",{className:"toggle-details-button",onClick:this.toggleDetails,children:this.state.detailsHidden?"Show Details":"Hide Details"})]})}}]),n}(a.Component),m=v,g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events.slice(0,this.props.count);return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(m,{event:e})},e.id)}))})}}]),n}(a.Component),b=g,j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#1e3c74",a}return n}(j),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#cc1f00",a}return n}(j),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleClick=function(t){document.querySelector(".suggestions").contains(t.target)||e.setState({showSuggestions:!1})},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"City was not found. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)("p",{children:"City Search"}),Object(f.jsx)(w,{text:this.state.infoText}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Search cities"}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:"See all cities"},"all")]})]})}}]),n}(a.Component),y=x,k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value,a="";(n<=0||n>32)&&(a="Select a number from 1 to 32"),e.setState({numberOfEvents:n,errorText:a}),e.props.updateEventCount(n)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"NumberOfEvents",children:[Object(f.jsx)("p",{children:"Number of Events"}),Object(f.jsx)("input",{type:"number",className:"number-input",value:this.state.numberOfEvents,onChange:this.handleInputChanged,min:"0"}),Object(f.jsx)(O,{text:this.state.errorText})]})}}]),n}(a.Component),S=k,T=n(30),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],N=n(16),E=n.n(N),W=n(11),L=n.n(W),Z=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},A=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return L.a.done(),e.abrupt("return",C);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),L.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,I();case 10:if(!(n=e.sent)){e.next=20;break}return q(),a="https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,E.a.get(a);case 16:return(o=e.sent).data&&(r=Z(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),L.a.done(),e.abrupt("return",o.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,E.a.get("https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,s=r.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",o&&D(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://db1dgdavpe.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("h1",{className:"banner-text",children:"~MeetApp~"})})},B=n(29);n(56);var J=function(e){return e.showWelcomeScreen?Object(f.jsxs)("div",{className:"WelcomeScreen",children:[Object(f.jsx)("h1",{children:"Welcome to MeetApp"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{className:"google-btn",children:[Object(f.jsx)("div",{className:"google-icon-wrapper",children:Object(f.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with google"})})]})}),Object(f.jsx)("a",{href:"https://tread06.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},R=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],locations:[],eventCount:32,isLoading:!0,online:!0,showWelcomeScreen:!1},e.updateEvents=function(t){e.setState({isLoading:!0}),A().then((function(n){e.updateOnlineStatus(),e.setState({online:navigator.onLine});var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a}),e.setState({isLoading:!1})}))},e.updateEventCount=function(t){e.setState({eventCount:t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,this.setState({isLoading:!0}),t=localStorage.getItem("access_token"),e.next=5,M(t);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),console.log("Show welcome screen: "+this.state.showWelcomeScreen),(o||n)&&this.mounted&&A().then((function(e){r.mounted&&r.setState({events:e,locations:Z(e)}),r.setState({isLoading:!1})}));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOnlineStatus",value:function(){this.setState({online:navigator.onLine})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.setState.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(O,{text:this.state.online?"":"MeetApp is offline. Events may not be up to date."}),Object(f.jsx)(U,{}),Object(f.jsx)(y,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(S,{updateEventCount:this.updateEventCount}),Object(f.jsx)("div",{className:"loading-spinner",children:Object(f.jsx)(B.BeatLoader,{loading:this.state.isLoading,color:"#cc1f00",size:40})}),Object(f.jsx)(b,{events:this.state.events,count:this.state.eventCount}),Object(f.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){I()}})]})}}]),n}(a.Component),H=R,_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))},P=n(17);P.config("308af35634c648faa2f3aa7e26e79217").install(),s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root")),P.notify(new Error("Test Atatus Setup")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):F(t,e)}))}}(),z()}},[[86,1,2]]]);
//# sourceMappingURL=main.a48b73d9.chunk.js.map