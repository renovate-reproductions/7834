(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1196:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return containers_Console_Console}));__webpack_require__(45),__webpack_require__(109),__webpack_require__(273);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Console_Console=__webpack_require__(396),esm=__webpack_require__(100),api=__webpack_require__(98),Console_ConsoleContainer=function ConsoleContainer(_ref){var sessionId=_ref.sessionId,data=Object(esm.a)("ConsoleContainer.sessions/".concat(sessionId,"/events/search"),(function(){return api.b.events.search(sessionId,{searchParams:{"event.e":["gte:9","lte:10"],limit:1e3}})}),{refreshWhenHidden:!0,refreshInterval:5e3}).data,loading=void 0===data,events=data||[];return react_default.a.createElement(Console_Console.a,{events:events.slice(0,50),loading:loading})};Console_ConsoleContainer.displayName="ConsoleContainer";var containers_Console_Console=react_default.a.memo(Console_ConsoleContainer);try{Console.displayName="Console",Console.__docgenInfo={description:"",displayName:"Console",props:{sessionId:{defaultValue:null,description:"",name:"sessionId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/sessions/containers/Console/Console.tsx#Console"]={docgenInfo:Console.__docgenInfo,name:"Console",path:"src/modules/sessions/containers/Console/Console.tsx#Console"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=12.30bae228f33a5df03eaa.bundle.js.map