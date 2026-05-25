import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";
import { theme } from "./theme";

import i18n from "../src/config/localization";
import { I18nextProvider } from "react-i18next";

import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Router />
        <SpeedInsights />
      </I18nextProvider>
    </MantineProvider>
  );
}
