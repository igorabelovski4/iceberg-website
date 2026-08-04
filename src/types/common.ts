import {
  MEMBERSHIP_CARDS_ICON_MAP,
  PAGE_HERO_BADGES_ICON_MAP,
  FEATURES_ICON_MAP,
} from "@/constants/app";

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
  device?: boolean;
  onClick?: () => void;
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
  dark?: boolean;
}

export interface IAccordionItem {
  title: string;
  question: string;
  answer: string;
  dark?: boolean;
}

export interface IHeroImage {
  src: string;
  alt: string;
}

export type ITitleVariant = "dark" | "light" | "primary";

export interface ITitle {
  children: string;
  variant?: ITitleVariant;
  margin?: boolean;
  big?: boolean;
  alignLeft?: boolean;
  thin?: boolean;
  color?: string;
}

export interface IDescription {
  children: string;
  variant?: "dark" | "light";
  align?: "left" | "center";
  margin?: boolean;
  strong?: boolean;
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
  active?: boolean;
}

export interface IProsConstItem {
  cons?: boolean;
  value: string;
  index: number;
  active?: boolean;
}

export interface IFeatureItem {
  title: string;
  description: string;
  icon: keyof typeof FEATURES_ICON_MAP;
  color: string;
}

export interface IBadgeItem {
  title: string;
  icon: keyof typeof PAGE_HERO_BADGES_ICON_MAP;
  items: string[];
}


export interface IMethodologyDescription {
  text: string;
}

export interface IBenefitItem {
  title: string;
  description: string;
  illustration: string;
}

export interface IOutcomeSlide {
  benefit: IBenefitItem;
  index: number;
}


export interface IMembershipBenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface IMembershipPlanBenefitItem {
  text: string;
}

export interface IMembershipGroupBenefitItem {
  text: string;
}

export interface IFaqQuestionItem {
  id: string;
  question: string;
  answer: string;
}

export interface ISchoolFaqItem {
  title: string;
  question: string;
  answer: string;
}

export interface IVideo {
  srcMp4: string;
  srcWebm: string;
  srcPoster: string;
  autoPlay?: boolean;
}

export interface IHeader {
  opened: boolean;
  onClick: () => void;
}

export interface INavigation {
  visibleFrom?: string;
  device?: boolean;
  onClick?: () => void;
}

export interface IRoutineItem {
  title: string;
  text: string;
}
