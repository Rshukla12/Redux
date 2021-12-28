import useMergeState from "../useMergeState";
import TextField from "@mui/material/TextField";

const Form = () => {
    const init = {
        username: "",
        email: "",
        password: ""
    }
    const [state, setState] = useMergeState(init);

    const handleChange = (e) => {
        setState({ 
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <TextField type="text" variant="outlined" onChange={handleChange} value={state.username} name="username" label="Username" />
            <br />
            <br />
            <TextField type="email" variant="outlined" onChange={handleChange} value={state.email} name="email" label="Email" />
            <br />
            <br />
            <TextField type="password" variant="outlined" onChange={handleChange} value={state.password} name="password" label="Password" />
        </form>
    )
}

export default Form;