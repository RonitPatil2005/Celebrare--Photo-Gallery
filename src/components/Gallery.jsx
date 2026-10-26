import { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favoritesReducer } from "../reducers/favoritesReducer";
import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";

function getInitialFavorites() {
  try {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch {
    return [];
  }
}

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [searchTerm, setSearchTerm] = useState("");

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    undefined,
    getInitialFavorites
  );

  // Save favourites whenever the list changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Handle search input changes
  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // Filter already-fetched photos by author
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  }, [photos, searchTerm]);

  // Toggle a photo's favourite status
  const handleFavoriteToggle = useCallback((photo) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: photo,
    });
  }, []);

  if (loading) {
    return (
      <div className="status-container">
        <div className="spinner"></div>
        <p>Loading photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error-message">
        <p>{error}</p>
        <p>Please check your internet connection and try again later.</p>
      </div>
    );
  }

  return (
    <section className="gallery-section">
      <div className="gallery-toolbar">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearch}
        />

        <p className="photo-count">
          {filteredPhotos.length} photos
        </p>
      </div>

      {filteredPhotos.length === 0 ? (
        <p className="empty-message">
          No photos found for "{searchTerm}".
        </p>
      ) : (
        <div className="photo-grid">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favorites.some(
                (favorite) => favorite.id === photo.id
              )}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;