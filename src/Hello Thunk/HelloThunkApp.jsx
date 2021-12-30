import Navbar from "./Components/Navbar";
import Routes from "./Routes/Routes";

const HelloThunkApp = () => {
    return (
        <BrowserRouter>
            <Provider >
                <Navbar />
                <Routes />
            </Provider>
        </BrowserRouter>
    )
}

export default HelloThunkApp;