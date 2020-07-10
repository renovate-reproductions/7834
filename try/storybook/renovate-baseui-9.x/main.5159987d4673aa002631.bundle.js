(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(834)},158:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(42),__webpack_require__(45),__webpack_require__(46),__webpack_require__(52),__webpack_require__(185),__webpack_require__(54),__webpack_require__(71),__webpack_require__(264),__webpack_require__(55),__webpack_require__(43),__webpack_require__(126),__webpack_require__(56),__webpack_require__(96),__webpack_require__(392),__webpack_require__(108),__webpack_require__(884),__webpack_require__(885),__webpack_require__(85),__webpack_require__(29),__webpack_require__(95),__webpack_require__(886),__webpack_require__(57),__webpack_require__(47),__webpack_require__(58),__webpack_require__(48),__webpack_require__(166);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled=__webpack_require__(8),block=__webpack_require__(25),input=__webpack_require__(996),form_control=__webpack_require__(998),button_button=__webpack_require__(997),constants=__webpack_require__(116),phone_input_next=__webpack_require__(995),country_select_dropdown=__webpack_require__(994),index_esm=__webpack_require__(295),typography=__webpack_require__(117);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var FormError=function(_ref){var error=_ref.error,_useStyletron2=_slicedToArray(Object(styled.b)(),2),theme=(_useStyletron2[0],_useStyletron2[1]);return react_default.a.createElement(block.a,{display:"flex",justifyContent:"center",marginTop:theme.sizing.scale600},react_default.a.createElement(typography.c,{color:theme.colors.borderError},error.message))};FormError.displayName="FormError",FormError.__docgenInfo={description:"",methods:[],displayName:"FormError",props:{error:{required:!0,tsType:{name:"APIError"},description:""}}};var FormError_FormError=react_default.a.memo(FormError);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/components/FormError/FormError.tsx"]={name:"FormError",docgenInfo:FormError.__docgenInfo,path:"src/shared/components/FormError/FormError.tsx"});var router=__webpack_require__(211),router_default=__webpack_require__.n(router);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SignUpForm_slicedToArray(arr,i){return function SignUpForm_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function SignUpForm_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function SignUpForm_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return SignUpForm_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SignUpForm_arrayLikeToArray(o,minLen)}(arr,i)||function SignUpForm_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SignUpForm_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var SignUpForm=function(_ref){var _errors$fullName,_errors$company,_errors$phoneNumber,_errors$email,_errors$password,onSubmitProp=_ref.onSubmit,_ref$minPasswordLengt=_ref.minPasswordLength,minPasswordLength=void 0===_ref$minPasswordLengt?8:_ref$minPasswordLengt,_useState2=SignUpForm_slicedToArray(Object(react.useState)(!1),2),isSubmitting=_useState2[0],setIsSubmitting=_useState2[1],_useState4=SignUpForm_slicedToArray(Object(react.useState)(),2),formError=_useState4[0],setFormError=_useState4[1],_useState6=SignUpForm_slicedToArray(Object(react.useState)(constants.a.US),2),country=_useState6[0],setCountry=_useState6[1],_useStyletron2=SignUpForm_slicedToArray(Object(styled.b)(),2),css=_useStyletron2[0],theme=_useStyletron2[1],_useForm=Object(index_esm.b)(),register=_useForm.register,handleSubmit=_useForm.handleSubmit,errors=_useForm.errors,control=_useForm.control,onSubmit=handleSubmit((function(_ref2){var phoneNumber=_ref2.phoneNumber,rest=_objectWithoutProperties(_ref2,["phoneNumber"]);if(!isSubmitting){setIsSubmitting(!0),setFormError(void 0);var signUpFormData=phoneNumber?_objectSpread(_objectSpread({},rest),{},{phoneNumber:"".concat(country.dialCode).concat(phoneNumber)}):rest;onSubmitProp(signUpFormData).then((function(){return router_default.a.push("/signup-confirm")})).catch(function(){var _ref3=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(error){var errorDTO;return regeneratorRuntime.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,error.response.json();case 2:errorDTO=_context.sent,setFormError(errorDTO.error);case 4:case"end":return _context.stop()}}),_callee)})));return function(){return _ref3.apply(this,arguments)}}()).finally((function(){return setIsSubmitting(!1)}))}})),inputBorderRadius={borderBottomRightRadius:theme.sizing.scale100,borderTopRightRadius:theme.sizing.scale100,borderTopLeftRadius:theme.sizing.scale100,borderBottomLeftRadius:theme.sizing.scale100},inputOverrides={InputContainer:{style:inputBorderRadius},Input:{style:inputBorderRadius}};return react_default.a.createElement("form",{onSubmit:onSubmit,noValidate:!0},react_default.a.createElement(block.a,null,react_default.a.createElement(form_control.a,{label:"Full name",error:null===(_errors$fullName=errors.fullName)||void 0===_errors$fullName?void 0:_errors$fullName.message},react_default.a.createElement(input.a,{overrides:inputOverrides,name:"fullName",placeholder:"Full name",required:!0,inputRef:register({required:"Required"}),error:!!errors.fullName}))),react_default.a.createElement(block.a,null,react_default.a.createElement(form_control.a,{label:"Company",error:null===(_errors$company=errors.company)||void 0===_errors$company?void 0:_errors$company.message},react_default.a.createElement(input.a,{overrides:inputOverrides,placeholder:"Company",name:"company",inputRef:register({required:"Required"}),error:!!errors.company}))),react_default.a.createElement(block.a,null,react_default.a.createElement(form_control.a,{error:null===(_errors$phoneNumber=errors.phoneNumber)||void 0===_errors$phoneNumber?void 0:_errors$phoneNumber.message,label:function label(){return react_default.a.createElement("div",null,"Phone"," ",react_default.a.createElement("span",{className:css({color:theme.colors.primary400})},"(optional)"))}},react_default.a.createElement(index_esm.a,{control:control,name:"phoneNumber",defaultValue:"",rules:{pattern:{value:/^(?![+]).*$/,message:"Please enter a phone number without the country dial code."}},as:react_default.a.createElement(phone_input_next.a,{placeholder:"Phone number",country:country,onCountryChange:function onCountryChange(_ref4){var option=_ref4.option;return setCountry(option)},error:!!errors.phoneNumber,overrides:{CountrySelect:{props:{overrides:{Dropdown:{component:country_select_dropdown.a}}}}}})}))),react_default.a.createElement(block.a,null,react_default.a.createElement(form_control.a,{label:"Email",error:null===(_errors$email=errors.email)||void 0===_errors$email?void 0:_errors$email.message},react_default.a.createElement(input.a,{overrides:inputOverrides,name:"email",type:"email",placeholder:"Email",required:!0,inputRef:register({required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email address"}}),error:!!errors.email}))),react_default.a.createElement(block.a,{marginBottom:theme.sizing.scale1200},react_default.a.createElement(form_control.a,{label:"Password",error:null===(_errors$password=errors.password)||void 0===_errors$password?void 0:_errors$password.message},react_default.a.createElement(input.a,{overrides:inputOverrides,placeholder:"Password",name:"password",type:"password",ref:register,inputRef:register({required:"Required",minLength:{value:minPasswordLength,message:"Password must be at least ".concat(minPasswordLength," characters long")}}),error:!!errors.password}))),react_default.a.createElement(button_button.a,{type:"submit",$style:{width:"100%"},isLoading:isSubmitting},"Get started"),formError&&react_default.a.createElement(FormError_FormError,{error:formError}))};SignUpForm.displayName="SignUpForm",SignUpForm.__docgenInfo={description:"",methods:[],displayName:"SignUpForm",props:{minPasswordLength:{defaultValue:{value:"8",computed:!1},required:!1,tsType:{name:"number"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: SignUpFormDTO) => Promise<unknown>",signature:{arguments:[{name:"data",type:{name:"SignUpFormDTO"}}],return:{name:"Promise",elements:[{name:"unknown"}],raw:"Promise<unknown>"}}},description:""}}};__webpack_exports__.a=SignUpForm;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SignUpForm/SignUpForm.tsx"]={name:"SignUpForm",docgenInfo:SignUpForm.__docgenInfo,path:"src/components/SignUpForm/SignUpForm.tsx"})},472:function(module,exports,__webpack_require__){__webpack_require__(473),__webpack_require__(618),__webpack_require__(983),module.exports=__webpack_require__(831)},537:function(module,exports){},831:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(210);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(833)],module)}.call(this,__webpack_require__(832)(module))},833:function(module,exports,__webpack_require__){var map={"./components/GetStarted/GetStarted.stories.tsx":982,"./components/SignUpForm/SignUpForm.stories.tsx":981};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=833},834:function(module,exports,__webpack_require__){"use strict";function r(r){return r&&"object"==typeof r&&"default"in r?r.default:r}Object.defineProperty(exports,"__esModule",{value:!0});var e=__webpack_require__(0),t=r(e),n=r(__webpack_require__(835));function o(r){return function(t,o){return function(r){var t=n.createSandbox(),o=e.useRef(!1);o.current||r(t),o.current=!0,e.useEffect((function(){return function(){t.restore()}}),[t])}(r),t(o)}}function c(){return(c=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}exports.configureStory=function(r){var e=r.setupMocks,t=r.decorators,n=void 0===t?[]:t;return c({},function(r,e){if(null==r)return{};var t,n,o={},c=Object.keys(r);for(n=0;n<c.length;n++)e.indexOf(t=c[n])>=0||(o[t]=r[t]);return o}(r,["setupMocks","decorators"]),{decorators:e?[].concat(n,[o(e)]):n,setupMocks:e})},exports.fullHeightDecorator=function(r,e){return t.createElement(t.Fragment,null,t.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            html, body, #root, #root > div:first-child { height: 100%; }\n            .sb-show-main { margin: 0px; }\n            #root > div:first-child {\n              display: flex;\n              flex-direction: column;\n            }\n        "}}),r(e))},exports.mockApiError=function(r){var e=new Error("APIError");return Object.assign(e,{response:{json:function(){return{error:r}}}}),e},exports.mockDecorator=o},981:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Base",(function(){return Base})),__webpack_require__.d(__webpack_exports__,"WithError",(function(){return WithError}));__webpack_require__(72),__webpack_require__(29),__webpack_require__(95),__webpack_require__(195);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(51),baseui_block__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25),_insight_storybook__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(137),_SignUpForm__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(158);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}__webpack_exports__.default={title:"SignUpForm"};var baseProps={onSubmit:function onSubmit(data){return new Promise((function(resolve){setTimeout((function(){return resolve(Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("onSubmit")(data))}),500)}))}},Base=function(storyProps){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(baseui_block__WEBPACK_IMPORTED_MODULE_6__.a,{width:"100%",maxWidth:"720px",marginLeft:"auto",marginRight:"auto"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SignUpForm__WEBPACK_IMPORTED_MODULE_8__.a,_extends({},baseProps,storyProps)))};Base.displayName="Base";var baseErrorProps={onSubmit:function onSubmit(){return new Promise((function(_resolve,reject){setTimeout((function(){return reject(Object(_insight_storybook__WEBPACK_IMPORTED_MODULE_7__.mockApiError)({statusCode:400,reason:"Bad Request",message:"Something went wrong"}))}),500)}))}},WithError=function(storyProps){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(baseui_block__WEBPACK_IMPORTED_MODULE_6__.a,{width:"100%",maxWidth:"720px",marginLeft:"auto",marginRight:"auto"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SignUpForm__WEBPACK_IMPORTED_MODULE_8__.a,_extends({},baseErrorProps,storyProps)))};WithError.displayName="WithError",Base.__docgenInfo={description:"",methods:[],displayName:"Base"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SignUpForm/SignUpForm.stories.tsx"]={name:"Base",docgenInfo:Base.__docgenInfo,path:"src/components/SignUpForm/SignUpForm.stories.tsx"}),WithError.__docgenInfo={description:"",methods:[],displayName:"WithError"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SignUpForm/SignUpForm.stories.tsx"]={name:"WithError",docgenInfo:WithError.__docgenInfo,path:"src/components/SignUpForm/SignUpForm.stories.tsx"})},982:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Base",(function(){return Base})),__webpack_require__.d(__webpack_exports__,"WithError",(function(){return WithError}));__webpack_require__(29),__webpack_require__(95),__webpack_require__(195);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(137),browser=__webpack_require__(22);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var mapTeamInvite=function mapTeamInvite(teamInvite){return _extends({},teamInvite,{createdAt:new Date(teamInvite.createdAt)})},sdk_esm_createAuthClient=function createAuthClient(authApiBaseURL){return{sso:{login:function login(email,password,_temp){var _ref=void 0===_temp?{}:_temp,_ref$baseURL=_ref.baseURL,baseURL=void 0===_ref$baseURL?authApiBaseURL:_ref$baseURL,rest=_objectWithoutPropertiesLoose(_ref,["baseURL"]),body=new URLSearchParams;return body.set("email",email),body.set("password",password),browser.a.post(baseURL+"/v1/sso/login",_extends({body:body,credentials:"include"},rest))},session:function session(sessionId,_temp2){var _ref2=void 0===_temp2?{}:_temp2,_ref2$baseURL=_ref2.baseURL,baseURL=void 0===_ref2$baseURL?authApiBaseURL:_ref2$baseURL,rest=_objectWithoutPropertiesLoose(_ref2,["baseURL"]);return browser.a.get(baseURL+"/v1/sso/session",_extends({searchParams:{id:sessionId}},rest))},me:function me(_temp3){var _ref3=void 0===_temp3?{}:_temp3,_ref3$baseURL=_ref3.baseURL,baseURL=void 0===_ref3$baseURL?authApiBaseURL:_ref3$baseURL,rest=_objectWithoutPropertiesLoose(_ref3,["baseURL"]);return browser.a.get(baseURL+"/v1/sso/me",_extends({credentials:"include"},rest)).json().then((function(response){return response.data}))},logout:function logout(_temp4){var _ref4=void 0===_temp4?{}:_temp4,_ref4$baseURL=_ref4.baseURL,baseURL=void 0===_ref4$baseURL?authApiBaseURL:_ref4$baseURL,rest=_objectWithoutPropertiesLoose(_ref4,["baseURL"]);return browser.a.post(baseURL+"/v1/sso/logout",_extends({credentials:"include"},rest))},logoutFromAllDevices:function logoutFromAllDevices(_temp5){var _ref5=void 0===_temp5?{}:_temp5,_ref5$baseURL=_ref5.baseURL,baseURL=void 0===_ref5$baseURL?authApiBaseURL:_ref5$baseURL,rest=_objectWithoutPropertiesLoose(_ref5,["baseURL"]);return browser.a.post(baseURL+"/v1/sso/logout-from-all-devices",_extends({credentials:"include"},rest))}},signup:{create:function create(json,_temp6){var _ref6=void 0===_temp6?{}:_temp6,_ref6$baseURL=_ref6.baseURL,baseURL=void 0===_ref6$baseURL?authApiBaseURL:_ref6$baseURL,rest=_objectWithoutPropertiesLoose(_ref6,["baseURL"]);return browser.a.post(baseURL+"/v1/signup",_extends({json:json},rest)).json()},verify:function verify(token,_temp7){var _ref7=void 0===_temp7?{}:_temp7,_ref7$baseURL=_ref7.baseURL,baseURL=void 0===_ref7$baseURL?authApiBaseURL:_ref7$baseURL,rest=_objectWithoutPropertiesLoose(_ref7,["baseURL"]);return browser.a.get(baseURL+"/v1/signup/"+token+"/valid",rest).json()},complete:function complete(token,_temp8){var _ref8=void 0===_temp8?{}:_temp8,_ref8$baseURL=_ref8.baseURL,baseURL=void 0===_ref8$baseURL?authApiBaseURL:_ref8$baseURL,rest=_objectWithoutPropertiesLoose(_ref8,["baseURL"]);return browser.a.post(baseURL+"/v1/signup/"+token+"/complete",rest)}},organizations:{get:function get(_temp9){var _ref9=void 0===_temp9?{}:_temp9,_ref9$baseURL=_ref9.baseURL,baseURL=void 0===_ref9$baseURL?authApiBaseURL:_ref9$baseURL,rest=_objectWithoutPropertiesLoose(_ref9,["baseURL"]);return browser.a.get(baseURL+"/v1/organizations",_extends({credentials:"include"},rest)).json().then((function(response){return function mapOrganization(organization){return _extends({},organization,{createdAt:new Date(organization.createdAt)})}(response.data)}))},members:function members(_temp10){var _ref10=void 0===_temp10?{}:_temp10,_ref10$baseURL=_ref10.baseURL,baseURL=void 0===_ref10$baseURL?authApiBaseURL:_ref10$baseURL,rest=_objectWithoutPropertiesLoose(_ref10,["baseURL"]);return browser.a.get(baseURL+"/v1/organizations/members",_extends({credentials:"include"},rest)).json().then((function(response){return response.data}))}},teamInvite:{list:function list(_temp15){var _ref15=void 0===_temp15?{}:_temp15,_ref15$baseURL=_ref15.baseURL,baseURL=void 0===_ref15$baseURL?authApiBaseURL:_ref15$baseURL,rest=_objectWithoutPropertiesLoose(_ref15,["baseURL"]);return browser.a.get(baseURL+"/v1/organizations/invites",_extends({credentials:"include"},rest)).json().then((function(response){return response.data.map(mapTeamInvite)}))},delete:function _delete(token,email,_temp16){var _ref16=void 0===_temp16?{}:_temp16,_ref16$baseURL=_ref16.baseURL,baseURL=void 0===_ref16$baseURL?authApiBaseURL:_ref16$baseURL,rest=_objectWithoutPropertiesLoose(_ref16,["baseURL"]);return browser.a.delete(baseURL+"/v1/organizations/invites/"+token,_extends({json:{email:email},credentials:"include"},rest)).json()},create:function create(json,_temp17){var _ref17=void 0===_temp17?{}:_temp17,_ref17$baseURL=_ref17.baseURL,baseURL=void 0===_ref17$baseURL?authApiBaseURL:_ref17$baseURL,rest=_objectWithoutPropertiesLoose(_ref17,["baseURL"]);return browser.a.post(baseURL+"/v1/organizations/invites",_extends({json:json,credentials:"include"},rest)).json().then((function(response){return mapTeamInvite(response.data)}))},resend:function resend(email,_temp18){var _ref18=void 0===_temp18?{}:_temp18,_ref18$baseURL=_ref18.baseURL,baseURL=void 0===_ref18$baseURL?authApiBaseURL:_ref18$baseURL,rest=_objectWithoutPropertiesLoose(_ref18,["baseURL"]);return browser.a.post(baseURL+"/v1/organizations/invites/send",_extends({json:{email:email},credentials:"include"},rest)).json()}},password:{forgot:function forgot(email,_temp11){var _ref11=void 0===_temp11?{}:_temp11,_ref11$baseURL=_ref11.baseURL,baseURL=void 0===_ref11$baseURL?authApiBaseURL:_ref11$baseURL,rest=_objectWithoutPropertiesLoose(_ref11,["baseURL"]);return browser.a.post(baseURL+"/v1/password_forgot",_extends({json:{email:email}},rest)).json()},reset:function reset(token,password,_temp12){var _ref12=void 0===_temp12?{}:_temp12,_ref12$baseURL=_ref12.baseURL,baseURL=void 0===_ref12$baseURL?authApiBaseURL:_ref12$baseURL,rest=_objectWithoutPropertiesLoose(_ref12,["baseURL"]);return browser.a.post(baseURL+"/v1/password_reset/"+token,_extends({json:{password:password},credentials:"include"},rest)).json()},change:function change(json,_temp13){var _ref13=void 0===_temp13?{}:_temp13,_ref13$baseURL=_ref13.baseURL,baseURL=void 0===_ref13$baseURL?authApiBaseURL:_ref13$baseURL,rest=_objectWithoutPropertiesLoose(_ref13,["baseURL"]);return browser.a.post(baseURL+"/v1/password_change",_extends({json:json,credentials:"include"},rest)).json()},resetExists:function resetExists(token,_temp14){var _ref14=void 0===_temp14?{}:_temp14,_ref14$baseURL=_ref14.baseURL,baseURL=void 0===_ref14$baseURL?authApiBaseURL:_ref14$baseURL,rest=_objectWithoutPropertiesLoose(_ref14,["baseURL"]);return browser.a.get(baseURL+"/v1/password_reset/"+token+"/exists",rest).json()}}}},base_authApiBaseURL=Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).NEXT_PUBLIC_AUTH_API_BASE_URL||"http://localhost:8080",auth=sdk_esm_createAuthClient(base_authApiBaseURL),head=(__webpack_require__(42),__webpack_require__(45),__webpack_require__(46),__webpack_require__(71),__webpack_require__(55),__webpack_require__(43),__webpack_require__(126),__webpack_require__(56),__webpack_require__(96),__webpack_require__(57),__webpack_require__(47),__webpack_require__(48),__webpack_require__(461)),head_default=__webpack_require__.n(head),styled=__webpack_require__(8),typography=__webpack_require__(117),block=__webpack_require__(25),SignUpForm=__webpack_require__(158),shared_config={appBaseURL:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).APP_BASE_URL||"http://localhost:3000",helpBaseURL:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).HELP_BASE_URL||"http://localhost:3003"},button_button=__webpack_require__(997),constants=__webpack_require__(11);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Topbar_ref2=react_default.a.createElement(typography.b,{margin:0},"Insight"),Topbar=function(_ref){var appBaseURL=_ref.appBaseURL,helpBaseURL=_ref.helpBaseURL,_useStyletron2=_slicedToArray(Object(styled.b)(),2),css=_useStyletron2[0],theme=_useStyletron2[1];return react_default.a.createElement("nav",{className:css({padding:theme.sizing.scale600,borderBottom:"1px solid ".concat(theme.colors.primary200)})},react_default.a.createElement(block.a,{display:"flex",justifyContent:"space-between"},Topbar_ref2,react_default.a.createElement(block.a,null,react_default.a.createElement("a",{href:helpBaseURL,className:css({marginRight:theme.sizing.scale600,textDecoration:"none"})},react_default.a.createElement(button_button.a,{shape:constants.b.pill,size:"compact",kind:"minimal"},"Help")),react_default.a.createElement("a",{href:appBaseURL,className:css({textDecoration:"none"})},react_default.a.createElement(button_button.a,{shape:constants.b.pill,size:"compact",kind:"minimal"},"Log in")))))};Topbar.displayName="Topbar",Topbar.__docgenInfo={description:"",methods:[],displayName:"Topbar",props:{appBaseURL:{required:!0,tsType:{name:"string"},description:""},helpBaseURL:{required:!0,tsType:{name:"string"},description:""}}};var Topbar_Topbar=Topbar;function GetStarted_slicedToArray(arr,i){return function GetStarted_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function GetStarted_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function GetStarted_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return GetStarted_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return GetStarted_arrayLikeToArray(o,minLen)}(arr,i)||function GetStarted_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function GetStarted_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Topbar/Topbar.tsx"]={name:"Topbar",docgenInfo:Topbar.__docgenInfo,path:"src/components/Topbar/Topbar.tsx"});var GetStarted_ref=react_default.a.createElement(head_default.a,null,react_default.a.createElement("title",null,"Insight | Sign up")),GetStarted=function(){var _useStyletron2=GetStarted_slicedToArray(Object(styled.b)(),2),theme=(_useStyletron2[0],_useStyletron2[1]);return react_default.a.createElement(block.a,{display:"flex",flexDirection:"column",height:"100%"},GetStarted_ref,react_default.a.createElement(Topbar_Topbar,{appBaseURL:shared_config.appBaseURL,helpBaseURL:shared_config.helpBaseURL}),react_default.a.createElement(block.a,{height:"100%",padding:theme.sizing.scale600},react_default.a.createElement(block.a,{width:"100%",maxWidth:"720px",marginLeft:"auto",marginRight:"auto"},react_default.a.createElement(block.a,{marginBottom:theme.sizing.scale700,$style:{textAlign:"center"}},react_default.a.createElement(typography.a,{marginBottom:theme.sizing.scale400,$style:{fontWeight:700}},"Start your free trial now."),react_default.a.createElement(typography.c,{marginTop:theme.sizing.scale400,color:theme.colors.primary400},"You're minutes away from insights.")),react_default.a.createElement(SignUpForm.a,{onSubmit:auth.signup.create}))))};GetStarted.displayName="GetStarted",GetStarted.__docgenInfo={description:"",methods:[],displayName:"GetStarted"};var GetStarted_GetStarted=GetStarted;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GetStarted/GetStarted.tsx"]={name:"GetStarted",docgenInfo:GetStarted.__docgenInfo,path:"src/components/GetStarted/GetStarted.tsx"});__webpack_exports__.default={title:"GetStarted"};var GetStarted_stories_ref=react_default.a.createElement(GetStarted_GetStarted,null),Base=function(){return GetStarted_stories_ref};Base.displayName="Base",Base.story=Object(dist.configureStory)({setupMocks:function setupMocks(sandbox){return sandbox.stub(auth.signup,"create").resolves(new Promise((function(resolve){return setTimeout(resolve,100)})))}});var GetStarted_stories_ref2=react_default.a.createElement(GetStarted_GetStarted,null),WithError=function(){return GetStarted_stories_ref2};WithError.displayName="WithError",WithError.story=Object(dist.configureStory)({setupMocks:function setupMocks(sandbox){return sandbox.stub(auth.signup,"create").rejects(Object(dist.mockApiError)({statusCode:400,reason:"Bad Request",message:"Something went wrong"}))}}),Base.__docgenInfo={description:"",methods:[],displayName:"Base"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GetStarted/GetStarted.stories.tsx"]={name:"Base",docgenInfo:Base.__docgenInfo,path:"src/components/GetStarted/GetStarted.stories.tsx"}),WithError.__docgenInfo={description:"",methods:[],displayName:"WithError"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GetStarted/GetStarted.stories.tsx"]={name:"WithError",docgenInfo:WithError.__docgenInfo,path:"src/components/GetStarted/GetStarted.stories.tsx"})},983:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var client=__webpack_require__(210),react=(__webpack_require__(29),__webpack_require__(95),__webpack_require__(0)),react_default=__webpack_require__.n(react),public_api=__webpack_require__(135),dist=__webpack_require__(51),router_context=__webpack_require__(294),next_router=__webpack_require__(211),browser_es5_es=__webpack_require__(161),dist_browser_es5_es=__webpack_require__(100),styletron="undefined"==typeof window?new browser_es5_es.b:new browser_es5_es.a({hydrate:document.getElementsByClassName("_styletron_hydrate_")}),base_provider=__webpack_require__(993),light_theme=__webpack_require__(985),ThemeProvider=function(_ref){var children=_ref.children;return react_default.a.createElement(base_provider.a,{theme:light_theme.a,overrides:{AppContainer:{style:{height:"100%",display:"flex",flexDirection:"column"}}}},children)};ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};var ThemeProvider_ThemeProvider=ThemeProvider;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/containers/ThemeProvider/ThemeProvider.tsx"]={name:"ThemeProvider",docgenInfo:ThemeProvider.__docgenInfo,path:"src/shared/containers/ThemeProvider/ThemeProvider.tsx"});var AppProviders=function(_ref){var children=_ref.children,_ref$engine=_ref.engine,engine=void 0===_ref$engine?styletron:_ref$engine;return react_default.a.createElement(dist_browser_es5_es.a,{value:engine,debug:void 0,debugAfterHydration:!0},react_default.a.createElement(ThemeProvider_ThemeProvider,null,children))};AppProviders.displayName="AppProviders",AppProviders.__docgenInfo={description:"",methods:[],displayName:"AppProviders",props:{engine:{defaultValue:{value:"styletron",computed:!0},required:!1,tsType:{name:"union",raw:"Client | Server",elements:[{name:"Client"},{name:"Server"}]},description:""},children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};var AppProviders_AppProviders=AppProviders;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/containers/AppProviders/AppProviders.tsx"]={name:"AppProviders",docgenInfo:AppProviders.__docgenInfo,path:"src/shared/containers/AppProviders/AppProviders.tsx"});var nextDecorator_engine=new browser_es5_es.a,_ref2=react_default.a.createElement("div",null,"Hello world"),nextDecorator=Object(public_api.makeDecorator)({name:"nextDecorator",parameterName:"next__decorator",skipIfNoParametersOrOptions:!1,wrapper:function wrapper(story,context,_ref){_ref.parameters;var router={route:"/",pathname:"/",query:{},asPath:"/",push:function push(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return Object(dist.action)("push")(args),Promise.resolve(!0)},back:Object(dist.action)("back"),replace:function replace(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return Object(dist.action)("replace")(args),Promise.resolve(!0)},reload:Object(dist.action)("reload"),beforePopState:Object(dist.action)("beforePopState"),prefetch:function prefetch(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];return Object(dist.action)("prefetch")(args),Promise.resolve()},events:{on:Object(dist.action)("events.on"),off:Object(dist.action)("events.off"),emit:Object(dist.action)("events.emit")},isFallback:!1};return Object(next_router.createRouter)(router.pathname,router.query,router.asPath,{isFallback:router.isFallback,pageLoader:{loadPage:function loadPage(){return Object(dist.action)("loadPage").apply(void 0,arguments),Promise.resolve((function(){return _ref2}))}}}),react_default.a.createElement(AppProviders_AppProviders,{engine:nextDecorator_engine},react_default.a.createElement(router_context.RouterContext.Provider,{value:router},story(context)))}});Object(client.addDecorator)(nextDecorator)}},[[472,1,2]]]);
//# sourceMappingURL=main.5159987d4673aa002631.bundle.js.map