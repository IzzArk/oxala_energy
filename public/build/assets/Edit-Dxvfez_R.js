import{u as m,j as e,r as c}from"./app-BXgzW7Ep.js";import{A as x}from"./AdminLayout-C8SIRuoj.js";import{R as h}from"./RichTextEditor-DaOm2tIt.js";import{A as u,a as b,T as p,b as g,c as j,d as f,e as y,f as N,g as v,h as C}from"./alert-dialog-Cqo_UZZs.js";import{A}from"./arrow-left-rxRUG-6D.js";import{U as B}from"./upload-CMIuwGwP.js";import{I as k}from"./image-plus-BqhWXWS3.js";/* empty css            */import"./LOGO-OXALA-C9CdK5i9.js";import"./newspaper-B1Xn-V5C.js";import"./leaf-UrPvBh5_.js";import"./phone-Gx-E6y_Y.js";import"./file-text-BgOqdKqP.js";import"./user-BPMoL-Hq.js";import"./index--U-sxGBp.js";function $({news:n}){const{data:a,setData:s,post:l,processing:i,errors:t}=m({_method:"PUT",title:n.title||"",content:n.content||"",published_at:n.published_at||"",thumbnail:null}),d=r=>{r.preventDefault(),l(`/admin/news/${n.id}`)},o=()=>{c.delete(`/admin/news/${n.id}`)};return e.jsx(x,{children:e.jsxs("div",{className:"max-w-5xl",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("a",{href:"/admin/news",className:`\r
                            inline-flex\r
                            items-center\r
                            gap-2\r
                            text-gray-500\r
                            hover:text-[#23478F]\r
                            transition\r
                        `,children:[e.jsx(A,{size:18}),"Kembali"]}),e.jsx("h1",{className:"text-2xl font-bold text-[#23478F] mt-4",children:"Edit Berita"}),e.jsx("p",{className:"text-gray-500 mt-1",children:"Perbarui informasi berita yang ditampilkan pada halaman website."})]}),e.jsxs("form",{onSubmit:d,className:`\r
                        bg-white\r
                        rounded-2xl\r
                        border\r
                        border-gray-100\r
                        shadow-sm\r
                        p-8\r
                        space-y-6\r
                    `,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Judul Berita"}),e.jsx("input",{type:"text",value:a.title,onChange:r=>s("title",r.target.value),className:`\r
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
                            `,placeholder:"Contoh: Perusahaan Raih Penghargaan..."}),t.title&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tanggal Publish"}),e.jsx("input",{type:"date",value:a.published_at,onChange:r=>s("published_at",r.target.value),className:`\r
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
                            `}),t.published_at&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t.published_at})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Thumbnail Saat Ini"}),n.thumbnail?e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-gray-200",children:e.jsx("img",{src:`/storage/${n.thumbnail}`,alt:n.title,className:`\r
                                        w-full\r
                                        h-64\r
                                        object-cover\r
                                    `})}):e.jsx("div",{className:`\r
                                    flex\r
                                    items-center\r
                                    justify-center\r
                                    w-full\r
                                    h-48\r
                                    bg-gray-50\r
                                    border\r
                                    border-gray-200\r
                                    rounded-xl\r
                                    text-sm\r
                                    text-gray-400\r
                                `,children:"Belum ada thumbnail"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Ganti Thumbnail"}),e.jsxs("label",{className:`\r
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
                            `,children:[e.jsx(B,{size:32,className:"text-gray-400 mb-3"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Klik untuk mengganti thumbnail"}),e.jsx("span",{className:"text-xs text-gray-400 mt-1",children:"JPG, PNG, WEBP · Maks. 5MB"}),e.jsx("span",{className:"text-xs text-[#7A9433] font-medium mt-1",children:"Gunakan gambar dengan kualitas terbaik"}),e.jsx("input",{type:"file",accept:"image/jpeg,image/png,image/webp",className:"hidden",onChange:r=>s("thumbnail",r.target.files[0])})]}),a.thumbnail&&e.jsxs("div",{className:"mt-3 flex items-center gap-2 text-sm text-gray-500",children:[e.jsx(k,{size:16}),e.jsxs("span",{children:["File baru:"," ",e.jsx("span",{className:"font-medium",children:a.thumbnail.name})]})]}),t.thumbnail&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t.thumbnail})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Konten Berita"}),e.jsx("div",{className:`\r
                                border\r
                                border-gray-200\r
                                rounded-xl\r
                                overflow-hidden\r
                                focus-within:ring-2\r
                                focus-within:ring-[#B6C95C]\r
                                focus-within:border-[#B6C95C]\r
                                transition\r
                            `,children:e.jsx("div",{className:"min-h-[350px] p-4",children:e.jsx(h,{value:a.content,onChange:r=>s("content",r)})})}),t.content&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:t.content})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4",children:[e.jsxs(u,{children:[e.jsx(b,{asChild:!0,children:e.jsxs("button",{type:"button",className:`\r
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
                                    `,children:[e.jsx(p,{size:18}),"Hapus Berita"]})}),e.jsxs(g,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"Hapus Berita?"}),e.jsx(y,{children:"Berita yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin menghapus berita ini?"})]}),e.jsxs(N,{children:[e.jsx(v,{children:"Batal"}),e.jsx(C,{onClick:o,className:"bg-red-600 hover:bg-red-700",children:"Hapus"})]})]})]}),e.jsx("button",{type:"submit",disabled:i,className:`\r
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
                            `,children:i?"Menyimpan...":"Update Berita"})]})]})]})})}export{$ as default};
