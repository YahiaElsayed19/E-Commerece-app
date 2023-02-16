import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({
    idToken: "",
    isAuthenticated: false,
    setIdToken: (idToken) => { },
    removeIdToken: (idToken) => { },
})

import React from 'react'

function AuthProvider({ children }) {
    const [idToken, setIdToken] = useState()
    function setIdTokenFn(idToken) {
        setIdToken(idToken)
        AsyncStorage.setItem("token", idToken);
    }
    function removeIdTokenFn() {
        setIdToken(null)
        AsyncStorage.removeItem('token')
    }
    const value = {
        idToken,
        isAuthenticated: !!idToken,
        setIdToken: setIdTokenFn,
        removeIdToken: removeIdTokenFn,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;