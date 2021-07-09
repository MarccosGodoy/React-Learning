import { createContext,useState } from "react";


const LanguageContext = createContext();


const initialLanguage = "en"
const translations = {
    es:{
        headerTitle: "Mi Aplicacion CON Context",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenido",
        mainHello: "Hola usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en:{
        headerTitle: "Mi application WITH Context",
        headerSubtitle: "Mi header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello user",
        mainContent: "My main content",
        footerTitle: "My footer"
    },
}


const LanguageProvider = ({children})=>{

    const [language, setLanguage] = useState(initialLanguage)

    const [texts, setTexts] = useState(translations[language])

    


    const handleLanguage = (e)=>{
        if (e.target.value === "es") {
            setLanguage("es")
            setTexts(translations.es)
        }
        else{
            setLanguage('en')
            setTexts(translations.en)
        }
    }


    const data = {texts, handleLanguage}

    return(
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageProvider}
export default LanguageContext;