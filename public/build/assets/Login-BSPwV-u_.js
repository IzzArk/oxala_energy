import{u as i,j as e,H as o}from"./app-DjY9OvIT.js";import{L as c}from"./Oxala-Logo-VTc1k9sF.js";/* empty css            */function p(){const{data:a,setData:t,post:r,processing:l,errors:s}=i({email:"",password:"",remember:!1}),m=n=>{n.preventDefault(),r(route("login"))};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Login Admin"}),e.jsx("div",{className:`
                    min-h-screen
                    flex
                    items-center
                    justify-center
                    bg-gray-100
                    px-4
                `,children:e.jsxs("div",{className:`
                        w-full
                        max-w-md
                        bg-white
                        rounded-2xl
                        shadow-xl
                        p-8
                    `,children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("img",{src:c,alt:"Oxala",className:`
                                h-20
                                mx-auto
                                mb-4
                            `}),e.jsx("h1",{className:`
                                text-2xl
                                font-bold
                                text-[#23478F]
                            `,children:"CMS Oxala"}),e.jsx("p",{className:"text-gray-500 mt-2",children:"Login untuk mengelola website"})]}),e.jsxs("form",{onSubmit:m,className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:`
                                    block
                                    text-sm
                                    font-medium
                                    mb-2
                                `,children:"Email"}),e.jsx("input",{type:"email",value:a.email,onChange:n=>t("email",n.target.value),className:`
                                    w-full
                                    border
                                    rounded-lg
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[#23478F]
                                `}),s.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:`
                                    block
                                    text-sm
                                    font-medium
                                    mb-2
                                `,children:"Password"}),e.jsx("input",{type:"password",value:a.password,onChange:n=>t("password",n.target.value),className:`
                                    w-full
                                    border
                                    rounded-lg
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[#23478F]
                                `}),s.password&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.password})]}),e.jsxs("label",{className:`
                                flex
                                items-center
                                gap-2
                                text-sm
                            `,children:[e.jsx("input",{type:"checkbox",checked:a.remember,onChange:n=>t("remember",n.target.checked)}),"Remember Me"]}),e.jsx("button",{type:"submit",disabled:l,className:`
                                w-full
                                bg-[#23478F]
                                hover:bg-[#1c3a73]
                                text-white
                                py-3
                                rounded-lg
                                font-medium
                                transition
                            `,children:l?"Memproses...":"Masuk ke Dashboard"})]})]})})]})}export{p as default};
