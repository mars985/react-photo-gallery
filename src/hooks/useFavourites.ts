import { useCallback, useEffect, useReducer } from 'react'

const STORAGE_KEY = 'favourites'

type FavouritesAction = { type: 'TOGGLE'; id: string }

function favouritesReducer(state: string[], action: FavouritesAction): string[] {
  switch (action.type) {
    case 'TOGGLE':
      return state.includes(action.id)
        ? state.filter((id) => id !== action.id)
        : [...state, action.id]
    default:
      return state
  }
}

function loadFavourites(): string[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function useFavourites() {
  const [favourites, dispatch] = useReducer(favouritesReducer, [], loadFavourites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
  }, [favourites])

  const toggleFavourite = useCallback((id: string) => {
    dispatch({ type: 'TOGGLE', id })
  }, [])

  return { favourites, toggleFavourite }
}

export default useFavourites
