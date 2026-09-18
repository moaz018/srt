interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = false, light = false }: Props) {
  return (
    <div className={center ? 'text-center' : ''}>
      {label && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 ${light ? 'text-primary' : 'text-primary'}`}>
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-foreground'}`}
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
