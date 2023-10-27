import React from 'react'
import Login from './(auth)/login/page'

function Home() {
  return (
    <>
    <Login/>
    </>
  )
}

export default Home

// 'use client'

// import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
// import { authScopes } from "../authConfig";
// import { useEffect, useState } from "react";
// import '../app/css/style.css'
//  import 'tailwindcss/tailwind.css'

// export default function App() {
//     const { instance, accounts } = useMsal();
//     const [accountDetails, setAccountDetails] = useState(null);

//     if (accounts.length > 0) {
//         console.log('accounts', accounts)
//     }

//     function handleLogin() {
//         console.log('accounts', instance)
//         instance.loginPopup(authScopes).then(response => {
//             console.log("login successful!", response);

//             instance.setActiveAccount(response.account);
//         }).catch(e => {
//             console.log(e);
//         });
//     }

//     function handleLogout() {
//         instance.logoutPopup(authScopes).then(response => {

//         }).catch(e => {
//             console.log(e);
//         });
//     }

//     return (
//         <section>
//             <div style={{maxWidth:'72rem'}} className="max-w-6xl mx-auto px-4 sm:px-6">
//                 <div className="pt-32 pb-12 md:pt-40 md:pb-20">

//                     {/* Page header */}
//                     <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//                         <h1 style={{ fontSize: '2.5rem' }}>¡Bienvenido, es un gusto tenerte de vuelta!</h1>
//                         <AuthenticatedTemplate>
//                             <h6>You're logged in!</h6>
//                             {accountDetails && (
//                                 <center>
//                                     Name: {accountDetails.name}
//                                 </center>
//                             )}
//                             <button onClick={() => handleLogout()}>Logout</button >
//                         </AuthenticatedTemplate>
//                     </div>
//                 </div>
//             </div>

//             {/* <div className="max-w-sm mx-auto">
//             <form>
//               <div className="flex flex-wrap -mx-3">
//                 <div className="w-full">
//                   <button className="btn flex items-center px-7 py-2 text-white bg-sky-950 hover:bg-sky-800 w-full relative">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" id="microsoft">
//                       <path fill="#f1511b" d="M11.497 11.497H0V0h11.497Z" data-name="Path 6"></path>
//                       <path fill="#80cc28" d="M24 11.497h-11.5V0h11.5v11.497Z" data-name="Path 7"></path>
//                       <path fill="#00adef" d="M11.497 24H0V12.699h11.497Z" data-name="Path 8"></path>
//                       <path fill="#fbbc09" d="M24 24h-11.5V12.699h11.5v11.301Z" data-name="Path 9"></path>
//                     </svg>

//                     <span className="h-8 flex items-center border-r border-white border-opacity-60 mr-4 px-2.5" aria-hidden="true"></span>
//                     <span className="flex-auto items-center-ml-16 px-12">Inicia Sesión con Microsoft</span>
//                   </button>

//                 </div>
//               </div>
//             </form>

//             <form>

//             </form>
//           </div> */}

//             {/* <h1>¡Bienvenido, es un gusto tenerte de vuelta!</h1>
//             <AuthenticatedTemplate>
//                 <h6>You're logged in!</h6>
//                 {accountDetails && (
//                     <center>
//                         Name: {accountDetails.name}
//                     </center>
//                 )}
//                 <button onClick={() => handleLogout()}>Logout</button >
//             </AuthenticatedTemplate> */}
//             <UnauthenticatedTemplate>
//                 {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" id="microsoft">
//                     <path fill="#f1511b" d="M11.497 11.497H0V0h11.497Z" data-name="Path 6"></path>
//                     <path fill="#80cc28" d="M24 11.497h-11.5V0h11.5v11.497Z" data-name="Path 7"></path>
//                     <path fill="#00adef" d="M11.497 24H0V12.699h11.497Z" data-name="Path 8"></path>
//                     <path fill="#fbbc09" d="M24 24h-11.5V12.699h11.5v11.301Z" data-name="Path 9"></path>
//                 </svg>
//                 <p className="flex-auto items-center-ml-16 px-12">Inicia Sesión con Microsoft</p> */}
//                 <button /*style={{display: 'flex', alignItems: 'center', padding: '0.5rem 1.75rem', textDecoration: 'none',color: 'white', backgroundColor: '#333', width: '100%', position: 'relative'}}*/ onClick={() => handleLogin()} className="btn flex items-center px-7 py-2 text-white bg-sky-950 hover:bg-sky-800 w-full relative">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" id="microsoft">
//                       <path fill="#f1511b" d="M11.497 11.497H0V0h11.497Z" data-name="Path 6"></path>
//                       <path fill="#80cc28" d="M24 11.497h-11.5V0h11.5v11.497Z" data-name="Path 7"></path>
//                       <path fill="#00adef" d="M11.497 24H0V12.699h11.497Z" data-name="Path 8"></path>
//                       <path fill="#fbbc09" d="M24 24h-11.5V12.699h11.5v11.301Z" data-name="Path 9"></path>
//                     </svg>

//                     <span className="h-8 flex items-center border-r border-white border-opacity-60 mr-4 px-2.5" aria-hidden="true"></span>
//                     <span className="flex-auto items-center-ml-16 px-12">Inicia Sesión con Microsoft</span>
//                   </button>
//                 {/* <button onClick={() => handleLogin()}>Login</button > */}
//             </UnauthenticatedTemplate>
//         </section>
//     );
// }