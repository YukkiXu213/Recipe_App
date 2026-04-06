const RecipeList = ({results, onSelect}) => {
    return (
        <div className="recipe-list">
            {results.map((recipe) => (
                <div className="recipe-item" key={recipe.id} onClick={() => onSelect(recipe.id)}>
                    <img src={recipe.image} alt={recipe.title}/>
                    <p>{recipe.title}</p>
                </div>))
            }
        </div>
    )
}

export default RecipeList