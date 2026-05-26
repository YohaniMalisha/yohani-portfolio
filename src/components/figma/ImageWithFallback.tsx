import React from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallback?: string
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallback = "📷",
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = React.useState(false)

  if (imageError) {
    return (
      <div className={`flex items-center justify-center bg-gray-700 ${className}`}>
        <span className="text-4xl">{fallback}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  )
}
