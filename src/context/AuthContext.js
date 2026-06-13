import { createContext } from "react"

export const AuthContext = createContext({
    isAuthenticated: false,
    loginGlobal: () => {},
    logoutGlobal: () => {}
});

export const AuthProvider = AuthContext.Provider;