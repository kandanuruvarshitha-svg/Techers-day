import React, { useState } from 'react';
import { Heart, User, Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  aspectRatio?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackText = "Daddy & Me",
  className = "",
  aspectRatio = "aspect-4/3",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div 
        className={`w-full ${aspectRatio} bg-gradient-to-br from-cream-200 via-cream-100 to-cream-300 border border-gold-500/30 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden group ${className}`}
      >
        <div className="absolute inset-0 bg-gold-500/5 opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/40 flex items-center justify-center mb-3 shadow-sm transform group-hover:scale-105 transition-transform">
          <Heart className="w-8 h-8 text-gold-600 fill-gold-500/20" />
        </div>
        <p className="font-serif font-semibold text-navy-900 text-lg mb-1">{fallbackText}</p>
        <p className="text-xs text-navy-900/60 max-w-xs italic">
          Place custom image in <code className="bg-cream-300/60 px-1 py-0.5 rounded text-navy-900 font-mono text-[10px]">{src}</code>
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className={`absolute inset-0 bg-cream-200 animate-pulse flex items-center justify-center rounded-2xl`}>
          <ImageIcon className="w-8 h-8 text-gold-500/40 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...props}
      />
    </div>
  );
};
