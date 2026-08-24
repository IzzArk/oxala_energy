import{j as e,H as s}from"./app-DjY9OvIT.js";import{F as a,A as l}from"./AdminLayout-BshZQvB9.js";import{N as i}from"./newspaper-CU-wotk5.js";import{P as c}from"./phone-Bv_jM5y2.js";import{F as m}from"./file-text-B7YYpJXn.js";/* empty css            */import"./x-DE4Z1Ej6.js";import"./leaf-OZm0XzKn.js";function f({stats:t}){const n=[{title:"Berita",value:t.news,icon:i,color:"bg-blue-500"},{title:"Pesan Masuk",value:t.contacts,icon:c,color:"bg-green-500"},{title:"Laporan Tahunan",value:t.annualReports,icon:m,color:"bg-orange-500"},{title:"Dokumen Tata Kelola",value:t.governanceDocuments,icon:a,color:"bg-purple-500"}];return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Dashboard"}),e.jsxs(l,{children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Dashboard"}),e.jsx("p",{className:"text-slate-500 mt-2 mb-8",children:"Selamat datang di OXALA CMS"}),e.jsx("div",{className:"grid md:grid-cols-2 xl:grid-cols-4 gap-6",children:n.map(r=>{const o=r.icon;return e.jsxs("div",{className:`\r
                                    bg-white\r
                                    rounded-xl\r
                                    border\r
                                    shadow-sm\r
                                    p-6\r
                                    flex\r
                                    items-center\r
                                    justify-between\r
                                `,children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-500 text-sm",children:r.title}),e.jsx("h2",{className:"text-4xl font-bold mt-2",children:r.value})]}),e.jsx("div",{className:`
                                        ${r.color}
                                        w-14
                                        h-14
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                    `,children:e.jsx(o,{size:28})})]},r.title)})})]})]})}export{f as default};
