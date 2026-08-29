import{u as c,j as r,H as x,L as o,r as u}from"./app-BXgzW7Ep.js";import{A as p}from"./AdminLayout-C8SIRuoj.js";import{A as g,a as h,T as b,b as f,c as j,d as y,e as w,f as N,g as v,h as C}from"./alert-dialog-Cqo_UZZs.js";import{A as k}from"./arrow-left-rxRUG-6D.js";import{S as A}from"./save-Byi6l_Dv.js";/* empty css            */import"./LOGO-OXALA-C9CdK5i9.js";import"./newspaper-B1Xn-V5C.js";import"./leaf-UrPvBh5_.js";import"./phone-Gx-E6y_Y.js";import"./file-text-BgOqdKqP.js";import"./user-BPMoL-Hq.js";function z({user:s}){const{data:a,setData:t,put:l,processing:i,errors:e}=c({name:s.name??"",email:s.email??"",password:"",password_confirmation:""}),d=n=>{n.preventDefault(),l(`/admin/users/${s.id}`)},m=()=>{u.delete(`/admin/users/${s.id}`)};return r.jsxs(p,{children:[r.jsx(x,{title:"Edit User"}),r.jsxs("div",{className:"max-w-3xl",children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs(o,{href:"/admin/users",className:`\r
                            inline-flex\r
                            items-center\r
                            gap-2\r
                            text-gray-500\r
                            hover:text-[#23478F]\r
                            transition\r
                        `,children:[r.jsx(k,{size:18}),"Kembali"]}),r.jsx("h1",{className:"text-2xl font-bold text-[#23478F] mt-4",children:"Edit User"}),r.jsx("p",{className:"text-gray-500 mt-1",children:"Perbarui informasi pengguna administrator CMS."})]}),r.jsxs("form",{onSubmit:d,className:`\r
                        bg-white\r
                        rounded-2xl\r
                        border\r
                        border-gray-100\r
                        shadow-sm\r
                        p-8\r
                        space-y-6\r
                    `,children:[r.jsxs("div",{children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("h2",{className:"text-base font-semibold text-gray-800",children:"Informasi Pengguna"}),r.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Perbarui nama dan alamat email pengguna."})]}),r.jsxs("div",{className:"mb-5",children:[r.jsx("label",{htmlFor:"name",className:`\r
                                    block\r
                                    text-sm\r
                                    font-medium\r
                                    text-gray-700\r
                                    mb-2\r
                                `,children:"Nama"}),r.jsx("input",{id:"name",type:"text",value:a.name,onChange:n=>t("name",n.target.value),placeholder:"Masukkan nama user",className:`\r
                                    w-full\r
                                    border\r
                                    border-gray-200\r
                                    rounded-xl\r
                                    px-4\r
                                    py-3\r
                                    focus:outline-none\r
                                    focus:ring-2\r
                                    focus:ring-[#B6C95C]\r
                                    focus:border-[#B6C95C]\r
                                    transition\r
                                `}),e.name&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:e.name})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:`\r
                                    block\r
                                    text-sm\r
                                    font-medium\r
                                    text-gray-700\r
                                    mb-2\r
                                `,children:"Email"}),r.jsx("input",{id:"email",type:"email",value:a.email,onChange:n=>t("email",n.target.value),placeholder:"Masukkan email user",className:`\r
                                    w-full\r
                                    border\r
                                    border-gray-200\r
                                    rounded-xl\r
                                    px-4\r
                                    py-3\r
                                    focus:outline-none\r
                                    focus:ring-2\r
                                    focus:ring-[#B6C95C]\r
                                    focus:border-[#B6C95C]\r
                                    transition\r
                                `}),e.email&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:e.email})]})]}),r.jsxs("div",{className:`\r
                            border-t\r
                            border-gray-100\r
                            pt-6\r
                        `,children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("h2",{className:"text-base font-semibold text-gray-800",children:"Ubah Password"}),r.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Kosongkan kedua field jika tidak ingin mengubah password."})]}),r.jsxs("div",{className:"mb-5",children:[r.jsx("label",{htmlFor:"password",className:`\r
                                    block\r
                                    text-sm\r
                                    font-medium\r
                                    text-gray-700\r
                                    mb-2\r
                                `,children:"Password Baru"}),r.jsx("input",{id:"password",type:"password",value:a.password,onChange:n=>t("password",n.target.value),placeholder:"Masukkan password baru",className:`\r
                                    w-full\r
                                    border\r
                                    border-gray-200\r
                                    rounded-xl\r
                                    px-4\r
                                    py-3\r
                                    focus:outline-none\r
                                    focus:ring-2\r
                                    focus:ring-[#B6C95C]\r
                                    focus:border-[#B6C95C]\r
                                    transition\r
                                `}),e.password&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:e.password})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"password_confirmation",className:`\r
                                    block\r
                                    text-sm\r
                                    font-medium\r
                                    text-gray-700\r
                                    mb-2\r
                                `,children:"Konfirmasi Password Baru"}),r.jsx("input",{id:"password_confirmation",type:"password",value:a.password_confirmation,onChange:n=>t("password_confirmation",n.target.value),placeholder:"Ulangi password baru",className:`\r
                                    w-full\r
                                    border\r
                                    border-gray-200\r
                                    rounded-xl\r
                                    px-4\r
                                    py-3\r
                                    focus:outline-none\r
                                    focus:ring-2\r
                                    focus:ring-[#B6C95C]\r
                                    focus:border-[#B6C95C]\r
                                    transition\r
                                `}),e.password_confirmation&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:e.password_confirmation})]}),r.jsxs("div",{className:`\r
                                mt-4\r
                                p-3\r
                                rounded-xl\r
                                bg-[#FAFCF3]\r
                                border\r
                                border-[#E8EDCF]\r
                                text-xs\r
                                text-gray-600\r
                            `,children:[r.jsx("strong",{children:"Catatan:"})," ","Password hanya perlu diisi jika Anda ingin mengganti password pengguna."]})]}),r.jsxs("div",{className:`\r
                            flex\r
                            items-center\r
                            justify-between\r
                            pt-5\r
                            border-t\r
                            border-gray-100\r
                        `,children:[r.jsxs(g,{children:[r.jsx(h,{asChild:!0,children:r.jsxs("button",{type:"button",className:`\r
                                        inline-flex\r
                                        items-center\r
                                        gap-2\r
                                        px-5\r
                                        py-3\r
                                        rounded-xl\r
                                        border\r
                                        border-red-200\r
                                        text-red-600\r
                                        font-semibold\r
                                        hover:bg-red-50\r
                                        transition\r
                                    `,children:[r.jsx(b,{size:18}),"Hapus User"]})}),r.jsxs(f,{children:[r.jsxs(j,{children:[r.jsx(y,{children:"Hapus User?"}),r.jsx(w,{children:"User yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin menghapus user ini?"})]}),r.jsxs(N,{children:[r.jsx(v,{children:"Batal"}),r.jsx(C,{onClick:m,className:"bg-red-600 hover:bg-red-700",children:"Hapus"})]})]})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(o,{href:"/admin/users",className:`\r
                                    px-5\r
                                    py-3\r
                                    rounded-xl\r
                                    border\r
                                    border-gray-200\r
                                    text-gray-600\r
                                    font-medium\r
                                    hover:bg-gray-50\r
                                    transition\r
                                `,children:"Batal"}),r.jsxs("button",{type:"submit",disabled:i,className:`\r
                                    inline-flex\r
                                    items-center\r
                                    gap-2\r
                                    px-6\r
                                    py-3\r
                                    rounded-xl\r
                                    bg-[#23478F]\r
                                    text-white\r
                                    font-semibold\r
                                    hover:bg-[#18386B]\r
                                    disabled:opacity-50\r
                                    disabled:cursor-not-allowed\r
                                    transition\r
                                `,children:[r.jsx(A,{size:18}),i?"Menyimpan...":"Simpan Perubahan"]})]})]})]})]})]})}export{z as default};
