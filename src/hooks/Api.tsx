import { useEffect, useState } from "react";

const useApi = (endpoint: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchApi = async () => {
        const response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({ email: 'asd@gmail.com', password: '123123' })
        })
        const json = await response.json();
        setLoading(false);
        setData(json);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }
};

export default useApi;