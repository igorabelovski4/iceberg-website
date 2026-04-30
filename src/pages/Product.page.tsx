import { useTranslation } from "react-i18next";

export function ProductPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("navigation.product")}</h1>
    </>
  );
}
