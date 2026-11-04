import Image from "next/image";
export default function CafeImage({
  src,
  alt,
  className = "",
  eager = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`cafe-image ${className}`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`}
        alt={alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
    </div>
  );
}
