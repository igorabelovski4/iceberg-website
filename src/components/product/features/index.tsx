import { Stack, Tabs } from "@mantine/core";
import Title from "@/components/title";

import { AppConstants } from "@/constants";
import { useTranslation } from "react-i18next";
import Description from "@/components/description";

const { FEATURES_ICON_MAP, NUMBER_OF_FEATURES } = AppConstants;

import classes from "./index.module.css";

const Features = () => {
  const { t } = useTranslation();

  return (
    <Tabs
      variant='pills'
      radius='md'
      defaultValue={t("product.features.items.0.icon")}
    >
      <Tabs.List grow className={classes.tabs}>
        {Array(NUMBER_OF_FEATURES)
          .fill(null)
          .map((_, index) => {
            const iconKey = t(
              `product.features.items.${index}.icon`,
            ) as keyof typeof FEATURES_ICON_MAP;

            const Icon = FEATURES_ICON_MAP[iconKey];
            const color = t(`product.features.items.${index}.color`);

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
      {Array(NUMBER_OF_FEATURES)
        .fill(null)
        .map((_, index) => (
          <Tabs.Panel
            key={index}
            value={t(`product.features.items.${index}.icon`)}
          >
            <Stack className={classes.content} align='flex-start'>
              <Title margin={false}>
                {t(`product.features.items.${index}.title`)}
              </Title>
              <Description align='left'>
                {t(`product.features.items.${index}.description`)}
              </Description>
            </Stack>
          </Tabs.Panel>
        ))}
    </Tabs>
  );
};

export default Features;
