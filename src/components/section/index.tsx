import clsx from "clsx";
import { Box, Container } from "@mantine/core";
import { ISection } from "@/types/common";
import SectionTitle from "../section-title";
import Eyebrow from "../eyebrow";

import classes from "./index.module.css";

const Section = ({
  variant = "blank",
  eyebrow,
  eyebrowVariant = "light",
  sectionTitle,
  sectionTitleVariant = "dark",
  children,
}: ISection) => {
  return (
    <Box className={clsx(classes.container, classes[variant])}>
      <Box className={classes.stars}></Box>
      <Box className={classes.stars2}></Box>
      <Box className={classes.stars3}></Box>
      <Container maw={1024} className={classes.inner}>
        {eyebrow && <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>}
        {sectionTitle && (
          <SectionTitle variant={sectionTitleVariant}>
            {sectionTitle}
          </SectionTitle>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section;
