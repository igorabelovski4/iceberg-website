import { useTranslation } from "react-i18next";
import AccordionBox from "@/components/accordion";
import AccordionItem from "@/components/accordion-item";
import { ISchoolFaqItem } from "@/types/common";

const SchoolFaq = () => {
  const { t } = useTranslation();

  const questions = t("schools.faq.items", {
    returnObjects: true,
  }) as ISchoolFaqItem[];

  return (
    <AccordionBox>
      {questions.map((question, index) => (
        <AccordionItem
          key={question.title}
          title={question.title}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </AccordionBox>
  );
};

export default SchoolFaq;
