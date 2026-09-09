import { Box } from "@mantine/core";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <Box mt={{ base: 36, lg: 0 }} h={700} w={"100%"}>
      <InlineWidget
        url='https://calendly.com/branka-rezan-paedagogik-plus/30min?hide_gdpr_banner=1&text_color=333333&primary_color=03989e'
        styles={{
          height: "100%",
        }}
      />
    </Box>
  );
};

export default Calendly;
