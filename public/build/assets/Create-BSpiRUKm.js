import{u as l,j as e}from"./app-BXgzW7Ep.js";import{A as m}from"./AdminLayout-C8SIRuoj.js";import{A as d}from"./arrow-left-rxRUG-6D.js";import{U as x}from"./upload-CMIuwGwP.js";/* empty css            */import"./LOGO-OXALA-C9CdK5i9.js";import"./newspaper-B1Xn-V5C.js";import"./leaf-UrPvBh5_.js";import"./phone-Gx-E6y_Y.js";import"./file-text-BgOqdKqP.js";import"./user-BPMoL-Hq.js";function k(){const{data:a,setData:r,post:i,processing:n,errors:s}=l({name:"",position:"",photo:null,is_active:!0,sort_order:0}),o=t=>{t.preventDefault(),i(route("admin.leadership.store"))};return e.jsx(m,{children:e.jsxs("div",{className:"max-w-3xl",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("a",{href:route("admin.leadership.index"),className:"inline-flex items-center gap-2 text-gray-500 hover:text-[#23478F]",children:[e.jsx(d,{size:18}),"Kembali"]}),e.jsx("h1",{className:"text-2xl font-bold text-[#23478F] mt-4",children:"Tambah Leadership"}),e.jsx("p",{className:"text-gray-500 mt-1",children:"Tambahkan data anggota leadership perusahaan."})]}),e.jsxs("form",{onSubmit:o,className:"bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Nama"}),e.jsx("input",{type:"text",value:a.name,onChange:t=>r("name",t.target.value),className:"w-full border rounded p-2",placeholder:"Contoh: John Doe"}),s.name&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Jabatan"}),e.jsx("input",{type:"text",value:a.position,onChange:t=>r("position",t.target.value),className:"w-full border rounded p-2",placeholder:"Contoh: Komisaris Utama"}),s.position&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.position})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Foto"}),e.jsxs("label",{className:`\r
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
                                transition\r
                            `,children:[e.jsx(x,{size:32,className:"text-gray-400 mb-3"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Klik untuk upload foto"}),e.jsx("span",{className:"text-xs text-gray-400 mt-1",children:"JPG, PNG, WEBP · Maks. 5MB"}),e.jsx("span",{className:"text-xs text-[#7A9433] font-medium mt-1",children:"Rasio foto wajib 4:3"}),e.jsx("input",{type:"file",accept:"image/jpeg,image/png,image/webp",className:"hidden",onChange:t=>r("photo",t.target.files[0])})]}),a.photo&&e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:a.photo.name}),s.photo&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.photo})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Urutan"}),e.jsx("input",{type:"number",min:"0",value:a.sort_order,onChange:t=>r("sort_order",t.target.value),className:"w-full border rounded p-2"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",checked:a.is_active,onChange:t=>r("is_active",t.target.checked),className:"rounded border-gray-300 text-[#23478F] focus:ring-[#23478F]"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-700",children:"Aktif"}),e.jsx("p",{className:"text-xs text-gray-400",children:"Tampilkan data ini pada halaman website."})]})]}),e.jsx("div",{className:"flex justify-end pt-4",children:e.jsx("button",{type:"submit",disabled:n,className:`\r
                                px-6\r
                                py-3\r
                                rounded-xl\r
                                bg-[#23478F]\r
                                text-white\r
                                font-semibold\r
                                hover:bg-[#18386B]\r
                                disabled:opacity-50\r
                                transition\r
                            `,children:n?"Menyimpan...":"Simpan Leadership"})})]})]})})}export{k as default};
