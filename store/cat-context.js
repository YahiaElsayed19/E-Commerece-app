import { createContext, useState } from "react";

export const CatContext = createContext({
    category: "",
    setCategory: (catId) => { }
})

function CatProvider({ children }) {
    const [cat, setCat] = useState("")
    function setCategory(catId) {
        setCat(catId)
    }
    const value = {
        category: cat,
        setCategory: setCat
    }
    return <CatContext.Provider value={value}>{children}</CatContext.Provider>
}

export default CatProvider;