import{j as t,H as m}from"./app-BXgzW7Ep.js";import{u as o,N as x,F as p}from"./Footer-DGiIndMT.js";import{m as n}from"./proxy-AzkH0j9N.js";import{T as h}from"./trending-up-NPJmcFrT.js";import{L as g}from"./landmark-Be4AWyGC.js";import{c as l}from"./LOGO-OXALA-C9CdK5i9.js";import{S as j}from"./shield-check-CzuNQD5B.js";import{L as b}from"./leaf-UrPvBh5_.js";/* empty css            */import"./Oxala-Logo-VTc1k9sF.js";import"./index--U-sxGBp.js";const f=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],y=l("cpu",f);const v=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],w=l("settings-2",v);function N(){const{t:e}=o("product");return t.jsx(n.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},className:"bg-[#23478F] text-white py-24",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-6 text-center",children:[t.jsx("span",{className:"uppercase tracking-widest text-blue-200",children:e("product:hero.badge")}),t.jsx("h1",{className:"text-4xl md:text-6xl font-bold mt-4",children:e("product:hero.title")}),t.jsx("p",{className:"max-w-3xl mx-auto mt-6 text-blue-100",children:e("product:hero.description")})]})})}function k({title:e,subtitle:s,image:r,color:i,features:a=[],tags:d=[]}){const{t:P}=o("product");return t.jsxs("div",{className:`\r
                relative\r
                rounded-3xl\r
                overflow-hidden\r
                min-h-[520px]\r
                shadow-xl\r
                group\r
            `,children:[t.jsx("img",{src:r,alt:e,className:`\r
                    absolute\r
                    inset-0\r
                    w-full\r
                    h-full\r
                    object-cover\r
                    transition\r
                    duration-700\r
                    group-hover:scale-105\r
                `}),t.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${i}`}),t.jsxs("div",{className:"relative z-10 p-10 flex flex-col h-full text-white",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-4xl font-bold",children:e}),t.jsx("p",{className:"mt-4 text-white/80",children:s})]}),t.jsx("div",{className:"mt-8 space-y-3",children:a.map((c,u)=>t.jsxs("div",{className:"flex gap-3 items-start",children:[t.jsx("div",{className:"w-2 h-2 rounded-full bg-[#B6C95C] mt-3 flex-shrink-0"}),t.jsx("span",{className:"leading-7",children:c})]},u))}),t.jsx("div",{className:"flex flex-wrap gap-3 mt-8",children:d.map(c=>t.jsx("span",{className:`\r
                                px-4\r
                                py-2\r
                                rounded-full\r
                                bg-white/10\r
                                border\r
                                border-white/20\r
                                backdrop-blur\r
                                text-sm\r
                            `,children:c},c))})]})]})}function F(){const{t:e}=o("product"),s=[{title:e("product:categories.items.pipeline.title"),subtitle:e("product:categories.items.pipeline.subtitle"),image:"https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80",color:"from-[#A63E30]/90 to-[#8C3025]/90",features:e("product:categories.items.pipeline.features",{returnObjects:!0}),tags:e("product:categories.items.pipeline.tags",{returnObjects:!0})},{title:e("product:categories.items.renewable.title"),subtitle:e("product:categories.items.renewable.subtitle"),image:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",color:"from-[#23478F]/90 to-[#18386B]/90",features:[...e("product:categories.items.renewable.features",{returnObjects:!0}),...e("product:categories.items.logistic.features",{returnObjects:!0})],tags:[...e("product:categories.items.renewable.tags",{returnObjects:!0}),...e("product:categories.items.logistic.tags",{returnObjects:!0})]}];return t.jsx("section",{className:"py-24 bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[t.jsxs(n.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[t.jsx("h2",{className:"text-4xl font-bold text-[#23478F]",children:e("product:categories.title")}),t.jsx("div",{className:"w-24 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5"}),t.jsx("p",{className:"text-gray-600 mt-6 max-w-3xl mx-auto",children:e("product:categories.description")})]}),t.jsx("div",{className:"grid lg:grid-cols-2 gap-8",children:s.map((r,i)=>t.jsx(k,{...r},i))})]})})}function C(){const{t:e}=o("product"),s=[{icon:h,title:e("product:solutions.items.trading.title"),description:e("product:solutions.items.trading.description")},{icon:g,title:e("product:solutions.items.investment.title"),description:e("product:solutions.items.investment.description")},{icon:w,title:e("product:solutions.items.operation.title"),description:e("product:solutions.items.operation.description")}];return t.jsx(n.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"py-24 bg-[#F7F9FF]",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-4xl font-bold text-[#23478F]",children:e("product:solutions.title")}),t.jsx("div",{className:"w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5"})]}),t.jsx("div",{className:"grid lg:grid-cols-3 gap-8",children:s.map((r,i)=>{const a=r.icon;return t.jsxs(n.div,{whileHover:{y:-8},transition:{duration:.25},className:`\r
                                    bg-white\r
                                    border\r
                                    border-gray-200\r
                                    rounded-2xl\r
                                    p-8\r
                                    shadow-sm\r
                                    hover:shadow-xl\r
                                    hover:border-[#B6C95C]\r
                                    transition-all\r
                                    duration-300\r
                                    relative\r
                                    overflow-hidden\r
                                `,children:[t.jsx("div",{className:"absolute left-0 top-0 w-full h-1 bg-[#B6C95C]"}),t.jsx("div",{className:`\r
                                        w-14\r
                                        h-14\r
                                        rounded-xl\r
                                        bg-[#EEF4D7]\r
                                        flex\r
                                        items-center\r
                                        justify-center\r
                                        mb-6\r
                                    `,children:t.jsx(a,{size:26,className:"text-[#23478F]"})}),t.jsx("h3",{className:"text-2xl font-bold text-[#23478F] mb-4",children:r.title}),t.jsx("p",{className:"text-gray-600 leading-7",children:r.description})]},i)})})]})})}function M(){const{t:e}=o("product"),s=[{icon:j,title:e("product:advantages.items.safety")},{icon:y,title:e("product:advantages.items.technology")},{icon:b,title:e("product:advantages.items.environment")}];return t.jsx(n.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},className:"py-24",children:t.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[t.jsx("h2",{className:"text-4xl text-center font-bold text-[#23478F] mb-16",children:e("product:advantages.title")}),t.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:s.map((r,i)=>{const a=r.icon;return t.jsxs("div",{className:`\r
                                    border\r
                                    rounded-xl\r
                                    p-8\r
                                    text-center\r
                                `,children:[t.jsx(a,{size:40,className:"mx-auto text-[#23478F]"}),t.jsx("h3",{className:"mt-4 font-bold",children:r.title})]},i)})})]})})}function I(){const{t:e}=o("product");return t.jsx(n.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},className:"py-24 bg-[#23478F]",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-center",children:[t.jsx("h2",{className:"text-4xl font-bold text-white",children:e("product:cta.title")}),t.jsx("p",{className:"text-blue-100 mt-4",children:e("product:cta.description")}),t.jsx("a",{href:"/hubungi-kami",className:`\r
                        inline-block\r
                        mt-8\r
                        bg-white\r
                        text-[#23478F]\r
                        px-8\r
                        py-3\r
                        rounded-lg\r
                        font-semibold\r
                    `,children:e("product:cta.button")})]})})}function A(){return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Produk"}),t.jsx(x,{}),t.jsx(N,{}),t.jsx(F,{}),t.jsx(C,{}),t.jsx(M,{}),t.jsx(I,{}),t.jsx(p,{})]})}export{A as default};
