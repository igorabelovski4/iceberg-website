import { IBackgroundSection } from "@/types/common";
import { Container } from "@mantine/core";

import classes from "./index.module.css";

const BackgroundSection = ({ imageSrc, children }: IBackgroundSection) => {
  return (
    <Container
      fluid
      style={{ backgroundImage: `url(${imageSrc})` }}
      className={classes.container}
    >
      {children}
    </Container>
  );
};

export default BackgroundSection;
