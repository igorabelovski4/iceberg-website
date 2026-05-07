import { IHeroImage } from "@/types/common";
import { Image } from "@mantine/core";

import classes from "./index.module.css";

const HeroImage = ({ src, alt }: IHeroImage) => {
  return <Image src={src} alt={alt} className={classes.image} />;
};

export default HeroImage;
