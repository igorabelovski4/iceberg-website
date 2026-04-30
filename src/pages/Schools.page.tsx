import { useTranslation } from "react-i18next";

export function SchoolsPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("navigation.schools")}</h1>
    </>
  );
}
