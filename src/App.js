function App() {
  return (
    <div className="app">
      <header>
        <h1>Wiki Seeker</h1>
        <form className="app__searchBox">
          <input type="search" placeholder="What are your looking for?" />
        </form>
        <p>Search Results: 0</p>
      </header>
      <div className="app__results">
        <div className="app__result">
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, amet.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default App;
