import { createContext, useState } from "react";

const TimeContext = createContext()

export const TimeProvider = ({children}) => {
    const [timing, setTiming] = useState(4)

    const updateTiming = (newValue) => {
    setTiming(newValue)
    // console.log(newValue)
    }

    return(
        <TimeContext.Provider value={{
            timing,
            updateTiming
        }}>
            {children}
        </TimeContext.Provider>  
    );
};


export default TimeContext;