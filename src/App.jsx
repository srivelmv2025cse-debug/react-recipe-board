import { useState } from 'react'
import './App.css'

const recipes = [
  { title: 'Citrus ricotta toast', category: 'Breakfast', time: '15 min', rating: '4.9', art: 'citrus', emoji: '🍊' },
  { title: 'Green goddess bowl', category: 'Lunch', time: '25 min', rating: '4.8', art: 'greens', emoji: '🥑' },
  { title: 'Miso butter noodles', category: 'Dinner', time: '20 min', rating: '5.0', art: 'noodles', emoji: '🍜' },
  { title: 'Berry cloud pancakes', category: 'Breakfast', time: '30 min', rating: '4.9', art: 'berries', emoji: '🥞' },
  { title: 'Roasted tomato orzo', category: 'Dinner', time: '35 min', rating: '4.7', art: 'tomato', emoji: '🍅' },
  { title: 'Crispy chickpea salad', category: 'Lunch', time: '20 min', rating: '4.8', art: 'chickpea', emoji: '🥗' },
]
const categories = ['All recipes', 'Breakfast', 'Lunch', 'Dinner']

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <div className={`recipe-art ${recipe.art}`} aria-hidden="true"><span>{recipe.emoji}</span><span className="save-mark">♡</span></div>
      <div className="recipe-info"><div className="recipe-meta"><span>{recipe.category}</span><span>{recipe.time}</span></div><h3>{recipe.title}</h3><div className="rating"><span aria-hidden="true">★</span> {recipe.rating} <span className="rating-note">· community favorite</span></div></div>
    </article>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All recipes')
  const visibleRecipes = activeCategory === 'All recipes' ? recipes : recipes.filter((recipe) => recipe.category === activeCategory)

  return (
    <main className="kitchen">
      <header className="recipe-header"><a className="recipe-logo" href="#home">little<span>spoon</span></a><nav aria-label="Main navigation"><a href="#recipes">Recipes</a><a href="#story">Our story</a><button type="button" className="subscribe-button">Get the weekly menu <span aria-hidden="true">↗</span></button></nav></header>
      <section className="recipe-hero" id="home"><p className="recipe-kicker">GOOD FOOD, NO FUSS</p><h1>A little inspiration<br />for your <em>everyday.</em></h1><p>Seasonal recipes, made for real life and shared around the table.</p><a href="#recipes" className="browse-button">Find your next favorite <span aria-hidden="true">↓</span></a><div className="hero-stamp" aria-hidden="true">fresh<br />ideas<br /><span>✳</span></div></section>
      <section className="recipe-section" id="recipes"><div className="recipe-title-row"><div><p className="recipe-kicker">FROM OUR KITCHEN</p><h2>On the menu</h2></div><a href="#recipes" className="all-link">View all recipes ↗</a></div>
        <div className="category-tabs" aria-label="Filter recipes">{categories.map((category) => <button type="button" key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <div className="recipe-grid">{visibleRecipes.map((recipe) => <RecipeCard key={recipe.title} recipe={recipe} />)}</div>
      </section>
      <footer id="story" className="recipe-footer"><span>Little Spoon</span><span>Cook something good today.</span><span>Made with ♡ and a pinch of salt.</span></footer>
    </main>
  )
}

export default App
