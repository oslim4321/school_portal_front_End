import React, {useContext, useState} from "react";


const Search = React.createContext()

const UserData = ({ children }) => {
    const [UserData, setUserData] = useState()

return <Search.Provider value={{setUserData,UserData}}>{children}</Search.Provider>
    }

export default UserData;

export const GlobalUSerData = () => {
    return useContext(Search)
}