import React, { useContext, useState } from "react";
import { AppContext } from "../pages";

function Playing() {
    
    const { currentChar } = useContext(AppContext)

    return (
        <h1 style={{color:"pink"}}>Playing now: <span style={{color: 'white', fontFamily:"fantasy", fontSize:"inherit"}}>{currentChar}</span></h1>
    )
}

export default Playing