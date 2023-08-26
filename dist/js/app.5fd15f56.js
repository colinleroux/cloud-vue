(function(){var e={93003:function(e,t,o){"use strict";var r=o(49242),n=o(73396);function s(e,t,o,r,s,a){const l=(0,n.up)("NavbarComp"),i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(l),(0,n.Wm)(i)])}const a={key:0,class:"font-bold text-white flex items-center space-x-5 flex-wrap bg-blue-500 p-6"},l=(0,n.Uk)("Login"),i=(0,n.Uk)("Register"),u={key:1,class:"font-bold text-white flex justify-between items-center flex-wrap bg-blue-500 p-6"},d={class:"flex space-x-5 items-center"},c=(0,n.Uk)("Products");function p(e,t,o,r,s,p){const g=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",null,[s.isAuthenticated?((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",d,[(0,n.Wm)(g,{class:"hover:bg-green-500 rounded px-2 py-1",to:"/products"},{default:(0,n.w5)((()=>[c])),_:1})]),(0,n._)("button",{class:"hover:bg-green-500 rounded px-2 py-1 justify-right",onClick:t[0]||(t[0]=(...e)=>p.logout&&p.logout(...e))}," Logout ")])):((0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(g,{class:"hover:bg-green-500 rounded px-2 py-1",to:"/"},{default:(0,n.w5)((()=>[l])),_:1}),(0,n.Wm)(g,{class:"hover:bg-green-500 rounded px-2 py-1",to:"/register"},{default:(0,n.w5)((()=>[i])),_:1})]))])}var g=o(56265),f=o.n(g);let m=f().create({withCredentials:!0});m.interceptors.request.use((e=>{e.headers["Content-Type"]="application/json",e.headers.common["Content-Type"]="application/json";const t=localStorage.getItem("token");return t&&(e.headers.common["Authorization"]=`Bearer ${t}`),e}));var w=m;const h="https://phplaravel-1087149-3803713.cloudwaysapps.com";var x={createSession(){return w.get(`${h}/sanctum/csrf-cookie`)},login(e){const t=e.email,o=e.password;return w.post(`${h}/api/auth/login`,{email:t,password:o})},register(e){const t=e.name,o=e.email,r=e.password,n=e.password_confirmation;return w.post(`${h}/api/auth/register`,{name:t,email:o,password:r,password_confirmation:n})},logout(){return w.post(`${h}/api/auth/logout`)},getProducts(){return w.get(`${h}/api/v1/products`)},getProduct(e){return w.get(`${h}/api/v1/products/`+e)},setToken(e){localStorage.setItem("token",e)},removeToken(){localStorage.removeItem("token")},isAuthenticated(){return!!localStorage.getItem("token")}},b={data(){return{isAuthenticated:!1}},mounted(){this.isAuthenticated=x.isAuthenticated()},methods:{logout(){x.logout(),x.removeToken(),this.reloadPage(),this.$router.push("/")},reloadPage(){window.location.reload()}}},y=o(40089);const v=(0,y.Z)(b,[["render",p]]);var _=v,k={name:"AppView",components:{NavbarComp:_},data(){return{isLoggedIn:!!localStorage.getItem("token")}},methods:{}};const P=(0,y.Z)(k,[["render",s]]);var z=P,D=o(22483),$=o(87139);const j=(0,n._)("h1",{class:"text-3xl font-bold mt-5 mb-5 text-center"},"Login Page",-1),C={class:"flex justify-center"},O={class:"w-full max-w-sm m-5"},V={class:"bg-white rounded-xl shadow-lg p-6 h-full"},S={class:"flex flex-wrap -mx-3 mb-6"},U={class:"w-full px-3 py-2"},E=(0,n._)("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title"}," Email ",-1),T={class:"w-full px-3 py-2"},I=(0,n._)("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title"}," Password ",-1),A={class:"w-full px-3 py-2"},L={class:"text-red-500"};function W(e,t,o,s,a,l){return(0,n.wg)(),(0,n.iD)("div",null,[j,(0,n._)("div",C,[(0,n._)("div",O,[(0,n._)("div",V,[(0,n._)("div",S,[(0,n._)("div",U,[E,(0,n.wy)((0,n._)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.user.email=e)},null,512),[[r.nr,a.user.email]])]),(0,n._)("div",T,[I,(0,n.wy)((0,n._)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.user.password=e),onKeyup:t[2]||(t[2]=(0,r.D2)(((...e)=>l.login&&l.login(...e)),["enter"]))},null,544),[[r.nr,a.user.password]])]),(0,n._)("div",A,[(0,n._)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:t[3]||(t[3]=(...e)=>l.login&&l.login(...e))}," Login "),(0,n._)("p",L,(0,$.zw)(a.errorMessage),1)])])])])])])}var Z={name:"LoginView",components:{},data(){return{user:{email:null,password:null},errorMessage:null}},mounted(){this.user.password=""},methods:{async login(){x.createSession();try{const e=await x.login(this.user);console.log(e),x.setToken(e.data.token),this.reloadPage(),this.$router.push("/products"),this.errorMessage=null}catch(e){console.error(e),this.errorMessage="Login failed. Please check your email and password."}},reloadPage(){window.location.reload()}}};const M=(0,y.Z)(Z,[["render",W]]);var R=M;const K=(0,n._)("h1",{class:"text-3xl font-bold mt-5 mb-5 text-center"},"Register Page",-1),N={class:"flex justify-center"},B={class:"w-full max-w-sm m-5"},H={class:"bg-white rounded-xl shadow-lg p-6 h-full"},Y={class:"flex flex-wrap -mx-3 mb-6"},q={class:"w-full px-3 py-2"},F=(0,n._)("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title"}," Name ",-1),G={class:"text-red-500 text-xs italic"},J={class:"w-full px-3 py-2"},Q=(0,n._)("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title"}," Email ",-1),X={class:"text-red-500 text-xs italic"},ee={class:"w-full px-3 py-2"},te=(0,n._)("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title"}," Confirm Password ",-1),oe={class:"text-red-500 text-xs italic"},re={class:"w-full px-3 py-2"},ne=(0,n._)("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title"}," Password ",-1),se={class:"text-red-500 text-xs italic"},ae={class:"w-full px-3 py-2"};function le(e,t,o,s,a,l){return(0,n.wg)(),(0,n.iD)("div",null,[K,(0,n._)("div",N,[(0,n._)("div",B,[(0,n._)("div",H,[(0,n._)("div",Y,[(0,n._)("div",q,[F,(0,n.wy)((0,n._)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"name","onUpdate:modelValue":t[0]||(t[0]=e=>a.user.name=e)},null,512),[[r.nr,a.user.name]]),(0,n._)("p",G,(0,$.zw)(a.errors.name),1)]),(0,n._)("div",J,[Q,(0,n.wy)((0,n._)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>a.user.email=e)},null,512),[[r.nr,a.user.email]]),(0,n._)("p",X,(0,$.zw)(a.errors.email),1)]),(0,n._)("div",ee,[te,(0,n.wy)((0,n._)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>a.user.password=e)},null,512),[[r.nr,a.user.password]]),(0,n._)("p",oe,(0,$.zw)(a.errors.password),1)]),(0,n._)("div",re,[ne,(0,n.wy)((0,n._)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password_confirm",type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>a.user.password_confirmation=e)},null,512),[[r.nr,a.user.password_confirmation]]),(0,n._)("p",se,(0,$.zw)(a.errors.password_confirmation),1)])]),(0,n._)("div",ae,[(0,n._)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:t[4]||(t[4]=(...e)=>l.register&&l.register(...e))}," Register ")])])])])])}var ie={name:"RegisterView",components:{},data(){return{user:{name:null,email:null,password:null,password_confirmation:null},errors:{}}},methods:{async register(){x.createSession();try{const e=await x.register(this.user);x.setToken(e.data.token),this.reloadPage(),this.$router.push("/products")}catch(e){console.error(e),e.response&&e.response.data&&e.response.data.errors?this.errors=e.response.data.errors:this.errors={message:"Registration failed. Please try again later."}}},reloadPage(){window.location.reload()}}};const ue=(0,y.Z)(ie,[["render",le]]);var de=ue;const ce={class:"grid grid-cols-4 gap-4"},pe={class:"bg-white p-4 shadow rounded-lg"},ge={class:"text-lg font-medium"},fe={class:"text-gray-500"},me={class:"text-gray-900 font-bold"};function we(e,t,o,r,s,a){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",ce,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.data.data,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id},[(0,n.Wm)(l,{to:"/products/"+e.id},{default:(0,n.w5)((()=>[(0,n._)("div",pe,[(0,n._)("h1",ge,(0,$.zw)(e.name),1),(0,n._)("p",fe,(0,$.zw)(e.description),1),(0,n._)("p",me,"$"+(0,$.zw)(e.price),1)])])),_:2},1032,["to"])])))),128))])}var he={name:"ProductsView",components:{},data(){return{data:[]}},mounted(){x.getProducts().then((e=>{console.log(e.data),this.data=e.data}))}};const xe=(0,y.Z)(he,[["render",we]]);var be=xe;const ye={class:"bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto my-8"},ve={class:"p-4"},_e={class:"text-lg font-semibold"},ke={class:"text-gray-700 text-sm"},Pe={class:"text-lg font-semibold text-gray-900"},ze=(0,n._)("p",{class:"text-md font-semibold text-gray-900"},"Categories",-1),De=(0,n._)("br",null,null,-1),$e=(0,n.Uk)("Back");function je(e,t,o,r,s,a){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",ye,[(0,n._)("div",ve,[(0,n._)("h1",_e,(0,$.zw)(s.product.name),1),(0,n._)("p",ke,"desc"+(0,$.zw)(s.product.description),1),(0,n._)("p",Pe,"$"+(0,$.zw)(s.product.price),1),(0,n._)("ul",null,[ze,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.product.categories,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.id},(0,$.zw)(e.attributes.name),1)))),128))]),De,(0,n.Wm)(l,{to:"/products"},{default:(0,n.w5)((()=>[$e])),_:1})])])}var Ce=o(12281),Oe={name:"ProductView",computed:{data(){return Ce.data}},data(){return{product:{}}},mounted(){this.getProduct()},methods:{getProduct(){x.getProduct(this.$route.params.id).then((e=>{console.log(e.data),this.product=e.data.data}))}}};const Ve=(0,y.Z)(Oe,[["render",je]]);var Se=Ve,Ue=(e,t,o)=>{localStorage.getItem("token")?o({name:"products"}):o()},Ee=(e,t,o)=>{localStorage.getItem("token")?o():o({name:"login"})},Te={guest:Ue,user:Ee},Ie=[{path:"/",name:"login",component:R,beforeEnter:Te.guest},{path:"/register",name:"register",component:de,beforeEnter:Te.guest},{path:"/logout",name:"logout",beforeEnter:Te.user},{path:"/testpage",name:"testpage",beforeEnter:Te.user},{path:"/products",name:"products",component:be,beforeEnter:Te.user},{path:"/products/:id",name:"product",component:Se,beforeEnter:Te.user}];const Ae=(0,D.p7)({history:(0,D.PO)("/"),routes:Ie});var Le=Ae;(0,r.ri)(z).use(Le).mount("#app")},72950:function(){},22868:function(){},14777:function(){},99830:function(){},70209:function(){},87414:function(){}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,s){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var l=!0,i=0;i<r.length;i++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](r[i])}))?r.splice(i--,1):(l=!1,s<a&&(a=s));if(l){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,a=r[0],l=r[1],i=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var d=i(o)}for(t&&t(r);u<a.length;u++)s=a[u],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=self["webpackChunkonline_library"]=self["webpackChunkonline_library"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(93003)}));r=o.O(r)})();
//# sourceMappingURL=app.5fd15f56.js.map