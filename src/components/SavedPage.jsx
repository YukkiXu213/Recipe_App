import RecipeList from './RecipeList'

const SavedPage = ({ savedList, onSelect }) => {
    if (savedList.length === 0) {
        return (
            <div className="empty-state">
                <p>No saved recipes yet. Click Save on a recipe to add it here.</p>
            </div>
        )
    }

    return <RecipeList results={savedList} onSelect={onSelect} />
}

export default SavedPage
