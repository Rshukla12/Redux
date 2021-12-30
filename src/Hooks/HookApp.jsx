// import Form from "./Components/Form";
import StopWatchTimer from "./Timer/StopWatchTimer";
// import Github from "./Components/Github";
import { useTimeout } from "./useTimeout"

const HookApp = () => {
    const { ready } = useTimeout(5000)
    return (
        <div>
            <h1>is ready ? { ready ? "Yes":"No" } </h1>
            {/* <Github /> */}
            {/* <Form /> */}
            <StopWatchTimer />
        </div>
    )
}

export default HookApp;