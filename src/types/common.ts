import {
  MEMBERSHIP_CARDS_ICON_MAP,
  PAGE_HERO_BADGES_ICON_MAP,
  GRID_ICON_MAP,
  ILLUSTRATION_IMAGE_MAP,
  STORY_STEPS_IMAGE_MAP,
} from "@/constants/app";

export interface IStoryCard {
  num: number;
  illustration: IStoryCardIllustrationName;
  activeStep: number;
  onClick?: (value: number) => void;
}

export type IStoryCardIllustrationName = keyof typeof STORY_STEPS_IMAGE_MAP;

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
  shadow?: boolean;
}

export type IHeroDescriptionVariant = "dark" | "light";

export interface IHeroTitle {
  children: string;
  subtitle?: string;
  variant?: IHeroTitleVariant;
  shadow?: boolean;
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
  block?: boolean;
  onClick?: () => void;
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
  largeBottomPadding?: boolean;
}

export type ISectionVariant = "blank" | "primary" | "secondary" | "dark";

export interface ISectionTitle {
  children: string;
  variant?: ISectionTitleVariant;
  margin?: boolean;
}

export type ISectionTitleVariant = "dark" | "light";

export type IIconName = keyof typeof PAGE_HERO_BADGES_ICON_MAP;

export interface IHeroCard {
  icon: IIconName;
  title: string;
  items?: string[];
}

export interface IAccordionBox {
  children: React.ReactNode;
}

export interface IAccordionItem {
  title: string;
  question: string;
  answer: string;
}

export interface IHeroImage {
  src: string;
  alt: string;
}

export interface IText {
  children: string;
}

export interface IArrayItem {
  index: number;
}

export type ITitleVariant = "dark" | "light" | "primary";

export interface ITitle {
  children: string;
  variant?: ITitleVariant;
  margin?: boolean;
  big?: boolean;
  alignLeft?: boolean;
  thin?: boolean;
}

export interface ICard {
  index: number;
  illustration: ICardIllustrationName;
}

export type ICardIllustrationName = keyof typeof ILLUSTRATION_IMAGE_MAP;

export interface IDescription {
  children: string;
  variant?: "dark" | "light";
  align?: "left" | "center";
  margin?: boolean;
}

export type IGridItemIconName = keyof typeof GRID_ICON_MAP;

export interface IGridItem {
  title: string;
  description: string;
  icon: IGridItemIconName;
}

export interface IFeatureCard {
  title: string;
  description: string;
  map: any;
  icon: IFeatureCardIconName;
  alternative?: boolean;
}

export type IFeatureCardIconName = keyof typeof MEMBERSHIP_CARDS_ICON_MAP;

export interface IProsConsSetion {
  cons?: boolean;
  header?: boolean;
  title?: string;
  itemsNum: number;
  itemsTitle: string;
}

export interface IProsConstItem {
  cons?: boolean;
  value: string;
  index: number;
}
