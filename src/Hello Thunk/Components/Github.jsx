import { useState } from "react";
import useDebouncer from "../Hooks/useDebouncer";
import { useFetch } from "../Hooks/useFetch";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

const Github = () => {
	const [page, setPage] = useState(1);
	const [url, setUrl] = useState("https://api.github.com/search/users?q=");
	const { loading, data, isError, fetchRequest } = useFetch({
		url: url + `&page=${page}`
	});
	const [query, setQuery] = useState("");
	const callbackFn = (query) => setUrl("https://api.github.com/search/users?q=" + query);
	const debouncer = useDebouncer( callbackFn, 1000);
	// useEffect(() => {
	//   fetchRequest();
	// }, [url, page])

	const handleChange = (e) => {
		setQuery(e.target.value);
		debouncer(e.target.value);
	}

	return (
		<Container>
			<TextField fullWidth type="text" variant="outlined" value={query} onChange={handleChange} placeholder="type to search" label="Github Username" />
			<button onClick={() => setPage((page) => page - 1)}>Prev</button>
			<button onClick={() => setPage((page) => page + 1)}>Next</button>
			{loading && <div>loading</div>}
			{!loading &&
				data?.items?.map((item) => (
					<div key={item.login}>{item.login}</div>
				))}
		</Container>
	);
};

export default Github;
