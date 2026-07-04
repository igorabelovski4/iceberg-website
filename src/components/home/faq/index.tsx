import AccordionBox from "@/components/accordion";
import AccordionItem from "@/components/accordion-item";
import { IFaqQuestionItem } from "@/types/common";
import { useTranslation } from "react-i18next";

const HomeFaq = () => {
  const { t } = useTranslation();

  const questions = t("home.faq.questions", {
    returnObjects: true,
  }) as IFaqQuestionItem[];

  return (
    <AccordionBox dark>
      {questions.map((question) => (
        <AccordionItem
          key={question.id}
          title={question.id}
          question={question.question}
          answer={question.answer}
          dark
        />
      ))}
    </AccordionBox>
  );
};

export default HomeFaq;
