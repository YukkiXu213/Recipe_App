import { useNavigate } from 'react-router-dom'

const RecipeList = ({results}) => {
    const navigate = useNavigate()
    return (
        <div className="recipe-list">
            {results.map((recipe) => (
                <div className="recipe-item" key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)}>
                    <img src={recipe.image} alt={recipe.title}/>
                    <p>{recipe.title}</p>
                </div>))
            }
        </div>
    )
}

export default RecipeList