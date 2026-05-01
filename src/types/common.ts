import { ReactNode } from "react";

export interface IBackgroundSection {
  imageSrc: string;
  children: React.ReactNode;
}

export interface IEyebrow {
  children: string;
  variant?: IEyebrowVariant;
}

export type IEyebrowVariant = "default" | "light" | "primary";

export interface IHeroDescription {
  children: string;
  variant?: IHeroDescriptionVariant;
  margin?: boolean;
}

export type IHeroDescriptionVariant = "dark" | "light";

export interface IHeroTitle {
  children: string;
  subtitle?: string;
  variant?: IHeroTitleVariant;
}

export type IHeroTitleVariant = "dark" | "light" | "primary";

export interface INavigationLink {
  path: string;
  label: string;
  highlight?: boolean;
}

export interface IButton {
  children: string;
  variant?: IButtonVariant;
  icon?: boolean;
}

export type IButtonVariant =
  | "primary"
  | "secondary"
  | "white-primary"
  | "white-secondary"
  | "white-dark";

export interface ISection {
  eyebrow?: string;
  eyebrowVariant?: IEyebrowVariant;
  sectionTitle?: string;
  sectionTitleVariant?: ISectionTitleVariant;
  children?: React.ReactNode;
  variant?: ISectionVariant;
}

export type ISectionVariant = "blank" | "primary" | "secondary" | "dark";

export interface ISectionTitle {
  children: string;
  variant?: ISectionTitleVariant;
  margin?: boolean;
}

export type ISectionTitleVariant = "dark" | "light";
