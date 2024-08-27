export function Card({ children, className = "", onClick, ...props }: any) {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border text-card-foreground shadow-sm bg-gray-800 border-gray-700 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
