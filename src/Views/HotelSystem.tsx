import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const images = [
  "/hotelhome.png",
  "/new.png",
  "/reservas.png",
  "/reservas2.png",
  "/calendar.png",
  "/bar.png",
  "/mucamas.png",
  "/rooms.png",
  "/guest.png",
  "/financial.png",
  "/backup.png",
];

export default function HotelSystem() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para cambiar la imagen al siguiente
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para cambiar la imagen al anterior
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`Carousel Image ${currentImageIndex + 1}`}
        className="object-contain w-full h-full"
      />

      {/* Botón para ir a la imagen anterior */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2"
      >
        <ArrowLeft></ArrowLeft>
      </button>
      {/* Botón para ir a la imagen siguiente */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2"
      >
        <ArrowRight></ArrowRight>
      </button>
    </div>
  );
}
