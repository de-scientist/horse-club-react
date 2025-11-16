import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const [mode, setMode] = useState("dark")
function handleChangeMode(){
    if (mode === "dark") {
        setMode("light")
    } else {
        setMode("dark")
    }
}
return (
    <div >
        <h2>{mode}</h2>
        <button onClick={handleChangeMode}>
            {mode === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    </div>
)

