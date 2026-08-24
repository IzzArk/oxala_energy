import{j as e,r as i}from"./app-DjY9OvIT.js";import{A as r}from"./AdminLayout-BshZQvB9.js";import{A as l,a as t,b as d,c as n,d as m,e as c,f as x,g as o,h}from"./alert-dialog-DKsPzsJ7.js";/* empty css            */import"./x-DE4Z1Ej6.js";import"./newspaper-CU-wotk5.js";import"./leaf-OZm0XzKn.js";import"./phone-Bv_jM5y2.js";import"./file-text-B7YYpJXn.js";function A({contact:s}){const a=()=>{i.delete(`/admin/contacts/${s.id}`)};return e.jsx(r,{children:e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("div",{className:"flex items-center justify-between mb-6",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Detail Pesan"}),e.jsx("p",{className:"text-gray-500 mt-1",children:"Informasi pesan yang dikirim melalui website."})]})}),e.jsxs("div",{className:`\r
                        bg-white\r
                        border\r
                        rounded-xl\r
                        shadow-sm\r
                        p-8\r
                    `,children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-500",children:"Nama"}),e.jsx("div",{className:"mt-1 font-medium",children:s.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-500",children:"Email"}),e.jsx("div",{className:"mt-1 font-medium",children:s.email})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("label",{className:"text-sm text-gray-500",children:"Subjek"}),e.jsx("div",{className:"mt-1 font-medium",children:s.subject})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("label",{className:"text-sm text-gray-500",children:"Tanggal"}),e.jsx("div",{className:"mt-1",children:new Date(s.created_at).toLocaleString("id-ID",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("label",{className:"text-sm text-gray-500",children:"Pesan"}),e.jsx("div",{className:`\r
                                mt-2\r
                                border\r
                                rounded-lg\r
                                p-5\r
                                bg-gray-50\r
                                whitespace-pre-wrap\r
                                leading-relaxed\r
                            `,children:s.message})]}),e.jsx("div",{className:"mt-8 flex gap-3",children:e.jsxs(l,{children:[e.jsx(t,{asChild:!0,children:e.jsx("button",{type:"button",className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition mr-10",children:"Hapus Pesan"})}),e.jsxs(d,{children:[e.jsxs(n,{children:[e.jsx(m,{children:"Hapus Pesan?"}),e.jsx(c,{children:"Pesan yang dihapus tidak dapat dikembalikan."})]}),e.jsxs(x,{children:[e.jsx(o,{children:"Batal"}),e.jsx(h,{onClick:a,children:"Hapus"})]})]})]})})]})]})})}export{A as default};
