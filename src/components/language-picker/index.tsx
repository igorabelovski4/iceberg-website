import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Group, Image, Menu, UnstyledButton } from "@mantine/core";
import classes from "./index.module.css";
import { useTranslation } from "react-i18next";

import { GB_FLAG, DE_FLAG } from "@/constants/app";

const data = [
  { label: "languages.en", image: GB_FLAG },
  { label: "languages.de", image: DE_FLAG },
];

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={18} height={18} alt='' />}
      onClick={() => {
        setSelected(item);

        const lang = item.label.split(".")[1];
        i18n.changeLanguage(lang);
      }}
      key={item.label}
    >
      {t(item.label)}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius='md'
      width='target'
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap='xs'>
            <Image src={selected.image} w={22} h={22} alt='' />
            <span className={classes.label}>{t(selected.label)}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default LanguagePicker;
