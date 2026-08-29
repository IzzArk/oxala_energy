import{u as o,j as e}from"./app-BXgzW7Ep.js";import{A as x}from"./AdminLayout-C8SIRuoj.js";import{R as c}from"./RichTextEditor-DaOm2tIt.js";import{A as h}from"./arrow-left-rxRUG-6D.js";import{U as u}from"./upload-CMIuwGwP.js";import{I as i}from"./image-plus-BqhWXWS3.js";/* empty css            */import"./LOGO-OXALA-C9CdK5i9.js";import"./newspaper-B1Xn-V5C.js";import"./leaf-UrPvBh5_.js";import"./phone-Gx-E6y_Y.js";import"./file-text-BgOqdKqP.js";import"./user-BPMoL-Hq.js";import"./index--U-sxGBp.js";function A(){const{data:t,setData:a,post:l,processing:s,errors:n}=o({title:"",published_at:"",content:"",thumbnail:null,images:[]}),m=r=>{r.preventDefault(),l("/admin/news")};return e.jsx(x,{children:e.jsxs("div",{className:"max-w-5xl",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("a",{href:"/admin/news",className:`\r
                            inline-flex\r
                            items-center\r
                            gap-2\r
                            text-gray-500\r
                            hover:text-[#23478F]\r
                            transition\r
                        `,children:[e.jsx(h,{size:18}),"Kembali"]}),e.jsx("h1",{className:"text-2xl font-bold text-[#23478F] mt-4",children:"Tambah Berita"}),e.jsx("p",{className:"text-gray-500 mt-1",children:"Tambahkan berita terbaru untuk ditampilkan pada halaman website."})]}),e.jsxs("form",{onSubmit:m,className:`\r
                        bg-white\r
                        rounded-2xl\r
                        border\r
                        border-gray-100\r
                        shadow-sm\r
                        p-8\r
                        space-y-6\r
                    `,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Judul Berita"}),e.jsx("input",{type:"text",value:t.title,onChange:r=>a("title",r.target.value),className:`\r
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
                            `,placeholder:"Contoh: Perusahaan Raih Penghargaan..."}),n.title&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tanggal Publish"}),e.jsx("input",{type:"date",value:t.published_at,onChange:r=>a("published_at",r.target.value),className:`\r
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
                            `}),n.published_at&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.published_at})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Thumbnail Berita"}),e.jsxs("label",{className:`\r
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
                            `,children:[e.jsx(u,{size:32,className:"text-gray-400 mb-3"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Klik untuk upload thumbnail"}),e.jsx("span",{className:"text-xs text-gray-400 mt-1",children:"JPG, PNG, WEBP · Maks. 5MB"}),e.jsx("span",{className:"text-xs text-[#7A9433] font-medium mt-1",children:"Gunakan gambar dengan kualitas terbaik"}),e.jsx("input",{type:"file",accept:"image/jpeg,image/png,image/webp",className:"hidden",onChange:r=>a("thumbnail",r.target.files[0])})]}),t.thumbnail&&e.jsxs("div",{className:"mt-3 flex items-center gap-2 text-sm text-gray-500",children:[e.jsx(i,{size:16}),e.jsx("span",{children:t.thumbnail.name})]}),n.thumbnail&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.thumbnail})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Galeri Berita"}),e.jsxs("label",{className:`\r
                                flex\r
                                flex-col\r
                                items-center\r
                                justify-center\r
                                w-full\r
                                h-48\r
                                border-2\r
                                border-dashed\r
                                border-gray-200\r
                                rounded-xl\r
                                cursor-pointer\r
                                hover:border-[#B6C95C]\r
                                hover:bg-[#FAFCF3]\r
                                transition\r
                            `,children:[e.jsx(i,{size:32,className:"text-gray-400 mb-3"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Klik untuk upload foto galeri"}),e.jsx("span",{className:"text-xs text-gray-400 mt-1",children:"Bisa memilih beberapa gambar sekaligus"}),e.jsx("span",{className:"text-xs text-[#7A9433] font-medium mt-1",children:"JPG, PNG, WEBP"}),e.jsx("input",{type:"file",multiple:!0,accept:"image/jpeg,image/png,image/webp",className:"hidden",onChange:r=>a("images",[...r.target.files])})]}),t.images.length>0&&e.jsxs("div",{className:"mt-3",children:[e.jsxs("p",{className:"text-sm text-gray-500 mb-2",children:[t.images.length," foto dipilih"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.images.map((r,d)=>e.jsx("div",{className:`\r
                                                px-3\r
                                                py-2\r
                                                bg-gray-50\r
                                                border\r
                                                border-gray-200\r
                                                rounded-lg\r
                                                text-xs\r
                                                text-gray-600\r
                                            `,children:r.name},d))})]}),n.images&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.images})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Isi Berita"}),e.jsx("div",{className:`\r
                                border\r
                                border-gray-200\r
                                rounded-xl\r
                                overflow-hidden\r
                                focus-within:ring-2\r
                                focus-within:ring-[#B6C95C]\r
                                focus-within:border-[#B6C95C]\r
                                transition\r
                            `,children:e.jsx("div",{className:"min-h-[350px] p-4",children:e.jsx(c,{value:t.content,onChange:r=>a("content",r)})})}),n.content&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:n.content})]}),e.jsx("div",{className:"flex justify-end pt-4",children:e.jsx("button",{type:"submit",disabled:s,className:`\r
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
                            `,children:s?"Menyimpan...":"Simpan Berita"})})]})]})})}export{A as default};
