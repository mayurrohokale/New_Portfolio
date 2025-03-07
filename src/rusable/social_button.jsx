export default function SocialButton({ logo, src, text }) {
  return (
    <button className="font-poppins  p-2 bg-gray-700 text-white rounded-lg cursor-pointer">
      <a href={src} className="flex gap-1 items-center">
      {logo}
      {text}
      </a>
    </button>
  );
}
