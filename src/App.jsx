import { useState, useEffect } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY
import Header from './components/Header'
import NavBar from './components/NavBar'
import RecipeList from './components/RecipeList'
import Card from './components/Card'
import SavedPage from './components/SavedPage'
import AboutPage from './components/AboutPage'

function App() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [savedList, setSavedList] = useState([])
  const [activePage, setActivePage] = useState("dashboard")

  const fetchRecipeData = async (searchQuery) => {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${API_KEY}`)
    const json = await res.json()
    setResults(json.results)
  }

  const fetchRecipeDetail = async (id) => {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information/?apiKey=${API_KEY}`)
    const json = await res.json()
    setSelectedRecipe(json)
  }

  const handleSave = (recipe) => {
    if (!savedList.find((r) => r.id === recipe.id)) {
      setSavedList((prev) => [...prev, recipe])
    }
  }

  useEffect(()=>{
    const fetchRandomRecipe = async () => {
      const res = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
      const json = await res.json()
      setResults(json.recipes ?? [])
    }
    fetchRandomRecipe()
  },[])

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <Header
          setQuery={setQuery}
          fetchRecipeData={fetchRecipeData}
          query={query}
        />
        <NavBar activePage={activePage} setActivePage={setActivePage} />
      </aside>

      <main className="main-content">
        {activePage === "dashboard" && (
          <>
            <section className="card-section">
              {selectedRecipe
                ?<Card recipe={selectedRecipe} onSave={handleSave} />
                : query
                  ? <div>We found these recipes that you are interested</div>
                  :<div>Don't know what to cook yet? Try these we selected for you!</div>
              }              
            </section>
            <section className="list-section">
              <RecipeList results={results} onSelect={fetchRecipeDetail} />
            </section>
          </>
        )}

        {activePage === "saved" && (
          <>
            <section className="card-section">
              {selectedRecipe
                ?<Card recipe={selectedRecipe} onSave={handleSave} />
                : query
                  ? <div>We found these recipes that you are interested</div>
                  :<div>Don't know what to cook yet? Try these we selected for you!</div>
              }              
            </section>

            <section className="list-section">
              <SavedPage savedList={savedList} onSelect={fetchRecipeDetail} />
            </section>
          </>
        )}

        {activePage === "about" && (
          <section className="list-section">
            <AboutPage />
          </section>
        )}
      </main>
    </div>
  )
}

export default App
