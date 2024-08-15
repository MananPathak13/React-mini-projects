import React, { useEffect, useState } from 'react'

const Search = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await (await fetch('https://dummyjson.com/users')).json();
            console.log(res.users);
            setUserData(res.users);
        } catch (error) {
            console.log(error);
            setError(error)
        }
        setLoading(false);
    }

    const handleSubmit = (input) => {

        const lowercasedInput = input.toLowerCase()
        setUserInput(lowercasedInput);
        console.log(userData)
        if (lowercasedInput.length > 1 && userData) {
            const filtered = userData.filter(user =>
                user.username.toLowerCase().includes(lowercasedInput)
            );
            console.log(filtered);
            setFilteredList(filtered);

        } else {
            setFilteredList([]);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    if (loading) {
        return (<div>Loading....</div>)
    }
    if (error) {
        return (<div>Error</div>)
    }
    return (
        <div>
            <input type="text" onChange={e => handleSubmit(e.target.value)} value={userInput} />
            <div>{userInput}</div>

            <div>
                {
                    filteredList.map((user, index) => (
                        <div key={index} onClick={() => setUserInput(user.username)}>{user.username}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search
