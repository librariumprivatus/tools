import React, { useEffect, useState } from "react"

const UsingFetch = () => {
    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("users.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h2>Using Fetch</h2>
            {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UsingFetch
