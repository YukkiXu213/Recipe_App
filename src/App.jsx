import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY
import Header from './components/Header'
import NavBar from './components/NavBar'
import RecipeList from './components/RecipeList'
import Card from './components/Card'
import SavedPage from './components/SavedPage'
import AboutPage from './components/AboutPage'
import FilterBar from './components/FilterBar'
import RecipeDetail from './components/RecipeDetail'
import Charts from './components/Charts'

function App() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [savedList, setSavedList] = useState([])
  const [selectedCuisine, setSelectedCuisine] = useState("")
  const [selectedDiet, setSelectedDiet] = useState("")
  const navigate = useNavigate()

  const fetchRecipeData = async (searchQuery) => {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&diet=${selectedDiet}&cuisine=${selectedCuisine}&apiKey=${API_KEY}`)
    const json = await res.json()
    setResults(json.results ?? [])
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

  const handlePageChange = (path) => {
    setSelectedRecipe(null)
    navigate(path)
  }

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      const res = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
      const json = await res.json()
      setResults(json.recipes ?? [])
    }
    fetchRandomRecipe()
  }, [])

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <NavBar onNavigate={handlePageChange} />
        <Header
          setQuery={setQuery}
          fetchRecipeData={fetchRecipeData}
          query={query}
        />
        <FilterBar
          selectedDiet={selectedDiet}
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          setSelectedDiet={setSelectedDiet}
        />
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <div className="dashboard-left">
                <section className="card-section">
                  {selectedRecipe
                    ? <Card recipe={selectedRecipe} onSave={handleSave} />
                    : query
                      ? <div>We found these recipes that you are interested in!</div>
                      : <div>Don't know what to cook yet? Try these we selected for you!</div>
                  }
                </section>
                <section className="list-section">
                  <RecipeList results={results} />
                </section>
              </div>
              {results.length > 0 && (
                <section className="chart-section">
                  <Charts results={results} />
                </section>
              )}
            </>
          } />

          <Route path="/saved" element={
            <>
              <section className="card-section">
                {selectedRecipe
                  ? <Card recipe={selectedRecipe} onSave={handleSave} />
                  : savedList.length > 0
                    ? <div>Here are your saved recipes!</div>
                    : null
                }
              </section>
              <section className="list-section">
                <SavedPage savedList={savedList} />
              </section>
            </>
          } />

          <Route path="/about" element={
            <section className="list-section">
              <AboutPage />
            </section>
          } />

          <Route path="/recipe/:id" element={<RecipeDetail onSave={handleSave} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
