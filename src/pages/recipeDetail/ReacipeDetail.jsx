import { useParams } from "react-router-dom";

const RecipeDetail = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>{params.id}번</div>
    );
}

export default RecipeDetail;