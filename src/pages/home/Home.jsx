import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();
    console.log(params.get("value"));
    console.log(setParams);

    return (
        <div></div>
    );
}

export default Home;