import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [authUser, serAuthUser] = useState(
        JSON.parse(localStorage.getItem("chat-user")) || null
    );

    return (
        <AuthContext.Provider value={{ authUser, serAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
