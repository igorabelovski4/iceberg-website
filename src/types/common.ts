import {
  MEMBERSHIP_CARDS_ICON_MAP,
  PAGE_HERO_BADGES_ICON_MAP,
  GRID_ICON_MAP,
  ILLUSTRATION_IMAGE_MAP,
  STORY_STEPS_IMAGE_MAP,
  FEATURES_ICON_MAP,
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
  color?: string;
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

export interface IStepItem {
  illustration: IStoryCardIllustrationName;
  title: string;
  description: string;
}

export interface IDifferenceItem {
  text: string;
}

export interface IPhaseItem {
  title: string;
  icon: string;
  description: string;
}

export interface IPerspectiveItem {
  value: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  details: IPerspectiveDetailsItem[];
}

export interface IPerspectiveDetailsItem {
  value: string;
  label: string;
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

export interface IPedgagogicDescriptionItem {
  text: string;
}

export interface IPedagogicCardItem {
  title: string;
  description: string;
  illustration: string;
}

export interface IBiographyItem {
  text: string;
}

export interface ITrustItem {
  title: string;
  description: string;
  icon: string;
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

export interface IShiftItem {
  bad: IShiftBadItem;
  good: IShiftGoodItem;
}

export interface IShiftBadItem {
  title: string;
  description: string;
}

export interface IShiftGoodItem {
  title: string;
  description: string;
}

export interface IShiftCarouselSlideItem {
  item: IShiftItem;
}

export interface ISchoolsWorkItem {
  title: string;
  description: string;
  illustration: string;
}

export interface ISchoolStrategyItem {
  title: string;
  description: string;
  icon: string;
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
