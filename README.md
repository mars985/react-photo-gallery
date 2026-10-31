# React Photo Gallery

A photo gallery built with React, Vite, TypeScript and Tailwind CSS. It fetches 30 photos from the [Picsum Photos API](https://picsum.photos), shows them in a responsive grid (1, 2 or 4 columns depending on screen size), filters them by author name as you type, and lets you mark photos as favourites. Favourites are managed with `useReducer` and saved in `localStorage`, so they survive a page refresh.

To run it locally, install dependencies with `npm install` and start the dev server with `npm run dev`. The fetch logic lives in the `useFetchPhotos` hook, favourites in the `useFavourites` hook, and the search filter in the `Gallery` component, which uses `useCallback` for the input handler and `useMemo` for the filtered list.
