import type { SVGProps } from "react";

export const ArrowSvg = ({
  width = 8,
  height = 12,
  color = 'currentColor',
  transform
}: SVGProps<SVGElement>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg" transform={transform}>
      <path d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071" stroke={color} strokeWidth="2"/>
    </svg>
  );
}