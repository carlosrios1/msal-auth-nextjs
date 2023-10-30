"use client";
import { useRouter } from "next/router";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { authScopes } from "../../../authConfig";
import { useEffect, useState } from "react";
import "../../../app/css/style.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../assets/logo_pia_blanco.png'

export default function Login() {
  const { instance, accounts } = useMsal();

  const router = useRouter();

  if (accounts.length > 0) {
    console.log("accounts", accounts);
  }

  function handleLogin() {
    console.log("accounts", instance);
    instance
      .loginPopup(authScopes)
      .then((response) => {
        console.log("login successful!", response);
        instance.setActiveAccount(response.account);
        // Redirige a la ruta deseada después del inicio de sesión exitoso
        router.push("/about");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (

    <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 animate-fade-down">

      <div className="relative w-[380px] h-[420px] bg-gray-800 rounded-lg overflow-hidden">

        <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-sky-800 via-sky-800 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right">

        </div>

        <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-sky-800 via-sky-800 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right">

        </div>

        <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5">
          <div className="flex flex-col justify-center items-center">
            <Image src={logo}
              width={150}
              height={150}
              alt="logo"
              className="py-4 ">

            </Image>
            <div className="flex justify-center px-6 py-4 text-xl font-mono text-white">
              <h1>

                ¡Bienvenido, es un gusto tenerte de vuelta!
              </h1>
            </div>

            <AuthenticatedTemplate>
              {/* <h6>You're logged in!</h6>
              {accountDetails && <center>Name: {accountDetails.name}</center>}
              <button onClick={() => handleLogout()}>Logout</button> */}
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
              <div className="max-w-sm mx-auto">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex justify-center items-center w-full py-4 ">
                    <button
                      onClick={() => handleLogin()}
                      className="btn flex items-center px-7 text-white bg-sky-700 hover:bg-sky-900 w-full relative"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="24"
                        id="microsoft"
                      >
                        <path
                          fill="#f1511b"
                          d="M11.497 11.497H0V0h11.497Z"
                          data-name="Path 6"
                        ></path>
                        <path
                          fill="#80cc28"
                          d="M24 11.497h-11.5V0h11.5v11.497Z"
                          data-name="Path 7"
                        ></path>
                        <path
                          fill="#00adef"
                          d="M11.497 24H0V12.699h11.497Z"
                          data-name="Path 8"
                        ></path>
                        <path
                          fill="#fbbc09"
                          d="M24 24h-11.5V12.699h11.5v11.301Z"
                          data-name="Path 9"
                        ></path>
                      </svg>

                      <span
                        className="h-8 flex items-center border-r border-white border-opacity-60 mr-4 px-2.5"
                        aria-hidden="true"
                      ></span>
                      <span className="flex-auto justify-center items-center-ml-16 p-2 text-sm font-semibold font-mono">
                        Inicia Sesión con Microsoft
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </UnauthenticatedTemplate>
          </div>
        </div>


      </div>

    </div>




    // <section className="relative">
    //   <div className="max-w-6xl mx-auto px-4 sm:px-6">
    //     <div className="pt-32 pb-12 md:pt-40 md:pb-20">
    //       {/* Page header */}
    //       <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
    //         <h1 style={{ fontSize: "2.5rem" }}>
    //           ¡Bienvenido, es un gusto tenerte de vuelta!
    //         </h1>
    //         <AuthenticatedTemplate>
    //           {/* <h6>You're logged in!</h6>
    //           {accountDetails && <center>Name: {accountDetails.name}</center>}
    //           <button onClick={() => handleLogout()}>Logout</button> */}
    //         </AuthenticatedTemplate>

    //         <UnauthenticatedTemplate>
    //           <div className="max-w-sm mx-auto">
    //             <div className="flex flex-wrap -mx-3">
    //               <div className="w-full">
    //                 <button
    //                   onClick={() => handleLogin()}
    //                   className="btn flex items-center px-7 py-2 text-white bg-sky-950 hover:bg-sky-800 w-full relative"
    //                 >
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="35"
    //                     height="24"
    //                     id="microsoft"
    //                   >
    //                     <path
    //                       fill="#f1511b"
    //                       d="M11.497 11.497H0V0h11.497Z"
    //                       data-name="Path 6"
    //                     ></path>
    //                     <path
    //                       fill="#80cc28"
    //                       d="M24 11.497h-11.5V0h11.5v11.497Z"
    //                       data-name="Path 7"
    //                     ></path>
    //                     <path
    //                       fill="#00adef"
    //                       d="M11.497 24H0V12.699h11.497Z"
    //                       data-name="Path 8"
    //                     ></path>
    //                     <path
    //                       fill="#fbbc09"
    //                       d="M24 24h-11.5V12.699h11.5v11.301Z"
    //                       data-name="Path 9"
    //                     ></path>
    //                   </svg>

    //                   <span
    //                     className="h-8 flex items-center border-r border-white border-opacity-60 mr-4 px-2.5"
    //                     aria-hidden="true"
    //                   ></span>
    //                   <span className="flex-auto items-center-ml-16 px-12">
    //                     Inicia Sesión con Microsoft
    //                   </span>
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </UnauthenticatedTemplate>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
