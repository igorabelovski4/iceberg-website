import { useTranslation } from "react-i18next";

export function MembershipPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("navigation.membership")}</h1>
    </>
  );
}
