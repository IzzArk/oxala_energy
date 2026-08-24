import{j as r,L as a,H as l}from"./app-DjY9OvIT.js";import{u as i,N as o,F as c}from"./Footer-Dp0LJr9w.js";import{m as t}from"./proxy-mrog24mL.js";import{C as x}from"./calendar-days-Cmy3KFWm.js";import{A as d}from"./arrow-right-CT1_g7Yw.js";/* empty css            */import"./x-DE4Z1Ej6.js";import"./Oxala-Logo-VTc1k9sF.js";import"./index-C3wNA0t3.js";function m(){const{t:e}=i("news");return r.jsx(t.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},className:"bg-[#23478F] py-24 text-white",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 text-center",children:[r.jsx("span",{className:"uppercase tracking-widest",children:e("news:hero.badge")}),r.jsx("h1",{className:"text-5xl font-bold mt-4",children:e("news:hero.title")}),r.jsx("p",{className:"max-w-2xl mx-auto mt-4 text-blue-100",children:e("news:hero.description")})]})})}function u({news:e}){return e?r.jsx(t.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},className:"py-20",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:r.jsx(a,{href:`/berita/${e.slug}`,children:r.jsxs("div",{className:`\r
                            grid\r
                            lg:grid-cols-2\r
                            gap-10\r
                            items-center\r
                        `,children:[r.jsx("img",{src:`/storage/${e.thumbnail}`,className:`\r
                                w-full\r
                                h-[450px]\r
                                object-cover\r
                                rounded-xl\r
                            `}),r.jsxs("div",{children:[r.jsx("span",{className:`\r
                                    text-[#23478F]\r
                                    font-semibold\r
                                `,children:"BERITA UTAMA"}),r.jsx("h2",{className:`\r
                                    text-4xl\r
                                    font-bold\r
                                    mt-4\r
                                    mb-4\r
                                `,children:e.title}),r.jsx("div",{className:`\r
                                    text-gray-600\r
                                    line-clamp-4\r
                                `,dangerouslySetInnerHTML:{__html:e.content}})]})]})})})}):null}function h({news:e}){return r.jsxs(a,{href:`/berita/${e.slug}`,className:`\r
                group\r
                block\r
                bg-white\r
                rounded-2xl\r
                overflow-hidden\r
                border\r
                border-gray-100\r
                shadow-sm\r
                hover:shadow-xl\r
                hover:border-[#B6C95C]\r
                hover:-translate-y-2\r
                transition-all\r
                duration-300\r
                h-full\r
            `,children:[r.jsx("div",{className:"h-1 bg-[#B6C95C]"}),r.jsx("div",{className:"overflow-hidden",children:r.jsx("img",{src:`/storage/${e.thumbnail}`,alt:e.title,className:`\r
                        w-full\r
                        h-60\r
                        object-cover\r
                        transition-transform\r
                        duration-500\r
                        group-hover:scale-105\r
                    `})}),r.jsxs("div",{className:"p-7 flex flex-col h-full",children:[r.jsx("span",{className:`\r
                        inline-block\r
                        w-fit\r
                        px-3\r
                        py-1\r
                        rounded-full\r
                        bg-[#EEF4D7]\r
                        text-[#7A9433]\r
                        text-xs\r
                        font-semibold\r
                        uppercase\r
                        tracking-wider\r
                        mb-5\r
                    `,children:"News"}),r.jsxs("div",{className:`\r
                        flex\r
                        items-center\r
                        gap-2\r
                        text-sm\r
                        text-gray-500\r
                        mb-4\r
                    `,children:[r.jsx(x,{size:16,className:"text-[#7A9433]"}),new Date(e.published_at).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})]}),r.jsx("h3",{className:`\r
                        text-2xl\r
                        font-bold\r
                        text-[#23478F]\r
                        group-hover:text-[#7A9433]\r
                        transition-colors\r
                        line-clamp-2\r
                        mb-4\r
                    `,children:e.title}),r.jsx("p",{className:"text-gray-600 leading-7 line-clamp-3 flex-1",children:e.excerpt??e.content?.replace(/<[^>]+>/g,"").substring(0,120)+"..."}),r.jsxs("div",{className:`\r
                        mt-8\r
                        inline-flex\r
                        items-center\r
                        gap-2\r
                        font-semibold\r
                        text-[#23478F]\r
                        group-hover:text-[#7A9433]\r
                        transition-colors\r
                    `,children:["Baca Selengkapnya",r.jsx(d,{size:18})]})]})]})}function p({news:e}){return r.jsx(t.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},className:"pb-24",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:r.jsx("div",{className:`\r
                        grid\r
                        md:grid-cols-2\r
                        lg:grid-cols-3\r
                        gap-8\r
                    `,children:e.map(n=>r.jsx(h,{news:n},n.id))})})})}function j({links:e}){return r.jsx(t.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},className:"flex justify-center gap-2 py-10",children:e.map((n,s)=>r.jsx(a,{href:n.url||"#",dangerouslySetInnerHTML:{__html:n.label},className:`
                        px-4 py-2 rounded-md border
                        ${n.active?"bg-[#23478F] text-white":""}
                    `},s))})}function g(){const{t:e}=i("news");return r.jsx(t.section,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},className:"bg-[#23478F] py-20",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-center text-white",children:[r.jsx("h2",{className:"text-4xl font-bold",children:e("news:cta.title")}),r.jsx("p",{className:"mt-4 text-blue-100",children:e("news:cta.description")})]})})}function C({news:e}){const n=e.data[0],s=e.data.slice(1);return r.jsxs(r.Fragment,{children:[r.jsx(l,{title:"Berita"}),r.jsx(o,{}),r.jsx(m,{}),r.jsx(u,{news:n}),r.jsx(p,{news:s}),r.jsx(j,{links:e.links}),r.jsx(g,{}),r.jsx(c,{})]})}export{C as default};
