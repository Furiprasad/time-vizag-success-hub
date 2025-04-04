
import React from "react";

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  backgroundImage,
  subtitle 
}) => {
  return (
    <div 
      className="relative py-20 bg-time-blue"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(55, 74, 177, 0.85), rgba(55, 74, 177, 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
