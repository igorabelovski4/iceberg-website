import { AppConstants } from "@/constants";
import { Center, Image, Stack } from "@mantine/core";

const {
  TABLET_VIEWPORT_1_IMAGE,
  TABLET_VIEWPORT_2_IMAGE,
  TABLET_VIEWPORT_3_IMAGE,
} = AppConstants;

import classes from "./index.module.css";

const UserInterface = () => {
  return (
    <Stack>
      <Image src={TABLET_VIEWPORT_1_IMAGE} className={classes.image} />
      <Image
        src={TABLET_VIEWPORT_2_IMAGE}
        className={`${classes.image} ${classes.image2}`}
      />
      <Image
        src={TABLET_VIEWPORT_3_IMAGE}
        className={`${classes.image} ${classes.image3}`}
      />
    </Stack>
  );
};

export default UserInterface;
