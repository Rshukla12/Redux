import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState(null);

	const fetchRequest = () => {
		setLoading(true);
		return fetch(url)
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => {
				console.log(err);
				setIsError(true);
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		url && fetchRequest();
	}, [url]);

	return {
		loading,
		isError,
		data,
		fetchRequest
	};
};
