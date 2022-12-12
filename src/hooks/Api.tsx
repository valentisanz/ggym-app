import { useEffect, useState } from "react";

const useApi = (endpoint: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchApi = () => {
        fetch(endpoint)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setLoading(false);
                setData(json);
            });
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }
};

export default useApi;