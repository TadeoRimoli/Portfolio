export function Card({ children, className = "", onClick, ...props }: any) {
  return (
    <div
      onClick={onClick}
      className={`relative  rounded-lg border text-card-foreground shadow-sm bg-gray-800 border-gray-700 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
      {...props}
      style={{
        aspectRatio: "1 / 1",
      }}
    >
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {children}
      </div>
    </div>
  );
}
