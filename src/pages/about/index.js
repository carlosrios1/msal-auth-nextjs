import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { authScopes } from "../../authConfig";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function About() {
  const { instance } = useMsal();
  const router = useRouter();

  useEffect(() => {
    // Verifica si el usuario está autenticado al cargar la página
    if (!instance.getActiveAccount()) {
      // Redirige al usuario a la página de inicio de sesión si no está autenticado
      router.push("/");
    }
  }, [instance, router]);

  function handleLogout() {
    instance
      .logoutPopup(authScopes)
      .then(() => {
        // Redirige al usuario a la página de inicio después del logout exitoso
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <h1>About Page</h1>
      <AuthenticatedTemplate>
        <h6>You're logged in!</h6>
        <button onClick={() => handleLogout()}>Logout</button>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div>
          <h6>You're logged in!</h6>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
}
