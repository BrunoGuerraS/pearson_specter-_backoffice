import { createContext, useState } from "react";



export const DashboardContext = createContext(null)

const DashboardProvider = ({children}) => {
    const [ listOfReportsByType, setListOfReportsByType ] = useState([])
    return (
        <DashboardContext.Provider value={{
            listOfReportsByType,
            setListOfReportsByType
        }}>
        {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider