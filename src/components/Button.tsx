import React from "react";

type ButtonProps = {
  variant?: "outline" | "solid" | "ghost";
  size?: "icon" | "small" | "large";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  url?: string; // Añadir prop para la URL
  [key: string]: any;
};

export function Button({
  variant = "outline",
  size = "icon",
  className = "",
  children,
  onClick,
  url,
  ...props
}: ButtonProps) {
  // Definir estilos base y variantes
  const baseStyles =
    "flex items-center justify-center p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none";
  const variantStyles = {
    outline:
      "border border-gray-700 bg-transparent text-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-lg",
    solid:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl",
    ghost:
      "text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg",
  };

  // Manejar clic si se proporciona una URL
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
