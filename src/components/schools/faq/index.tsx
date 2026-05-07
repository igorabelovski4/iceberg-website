import { useTranslation } from "react-i18next";
import AccordionBox from "@/components/accordion";
import AccordionItem from "@/components/accordion-item";
import { NUMBER_OF_SCHOOL_FAQ_ITEMS } from "@/constants/app";

const SchoolFaq = () => {
  const { t } = useTranslation();

  return (
    <AccordionBox>
      {Array(NUMBER_OF_SCHOOL_FAQ_ITEMS)
        .fill(null)
        .map((_, index) => (
          <AccordionItem
            key={t(`schools.faq.items.${index}.title`)}
            title={t(`schools.faq.items.${index}.title`)}
            question={t(`schools.faq.items.${index}.question`)}
            answer={t(`schools.faq.items.${index}.answer`)}
          />
        ))}
    </AccordionBox>
  );
};

export default SchoolFaq;
