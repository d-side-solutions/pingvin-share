import type { CSSProperties } from "react";

type LogoProps = {
  height?: number;
  width?: number;
};

/**
 * Renders the app logo without distortion.
 * - `height` only: fixed height, width follows aspect ratio (header).
 * - `height` + `width`: max bounding box with object-fit contain (home, admin intro).
 */
const Logo = ({ height, width }: LogoProps) => {
  const style: CSSProperties = {
    objectFit: "contain",
    display: "block",
  };

  if (width != null && height != null) {
    style.maxHeight = height;
    style.maxWidth = width;
    style.height = "auto";
    style.width = "auto";
  } else if (height != null) {
    style.height = height;
    style.width = "auto";
  } else if (width != null) {
    style.width = width;
    style.height = "auto";
  } else {
    style.height = 35;
    style.width = "auto";
  }

  return <img src="/img/logo.png" alt="logo" style={style} />;
};

export default Logo;
