import { useCallback, useMemo, useState, type ChangeEvent } from 'react'
import Card from './Card'
import useFetchPhotos from '../hooks/useFetchPhotos'
import useFavourites from '../hooks/useFavourites'

export default function Gallery() {
  const { photos, error } = useFetchPhotos()
  const { favourites, toggleFavourite } = useFavourites()
  const [query, setQuery] = useState('')

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    const search = query.trim().toLowerCase()
    return photos.filter((photo) => photo.author.toLowerCase().includes(search))
  }, [photos, query])

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-600">Failed to load photos: {error}</p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder="Search by author"
        className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-800 focus:outline-none"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <Card
            key={photo.id}
            url={`https://picsum.photos/id/${photo.id}/600/400`}
            author={photo.author}
            isFavourite={favourites.includes(photo.id)}
            onToggleFavourite={() => toggleFavourite(photo.id)}
          />
        ))}
      </div>
    </div>
  )
}
