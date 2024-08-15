import React, { useEffect, useState } from 'react'

const UseFetch = (url, options = {}) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);


    async function fetchData() {
        setPending(true);
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            setData(data.products);
            setPending(false);


        }
        catch (e) {
            setPending(false);
            setError(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])
    return { data, error, pending };
}

export default UseFetch
