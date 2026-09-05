import { AppConstants } from "@/constants";
import { Image, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./index.module.css";

const {
  TABLET_VIEWPORT_1_IMAGE_DE,
  TABLET_VIEWPORT_1_IMAGE_EN,
  TABLET_VIEWPORT_1_IMAGE_US,
  TABLET_VIEWPORT_1_IMAGE_CH,

  TABLET_VIEWPORT_2_IMAGE_DE,
  TABLET_VIEWPORT_2_IMAGE_EN,
  TABLET_VIEWPORT_2_IMAGE_US,
  TABLET_VIEWPORT_2_IMAGE_CH,

  TABLET_VIEWPORT_3_IMAGE_DE,
  TABLET_VIEWPORT_3_IMAGE_EN,
  TABLET_VIEWPORT_3_IMAGE_US,
  TABLET_VIEWPORT_3_IMAGE_CH,
} = AppConstants;

const UserInterface = () => {
  const { i18n } = useTranslation();

  const language = i18n.language;

  const image1Map = {
    de: TABLET_VIEWPORT_1_IMAGE_DE,
    en: TABLET_VIEWPORT_1_IMAGE_EN,
    us: TABLET_VIEWPORT_1_IMAGE_US,
    ch: TABLET_VIEWPORT_1_IMAGE_CH,
  };

  const image2Map = {
    de: TABLET_VIEWPORT_2_IMAGE_DE,
    en: TABLET_VIEWPORT_2_IMAGE_EN,
    us: TABLET_VIEWPORT_2_IMAGE_US,
    ch: TABLET_VIEWPORT_2_IMAGE_CH,
  };

  const image3Map = {
    de: TABLET_VIEWPORT_3_IMAGE_DE,
    en: TABLET_VIEWPORT_3_IMAGE_EN,
    us: TABLET_VIEWPORT_3_IMAGE_US,
    ch: TABLET_VIEWPORT_3_IMAGE_CH,
  };

  const getLanguage = <T,>(map: Record<string, T>) => {
    const shortLanguage = language.split("-")[0];

    return map[shortLanguage] ?? map.en;
  };

  const image1 = getLanguage(image1Map);
  const image2 = getLanguage(image2Map);
  const image3 = getLanguage(image3Map);

  return (
    <Stack>
      <Image src={image1} className={classes.image} />

      <Image
        src={image2}
        className={`${classes.image} ${classes.image2}`}
      />

      <Image
        src={image3}
        className={`${classes.image} ${classes.image3}`}
      />
    </Stack>
  );
};

export default UserInterface;