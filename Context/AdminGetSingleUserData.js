import React, {useContext, useState} from "react";


const Search = React.createContext()

const AdminSingleUserData = ({ children }) => {
    const [SingleUSerDetails, setSingleUSerDetails] = useState()

return <Search.Provider value={{setSingleUSerDetails, SingleUSerDetails}}>{children}</Search.Provider>
    }

export default AdminSingleUserData;

export const GlobalAdminSingleUSerData = () => {
    return useContext(Search)
}