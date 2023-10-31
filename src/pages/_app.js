import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from '@azure/msal-react';
import { msalConfig } from "../authConfig";
import '../app/css/style.css'

const msalInstance = new PublicClientApplication(msalConfig);

function MyApp({ Component, pageProps }) {
    return (
        <MsalProvider instance={msalInstance}>
            <Component {...pageProps} />
        </MsalProvider>
      
    )
}

export default MyApp
