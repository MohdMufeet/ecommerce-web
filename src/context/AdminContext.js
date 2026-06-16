import { createContext } from "react"

export const AdminContext = createContext({
    isAdmin: false,
    loginAdminGlobal: () => {},
    logoutAdminGlobal: () => {}
});

export const AdminProvider = AdminContext.Provider;