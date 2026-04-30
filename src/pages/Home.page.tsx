import { useTranslation } from "react-i18next";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("navigation.home")}</h1>
    </>
  );
}
