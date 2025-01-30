interface IconBrandProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  className?: string;
  key?: string | number;
}

export default function IconBrand({
  width,
  height,
  src,
  alt,
  className,
  key,
}: IconBrandProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      height={height}
      key={key}
      width={width}
    />
  );
}
