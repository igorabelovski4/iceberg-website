import { Box, Card, Group, SimpleGrid, Stack, Tabs, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { AppConstants } from "@/constants";

const { PERSPECTIVE_ICON_MAP } = AppConstants;

import classes from "./index.module.css";
import Description from "@/components/description";
import Title from "@/components/title";
import { IPerspectiveDetailsItem, IPerspectiveItem } from "@/types/common";

const PerspectiveSwitch = () => {
  const { t } = useTranslation();

  const perspectives = t("home.audience.options", {
    returnObjects: true,
  }) as IPerspectiveItem[];

  return (
    <Tabs
      variant='pills'
      radius='lg'
      defaultValue={t("home.audience.options.0.value")}
      classNames={{ tab: classes.tab }}
    >
      <Tabs.List className={classes.tabs}>
        {perspectives.map((perspective, index) => {
          const iconKey = perspective.icon as keyof typeof PERSPECTIVE_ICON_MAP;
          const Icon = PERSPECTIVE_ICON_MAP[iconKey];
          const color = perspective.color;

          return (
            <Tabs.Tab key={index} value={perspective.value} color={color}>
              <Group>
                {Icon && <Icon />}
                <Text className={classes.title}>{perspective.title}</Text>
              </Group>
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
      {perspectives.map((perspective, index) => {
        const color = perspective.color;
        const iconKey = perspective.icon as keyof typeof PERSPECTIVE_ICON_MAP;
        const Icon = PERSPECTIVE_ICON_MAP[iconKey];

        const details = t(`home.audience.options.${index}.details`, {
          returnObjects: true,
        }) as IPerspectiveDetailsItem[];

        return (
          <Tabs.Panel key={index} value={perspective.value}>
            <Card
              shadow='sm'
              withBorder
              padding={0}
              radius={24}
              mt={{ base: 24, sm: 48 }}
            >
              <Box bg={color} className={classes.header}>
                <Box className={classes.stars}></Box>
                <Box className={classes.stars2}></Box>
                <Box className={classes.stars3}></Box>
                <Group gap={24} wrap='nowrap'>
                  <Box className={classes.iconBox}>{Icon && <Icon />}</Box>
                  <Stack gap={0}>
                    <Title variant='light' margin={false} alignLeft>
                      {perspective.title}
                    </Title>
                    <Description variant='light' align='left'>
                      {perspective.tagline}
                    </Description>
                  </Stack>
                </Group>
              </Box>
              <Stack className={classes.main}>
                <Description align='left'>
                  {perspective.description}
                </Description>
                <SimpleGrid cols={{ base: 1, sm: 3 }}>
                  {details.map((detail, index) => (
                    <Stack className={classes.detailsCard} key={index}>
                      <Text className={classes.value}>{detail.value}</Text>
                      <Text className={classes.label}>{detail.label}</Text>
                    </Stack>
                  ))}
                </SimpleGrid>
              </Stack>
            </Card>
          </Tabs.Panel>
        );
      })}
    </Tabs>
  );
};

export default PerspectiveSwitch;
