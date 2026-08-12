import Image from "next/image";

type TapedPhotoProps = {
  src: string;
  alt: string;
  rotate?: number;
  withTape?: boolean;
  className?: string;
  aspect?: string;
  sizes?: string;
};

export default function TapedPhoto({
  src,
  alt,
  rotate = -2,
  withTape = true,
  className = "",
  aspect = "aspect-[4/5]",
  sizes,
}: TapedPhotoProps) {
  return (
    <div
      className={`relative ${withTape ? "tape" : ""} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className={`torn-edge relative ${aspect} overflow-hidden bg-mp-cream p-2 shadow-[6px_10px_18px_rgba(0,0,0,0.45)]`}
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
