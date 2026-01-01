interface ProfileCardProps {
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
}

export function ProfileCard({ name, title, quote, imageUrl }: ProfileCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h4 className="text-[#01253A] mb-1">{name}</h4>
        <p className="text-sm text-[#00D1C2] font-condensed mb-4">{title}</p>
        <blockquote className="text-gray-700 italic leading-relaxed">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
}
