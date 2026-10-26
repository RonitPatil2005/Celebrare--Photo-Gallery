export function favoritesReducer(state, action) {
  switch (action.type) {
    case "LOAD_FAVORITES":
      return action.payload;

    case "TOGGLE_FAVORITE": {
      const photo = action.payload;

      const alreadyFavorite = state.some(
        (item) => item.id === photo.id
      );

      if (alreadyFavorite) {
        return state.filter(
          (item) => item.id !== photo.id
        );
      }

      return [...state, photo];
    }

    default:
      return state;
  }
}
