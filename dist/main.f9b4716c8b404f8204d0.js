(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/7QA":function(t,e,n){"use strict";n.r(e);n("OGhG");var i,r=function(){},o=(n("33JV"),new(function(){function t(){}return t.prototype.set=function(t,e){var n;for(n in t)try{var i=JSON.stringify(t[n]||"");localStorage.setItem("unknown_"+n,i)}catch(e){console.error("设置储存字段失败:",n,t[n])}e&&e()},t.prototype.get=function(t,e){for(var n={},i=0,r=t;i<r.length;i++){var o=r[i];try{var a=localStorage.getItem("unknown_"+o);n[o]=JSON.parse(a)}catch(t){console.error("获取储存字段失败:",o)}}e(n)},t}())),a=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function c(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((i=i.apply(t,e||[])).next())}))},c=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},s=function(){function t(){this.hasInited=!1}return t.getNoteService=function(){return this.noteService||(this.noteService=new t),this.noteService},t.prototype.init=function(){return a(this,void 0,void 0,(function(){var t;return c(this,(function(e){switch(e.label){case 0:return this.hasInited?[2]:(t=this,[4,this.getAll()]);case 1:return t.notes=e.sent(),this.notes.length>0?(this.currentNote=this.notes[0],[3,4]):[3,2];case 2:return[4,this.create()];case 3:e.sent(),e.label=4;case 4:return this.hasInited=!0,[2]}}))}))},t.prototype.create=function(){return a(this,void 0,void 0,(function(){var t;return c(this,(function(e){switch(e.label){case 0:return t={id:this.genId(),title:"Untitled",content:'<p contenteditable="true">Edit here</p>',createAt:Date.now(),updateAt:Date.now()},this.notes.unshift(t),[4,this.save()];case 1:return e.sent(),this.currentNote=t,[2]}}))}))},t.prototype.save=function(){var t=this;return new Promise((function(e,n){var i=t.notes.indexOf(t.currentNote);t.notes[i]=t.currentNote;try{o.set({savedArticleData:t.notes},(function(){e()}))}catch(t){n("数据保存失败")}}))},t.prototype.getAll=function(){return new Promise((function(t,e){o.get(["savedArticleData"],(function(e){var n=e.savedArticleData;t(n||[])}))}))},t.prototype.getNoteById=function(t){for(var e=0,n=this.notes;e<n.length;e++){var i=n[e];if(i.id===t)return i}},t.prototype.deleteCurrentNode=function(){return a(this,void 0,void 0,(function(){var t;return c(this,(function(e){switch(e.label){case 0:return t=this.notes.indexOf(this.currentNote),this.notes.splice(t,1),[4,this.save()];case 1:return e.sent(),this.notes.length>0?(this.currentNote=this.notes[0],[3,4]):[3,2];case 2:return[4,this.create()];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},t.prototype.getCurrentNoteIndex=function(){return this.notes.indexOf(this.currentNote)},t.prototype.genId=function(){return Date.now().toString(16)},t}(),l=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function c(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((i=i.apply(t,e||[])).next())}))},u=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},f=new(function(){function t(){this.state={containerEl:void 0,currentEditEl:void 0,titleInputEl:void 0,id:void 0,title:"Untitled"}}return t.prototype.init=function(t,e){return void 0===t&&(t=document.body),l(this,void 0,void 0,(function(){var e,n,i;return u(this,(function(r){return this.noteService=s.getNoteService(),this.noteService.init(),(e=document.createElement("div")).className="editor-root-container",this.rootEl=e,(n=document.createElement("input")).className="editor-title-input",n.setAttribute("type","text"),n.value=this.state.title,this.state.titleInputEl=n,e.append(n),(i=document.createElement("div")).className="editor-content-container",this.state.containerEl=i,e.append(i),t.append(this.rootEl),this.initState(),this.initEventHandle(),[2]}))}))},t.prototype.getTitle=function(){return this.state.title},t.prototype.getContentString=function(){return this.state.containerEl.innerHTML},t.prototype.setArticle=function(t){this.state.id=t.id,this.state.title=t.title,this.state.titleInputEl.value=t.title,this.state.containerEl.innerHTML=t.content},t.prototype.initState=function(){var t=document.createElement("p");t.setAttribute("contenteditable","true"),t.innerText="Edit here",this.state.containerEl.append(t)},t.prototype.initEventHandle=function(){this.state.containerEl.addEventListener("click",this.handleEditorClick.bind(this)),this.state.containerEl.addEventListener("keydown",this.handleEditorInput.bind(this)),this.state.titleInputEl.addEventListener("input",this.handleTitleInputChange.bind(this))},t.prototype.handleEditorClick=function(t){this.state.currentEditEl=t.target},t.prototype.handleTitleInputChange=function(t){this.state.title=t.target.value,this.noteService.currentNote.title=this.state.title},t.prototype.handleEditorInput=function(t){if("Tab"===t.key)t.preventDefault();else if("Enter"===t.key){if(t.preventDefault(),this.state.currentEditEl.nextElementSibling){var e=this.state.currentEditEl.nextElementSibling;this.state.currentEditEl=e}else{var n=document.createElement("p");n.setAttribute("contenteditable","true"),this.state.containerEl.append(n),this.state.currentEditEl=n}this.state.currentEditEl.focus()}else if("Backspace"===t.key){var i=this.state.currentEditEl;if(""===i.innerText&&i.previousElementSibling){e=this.state.currentEditEl.previousElementSibling;this.state.currentEditEl=e,i.remove(),t.preventDefault()}this.state.currentEditEl.focus()}},t}()),d=(n("bGvS"),n("HTKd"),function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function c(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((i=i.apply(t,e||[])).next())}))}),p=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},h=new(function(){function t(){this.state={notes:[],containerEl:void 0}}return t.prototype.init=function(t,e){return void 0===t&&(t=document.body),d(this,void 0,void 0,(function(){var e;return p(this,(function(n){switch(n.label){case 0:return this.noteService=s.getNoteService(),[4,this.noteService.init()];case 1:return n.sent(),(e=document.createElement("div")).id="sidebar-container",this.rootEl=e,t.append(e),this.initElement(),this.refresh(),[2]}}))}))},t.prototype.refresh=function(){this.initState();var t=this.state.containerEl.firstChild;t?t.click():this.noteService.create()},t.prototype.initState=function(){this.state.notes=this.noteService.notes,this.renderArticlesList()},t.prototype.initElement=function(){var t=document.createElement("p");t.className="title",t.innerText="All",this.rootEl.append(t);var e=document.createElement("div");e.className="articles-list-container",this.state.containerEl=e,this.rootEl.append(e)},t.prototype.handleArticleItemClick=function(t,e){this.state.containerEl.querySelectorAll(".article-container").forEach((function(t){t.className="article-container"})),t.className="article-container active";var n=parseInt(t.getAttribute("data-index"));this.currentIndex=n,this.noteService.currentNote=this.state.notes[n],f.setArticle(this.noteService.currentNote)},t.prototype.renderArticlesList=function(){var t=this;this.state.containerEl.innerHTML="",this.state.notes.forEach((function(e,n){var i=document.createElement("div");i.className="article-container",i.setAttribute("data-index",n+"");var r=document.createElement("p");r.className="title",r.innerText=e.title,i.append(r);var o=document.createElement("p");o.className="time",o.innerText=new Date(e.createAt).toLocaleDateString(),i.append(o),i.addEventListener("click",t.handleArticleItemClick.bind(t,i)),t.state.containerEl.append(i)}))},t}()),v=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function c(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((i=i.apply(t,e||[])).next())}))},b=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},y=new(function(){function t(){this.state={}}return t.prototype.init=function(t,e){return void 0===t&&(t=document.body),v(this,void 0,void 0,(function(){var e;return b(this,(function(n){switch(n.label){case 0:return this.noteService=s.getNoteService(),[4,this.noteService.init()];case 1:return n.sent(),(e=document.createElement("div")).className="tools-bar-container",this.rootEl=e,t.append(this.rootEl),this.initBtns(),[2]}}))}))},t.prototype.saveCurrentNote=function(){return v(this,void 0,void 0,(function(){return b(this,(function(t){switch(t.label){case 0:return this.noteService.currentNote.content=f.state.containerEl.innerHTML,[4,this.noteService.save()];case 1:return t.sent(),h.refresh(),[2]}}))}))},t.prototype.initBtns=function(){var t=document.createElement("button");t.className="tool-btn save-data-btn",t.innerHTML="Save",t.addEventListener("click",this.handleSaveNoteBtnClick.bind(this)),this.rootEl.append(t);var e=document.createElement("button");e.className="tool-btn create-note-btn",e.innerHTML="New",e.addEventListener("click",this.handleCreateNoteBtnClick.bind(this)),this.rootEl.append(e);var n=document.createElement("button");n.className="tool-btn delete-note-btn",n.innerHTML="Delete",n.addEventListener("click",this.handleDeleteNoteBtnClick.bind(this)),this.rootEl.append(n)},t.prototype.handleSaveNoteBtnClick=function(t){return v(this,void 0,void 0,(function(){return b(this,(function(t){switch(t.label){case 0:return[4,this.saveCurrentNote()];case 1:return t.sent(),[2]}}))}))},t.prototype.handleCreateNoteBtnClick=function(t){return v(this,void 0,void 0,(function(){return b(this,(function(t){switch(t.label){case 0:return[4,this.noteService.create()];case 1:return t.sent(),h.refresh(),[2]}}))}))},t.prototype.handleDeleteNoteBtnClick=function(t){return v(this,void 0,void 0,(function(){return b(this,(function(t){switch(t.label){case 0:return[4,this.noteService.deleteCurrentNode()];case 1:return t.sent(),h.refresh(),[2]}}))}))},t}()),m=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),g=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function c(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((i=i.apply(t,e||[])).next())}))},w=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};(new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.title="Notes",e.router="/",e.params="",e}return m(e,t),e.prototype.init=function(){return g(this,void 0,void 0,(function(){var t;return w(this,(function(e){switch(e.label){case 0:return(t=document.createElement("div")).id="main-container",[4,y.init(t)];case 1:return e.sent(),[4,f.init(t)];case 2:return e.sent(),[4,h.init()];case 3:return e.sent(),document.body.append(t),this.initGlobalEventListener(),[2]}}))}))},e.prototype.initGlobalEventListener=function(){document.addEventListener("keydown",(function(t){(window.navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&83==t.keyCode&&(t.preventDefault(),y.saveCurrentNote())}),!1)},e}(r))).init()},"33JV":function(t,e,n){var i=n("LboF"),r=n("qIrS");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);t.exports=r.locals||{}},HTKd:function(t,e,n){var i=n("LboF"),r=n("YdFT");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);t.exports=r.locals||{}},JPst:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);i&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},LUCm:function(t,e,n){(e=n("JPst")(!1)).push([t.i,".tools-bar-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  padding: 0 10%;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n}\n.tools-bar-container > .tool-btn {\n  cursor: pointer;\n  margin-right: 10px;\n  padding: 3px 15px;\n  font-size: 12px;\n  line-height: 18px;\n  border-radius: 12px;\n  border: 1px solid lightgray;\n  outline: none;\n}\n.tools-bar-container > .tool-btn:hover {\n  color: black;\n  border: 1px solid gray;\n}\n",""]),t.exports=e},LboF:function(t,e,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},i=[],r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var f=c(u),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:b(d,e),references:1}),i.push(u)}return i}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h=null,v=0;function b(t,e){var n,i,r;if(e.singleton){var o=v++;n=h||(h=l(e)),i=d.bind(null,n,o,!1),r=d.bind(null,n,o,!0)}else n=l(e),i=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var r=c(n[i]);a[r].references--}for(var o=s(t,e),l=0;l<n.length;l++){var u=c(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},OGhG:function(t,e,n){var i=n("LboF"),r=n("a3zi");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);t.exports=r.locals||{}},YdFT:function(t,e,n){(e=n("JPst")(!1)).push([t.i,"#sidebar-container > .title {\n  padding: 10px 14px;\n  font-size: 14px;\n  line-height: 50px;\n  color: #37352f;\n}\n#sidebar-container > .articles-list-container {\n  width: 100%;\n}\n#sidebar-container > .articles-list-container > .article-container {\n  padding: 6px 14px;\n  cursor: pointer;\n  color: #37352f;\n}\n#sidebar-container > .articles-list-container > .article-container > .title {\n  font-size: 16px;\n  line-height: 30px;\n}\n#sidebar-container > .articles-list-container > .article-container > .time {\n  font-size: 12px;\n  line-height: 18px;\n}\n#sidebar-container > .articles-list-container > .article-container.active {\n  background-color: #e8e7e4;\n  color: black;\n}\n",""]),t.exports=e},a3zi:function(t,e,n){(e=n("JPst")(!1)).push([t.i,".mainFontStyle {\n  color: #37352f;\n  font-size: 16px;\n  line-height: 24px;\n}\n.flexColumn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nbody {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  color: #37352f;\n  font-size: 16px;\n  line-height: 24px;\n}\nbody > #sidebar-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #f7f6f3;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n}\nbody > #main-container {\n  position: relative;\n  flex-grow: 1;\n  margin-left: 200px;\n  height: 100%;\n  overflow-y: auto;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n",""]),t.exports=e},bGvS:function(t,e,n){var i=n("LboF"),r=n("LUCm");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);t.exports=r.locals||{}},qIrS:function(t,e,n){(e=n("JPst")(!1)).push([t.i,".mainFontStyle {\n  color: #37352f;\n  font-size: 16px;\n  line-height: 24px;\n}\n.flexColumn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.editor-root-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 70px 10% 40px 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n.editor-root-container > .editor-title-input {\n  width: 100%;\n  margin-bottom: 20px;\n  font-size: 40px;\n  font-weight: 700;\n  line-height: 48px;\n  color: #37352f;\n  outline: none;\n  border: none;\n}\n.editor-root-container > .editor-content-container {\n  width: 100%;\n  overflow-y: auto;\n  color: #37352f;\n}\n.editor-root-container > .editor-content-container > [contenteditable='true'] {\n  cursor: text;\n}\n.editor-root-container > .editor-content-container p[contenteditable='true'] {\n  outline: none;\n  padding: 8px 0 2px 0;\n}\n",""]),t.exports=e}},[["/7QA",1]]]);