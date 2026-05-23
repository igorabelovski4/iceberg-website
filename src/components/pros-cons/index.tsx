import { useTranslation } from "react-i18next";
import { Flex, Group, Stack } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { IProsConsSetion, IProsConstItem } from "@/types/common";
import Description from "../description";
import Title from "../title";

import classes from "./index.module.css";

const ProsConsItem = ({ value, index, cons = false }: IProsConstItem) => {
  const { t } = useTranslation();

  return (
    <Group className={classes.itemWrapper}>
      {cons ? (
        <IconX size={20} className={`${classes.cons}`} />
      ) : (
        <IconCheck size={20} className={`${classes.pros}`} />
      )}
      <Description>{t(`${value}.${index}.text`)}</Description>
    </Group>
  );
};

const ProsConsSection = ({
  header = true,
  title,
  itemsNum,
  itemsTitle,
  cons = false,
}: IProsConsSetion) => {
  const { t } = useTranslation();

  return (
    <Stack className={classes.wrapper}>
      {header && (
        <Group className={`${classes.titleBox} ${cons ? classes.cons : ""}`}>
          {cons ? (
            <IconX
              size={24}
              stroke={2.5}
              className={`${classes.titleIcon} ${classes.cons}`}
            />
          ) : (
            <IconCheck
              size={24}
              stroke={2.5}
              className={`${classes.titleIcon} ${classes.pros}`}
            />
          )}
          <Title variant={cons ? "dark" : "primary"} margin={false} thin>
            {t(`${title}`)}
          </Title>
        </Group>
      )}
      <Stack className={classes.items}>
        {Array.from({ length: itemsNum }).map((_, index) => (
          <ProsConsItem
            cons={cons}
            value={itemsTitle}
            index={index}
            key={index}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProsConsSection;
