import { Box, SimpleGrid } from "@mantine/core";
import ProsConsSection from "@/components/pros-cons";
import { useTranslation } from "react-i18next";
import { IDifferenceItem } from "@/types/common";

import classes from "./index.module.css";

const Difference = () => {
  const { t } = useTranslation();

  const differencesAgainst = t("home.difference.against.items", {
    returnObjects: true,
  }) as IDifferenceItem[];

  const differencesFor = t("home.difference.for.items", {
    returnObjects: true,
  }) as IDifferenceItem[];

  return (
    <SimpleGrid cols={2} spacing='xl'>
      <Box className={classes.box}>
        <ProsConsSection
          cons
          title='home.difference.against.title'
          itemsNum={differencesAgainst.length}
          itemsTitle='home.difference.for.items'
        />
      </Box>
      <Box className={`${classes.box} ${classes.active}`}>
        <ProsConsSection
          title='home.difference.for.title'
          itemsNum={differencesFor.length}
          itemsTitle='home.difference.against.items'
          active
        />
      </Box>
    </SimpleGrid>
  );
};

export default Difference;
