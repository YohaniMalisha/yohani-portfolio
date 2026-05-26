import React from "react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  initials?: string;
  className?: string;
}

export function ProfileImage({
  src,
  alt = "Profile",
  initials = "YW",
  className = "",
}: ProfileImageProps) {
  const [imageError, setImageError] = React.useState(!src);

  return (
    <div
      className={`relative w-full h-full rounded-full overflow-hidden ${className}`}
    >
      {!imageError && src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-white font-bold text-2xl">{initials}</div>
        </div>
      )}
    </div>
  );
}
