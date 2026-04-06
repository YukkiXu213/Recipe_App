const Card = ({recipe, onSave}) => {
    if (!recipe) return null;
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <div className="recipe-card-stats">
                <div className="stat-box">⏱ {recipe.readyInMinutes} min</div>
                <div className="stat-box">Health Score: {recipe.healthScore}</div>
            </div>
            <p className="recipe-card-summary" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            <div className="recipe-card-actions">
                <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">View Recipe</a>
                <button onClick={() => onSave(recipe)}>Save</button>
            </div>
        </div>
    )
}

export default Card