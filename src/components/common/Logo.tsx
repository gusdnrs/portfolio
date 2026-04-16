export default function Logo({
  className,
  isScrolled,
  isWhite,
}: {
  className?: string;
  isScrolled?: boolean;
  isWhite?: boolean;
}) {
  return (
    <h1
      className={`uppercase font-en flex flex-col gap-0 tracking-tighter ${className || ''}`}
    >
      <span className="text-base leading-none font-black text-brand-blue">
        IM
      </span>
      <span
        className={`text-xl font-black leading-none ${
          isScrolled ? 'text-gray-950' : 'text-brand-blue-dark'
        }`}
      >
        HYUNWOOK
      </span>
    </h1>
  );
}
