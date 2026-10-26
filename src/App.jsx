import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Photo Gallery</h1>
        <p>Discover photos and save your favourites.</p>
      </header>

      <main className="app-main">
        <Gallery />
      </main>

      <footer className="app-footer">
        <p>Photo Gallery · Powered by Picsum Photos</p>
      </footer>
    </div>
  );
}

export default App;