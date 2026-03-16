export default function Logo({
  className,
  isScrolled,
}: {
  className?: string;
  isScrolled?: boolean;
}) {
  return (
    <h1
      className={`uppercase font-en flex flex-col gap-0 tracking-tighter ${className || ''}`}
    >
      <span className="text-base leading-none font-black text-brand-blue">
        IM
      </span>
      <span
        className={`text-xl font-black leading-none text-brand-blue-dark ${isScrolled ? 'text-white/70' : ''}`}
      >
        HYUNWOOK
      </span>
    </h1>
  );
}
