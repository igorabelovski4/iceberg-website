import { Card, Group, Stack, Text } from "@mantine/core";

import { IHeroCard } from "@/types/common";

import { AppConstants } from "@/constants";

const { PAGE_HERO_BADGES_ICON_MAP } = AppConstants;

import classes from "./index.module.css";

const HeroCard = ({ icon, title, items }: IHeroCard) => {
  const Icon = PAGE_HERO_BADGES_ICON_MAP[icon];

  return (
    <>
      <Stack className={classes.card} align='center'>
        <Icon size={28} className={classes.icon} />
        <Stack gap={4} align='center'>
          <Text className={classes.title}>{title}</Text>
          <Group>
            {items?.map((item, index) => (
              <Text key={index} className={classes.additional}>
                {item}
              </Text>
            ))}
          </Group>
        </Stack>
      </Stack>
    </>
  );
};

export default HeroCard;
