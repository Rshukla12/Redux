import { useEffect, useState } from "react"

const useFetch = ({ url }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const fetchRequest = () => {
		setLoading(true);
		return fetch(url)
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => {
				console.log(err);
				setError(true);
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		url && fetchRequest();
	}, [url]);



    return {loading, data, error}
}

export default useFetch;