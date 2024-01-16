import React from 'react'
import "./Example.css"

const Example = () => {
    // čisty javascript začiatok



    const vychodziePolie = ["David", "Hermiona", "Harry"]

    // const student1 = vychodziePolie[0]
    // const student2 = vychodziePolie[1]
    // const student3 = vychodziePolie[2]

        // DESTRUCTURING

        const [student1, student2, student3] = vychodziePolie

        console.log(student1)
        console.log(student2)
        console.log(student3)






    // čisty javascript koniec


    let title = "Môj prvý title"

    const buttonHandler = () => {
        title = "novy text v titlu"
        console.log(title)
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={buttonHandler}>Zmeniť title</button>
        </div>
    )
}

export default Example