import{a as u,g as G,e as Y,d as X,j as e,L as m}from"./app-Dyig8LYm.js";import{c as q,X as B,M as H}from"./x-BCo3K3Hs.js";import{L as K}from"./Oxala-Logo-VTc1k9sF.js";import{s as J}from"./index-DcG0XS5f.js";const Q=(s,n,a,t)=>{const h=[a,{code:n,...t||{}}];if(s?.services?.logger?.forward)return s.services.logger.forward(h,"warn","react-i18next::",!0);y(h[0])&&(h[0]=`react-i18next:: ${h[0]}`),s?.services?.logger?.warn?s.services.logger.warn(...h):console?.warn&&console.warn(...h)},$={},F=(s,n,a,t)=>{y(a)&&$[a]||(y(a)&&($[a]=new Date),Q(s,n,a,t))},T=(s,n)=>()=>{if(s.isInitialized)n();else{const a=()=>{setTimeout(()=>{s.off("initialized",a)},0),n()};s.on("initialized",a)}},I=(s,n,a)=>{s.loadNamespaces(n,T(s,a))},M=(s,n,a,t)=>{if(y(a)&&(a=[a]),s.options.preload&&s.options.preload.indexOf(n)>-1)return I(s,a,t);a.forEach(h=>{s.options.ns.indexOf(h)<0&&s.options.ns.push(h)}),s.loadLanguages(n,T(s,t))},Z=(s,n,a={})=>!n.languages||!n.languages.length?(F(n,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:n.languages}),!0):n.hasLoadedNamespace(s,{lng:a.lng,precheck:(t,h)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!h(t.isLanguageChangingTo,s))return!1}}),y=s=>typeof s=="string",V=s=>typeof s=="object"&&s!==null,ee=u.createContext();class ne{constructor(){this.usedNamespaces={}}addUsedNamespaces(n){n.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const se=(s,n)=>{if(y(n))return n;if(V(n)&&y(n.defaultValue))return n.defaultValue;if(typeof s=="function")return"";if(Array.isArray(s)){const a=s[s.length-1];return typeof a=="function"?"":a}return s},re={t:se,ready:!1},ae=()=>()=>{},A=(s,n={})=>{const{i18n:a}=n,{i18n:t,defaultNS:h}=u.useContext(ee)||{},r=a||t||Y();r&&!r.reportNamespaces&&(r.reportNamespaces=new ne),r||F(r,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");const x=u.useMemo(()=>({...G(),...r?.options?.react,...n}),[r,n]),{useSuspense:p,keyPrefix:v}=x,j=s||h||r?.options?.defaultNS,o=y(j)?[j]:j||["translation"],l=u.useMemo(()=>o,o);r?.reportNamespaces?.addUsedNamespaces?.(l);const w=u.useRef(0),k=u.useCallback(c=>{if(!r)return ae;const{bindI18n:d,bindI18nStore:i}=x,f=()=>{w.current+=1,c()};return d&&r.on(d,f),i&&r.store.on(i,f),()=>{d&&d.split(" ").forEach(b=>r.off(b,f)),i&&i.split(" ").forEach(b=>r.store.off(b,f))}},[r,x]),g=u.useRef(),R=u.useCallback(()=>{if(!r)return re;const c=!!(r.isInitialized||r.initializedStoreOnce)&&l.every(W=>Z(W,r,x)),d=n.lng||r.language,i=w.current,f=g.current;if(f&&f.ready===c&&f.lng===d&&f.keyPrefix===v&&f.revision===i)return f;const O={t:r.getFixedT(d,x.nsMode==="fallback"?l:l[0],v,{scopeNs:l}),ready:c,lng:d,keyPrefix:v,revision:i};return g.current=O,O},[r,l,v,x,n.lng]),[P,D]=u.useState(0),{t:E,ready:N}=J.useSyncExternalStore(k,R,R);u.useEffect(()=>{if(r&&!N&&!p){const c=()=>D(d=>d+1);n.lng?M(r,n.lng,l,c):I(r,l,c)}},[r,n.lng,l,N,p,P]);const C=r||{},L=u.useRef(null),_=u.useRef(),z=c=>{const d=Object.getOwnPropertyDescriptors(c);d.__original&&delete d.__original;const i=Object.create(Object.getPrototypeOf(c),d);if(!Object.prototype.hasOwnProperty.call(i,"__original"))try{Object.defineProperty(i,"__original",{value:c,writable:!1,enumerable:!1,configurable:!1})}catch{}return i},U=u.useMemo(()=>{const c=C,d=c?.language;let i=c;c&&(L.current&&L.current.__original===c?_.current!==d?(i=z(c),L.current=i,_.current=d):i=L.current:(i=z(c),L.current=i,_.current=d));const f=!N&&!p?(...O)=>(F(r,"USE_T_BEFORE_READY","useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."),E(...O)):E,b=[f,i,N];return b.t=f,b.i18n=i,b.ready=N,b},[E,C,N,C.resolvedLanguage,C.language,C.languages]);if(r&&p&&!N){let c=!1;try{c=!1}catch{}throw c&&F(r,"SUSPENDED_WHILE_LOADING","useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook"),new Promise(d=>{const i=()=>d();n.lng?M(r,n.lng,l,i):I(r,l,i)})}return U};const te=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S=q("chevron-down",te),oe="/build/assets/LOGO-OXALA-DG0WqIKe.png";function me(){const[s,n]=u.useState(!1),{url:a}=X(),t=g=>`
    relative
    transition
    pb-1
    ${a===g?"text-[#23478F] font-semibold":"text-gray-700 hover:text-[#23478F]"}
`,[h,r]=u.useState(!1),[x,p]=u.useState(!1),[v,j]=u.useState(!1),{t:o,i18n:l}=A("common"),[w,k]=u.useState(!1);return e.jsxs("header",{className:"bg-white border-b sticky top-0 z-50",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-6",children:e.jsxs("div",{className:"h-20 flex items-center justify-between",children:[e.jsx(m,{href:"/",children:e.jsx("img",{src:oe,alt:"Oxala",className:"h-20"})}),e.jsxs("nav",{className:"hidden lg:flex items-center gap-8 text-[1rem]",children:[e.jsx(m,{href:"/",className:t("/"),children:o("common:navbar.home")}),e.jsxs("div",{className:"relative flex items-center",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[e.jsx(m,{href:"/tentang-kami",className:t("/tentang-kami"),children:o("common:navbar.about")}),e.jsx("button",{onClick:g=>{g.stopPropagation(),r(!h)},className:"ml-1 p-1",children:e.jsx(S,{size:16,className:`transition ${h?"rotate-180":""}`})}),h&&e.jsxs("div",{className:`\r
                absolute\r
                top-full\r
                left-0\r
                mt-0\r
                w-64\r
                bg-white\r
                rounded-xl\r
                shadow-xl\r
                border\r
                overflow-hidden\r
                z-50\r
            `,children:[e.jsx("a",{href:"/tentang-kami#profil",className:"block px-5 py-3 hover:bg-gray-50",children:o("common:navbar.companyProfile")}),e.jsx("a",{href:"/tentang-kami#visi-misi",className:"block px-5 py-3 hover:bg-gray-50",children:o("common:navbar.visionMission")}),e.jsx("a",{href:"/tentang-kami#direksi-komisaris",className:"block px-5 py-3 hover:bg-gray-50",children:o("common:navbar.board")}),e.jsx("a",{href:"/tentang-kami#kontak",className:"block px-5 py-3 hover:bg-gray-50",children:o("common:navbar.contact")})]})]}),e.jsxs("div",{className:"relative flex items-center",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[e.jsx(m,{href:"/hubungan-investor",className:t("/hubungan-investor"),children:o("common:navbar.investor")}),e.jsx("button",{onClick:g=>{g.preventDefault(),g.stopPropagation(),p(!x)},className:"ml-1 p-1",children:e.jsx(S,{size:16,className:`transition ${x?"rotate-180":""}`})}),x&&e.jsxs("div",{className:`\r
                absolute\r
                top-full\r
                left-0\r
                mt-0\r
                w-64\r
                bg-white\r
                rounded-xl\r
                shadow-xl\r
                border\r
                overflow-hidden\r
                z-50\r
            `,children:[e.jsx("a",{href:"/hubungan-investor#laporan-tahunan",className:`\r
                    block\r
                    px-5\r
                    py-3\r
                    hover:bg-gray-50\r
                    transition\r
                `,children:o("common:navbar.annualReport")}),e.jsx("a",{href:"/hubungan-investor#kalender-investor",className:`\r
                    block\r
                    px-5\r
                    py-3\r
                    hover:bg-gray-50\r
                    transition\r
                `,children:o("common:navbar.investorCalendar")})]})]}),e.jsxs("div",{className:"relative flex items-center",onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[e.jsx(m,{href:"/keterbukaan-informasi",className:t("/keterbukaan-informasi"),children:o("common:navbar.information")}),e.jsx("button",{onClick:g=>{g.preventDefault(),g.stopPropagation(),j(!v)},className:"ml-1 p-1",children:e.jsx(S,{size:16,className:`transition ${v?"rotate-180":""}`})}),v&&e.jsx("div",{className:`\r
                absolute\r
                top-full\r
                left-0\r
                mt-0\r
                w-64\r
                bg-white\r
                rounded-xl\r
                shadow-xl\r
                border\r
                overflow-hidden\r
                z-50\r
            `,children:e.jsx("a",{href:"/keterbukaan-informasi#dokumen-informasi",className:`\r
                    block\r
                    px-5\r
                    py-3\r
                    hover:bg-gray-50\r
                    transition\r
                `,children:o("common:navbar.documents")})})]}),e.jsx(m,{href:"/produk",className:t("/produk"),children:o("common:navbar.products")}),e.jsx(m,{href:"/berita",className:t("/berita"),children:o("common:navbar.news")})]}),e.jsx("div",{className:"hidden lg:block",children:e.jsx(m,{href:"/hubungi-kami",className:`\r
                                bg-[#23478F]\r
                                text-white\r
                                px-5\r
                                py-2\r
                                rounded-md\r
                                text-sm\r
                                hover:bg-[#B7CA5C]\r
                                transition\r
                            `,children:o("common:navbar.contact")})}),e.jsxs("div",{className:"fixed top-5 right-6 z-[9999] hidden lg:block",onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:[e.jsxs("button",{className:`\r
            relative\r
            w-10\r
            h-10\r
            bg-white\r
            rounded-full\r
            border\r
            border-gray-200\r
            shadow-lg\r
            hover:shadow-xl\r
            flex\r
            items-center\r
            justify-center\r
            transition-all\r
            duration-300\r
        `,children:[e.jsx("span",{className:`fi ${l.language==="id"?"fi-id":"fi-us"} text-lg`}),e.jsx(S,{size:14,className:`
                absolute
                -bottom-1
                -right-1
                bg-white
                rounded-full
                p-0.5
                shadow
                transition-transform
                duration-300
                ${w?"rotate-180":""}
            `})]}),w&&e.jsxs("div",{className:`\r
                absolute\r
                right-0\r
                mt-0\r
                w-44\r
                bg-white\r
                rounded-xl\r
                border\r
                border-gray-200\r
                shadow-2xl\r
                overflow-hidden\r
                z-50\r
            `,children:[e.jsxs("button",{onClick:()=>{l.changeLanguage("id"),k(!1)},className:`
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    hover:bg-gray-50
                    transition
                    ${l.language==="id"?"bg-blue-50 text-[#23478F] font-semibold":""}
                `,children:[e.jsx("span",{className:"fi fi-id rounded-sm text-xl"}),e.jsx("span",{children:"Indonesia"})]}),e.jsxs("button",{onClick:()=>{l.changeLanguage("en"),k(!1)},className:`
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    hover:bg-gray-50
                    transition
                    ${l.language==="en"?"bg-blue-50 text-[#23478F] font-semibold":""}
                `,children:[e.jsx("span",{className:"fi fi-us rounded-sm text-xl"}),e.jsx("span",{children:"English"})]})]})]}),e.jsx("button",{onClick:()=>n(!s),className:"lg:hidden",children:s?e.jsx(B,{size:28}):e.jsx(H,{size:28})})]})}),s&&e.jsx("div",{className:"lg:hidden border-t bg-white",children:e.jsxs("nav",{className:"flex flex-col p-4",children:[e.jsx(m,{href:"/tentang-kami",className:`py-3 border-b ${t("/tentang-kami")}`,onClick:()=>n(!1),children:o("common:navbar.about")}),e.jsx(m,{href:"/hubungan-investor",className:`py-3 border-b ${t("/hubungan-investor")}`,onClick:()=>n(!1),children:o("common:navbar.investor")}),e.jsx(m,{href:"/keterbukaan-informasi",className:`py-3 border-b ${t("/keterbukaan-informasi")}`,onClick:()=>n(!1),children:o("common:navbar.information")}),e.jsx(m,{href:"/produk",className:`py-3 border-b ${t("/produk")}`,onClick:()=>n(!1),children:o("common:navbar.products")}),e.jsx(m,{href:"/berita",className:`py-3 border-b ${t("/berita")}`,onClick:()=>n(!1),children:o("common:navbar.news")}),e.jsx(m,{href:"/hubungi-kami",className:`\r
                                mt-4\r
                                bg-[#23478F]\r
                                hover:bg-[#7A9433]\r
                                text-white\r
                                text-center\r
                                py-3\r
                                rounded-md\r
                            `,onClick:()=>n(!1),children:o("common:navbar.contact")}),e.jsxs("div",{className:"border-t mt-4 pt-4",children:[e.jsx("p",{className:"text-sm text-gray-500 mb-3",children:"Language"}),e.jsxs("button",{onClick:()=>l.changeLanguage("id"),className:`
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            mb-2
            transition
            ${l.language==="id"?"bg-[#23478F] text-white":"bg-gray-100 hover:bg-gray-200"}
        `,children:[e.jsx("span",{className:"fi fi-id rounded-sm"}),"Indonesia"]}),e.jsxs("button",{onClick:()=>l.changeLanguage("en"),className:`
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            transition
            ${l.language==="en"?"bg-[#23478F] text-white":"bg-gray-100 hover:bg-gray-200"}
        `,children:[e.jsx("span",{className:"fi fi-us rounded-sm"}),"English"]})]})]})})]})}function ue(){const s=new Date().getFullYear(),{t:n}=A("common");return e.jsx("footer",{className:"bg-white border-t",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-20",children:[e.jsxs("div",{className:"grid lg:grid-cols-4 gap-12",children:[e.jsxs("div",{children:[e.jsx("img",{src:K,alt:"Oxala",className:"h-12 mb-6"}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:n("common:footer.description")})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-[#23478F] mb-5",children:n("common:footer.navigation")}),e.jsxs("ul",{className:"space-y-3 text-gray-600",children:[e.jsx("li",{children:e.jsx(m,{href:"/",className:"hover:text-[#23478F]",children:n("common:footer.home")})}),e.jsx("li",{children:e.jsx(m,{href:"/tentang-kami",className:"hover:text-[#23478F]",children:n("common:footer.about")})}),e.jsx("li",{children:e.jsx(m,{href:"/keterbukaan-informasi",className:"hover:text-[#23478F]",children:n("common:footer.information")})}),e.jsx("li",{children:e.jsx(m,{href:"/berita",className:"hover:text-[#23478F]",children:n("common:footer.news")})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-[#23478F] mb-5",children:n("common:footer.corporate")}),e.jsxs("ul",{className:"space-y-3 text-gray-600",children:[e.jsx("li",{children:e.jsx(m,{href:"/produk",className:"hover:text-[#23478F]",children:n("common:footer.products")})}),e.jsx("li",{children:e.jsx(m,{href:"/hubungan-investor",className:"hover:text-[#23478F]",children:n("common:footer.investor")})}),e.jsx("li",{children:e.jsx(m,{href:"/hubungi-kami",className:"hover:text-[#23478F]",children:n("common:footer.contact")})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-[#23478F] mb-5",children:n("common:footer.contactUs")}),e.jsx("p",{className:"text-gray-600",children:n("common:footer.address")}),e.jsx("p",{className:"mt-4 font-semibold text-[#23478F]",children:n("common:footer.email")})]})]}),e.jsx("div",{className:"border-t mt-12 pt-8",children:e.jsxs("div",{className:"flex flex-col lg:flex-row justify-between text-sm text-gray-500",children:[e.jsxs("span",{children:["© ",s," Oxalá Energy & Infrastructure. All Rights Reserved."]}),e.jsxs("div",{className:"flex gap-8 mt-4 lg:mt-0",children:[e.jsx("a",{href:"#",children:n("common:footer.privacy")}),e.jsx("a",{href:"#",children:n("common:footer.terms")}),e.jsx("a",{href:"#",children:n("common:footer.ethics")})]})]})})]})})}export{ue as F,me as N,A as u};
