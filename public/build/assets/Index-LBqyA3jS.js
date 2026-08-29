import{j as e,H as r,L as a}from"./app-BXgzW7Ep.js";import{A as l}from"./AdminLayout-C8SIRuoj.js";/* empty css            */import"./LOGO-OXALA-C9CdK5i9.js";import"./newspaper-B1Xn-V5C.js";import"./leaf-UrPvBh5_.js";import"./phone-Gx-E6y_Y.js";import"./file-text-BgOqdKqP.js";import"./user-BPMoL-Hq.js";function p({users:s}){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Users"}),e.jsxs(l,{children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Users"}),e.jsx("p",{className:"text-slate-500",children:"Kelola pengguna yang dapat mengakses CMS"})]}),e.jsx(a,{href:"/admin/users/create",className:`\r
                            bg-blue-600\r
                            hover:bg-blue-700\r
                            text-white\r
                            px-4\r
                            py-2\r
                            rounded-lg\r
                            flex\r
                            items-center\r
                            gap-2\r
                            transition\r
                        `,children:"Tambah User"})]}),e.jsx("div",{className:"bg-white rounded-xl border overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-4",children:"Nama"}),e.jsx("th",{className:"text-left p-4",children:"Email"}),e.jsx("th",{className:"text-left p-4",children:"Tanggal Dibuat"}),e.jsx("th",{className:"text-center p-4 w-40",children:"Aksi"})]})}),e.jsx("tbody",{children:s.length>0?s.map(t=>e.jsxs("tr",{className:"border-t hover:bg-slate-50 transition",children:[e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"font-medium text-slate-800",children:t.name})}),e.jsx("td",{className:"p-4 text-slate-600",children:t.email}),e.jsx("td",{className:"p-4 text-slate-600",children:t.created_at?new Date(t.created_at).toLocaleDateString("id-ID"):"-"}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex justify-center gap-3",children:e.jsx(a,{href:`/admin/users/${t.id}/edit`,className:`\r
                                                        text-blue-600\r
                                                        hover:text-blue-800\r
                                                        flex\r
                                                        items-center\r
                                                        gap-1\r
                                                    `,children:"Edit"})})})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"4",className:`\r
                                            p-8\r
                                            text-center\r
                                            text-slate-500\r
                                        `,children:"Belum ada user."})})})]})})]})]})}export{p as default};
