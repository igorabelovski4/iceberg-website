import { Box, Card, Group, SimpleGrid, Stack, Tabs, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { AppConstants } from "@/constants";

const { PERSPECTIVE_ICON_MAP, NUMBER_OF_PERSPECTIVES } = AppConstants;

import classes from "./index.module.css";
import Description from "@/components/description";
import { NUMBER_OF_PERSPECTIVE_DETAILS } from "@/constants/app";
import Title from "@/components/title";

const PerspectiveSwitch = () => {
  const { t } = useTranslation();

  return (
    <Tabs
      variant='pills'
      radius='lg'
      defaultValue={t("home.forWho.options.0.value")}
      classNames={{ tab: classes.tab }}
    >
      <Tabs.List className={classes.tabs}>
        {Array(NUMBER_OF_PERSPECTIVES)
          .fill(null)
          .map((_, index) => {
            const iconKey = t(
              `home.forWho.options.${index}.icon`,
            ) as keyof typeof PERSPECTIVE_ICON_MAP;

            const Icon = PERSPECTIVE_ICON_MAP[iconKey];
            const color = t(`home.forWho.options.${index}.color`);

            return (
              <Tabs.Tab
                key={index}
                value={t(`home.forWho.options.${index}.value`)}
                color={color}
              >
                <Group>
                  {Icon && <Icon size={24} />}
                  <Text className={classes.title}>
                    {t(`home.forWho.options.${index}.title`)}
                  </Text>
                </Group>
              </Tabs.Tab>
            );
          })}
      </Tabs.List>
      {Array(NUMBER_OF_PERSPECTIVES)
        .fill(null)
        .map((_, index) => {
          const color = t(`home.forWho.options.${index}.color`);

          const initialIndex = index;
          const iconKey = t(
            `home.forWho.options.${index}.icon`,
          ) as keyof typeof PERSPECTIVE_ICON_MAP;

          const Icon = PERSPECTIVE_ICON_MAP[iconKey];

          return (
            <Tabs.Panel
              key={index}
              value={t(`home.forWho.options.${index}.value`)}
            >
              <Card shadow='sm' withBorder padding={0} radius={24} mt={48}>
                <Box bg={color} className={classes.header}>
                  <Box className={classes.stars}></Box>
                  <Box className={classes.stars2}></Box>
                  <Box className={classes.stars3}></Box>
                  <Group gap={24}>
                    <Box className={classes.iconBox}>
                      {Icon && <Icon size={36} stroke={2.25} />}
                    </Box>
                    <Stack gap={0}>
                      <Title variant='light' margin={false} alignLeft>
                        {t(`home.forWho.options.${index}.title`)}
                      </Title>
                      <Description variant='light'>
                        {t(`home.forWho.options.${index}.additional`)}
                      </Description>
                    </Stack>
                  </Group>
                </Box>
                <Stack className={classes.main}>
                  <Description align='left'>
                    {t(`home.forWho.options.${index}.description`)}
                  </Description>
                  <SimpleGrid cols={3}>
                    {Array.from({ length: NUMBER_OF_PERSPECTIVE_DETAILS }).map(
                      (_, index) => (
                        <Stack className={classes.detailsCard}>
                          <Text className={classes.value}>
                            {t(
                              `home.forWho.options.${initialIndex}.details.${index}.value`,
                            )}
                          </Text>
                          <Text className={classes.label}>
                            {t(
                              `home.forWho.options.${initialIndex}.details.${index}.label`,
                            )}
                          </Text>
                        </Stack>
                      ),
                    )}
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
