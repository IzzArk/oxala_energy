import{j as e,H as n,L as t}from"./app-DjY9OvIT.js";import{A as l}from"./AdminLayout-BshZQvB9.js";import{c as i}from"./x-DE4Z1Ej6.js";/* empty css            */import"./newspaper-CU-wotk5.js";import"./leaf-OZm0XzKn.js";import"./phone-Bv_jM5y2.js";import"./file-text-B7YYpJXn.js";const x=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],a=i("user-round",x);function y({leaders:r}){return e.jsxs(l,{children:[e.jsx(n,{title:"Leadership"}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-[#123563]",children:"Leadership"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Kelola data pimpinan perusahaan."})]}),e.jsx(t,{href:"/admin/leadership/create",className:"bg-blue-600 text-white px-4 py-2 rounded-md",children:"Tambah Banner"})]}),e.jsx("div",{className:`\r
                        bg-white\r
                        rounded-xl\r
                        border\r
                        border-gray-200\r
                        shadow-sm\r
                        overflow-hidden\r
                    `,children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50 border-b",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase",children:"Foto"}),e.jsx("th",{className:"px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase",children:"Nama"}),e.jsx("th",{className:"px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase",children:"Jabatan"}),e.jsx("th",{className:"px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase",children:"Status"}),e.jsx("th",{className:"px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-100",children:r?.length>0?r.map(s=>e.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:`\r
                                                        w-20\r
                                                        h-[60px]\r
                                                        rounded-lg\r
                                                        overflow-hidden\r
                                                        bg-gray-100\r
                                                        flex\r
                                                        items-center\r
                                                        justify-center\r
                                                    `,children:s.photo?e.jsx("img",{src:`/storage/${s.photo}`,alt:s.name,className:`\r
                                                                w-full\r
                                                                h-full\r
                                                                object-cover\r
                                                            `}):e.jsx(a,{size:28,className:"text-gray-400"})})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("p",{className:"font-semibold text-gray-800",children:s.name})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("p",{className:"text-sm text-gray-600",children:s.position})}),e.jsx("td",{className:"px-6 py-4 text-center",children:s.is_active?e.jsx("span",{className:`\r
                                                            inline-flex\r
                                                            px-3\r
                                                            py-1\r
                                                            rounded-full\r
                                                            bg-green-100\r
                                                            text-green-700\r
                                                            text-xs\r
                                                            font-semibold\r
                                                        `,children:"Aktif"}):e.jsx("span",{className:`\r
                                                            inline-flex\r
                                                            px-3\r
                                                            py-1\r
                                                            rounded-full\r
                                                            bg-gray-100\r
                                                            text-gray-500\r
                                                            text-xs\r
                                                            font-semibold\r
                                                        `,children:"Nonaktif"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"flex justify-end",children:e.jsx(t,{href:`/admin/leadership/${s.id}/edit`,className:"text-blue-600",children:"Edit"})})})]},s.id)):e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",className:"px-6 py-16 text-center",children:[e.jsx(a,{size:40,className:"mx-auto text-gray-300"}),e.jsx("p",{className:"mt-3 text-gray-500",children:"Belum ada data leadership."}),e.jsx(t,{href:route("admin.leadership.create"),className:`\r
                                                    inline-block\r
                                                    mt-4\r
                                                    text-sm\r
                                                    font-medium\r
                                                    text-[#23478F]\r
                                                    hover:underline\r
                                                `,children:"Tambahkan data pertama"})]})})})]})})})]})]})}export{y as default};
