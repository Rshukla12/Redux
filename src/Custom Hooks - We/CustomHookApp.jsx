import Github from "./Components/Github"
import Timer from "./Components/Timer"
import AppContextProvider from "./Counter/AppContextProvider"
import Counter from "./Counter/Counter"

const CustomHookApp = () => {
    return (
        <AppContextProvider>
            <Counter />
            <Timer />
            <Github />
        </AppContextProvider>
    )
}

export default CustomHookApp;