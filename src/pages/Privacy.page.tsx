import { useTranslation } from "react-i18next";
import { Description, Section, SectionTitle } from "@/components";

function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <Section>
      <SectionTitle margin>{t("privacy.title")}</SectionTitle>
      <Description format align='left'>
        {t("privacy.content")}
      </Description>
    </Section>
  );
}

export default PrivacyPage;
