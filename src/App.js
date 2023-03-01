import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>라떼 인 도쿄</h1>
        <div className="navbar">
          <li>Blog</li>
          <li>Coffee</li>
          <li>Travel</li>
          <li>Write</li>
        </div>
      </header>
      <div className="main-body">
        <div className="main__blog">blog</div>
        <div className="main-todo">
          <div className="main-todo__coffee">coffee</div>
          <div className="main-todo__travel">travel</div>
        </div>
      </div>
      <footer>Lena's Boat</footer>
    </div>
  )
}

export default App
