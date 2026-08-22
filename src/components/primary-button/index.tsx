import clsx from "clsx";
import { IButton } from "@/types/common";
import { Button } from "@mantine/core";
import classes from "./index.module.css";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const PrimaryButton = ({
  children,
  variant = "primary",
  icon,
  block,
  onClick,
  href,
  download = false,
}: IButton) => {
  const isAnchor = !!href;

  return (
    <Button
      variant='filled'
      component={isAnchor ? "a" : "button"}
      href={href}
      download={download}
      target={isAnchor ? "_blank" : undefined}
      rel={isAnchor ? "noopener noreferrer" : undefined}
      className={clsx(classes.button, classes[variant], block && classes.block)}
      {...(icon && {
        rightSection: <IconArrowNarrowRight size={18} />,
      })}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
