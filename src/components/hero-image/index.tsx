import { IHeroImage } from "@/types/common";
import { Image } from "@mantine/core";

import classes from "./index.module.css";

const HeroImage = ({
  src,
  alt,
  bigger = false,
  noMargin = false,
}: IHeroImage) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${classes.image} ${bigger ? classes.bigger : ""} ${noMargin ? classes.noMargin : ""}`}
    />
  );
};

export default HeroImage;
