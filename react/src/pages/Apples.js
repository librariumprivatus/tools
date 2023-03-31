import React, { useEffect, useState } from "react"
import books from "./main-data";
import CardBook from "./Book";

const UsingFetchApples = () => {
    const [apples, setApples] = useState({
        "items": []
    })

    const fetchData = () => {
        fetch("apples.json")
            .then(response => {
                console.log("Response Apples: ");
                console.log(response);
                return response.json()
            })
            .then(data => {
                console.log("Data Apples: ");
                console.log(data);
                setApples(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <h2>Apples</h2>
            <ul>
                {apples.items.map(apple =>
                    <li>
                        {apple.id} {apple.name}
                    </li>)};
            </ul>
        </div>
    )
}

export default UsingFetchApples
