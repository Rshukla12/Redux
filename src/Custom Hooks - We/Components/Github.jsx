import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";

const Github = () => {
	const [page, setPage] = useState(1);
	const [url, setUrl] = useState(
		"https://api.github.com/search/users?q=masai"
	);
	const { loading, data, isError, fetchRequest } = useFetch({
		url: url + `&page=${page}`
	});
	console.log(data);
	// useEffect(() => {
	//   fetchRequest();
	// }, [url, page])
	return (
		<div>
			<button onClick={() => setPage((page) => page - 1)}>Prev</button>
			<button onClick={() => setPage((page) => page + 1)}>Next</button>
			{loading && <div>loading</div>}
			{!loading &&
				data?.items?.map((item) => (
					<div key={item.login}>{item.login}</div>
				))}
		</div>
	);
};

export default Github;
