webpackJsonp([1,0],{0:/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),u=r(o),a=n(32),i=r(a),l=n(166),c=r(l);i["default"].render(u["default"].createElement(c["default"],null),document.getElementById("container"))},166:/*!*********************************!*\
  !*** ./js/components/routes.js ***!
  \*********************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(167),s=n(224),p=r(s),d=n(231),y=r(d),b=n(233),h=r(b),m=n(234),v=r(m),w=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement(f.Router,{history:f.hashHistory},c["default"].createElement(f.Route,{path:"/",component:p["default"]},c["default"].createElement(f.IndexRoute,{component:y["default"]}),c["default"].createElement(f.Route,{path:"contact",component:h["default"]}),c["default"].createElement(f.Route,{path:"projects",component:v["default"]})))}}]),t}(c["default"].Component);t["default"]=w},224:/*!*******************************!*\
  !*** ./js/components/main.js ***!
  \*******************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(225),s=r(f),p=n(230),d=r(p),y=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"flexRow"},c["default"].createElement(s["default"],null),c["default"].createElement(d["default"],null,this.props.children))}}]),t}(c["default"].Component);t["default"]=y},225:/*!***************************************!*\
  !*** ./js/components/side/sidebar.js ***!
  \***************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(226),s=r(f),p=n(227),d=r(p),y=n(229),b=r(y),h=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{id:"sidebar"},c["default"].createElement(s["default"],null),c["default"].createElement(d["default"],null),c["default"].createElement(b["default"],null))}}]),t}(c["default"].Component);t["default"]=h},226:/*!********************************************!*\
  !*** ./js/components/side/profile_info.js ***!
  \********************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{id:"profileInfo",className:"flexRow"},c["default"].createElement("div",{id:"imgcontainer"},c["default"].createElement("img",{src:"https://avatars1.githubusercontent.com/u/506193?v=3&s=460"})),c["default"].createElement("div",null,c["default"].createElement("div",{id:"surname",className:"nameContainer"},c["default"].createElement("span",null,"A.K.A Krelix")),c["default"].createElement("div",{id:"realname",className:"nameContainer"},c["default"].createElement("span",null,"Adrien BRIZARD"))))}}]),t}(c["default"].Component);t["default"]=f},227:/*!***************************************!*\
  !*** ./js/components/side/nav_bar.js ***!
  \***************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(228),s=r(f),p=[{id:"1",title:"About",to:"/",isIndex:!0},{id:"2",title:"Contact",to:"contact",isIndex:!1},{id:"3",title:"Projects",to:"projects",isIndex:!1}],d=function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={navs:p},n}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{id:"navbar"},this.state.navs.map(function(e){return c["default"].createElement(s["default"],{key:e.id,title:e.title,to:e.to,isIndex:e.isIndex})}))}}]),t}(c["default"].Component);t["default"]=d},228:/*!****************************************!*\
  !*** ./js/components/side/nav_item.js ***!
  \****************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(167),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return this.props.isIndex===!0?c["default"].createElement(f.IndexLink,{to:this.props.to,activeClassName:"active"},c["default"].createElement("span",null,this.props.title)):this.props.title?c["default"].createElement(f.Link,{to:this.props.to,activeClassName:"active"},c["default"].createElement("span",null,this.props.title)):null}}]),t}(c["default"].Component);t["default"]=s},229:/*!**********************************************!*\
  !*** ./js/components/side/social_network.js ***!
  \**********************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{id:"socnet"},c["default"].createElement("a",{href:"https://twitter.com/Krelix"},c["default"].createElement("img",{src:"assets/images/TwitterLogo_white.png"}),c["default"].createElement("span",null,"@Krelix")))}}]),t}(c["default"].Component);t["default"]=f},230:/*!******************************************!*\
  !*** ./js/components/content/content.js ***!
  \******************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("main",null,this.props.children)}}]),t}(c["default"].Component);t["default"]=f},231:/*!****************************************!*\
  !*** ./js/components/content/about.js ***!
  \****************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return a["default"].createElement("article",null,a["default"].createElement("header",null,a["default"].createElement("h1",null,"About")),a["default"].createElement("div",{className:"entry-content"},a["default"].createElement("p",null,"Hello, my name is Adrien. I've been a developer for 5 years. I've mostly worked with Java and J2EE, but I've been dabbling lately with JavaScript and NodeJS using React."),a["default"].createElement("p",null,"I've worked on developing and maintaining Document Managment systems, Business Process software for clients. Most of those projects involved working with specialized software on top of which we built a WebApp, using J2EE and Spring. I've also used and set up a Continuous Integration system using ",a["default"].createElement(l["default"],{src:"http://jenkins.io"},"Jenkins"),", ",a["default"].createElement(l["default"],{src:"http://www.sonarqube.org/"},"Sonar"),", ",a["default"].createElement(l["default"],{src:"http://www.sonatype.org/nexus/"},"Nexus")," and ",a["default"].createElement(l["default"],{src:"https://www.jfrog.com/artifactory/oss"},"Artifactory"),"."),a["default"].createElement("p",null,"In my spare time, I spend a lot of time playing video games, and I've dabbled in game dev using AS3, JavaScript (and the Phaser framework), though not seriously enough to have anything done. I'm currently learning ",a["default"].createElement(l["default"],{src:"http://rust-lang.org/"},"Rust")," and I try to keep an eye on many things related to development, be they UX, Design, Team Management, Project Management Methodologies and more.")))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(1),a=r(u),i=n(232),l=r(i)},232:/*!****************************************!*\
  !*** ./js/components/content/alink.js ***!
  \****************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("a",{href:this.props.src,target:"_blank",rel:"noreferrer"},this.props.children)}}]),t}(c["default"].Component);t["default"]=f},233:/*!******************************************!*\
  !*** ./js/components/content/contact.js ***!
  \******************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement("h1",null,"Contact"),c["default"].createElement("p",null,"Twitter : @Krelix"))}}]),t}(c["default"].Component);t["default"]=f},234:/*!***********************************************!*\
  !*** ./js/components/content/project-list.js ***!
  \***********************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(235),s=r(f),p=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement("h1",null,"Projects"),c["default"].createElement(s["default"],{name:"My little project",imagePath:"assets/images/project_pic_120x120.png"},"This is some description for the project. It's not complete as it is nothing but a placeholder but I think it's better than a random Lorem Ipsum, since it's actual text I've written and i is far more likely to represent the kind of bullshit I'll write for real."))}}]),t}(c["default"].Component);t["default"]=p},235:/*!***********************************************!*\
  !*** ./js/components/content/project-item.js ***!
  \***********************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"project-card"},c["default"].createElement("h4",null,this.props.name),c["default"].createElement("img",{src:this.props.imagePath,alt:"Project Image"}),c["default"].createElement("p",null,this.props.children))}}]),t}(c["default"].Component);f.propTypes={name:c["default"].PropTypes.string.isRequired,imagePath:c["default"].PropTypes.string.isRequired},t["default"]=f}});
//# sourceMappingURL=app.js.map