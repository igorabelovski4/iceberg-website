import { IFeatureCard } from "@/types/common";
import { Box, Flex, Stack, Text } from "@mantine/core";

import classes from "./index.module.css";
import Title from "../title";
import Description from "../description";

const FeatureCard = ({
  title,
  description,
  map,
  icon,
  alternative = false,
}: IFeatureCard) => {
  const Icon = map[icon];

  return (
    <Box
      className={`${classes.container} ${alternative ? classes.alternative : ""}`}
    >
      <Box className={classes.stars}></Box>
      <Box className={classes.stars2}></Box>
      <Box className={classes.stars3}></Box>
      <Stack className={classes.inner}>
        <Flex className={classes.iconBox}>
          <Icon />
        </Flex>
        <Stack className={classes.content}>
          <Title variant='light' margin={false}>
            {title}
          </Title>
          <Description variant='light' align='left'>
            {description}
          </Description>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FeatureCard;
