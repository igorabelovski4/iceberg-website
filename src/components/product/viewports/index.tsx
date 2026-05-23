import { Box, Center, Flex, Image } from "@mantine/core";
import { AppConstants } from "@/constants";

import classes from "./index.module.css";

const { LAPTOP_VIEWPORT_IMAGE, TABLET_VIEWPORT_IMAGE, MOBILE_VIEWPORT_IMAGE } =
  AppConstants;

const Viewports = () => {
  return (
    <Center className={classes.wrapper}>
      <Image src={LAPTOP_VIEWPORT_IMAGE} className={classes.laptop} />
      <Image src={TABLET_VIEWPORT_IMAGE} className={classes.tablet} />
      <Image src={MOBILE_VIEWPORT_IMAGE} className={classes.mobile} />
    </Center>
  );
};

export default Viewports;
