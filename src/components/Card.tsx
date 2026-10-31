interface CardProps {
  url: string
  author: string
}

function Card({ url, author }: CardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <img src={url} alt={`Photo by ${author}`} className="aspect-[3/2] w-full object-cover" />
      <div className="flex items-center justify-between p-3">
        <p className="truncate text-sm font-medium text-gray-800">{author}</p>
        {/* TODO: toggle favourite */}
        <button
          type="button"
          aria-label="Add to favourites"
          className="rounded-full p-1 text-gray-400 hover:text-red-500"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}



export default Card
