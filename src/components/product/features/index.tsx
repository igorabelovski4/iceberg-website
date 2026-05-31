import { Box, Stack, Tabs } from "@mantine/core";
import Title from "@/components/title";

import { AppConstants } from "@/constants";
import { useTranslation } from "react-i18next";
import Description from "@/components/description";

const { FEATURES_ICON_MAP } = AppConstants;

import classes from "./index.module.css";
import { IFeatureItem } from "@/types/common";

const Features = () => {
  const { t } = useTranslation();

  const items = t("product.features.items", {
    returnObjects: true,
  }) as IFeatureItem[];

  return (
    <Tabs
      variant='pills'
      radius='md'
      defaultValue={t("product.features.items.0.icon")}
      >
      <Tabs.List grow className={classes.tabs}>
        {items.map((item, index) => {
          const iconKey = item.icon as keyof typeof FEATURES_ICON_MAP;
          const Icon = FEATURES_ICON_MAP[iconKey];
          const color = item.color;

          return (
            <Tabs.Tab
              key={index}
              value={iconKey}
              color={color}
              className={classes.tab}
            >
              {Icon && <Icon size={40} stroke={1.5} />}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
      {items.map((item, index) => {
        const color = item.color;

        return (
          <Tabs.Panel key={index} value={item.icon}>
            <Stack className={classes.content} align='flex-start'>
              <Title margin={false} color={color}>
                {item.title}
              </Title>
              <Box p='md' bd={`2px solid ${color}`} bdrs='md'>
                <Description align='left'>{item.description}</Description>
              </Box>
            </Stack>
          </Tabs.Panel>
        );
      })}
    </Tabs>
  );
};

export default Features;
