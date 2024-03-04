import { createContext, useState } from "react";

type DashboardContextType = {
    listOfReportsByType: any
    setListOfReportsByType: any
}
const defaultValues: DashboardContextType = {
    listOfReportsByType: [],
    setListOfReportsByType: () => {}

}

export const DashboardContext = createContext(defaultValues)

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