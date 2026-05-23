import { IAccordionBox } from "@/types/common";
import { Accordion } from "@mantine/core";
import cx from "clsx";

import classes from "./index.module.css";

const AccordionBox = ({ children, dark = false }: IAccordionBox) => {
  return (
    <Accordion
      chevronPosition='right'
      variant='separated'
      classNames={{
        root: classes.root,
        item: cx(classes.item, {
          [classes.dark]: dark,
        }),
        control: classes.control,
        label: classes.label,
        itemTitle: classes.title,
        panel: classes.panel,
        content: classes.content,
      }}
    >
      {children}
    </Accordion>
  );
};

export default AccordionBox;
