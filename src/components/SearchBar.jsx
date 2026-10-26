function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search photos by author..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        aria-label="Search photos by author"
      />
    </div>
  );
}

export default SearchBar;