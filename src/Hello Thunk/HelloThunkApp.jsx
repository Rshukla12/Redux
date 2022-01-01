import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Components/Navbar";
import { store } from "./Redux/store";
import Routes from "./Routes/Routes";

const HelloThunkApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
                <div style={{width: "45%", margin:"2rem auto"}}>
                    <Routes />
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default HelloThunkApp;