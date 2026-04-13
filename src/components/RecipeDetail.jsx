import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Card from './Card'

const API_KEY = import.meta.env.VITE_APP_API_KEY

const RecipeDetail = ({ onSave }) => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            const json = await res.json()
            setRecipe(json)
        }
        fetchDetail()
    }, [id])

    if (!recipe) return <p>Loading...</p>

    return (
        <div>
             <Card recipe={recipe} onSave={onSave} />

              <h3>Ingredients</h3>
            <ul>
                {recipe.extendedIngredients.map((ing) => (
                    <li key={ing.id}>{ing.original}</li>
                ))}
            </ul>

            <h3>Instructions</h3>
            <ol>
                {recipe.analyzedInstructions[0]?.steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                ))}
            </ol>
        </div>
    )
}

export default RecipeDetail