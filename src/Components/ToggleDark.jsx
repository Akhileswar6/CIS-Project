import { useState } from "react"
import { Moon, Sun } from "lucide-react";



const ToggleDark = ({isDark, setIsDark}) => {

    const handleClick = () => {
        setIsDark(!isDark);
    }

    return(
        <div>
            <button onClick={() => handleClick()} className="cursor-pointer">
                {isDark ? <Moon /> : <Sun />}
            </button>
        </div>
    )
}

export default ToggleDark;