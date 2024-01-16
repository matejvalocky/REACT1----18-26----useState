import React from 'react'
import "./Example.css"

const Example = () => {
    let title = "Môj prvý title"

    const buttonHandler = () => {
        console.log("kliknuté")
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={buttonHandler}>Zmeniť title</button>
        </div>
    )
}

export default Example