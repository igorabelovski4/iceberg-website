import { useTranslation } from "react-i18next";
import { Center, Image, SimpleGrid, Stack } from "@mantine/core";
import { ITeamItem } from "@/types/common";
import Description from "../description";
import Title from "../title";

import { AppConstants } from "@/constants";

import classes from "./index.module.css";

const { TEAM_IMAGES } = AppConstants;

const Team = () => {
  const { t } = useTranslation();

  const team = t("team.items", {
    returnObjects: true,
  }) as ITeamItem[];

  return (
    <SimpleGrid cols={2} spacing={120} verticalSpacing={120}>
      {team.map((teamItem, index) => (
        <Stack key={index} gap='xl' className={classes.box}>
          <Center>
            <Image src={TEAM_IMAGES[index]} mah={360} fit='contain' />
          </Center>
          <Stack gap='sm'>
            <Title margin={false}>{teamItem.name}</Title>
            <Description>{teamItem.role}</Description>
          </Stack>

          <Description>{teamItem.biography}</Description>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default Team;
