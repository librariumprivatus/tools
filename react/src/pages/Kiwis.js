import React, { useEffect, useState } from "react"
import books from "./main-data";
import CardBook from "./Book";

const UsingFetchKiwis = () => {
    const [data, setData] = useState({
        "collection": {}
    })

    const fetchData = () => {
        fetch("main.json")
            .then(response => {
                console.log("Response Apples: ");
                console.log(response);
                return response.json()
            })
            .then(data => {
                console.log("Data Apples: ");
                console.log(data);
                setData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const data2={
        "apples": [
            { "id": 1, "name": "Яблоки",  "price": "$2" },
            { "id": 2, "name": "Персики", "price": "$5" }
        ],
        "ver": "981"
    }

    const greeting = 'Welcome to React';

    return (
        <>
            <h5>Apples</h5>
            <h5>Length: {data?.books?.length}</h5>
            <h5>Apples Length: {data2.apples.length}</h5>
            <Welcome text={greeting} />
        </>
    )
}

const Welcome = (props) => {
    return <h1>Welcome : {props.text}</h1>;
};


const Collection = (props) => {
    return (
        <div>
            <h2>Kiwis</h2>
            <h5>Books Length: {props.data.books.length}</h5>
            {/*<ul>
                {props.data.books.map(book =>
                    <li>
                        {book.cover}
                    </li>)};
            </ul>
            */}
        </div>
    );
};
export default UsingFetchKiwis
