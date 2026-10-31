import { useState } from 'react'
import { Heart } from './Heart'
import { Spinner } from './Spinner'

interface CardProps {
  url: string
  author: string
  isFavourite: boolean
  onToggleFavourite: () => void
}

export default function Card({ url, author, isFavourite, onToggleFavourite }: CardProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      
      <div className="relative aspect-3/2 w-full bg-gray-200">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </div>
        )}

        <img
          src={url}
          alt={`Photo by ${author}`}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      <div className="flex items-center justify-between p-3">
        <p className="truncate text-sm font-medium text-gray-800">{author}</p>
        <button
          type="button"
          onClick={onToggleFavourite}
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          aria-pressed={isFavourite}
          className={`rounded-full p-1 hover:text-red-500 ${isFavourite ? 'text-red-500' : 'text-gray-400'}`}
        >
          <Heart filled={isFavourite} />
        </button>
      </div>

    </div>
  )
}
