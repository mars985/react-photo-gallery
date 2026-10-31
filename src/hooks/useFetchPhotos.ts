import { useEffect, useState } from 'react'

export interface Photo {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

const API_URL = 'https://picsum.photos/v2/list?limit=30'

function useFetchPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
        return res.json() as Promise<Photo[]>
      })
      .then((data) => {
        setPhotos(data)
        setLoading(false)
      })
      .catch((err: Error) => {
        if (err.name === 'AbortError') return
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { photos, loading, error }
}

export default useFetchPhotos
