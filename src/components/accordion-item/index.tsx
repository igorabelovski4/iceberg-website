import { IAccordionItem } from "@/types/common";
import { Accordion } from "@mantine/core";

import Title from "../title";
import Description from "../description";

const AccordionItem = ({
  title,
  question,
  answer,
  dark = false,
}: IAccordionItem) => {
  return (
    <Accordion.Item
      value={title}
      styles={{
        item: {
          border: "1px solid var(--color-border)",
        },
      }}
    >
      <Accordion.Control>
        <Title variant={dark ? "light" : "dark"} small margin={false}>
          {question}
        </Title>
      </Accordion.Control>
      <Accordion.Panel>
        <Description align='left' variant={dark ? "light" : "dark"}>
          {answer}
        </Description>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default AccordionItem;
