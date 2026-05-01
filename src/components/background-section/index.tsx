import { IBackgroundSection } from "@/types/common";
import { Box, Container } from "@mantine/core";

import classes from "./index.module.css";

const BackgroundSection = ({ imageSrc, children }: IBackgroundSection) => {
  return (
    <Container
      fluid
      style={{ backgroundImage: `url(${imageSrc})` }}
      className={classes.container}
    >
      <Box className={classes.inner}>{children}</Box>
    </Container>
  );
};

export default BackgroundSection;
