import { IAccordionItem } from "@/types/common";
import { Accordion } from "@mantine/core";

const AccordionItem = ({ title, question, answer }: IAccordionItem) => {
  return (
    <Accordion.Item value={title}>
      <Accordion.Control>{question}</Accordion.Control>
      <Accordion.Panel>{answer}</Accordion.Panel>
    </Accordion.Item>
  );
};

export default AccordionItem;
