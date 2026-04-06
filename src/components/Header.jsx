const Header = ({setQuery, fetchRecipeData, query}) => {
   return (
    <div>
        <div className="header-logo">
            <img src="/frying-pan.png" alt="PanTastic logo" className="logo-img" />
            <h2>Pantastic</h2>
        </div>
        <p>Cook with what you have in hand</p>
        <input
          type="text"
          placeholder="Search your recipe..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => fetchRecipeData(query)}>Search</button>
    </div>
   )
}

export default Header