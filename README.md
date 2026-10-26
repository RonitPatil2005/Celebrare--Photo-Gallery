# Celebrare Photo Gallery

A responsive photo gallery application built with React and Vite. The application fetches photos from the Picsum Photos API and allows users to search photos by author and manage their favourite photos.

## Features

- **Photo Gallery:** Fetches and displays 30 photos from the Picsum Photos API.
- **Search Photos:** Search for photos by author name.
- **Favourites:** Add or remove photos from favourites.
- **Persistent Storage:** Saves favourite photos in the browser's localStorage, so they remain available after refreshing the page.
- **Responsive Design:** Adapts to different screen sizes, including desktops, tablets, and mobile devices.
- **Loading State:** Displays a loading indicator while photos are being fetched.
- **Error Handling:** Handles errors that occur while fetching photos.
- **State Management:** Uses React's `useReducer` to manage favourites.
- **Custom Hook:** Uses `useFetchPhotos` to handle photo fetching, loading, and error states.
- **Performance Optimization:** Uses `useCallback` and `useMemo` where appropriate.

## Tech Stack

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Picsum Photos API
- React Hooks
- Browser localStorage

## API Used

This project uses the Picsum Photos API to retrieve photo information.

**API Endpoint:** `https://picsum.photos/v2/list?limit=30`


## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/RonitPatil2005/Celebrare--Photo-Gallery.git
```

### 2. Navigate to the Project Directory

```bash
cd Celebrare--Photo-Gallery
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open the local URL displayed in your terminal, usually:

`http://localhost:5173`

## How to Use

1. Start the application.
2. Browse the photos displayed in the gallery.
3. Enter an author's name in the search field to filter photos.
4. Add photos to your favourites using the favourite button.
5. Remove photos from favourites whenever needed.
6. Refresh the page to verify that your favourite selections persist.

## React Concepts Used

### Custom Hook — `useFetchPhotos`

Fetches photos from the API and manages loading, error, and photo data states.

### `useReducer`

Manages favourite photo actions, including adding and removing favourites.

### `useCallback`

Memoizes the search handler to help avoid unnecessary function recreation.

### `useMemo`

Memoizes the filtered photo list to avoid recalculating it on every render when its dependencies have not changed.

### `localStorage`

Persists favourite photos in the browser so they remain saved across page refreshes.

## Future Improvements

- Add pagination or infinite scrolling.
- Add sorting and additional filtering options.
- Add a dedicated favourites view.
- Improve accessibility and keyboard navigation.
- Add image previews and detailed photo information.
