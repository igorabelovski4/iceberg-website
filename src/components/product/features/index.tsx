import { Box, Stack, Tabs } from "@mantine/core";
import { useState } from "react";
import Title from "@/components/title";

import { AppConstants } from "@/constants";
import { useTranslation } from "react-i18next";
import Description from "@/components/description";

import classes from "./index.module.css";
import { IFeatureItem } from "@/types/common";

const { FEATURES_ICON_MAP } = AppConstants;

type FeatureIcon = keyof typeof FEATURES_ICON_MAP;

const Features = () => {
  const { t } = useTranslation();

  const items = t("product.features.items", {
    returnObjects: true,
  }) as IFeatureItem[];

  const [activeTab, setActiveTab] = useState<FeatureIcon>(
    items[0]?.icon as FeatureIcon
  );

  const activeItem =
    items.find((item) => item.icon === activeTab) ?? items[0];

  const activeColor = activeItem?.color;

  return (
    <Tabs
      variant="pills"
      radius="md"
      value={activeTab}
      onChange={(value) => {
        if (value && value in FEATURES_ICON_MAP) {
          setActiveTab(value as FeatureIcon);
        }
      }}
    >
      <Box
        className={classes.wrapper}
        style={{
          borderColor: activeColor,
          boxShadow: activeColor
            ? `0 8px 30px ${activeColor}18`
            : undefined,
        }}
      >
        <Tabs.List grow className={classes.tabs}>
          {items.map((item, index) => {
            const iconKey = item.icon as FeatureIcon;
            const Icon = FEATURES_ICON_MAP[iconKey];

            return (
              <Tabs.Tab
                key={index}
                value={iconKey}
                color={item.color}
                className={classes.tab}
                onMouseEnter={() => setActiveTab(iconKey)}
              >
                {Icon && <Icon size={40} stroke={1.5} />}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>

        {items.map((item, index) => (
          <Tabs.Panel key={index} value={item.icon}>
            <Stack className={classes.content} align="flex-start">
              <Title margin={false} color={item.color}>
                {item.title}
              </Title>

              <Description align="left" >
                {item.description}
              </Description>
            </Stack>
          </Tabs.Panel>
        ))}
      </Box>
    </Tabs>
  );
};

export default Features;