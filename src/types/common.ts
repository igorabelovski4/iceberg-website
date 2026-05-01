import { ReactNode } from "react";

export interface IBackgroundSection {
  imageSrc: string;
  children: React.ReactNode;
}

export interface IEyebrow {
  children: string;
  variant?: EyebrowVariant;
}

export type EyebrowVariant =
  | "default"
  | "dark"
  | "light"
  | "primary"
  | "secondary";

export interface IHeroTitle {
  title: string;
  variant?: HeroTitleVariant;
}

export type HeroTitleVariant = "dark" | "light" | "primary";

export interface INavigationLink {
  path: string;
  label: string;
  highlight?: boolean;
}

export interface IButton {
  children: string;
  icon?: ReactNode;
}

export interface ISection {
  eyebrow?: string;
  eyebrowVariant?: EyebrowVariant;
  sectionTitle?: string;
  sectionTitleVariant?: SectionTitleVariant;
  children?: React.ReactNode;
  variant?: SectionVariant;
}

export type SectionVariant = "blank" | "primary" | "secondary" | "dark";

export interface ISectionTitle {
  children: string;
  variant?: SectionTitleVariant;
}

export type SectionTitleVariant = "dark" | "light";
