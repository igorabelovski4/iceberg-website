import { useTranslation } from "react-i18next";

export function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("navigation.aboutUs")}</h1>
    </>
  );
}
