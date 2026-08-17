import Image from "next/image";

type TapedPhotoProps = {
  src: string;
  alt: string;
  rotate?: number;
  withTape?: boolean;
  className?: string;
  aspect?: string;
  sizes?: string;
  /** "cover" fills the frame and crops the overflow — right for photos,
   *  wrong for artwork whose edges carry meaning (the founders' newspaper
   *  clippings have their names set across the full width, so cropping
   *  the sides truncated them). "contain" mats the whole image inside the
   *  frame instead, which the cream border already reads as. */
  fit?: "cover" | "contain";
};

export default function TapedPhoto({
  src,
  alt,
  rotate = -2,
  withTape = true,
  className = "",
  aspect = "aspect-[4/5]",
  sizes,
  fit = "cover",
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
            className={fit === "contain" ? "object-contain" : "object-cover"}
          />
        </div>
      </div>
    </div>
  );
}
