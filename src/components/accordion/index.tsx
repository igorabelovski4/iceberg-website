import { IAccordionBox } from "@/types/common";
import { Accordion } from "@mantine/core";

import classes from "./index.module.css";

const AccordionBox = ({ children }: IAccordionBox) => {
  return (
    <Accordion
      chevronPosition='right'
      variant='separated'
      classNames={{
        root: classes.root,
        item: classes.item,
        control: classes.control,
        label: classes.label,
        panel: classes.panel,
        content: classes.content,
      }}
    >
      {children}
    </Accordion>
  );
};

export default AccordionBox;
