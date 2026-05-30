import { useState } from "react";
import { Group, Image, Menu, Text, UnstyledButton } from "@mantine/core";
import { useTranslation } from "react-i18next";
import classes from "./index.module.css";

import { GB_FLAG, DE_FLAG } from "@/constants/app";

const data = [
  { label: "languages.de", image: DE_FLAG, code: "DE" },
  { label: "languages.en", image: GB_FLAG, code: "EN" },
];

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const items = data.map((item) => {
    if (selected.code === item.code) return;

    return (
      <Menu.Item
        leftSection={<Image src={item.image} className={classes.flag} />}
        onClick={() => {
          setSelected(item);

          const lang = item.label.split(".")[1];
          i18n.changeLanguage(lang);
        }}
        key={item.label}
      >
        <Text className={classes.menuLabel}>{t(item.label)}</Text>
      </Menu.Item>
    );
  });

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
            <Image src={selected.image} className={classes.flag} />
            <Text className={classes.label}>{t(selected.code)}</Text>
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default LanguagePicker;
