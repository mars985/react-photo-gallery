import Card from './Card'
import useFetchPhotos from '../hooks/useFetchPhotos'

export default function Gallery() {
  const { photos, error } = useFetchPhotos()

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-600">Failed to load photos: {error}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <Card key={photo.id} url={`https://picsum.photos/id/${photo.id}/600/400`} author={photo.author} />
      ))}
    </div>
  )
}
