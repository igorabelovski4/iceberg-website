import { Stack, Text } from "@mantine/core";

import { IHeroCard } from "@/types/common";

import { AppConstants } from "@/constants";

const { PAGE_HERO_BADGES_ICON_MAP } = AppConstants;

import classes from "./index.module.css";

const HeroCard = ({ icon, title, items }: IHeroCard) => {
  const Icon = PAGE_HERO_BADGES_ICON_MAP[icon];

  return (
    <>
      <Stack className={classes.card}>
        <Icon size={24} stroke={1.5} />
        <Text>{title}</Text>
        {items?.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Stack>
    </>
  );
};

export default HeroCard;
