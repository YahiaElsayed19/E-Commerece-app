import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({
    idToken: "",
    isAuthenticated: false,
    authenticate: (idToken) => { },
    logout: () => { },
})

import React from 'react'

function AuthProvider({ children }) {
    const [idToken, setIdToken] = useState()
    function authenticate(idToken) {
        setIdToken(idToken)
        AsyncStorage.setItem("token", idToken);
    }
    function logout() {
        setIdToken(null)
        AsyncStorage.removeItem('token')
    }
    const value = {
        idToken,
        isAuthenticated: !!idToken,
        authenticate,
        logout,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;