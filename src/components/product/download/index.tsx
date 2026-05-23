import { Center, Flex, Group, Image } from "@mantine/core";
import { AppConstants } from "@/constants";

const { GOOGLE_PLAY_IMAGE, APP_STORE_IMAGE } = AppConstants;

import classes from "./index.module.css";

const Download = () => {
  return (
    <Flex gap='lg' justify='center'>
      <Image src={APP_STORE_IMAGE} className={classes.button} />
      <Image src={GOOGLE_PLAY_IMAGE} className={classes.button} />
    </Flex>
  );
};

export default Download;
