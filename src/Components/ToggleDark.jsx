import { useState } from "react"
import { Moon, Sun } from "lucide-react";



const ToggleDark = ({isDark, setIsDark}) => {

    const handleClick = () => {
        setIsDark(!isDark);
    }

    return(
        <div>
            <button onClick={() => handleClick()} className="cursor-pointer flex items-center justify-center max-md:w-4">
                {isDark ? <Moon /> : <Sun />}
            </button>
        </div>
    )
}

export default ToggleDark;