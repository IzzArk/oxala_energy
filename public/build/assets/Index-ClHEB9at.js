import{j as e,H as a,L as t}from"./app-BXgzW7Ep.js";import{A as n}from"./AdminLayout-C8SIRuoj.js";/* empty css            */import"./LOGO-OXALA-C9CdK5i9.js";import"./newspaper-B1Xn-V5C.js";import"./leaf-UrPvBh5_.js";import"./phone-Gx-E6y_Y.js";import"./file-text-BgOqdKqP.js";import"./user-BPMoL-Hq.js";function j({contacts:s}){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Contacts"}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Pesan Masuk"}),e.jsx("p",{className:"text-gray-500 mt-1",children:"Kelola pesan yang dikirim melalui formulir kontak website."})]}),e.jsx("div",{className:"bg-white rounded-xl border shadow-sm overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50 border-b",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left",children:"Nama"}),e.jsx("th",{className:"px-6 py-4 text-left",children:"Email"}),e.jsx("th",{className:"px-6 py-4 text-left",children:"Subjek"}),e.jsx("th",{className:"px-6 py-4 text-left",children:"Status"}),e.jsx("th",{className:"px-6 py-4 text-left",children:"Tanggal"}),e.jsx("th",{className:"px-6 py-4 text-center",children:"Action"})]})}),e.jsx("tbody",{children:s.length>0?s.map(r=>e.jsxs("tr",{className:"border-b hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:r.name}),e.jsx("td",{className:"px-6 py-4",children:r.email}),e.jsx("td",{className:"px-6 py-4",children:r.subject}),e.jsx("td",{className:"px-6 py-4",children:r.is_read?e.jsx("span",{className:`\r
                                                            px-3\r
                                                            py-1\r
                                                            rounded-full\r
                                                            text-xs\r
                                                            font-medium\r
                                                            bg-green-100\r
                                                            text-green-700\r
                                                        `,children:"Sudah Dibaca"}):e.jsx("span",{className:`\r
                                                            px-3\r
                                                            py-1\r
                                                            rounded-full\r
                                                            text-xs\r
                                                            font-medium\r
                                                            bg-yellow-100\r
                                                            text-yellow-700\r
                                                        `,children:"Belum Dibaca"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:new Date(r.created_at).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"})}),e.jsx("td",{className:"px-6 py-4 text-center",children:e.jsx(t,{href:`/admin/contacts/${r.id}`,className:`\r
                                                        inline-flex\r
                                                        items-center\r
                                                        px-4\r
                                                        py-2\r
                                                        rounded-lg\r
                                                        bg-[#23478F]\r
                                                        text-white\r
                                                        text-sm\r
                                                        hover:bg-[#1b3970]\r
                                                    `,children:"Lihat"})})]},r.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",className:`\r
                                                py-12\r
                                                text-center\r
                                                text-gray-500\r
                                            `,children:"Belum ada pesan masuk."})})})]})})})]})})]})}export{j as default};
