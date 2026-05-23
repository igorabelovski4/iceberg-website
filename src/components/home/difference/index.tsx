import { SimpleGrid } from "@mantine/core";
import { AppConstants } from "@/constants";
import ProsConsSection from "@/components/pros-cons";

const { NUMBER_OF_DIFFERENCES } = AppConstants;

const Difference = () => {
  return (
    <SimpleGrid cols={2} spacing='xl'>
      <ProsConsSection
        cons
        title='home.difference.against.title'
        itemsNum={NUMBER_OF_DIFFERENCES}
        itemsTitle='home.difference.for.items'
      />
      <ProsConsSection
        title='home.difference.for.title'
        itemsNum={NUMBER_OF_DIFFERENCES}
        itemsTitle='home.difference.against.items'
      />
    </SimpleGrid>
  );
};

export default Difference;
