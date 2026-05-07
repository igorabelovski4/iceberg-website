import { IAccordionItem } from "@/types/common";
import { Accordion } from "@mantine/core";

import Title from "../title";
import Description from "../description";

const AccordionItem = ({ title, question, answer }: IAccordionItem) => {
  return (
    <Accordion.Item value={title} classNames={{}}>
      <Accordion.Control>
        <Title margin={false}>{question}</Title>
      </Accordion.Control>
      <Accordion.Panel>
        <Description align='left'>{answer}</Description>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default AccordionItem;
