const FilterBar = ({selectedCuisine, setSelectedCuisine, selectedDiet, setSelectedDiet}) => {
    const diets = ["🥗Vegetarian", "🥒Vegan", "🍞Gluten Free", "🥩Ketogenic"]
    const cuisines = ["🍝Italian", "🥡Chinese", "🌮Mexican", "🍣Japanese"]

    return (
        <div className="filter-bar">
            <p className="filter-label">Filter by</p>
            <div className="filter-group">
                {diets.map((diet) => (
                    <button
                        key={diet}
                        className={`filter-tag ${selectedDiet === diet ? "active" : ""}`}
                        onClick={() => setSelectedDiet(selectedDiet === diet ? "" : diet)}
                    >
                        {diet}
                    </button>
                ))}
            </div>

            <div className="filter-group">
                {cuisines.map((cuisine) => (
                    <button
                        key={cuisine}
                        className={`filter-tag ${selectedCuisine === cuisine ? "active" : ""}`}
                        onClick={() => setSelectedCuisine(selectedCuisine === cuisine ? "" : cuisine)}
                    >
                        {cuisine}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterBar
