"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export function ImageGrid() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8080/photos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch photos")
        return res.json()
      })
      .then((data) => {
        setPhotos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center mt-10">Loading photos...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Photos from Backend
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card
            key={photo.id}
            className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border"
          >
            <div className="aspect-video bg-secondary/50 flex items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={photo.url || "/placeholder.svg"}
                alt={`Photo ${photo.id}`}
                className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{`Photo ${photo.id}`}</h3>
              <p className="text-muted-foreground text-sm">{photo.url}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
