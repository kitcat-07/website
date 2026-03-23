import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) {
  const resolveSrc = (path) => {
    if (!path) return path;
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
    
    // Remove leading /public/ if present
    let cleanPath = path.replace(/^\/public\//, '/');
    
    // Add BASE_URL if it's an absolute path
    if (cleanPath.startsWith('/')) {
      const baseUrl = import.meta.env.BASE_URL;
      return `${baseUrl}${cleanPath.substring(1)}`;
    }
    return cleanPath;
  };

  return (
    <img
      src={resolveSrc(src)}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = resolveSrc("/assets/images/no_image.png");
      }}
      {...props}
    />
  );
}

export default Image;
