function PhotoCard({ photo, isFavorite, onFavoriteToggle }) {
  return (
    <article className="photo-card">
      <div className="photo-wrapper">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          className="photo-image"
          loading="lazy"
        />

        <button
          type="button"
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={() => onFavoriteToggle(photo)}
          aria-label={
            isFavorite
              ? `Remove photo by ${photo.author} from favorites`
              : `Add photo by ${photo.author} to favorites`
          }
          aria-pressed={isFavorite}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="photo-info">
        <h3>{photo.author}</h3>
      </div>
    </article>
  );
}

export default PhotoCard;