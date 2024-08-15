import React, { useEffect, useState } from 'react'
import User from './user';
import "./styles.css"

const GithubProfile = () => {

    const [username, setUsername] = useState("MananPathak13")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);


    const fetchGithubData = async () => {
        setLoading(true);
        try {

            const res = await fetch(`https://api.github.com/users/${username}`);
            const data = await res.json();
            if (data) {
                console.log(data)
                setUserData(data)
                setUsername('')
            };
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchGithubData();
    }, []);

    const handlesubmit = () => {
        fetchGithubData();
    }

    if (loading) {
        return (<p>Loading ...</p>)
    }
    if (error) {
        return (<div>{error}</div>)
    }
    return (
        <div className='container'>
            <div className='input-wrapper'>
                <input
                    type="text" name="search-by-username" placeholder='Write github username'
                    value={username} onChange={e => setUsername(e.target.value)} />
                <button onClick={handlesubmit}>submit</button>
            </div>

            {userData != null ? <User user={userData} /> : null}
        </div>
    )
}

export default GithubProfile
