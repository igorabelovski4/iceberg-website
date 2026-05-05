import { IAccordionBox } from "@/types/common";
import { Accordion } from "@mantine/core";

const AccordionBox = ({ children }: IAccordionBox) => {
  return (
    <Accordion chevronPosition='right' variant='separated'>
      {children}
    </Accordion>
  );
};

export default AccordionBox;
