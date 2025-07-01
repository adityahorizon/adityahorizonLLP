import React from "react";

const AutoScrollCarousel = ({ items, reverse }) => {
  const repeatedItems = Array(4).fill(items).flat();

  const animationStyle = {
    animation: reverse 
      ? 'marqueeReverse 30s linear infinite' 
      : 'marquee 30s linear infinite'
  };

  React.useEffect(() => {
    const styleId = 'carousel-animations';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-2 w-max"
        style={animationStyle}
      >
        {repeatedItems.map((item, index) => (
          <img
            key={`${item.id}-${index}`}
            src={item.image}
            alt={`carousel-item-${item.id}`}
            className="h-48 w-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;