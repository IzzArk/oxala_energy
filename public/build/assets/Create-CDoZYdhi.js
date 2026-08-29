import{u as o,j as e}from"./app-BXgzW7Ep.js";import{A as m}from"./AdminLayout-C8SIRuoj.js";import{A as d}from"./arrow-left-rxRUG-6D.js";import{U as x}from"./upload-CMIuwGwP.js";/* empty css            */import"./LOGO-OXALA-C9CdK5i9.js";import"./newspaper-B1Xn-V5C.js";import"./leaf-UrPvBh5_.js";import"./phone-Gx-E6y_Y.js";import"./file-text-BgOqdKqP.js";import"./user-BPMoL-Hq.js";function v(){const{data:t,setData:s,post:i,processing:a,errors:n}=o({title:"",subtitle:"",description:"",button_text:"",button_link:"",image:null}),l=r=>{r.preventDefault(),i("/admin/banner")};return e.jsx(m,{children:e.jsxs("div",{className:"max-w-3xl",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("a",{href:"/admin/banner",className:`\r
                            inline-flex\r
                            items-center\r
                            gap-2\r
                            text-gray-500\r
                            hover:text-[#23478F]\r
                            transition\r
                        `,children:[e.jsx(d,{size:18}),"Kembali"]}),e.jsx("h1",{className:"text-2xl font-bold text-[#23478F] mt-4",children:"Tambah Banner"}),e.jsx("p",{className:"text-gray-500 mt-1",children:"Tambahkan banner baru untuk ditampilkan pada halaman website."})]}),e.jsxs("form",{onSubmit:l,className:`\r
                        bg-white\r
                        rounded-2xl\r
                        border\r
                        border-gray-100\r
                        shadow-sm\r
                        p-8\r
                        space-y-6\r
                    `,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Judul Banner"}),e.jsx("input",{type:"text",value:t.title,onChange:r=>s("title",r.target.value),className:`\r
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
                            `}),n.title&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Sub Judul"}),e.jsx("input",{type:"text",value:t.subtitle,onChange:r=>s("subtitle",r.target.value),className:`\r
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
                            `}),n.subtitle&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.subtitle})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Deskripsi"}),e.jsx("textarea",{rows:5,value:t.description,onChange:r=>s("description",r.target.value),className:`\r
                                w-full\r
                                border\r
                                border-gray-200\r
                                rounded-xl\r
                                px-4\r
                                py-3\r
                                resize-none\r
                                focus:outline-none\r
                                focus:ring-2\r
                                focus:ring-[#B6C95C]\r
                                focus:border-[#B6C95C]\r
                                transition\r
                            `}),n.description&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.description})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Button Text"}),e.jsx("input",{type:"text",value:t.button_text,onChange:r=>s("button_text",r.target.value),className:`\r
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
                            `}),n.button_text&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.button_text})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Button Link"}),e.jsx("input",{type:"text",value:t.button_link,onChange:r=>s("button_link",r.target.value),className:`\r
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
                            `}),n.button_link&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.button_link})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Foto Banner"}),e.jsxs("label",{className:`\r
                                flex\r
                                flex-col\r
                                items-center\r
                                justify-center\r
                                w-full\r
                                h-56\r
                                border-2\r
                                border-dashed\r
                                border-gray-200\r
                                rounded-xl\r
                                cursor-pointer\r
                                hover:border-[#B6C95C]\r
                                hover:bg-[#FAFCF3]\r
                                transition\r
                            `,children:[e.jsx(x,{size:32,className:"text-gray-400 mb-3"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Klik untuk upload foto banner"}),e.jsx("span",{className:"text-xs text-gray-400 mt-1",children:"JPG, PNG, WEBP · Maks. 5MB"}),e.jsx("span",{className:"text-xs text-[#7A9433] font-medium mt-1",children:"Gunakan gambar dengan kualitas terbaik"}),e.jsx("input",{type:"file",accept:"image/jpeg,image/png,image/webp",className:"hidden",onChange:r=>s("image",r.target.files[0])})]}),t.image&&e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:t.image.name}),n.image&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.image})]}),e.jsx("div",{className:"flex justify-end pt-4",children:e.jsx("button",{type:"submit",disabled:a,className:`\r
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
                            `,children:a?"Menyimpan...":"Simpan Banner"})})]})]})})}export{v as default};
