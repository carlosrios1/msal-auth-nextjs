import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { authScopes } from "../../authConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function About() {
  const { instance } = useMsal();
  const router = useRouter();
  const [isInactive, setIsInactive] = useState(false);
  let inactivityTimer;

  useEffect(() => {
    const handleUserActivity = () => {
      console.log("User activity detected."); // Agregar mensaje de depuración
      setIsInactive(false);

      // Reiniciar el temporizador de inactividad cuando el usuario interactúa con la página.
      clearTimeout(inactivityTimer);

      // Establecer un nuevo temporizador de inactividad.
      inactivityTimer = setTimeout(() => {
        console.log("User is inactive. Logging out..."); // Agregar mensaje de depuración
        // El usuario está inactivo, realiza el cierre de sesión.
        handleLogout();
      }, 10000); // 10 segundos en milisegundos
    };

    // Agregar manejadores de eventos para rastrear la actividad del usuario.
    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("keydown", handleUserActivity);

    // Verifica si el usuario está autenticado al cargar la página
    if (!instance.getActiveAccount()) {
      // Redirige al usuario a la página de inicio de sesión si no está autenticado
      router.push("/");
    }

    // Limpia los manejadores de eventos al desmontar el componente.
    return () => {
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keydown", handleUserActivity);
      clearTimeout(inactivityTimer);
    };
  }, [instance, router]);

  function handleLogout() {
    instance
      .logoutRedirect(authScopes)
      .then(() => {
        // Redirige al usuario a la página de inicio después del logout exitoso
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="bg-gray-900 text-white font-mono">
      <h1 >About Page</h1>
      <AuthenticatedTemplate>
        <h6>You're logged in!</h6>
        <div  className="flex justify-center items-center  w-full ">
          <button className="btn flex items-center px-7 text-white bg-sky-700 hover:bg-sky-900 w-full relative"
            onClick={() => handleLogout()}>Logout</button>
        </div>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div>
          <h6>You're logged in!</h6>
          {isInactive ? (
            <p>Auto logout in 10 seconds...</p>
          ) : (
            <button onClick={() => handleLogout()}>Logout</button>
          )}
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
}
