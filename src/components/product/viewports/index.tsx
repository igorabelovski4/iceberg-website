import { Center, Image } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { AppConstants } from "@/constants";

import classes from "./index.module.css";

type Language = "de" | "ch" | "en" | "us";

const viewportImages: Record<
  Language,
  {
    laptop: string;
    tablet: string;
    mobile: string;
  }
> = {
  de: {
    laptop: AppConstants.LAPTOP_VIEWPORT_IMAGE_DE,
    tablet: AppConstants.TABLET_VIEWPORT_IMAGE_DE,
    mobile: AppConstants.MOBILE_VIEWPORT_IMAGE_DE,
  },
  ch: {
    laptop: AppConstants.LAPTOP_VIEWPORT_IMAGE_CH,
    tablet: AppConstants.TABLET_VIEWPORT_IMAGE_CH,
    mobile: AppConstants.MOBILE_VIEWPORT_IMAGE_CH,
  },
  en: {
    laptop: AppConstants.LAPTOP_VIEWPORT_IMAGE_EN,
    tablet: AppConstants.TABLET_VIEWPORT_IMAGE_EN,
    mobile: AppConstants.MOBILE_VIEWPORT_IMAGE_EN,
  },
  us: {
    laptop: AppConstants.LAPTOP_VIEWPORT_IMAGE_US,
    tablet: AppConstants.TABLET_VIEWPORT_IMAGE_US,
    mobile: AppConstants.MOBILE_VIEWPORT_IMAGE_US,
  },
};

const isLanguage = (language: string): language is Language =>
  ["de", "ch", "en", "us"].includes(language);

const Viewports = () => {
  const { i18n } = useTranslation();

  const language = i18n.language?.split("-")[0] || "de";

  const selectedLanguage = isLanguage(language) ? language : "de";

  const images = viewportImages[selectedLanguage];

  return (
    <Center className={classes.wrapper}>
      <Image src={images.laptop} className={classes.laptop} />
      <Image src={images.tablet} className={classes.tablet} />
      <Image src={images.mobile} className={classes.mobile} />
    </Center>
  );
};

export default Viewports;