import { createContext, useState } from "react";

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
    }
    function removeIdTokenFn() {
        setIdToken(null)
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