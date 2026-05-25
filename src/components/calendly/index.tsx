import { Box } from "@mantine/core";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <Box style={{ height: "700px" }}>
      <InlineWidget
        url='https://calendly.com/igorabelovski4/test-event?hide_gdpr_banner=1&text_color=333333&primary_color=03989e'
        styles={{
          height: "100%",
        }}
      />
    </Box>
  );
};

export default Calendly;
