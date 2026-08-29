import{u as m,j as r,H as d,L as l}from"./app-BXgzW7Ep.js";import{A as c}from"./AdminLayout-C8SIRuoj.js";import{A as u}from"./arrow-left-rxRUG-6D.js";import{S as x}from"./save-Byi6l_Dv.js";/* empty css            */import"./LOGO-OXALA-C9CdK5i9.js";import"./newspaper-B1Xn-V5C.js";import"./leaf-UrPvBh5_.js";import"./phone-Gx-E6y_Y.js";import"./file-text-BgOqdKqP.js";import"./user-BPMoL-Hq.js";function _(){const{data:n,setData:a,post:o,processing:t,errors:s}=m({name:"",email:"",password:"",password_confirmation:""}),i=e=>{e.preventDefault(),o("/admin/users")};return r.jsxs(r.Fragment,{children:[r.jsx(d,{title:"Tambah User"}),r.jsxs(c,{children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-2xl font-bold",children:"Tambah User"}),r.jsx("p",{className:"text-slate-500",children:"Tambahkan pengguna baru untuk mengakses CMS"})]}),r.jsxs(l,{href:"/admin/users",className:`\r
                            flex\r
                            items-center\r
                            gap-2\r
                            text-slate-600\r
                            hover:text-slate-900\r
                            transition\r
                        `,children:[r.jsx(u,{size:18}),"Kembali"]})]}),r.jsxs("div",{className:"bg-white rounded-xl border overflow-hidden",children:[r.jsx("div",{className:"h-1 bg-[#B6C95C]"}),r.jsxs("form",{onSubmit:i,className:"p-6",children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("label",{htmlFor:"name",className:`\r
                                    block\r
                                    text-sm\r
                                    font-medium\r
                                    text-slate-700\r
                                    mb-2\r
                                `,children:"Nama"}),r.jsx("input",{id:"name",type:"text",value:n.name,onChange:e=>a("name",e.target.value),placeholder:"Masukkan nama user",className:`\r
                                    w-full\r
                                    rounded-lg\r
                                    border\r
                                    border-slate-300\r
                                    px-4\r
                                    py-2.5\r
                                    focus:outline-none\r
                                    focus:ring-2\r
                                    focus:ring-blue-500\r
                                    focus:border-blue-500\r
                                `}),s.name&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.name})]}),r.jsxs("div",{className:"mb-5",children:[r.jsx("label",{htmlFor:"email",className:`\r
                                    block\r
                                    text-sm\r
                                    font-medium\r
                                    text-slate-700\r
                                    mb-2\r
                                `,children:"Email"}),r.jsx("input",{id:"email",type:"email",value:n.email,onChange:e=>a("email",e.target.value),placeholder:"Masukkan email user",className:`\r
                                    w-full\r
                                    rounded-lg\r
                                    border\r
                                    border-slate-300\r
                                    px-4\r
                                    py-2.5\r
                                    focus:outline-none\r
                                    focus:ring-2\r
                                    focus:ring-blue-500\r
                                    focus:border-blue-500\r
                                `}),s.email&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.email})]}),r.jsxs("div",{className:"mb-5",children:[r.jsx("label",{htmlFor:"password",className:`\r
                                    block\r
                                    text-sm\r
                                    font-medium\r
                                    text-slate-700\r
                                    mb-2\r
                                `,children:"Password"}),r.jsx("input",{id:"password",type:"password",value:n.password,onChange:e=>a("password",e.target.value),placeholder:"Masukkan password",className:`\r
                                    w-full\r
                                    rounded-lg\r
                                    border\r
                                    border-slate-300\r
                                    px-4\r
                                    py-2.5\r
                                    focus:outline-none\r
                                    focus:ring-2\r
                                    focus:ring-blue-500\r
                                    focus:border-blue-500\r
                                `}),r.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Password minimal 8 karakter."}),s.password&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.password})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"password_confirmation",className:`\r
                                    block\r
                                    text-sm\r
                                    font-medium\r
                                    text-slate-700\r
                                    mb-2\r
                                `,children:"Konfirmasi Password"}),r.jsx("input",{id:"password_confirmation",type:"password",value:n.password_confirmation,onChange:e=>a("password_confirmation",e.target.value),placeholder:"Ulangi password",className:`\r
                                    w-full\r
                                    rounded-lg\r
                                    border\r
                                    border-slate-300\r
                                    px-4\r
                                    py-2.5\r
                                    focus:outline-none\r
                                    focus:ring-2\r
                                    focus:ring-blue-500\r
                                    focus:border-blue-500\r
                                `}),s.password_confirmation&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.password_confirmation})]}),r.jsxs("div",{className:"flex justify-end gap-3",children:[r.jsx(l,{href:"/admin/users",className:`\r
                                    px-4\r
                                    py-2\r
                                    rounded-lg\r
                                    border\r
                                    border-slate-300\r
                                    text-slate-600\r
                                    hover:bg-slate-50\r
                                    transition\r
                                `,children:"Batal"}),r.jsxs("button",{type:"submit",disabled:t,className:`\r
                                    bg-blue-600\r
                                    hover:bg-blue-700\r
                                    text-white\r
                                    px-5\r
                                    py-2\r
                                    rounded-lg\r
                                    flex\r
                                    items-center\r
                                    gap-2\r
                                    transition\r
                                    disabled:opacity-50\r
                                    disabled:cursor-not-allowed\r
                                `,children:[r.jsx(x,{size:18}),t?"Menyimpan...":"Simpan User"]})]})]})]})]})]})}export{_ as default};
