import React from 'react'
import "./Example.css"
import { useState } from "react"



const Example = () => {
   
    const [title, setTitle] = useState("Môj prvý title")
    const [buttonText, setButtonText]  = useState("pôvodny text tlačidla")
    





    // čisty javascript začiatok

    const vychodziePolie = ["David", "Hermiona", "Harry"]

    // const student1 = vychodziePolie[0]
    // const student2 = vychodziePolie[1]
    // const student3 = vychodziePolie[2]

        // DESTRUCTURING

        // const [student1, student2, student3] = vychodziePolie

        // console.log(student1)
        // console.log(student2)
        // console.log(student3)

    // čisty javascript koniec


  

    const buttonHandler = () => {
        setTitle("Novy text v titlu")
       
    }

    const button2Handler = () => {
        setTitle("opäť zmenený title")
    }

    const deleteTitle = () => {
        setTitle("")
    }


    const buttonChange = () => {
        setButtonText("nový text tlačídla")
    }

    return (
        <div className='text-button-changer'>
            <h2>{title}</h2>
            <button onClick={buttonHandler}>Zmeniť title</button>
            <button onClick={button2Handler}>Opäť zmeniť title</button>
            <button onClick={deleteTitle}>vymaž title</button>
            <button onClick={buttonChange}>{buttonText}</button>
        </div>
    )
}

export default Example