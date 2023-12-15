// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Case → Images*
 */
export interface CaseDocumentDataImagesItem {
  /**
   * Image field in *Case → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Item in *Case → Tags*
 */
export interface CaseDocumentDataTagsItem {
  /**
   * Tag field in *Case → Tags*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case.tags[].tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;
}

/**
 * Content for Case documents
 */
interface CaseDocumentData {
  /**
   * Title field in *Case*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: case.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Short Description field in *Case*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case.short_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  short_description: prismic.RichTextField;

  /**
   * Main Image field in *Case*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case.main_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Full Description field in *Case*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case.full_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  full_description: prismic.RichTextField;

  /**
   * Images field in *Case*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: case.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<CaseDocumentDataImagesItem>>;

  /**
   * Tags field in *Case*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: case.tags[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tags: prismic.GroupField<Simplify<CaseDocumentDataTagsItem>>;
}

/**
 * Case document from Prismic
 *
 * - **API ID**: `case`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaseDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<CaseDocumentData>, "case", Lang>;

/**
 * Item in *Footer → Socials*
 */
export interface FooterDocumentDataSocialsItem {
  /**
   * Icon field in *Footer → Socials*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"instagram" | "telegram" | "youtube" | "tiktok">;

  /**
   * Link field in *Footer → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Socials field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<FooterDocumentDataSocialsItem>>;

  /**
   * Copy Text field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copy_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  copy_text: prismic.RichTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | ServicesSlice
  | TeamSlice
  | CasesSlice
  | HomepageHeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Member → Socials*
 */
export interface MemberDocumentDataSocialsItem {
  /**
   * Network field in *Member → Socials*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: member.socials[].network
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  network: prismic.SelectField<
    "Instagram" | "TikTok" | "Facebook" | "YouTube" | "Telegram"
  >;

  /**
   * Link field in *Member → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: member.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Member documents
 */
interface MemberDocumentData {
  /**
   * Image field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *Member*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: member.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.TitleField;

  /**
   * Description field in *Member*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Socials field in *Member*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: member.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<MemberDocumentDataSocialsItem>>;
}

/**
 * Member document from Prismic
 *
 * - **API ID**: `member`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MemberDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MemberDocumentData>, "member", Lang>;

type PageDocumentDataSlicesSlice =
  | ParagraphSlice
  | TeamSlice
  | CasesListSlice
  | HomepageHeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Service documents
 */
interface ServiceDocumentData {
  /**
   * Title field in *Service*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: service.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Price field in *Service*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  price: prismic.RichTextField;

  /**
   * Description field in *Service*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Service document from Prismic
 *
 * - **API ID**: `service`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServiceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ServiceDocumentData>,
    "service",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | CaseDocument
  | FooterDocument
  | HomepageDocument
  | MemberDocument
  | PageDocument
  | ServiceDocument
  | SettingsDocument;

/**
 * Primary content in *Cases → Primary*
 */
export interface CasesSliceDefaultPrimary {
  /**
   * Heading field in *Cases → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases.primary.label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Button Label field in *Cases → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *Cases → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cases.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Primary content in *Cases → Items*
 */
export interface CasesSliceDefaultItem {
  /**
   * Case field in *Cases → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: cases.items[].case
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  case: prismic.ContentRelationshipField<"case">;
}

/**
 * Default variation for Cases Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CasesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CasesSliceDefaultPrimary>,
  Simplify<CasesSliceDefaultItem>
>;

/**
 * Slice variation for *Cases*
 */
type CasesSliceVariation = CasesSliceDefault;

/**
 * Cases Shared Slice
 *
 * - **API ID**: `cases`
 * - **Description**: Cases
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CasesSlice = prismic.SharedSlice<"cases", CasesSliceVariation>;

/**
 * Primary content in *CasesList → Primary*
 */
export interface CasesListSliceDefaultPrimary {
  /**
   * Heading field in *CasesList → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_list.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Default variation for CasesList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CasesListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CasesListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CasesList*
 */
type CasesListSliceVariation = CasesListSliceDefault;

/**
 * CasesList Shared Slice
 *
 * - **API ID**: `cases_list`
 * - **Description**: CasesList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CasesListSlice = prismic.SharedSlice<
  "cases_list",
  CasesListSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HomepageHeroSliceDefaultPrimary {
  /**
   * First Word field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.first_word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_word: prismic.KeyTextField;

  /**
   * Second Word field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.second_word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  second_word: prismic.KeyTextField;

  /**
   * Third Word field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.third_word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  third_word: prismic.KeyTextField;

  /**
   * Fourth Word field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.fourth_word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fourth_word: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomepageHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomepageHeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HomepageHeroSliceWithSubtextPrimary {
  /**
   * Secondary Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.secondary_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  secondary_text: prismic.RichTextField;

  /**
   * First Word field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.first_word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_word: prismic.KeyTextField;

  /**
   * Second Word field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.second_word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  second_word: prismic.KeyTextField;

  /**
   * Fourth Word field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.fourth_word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fourth_word: prismic.KeyTextField;

  /**
   * Third Word field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.third_word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  third_word: prismic.KeyTextField;
}

/**
 * With Subtext variation for Hero Slice
 *
 * - **API ID**: `withSubtext`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomepageHeroSliceWithSubtext = prismic.SharedSliceVariation<
  "withSubtext",
  Simplify<HomepageHeroSliceWithSubtextPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HomepageHeroSliceVariation =
  | HomepageHeroSliceDefault
  | HomepageHeroSliceWithSubtext;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `homepage_hero`
 * - **Description**: HomepageHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomepageHeroSlice = prismic.SharedSlice<
  "homepage_hero",
  HomepageHeroSliceVariation
>;

/**
 * Primary content in *Paragraph → Primary*
 */
export interface ParagraphSliceDefaultPrimary {
  /**
   * Title field in *Paragraph → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Subtitle field in *Paragraph → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.TitleField;

  /**
   * First Text Field field in *Paragraph → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.primary.first_text_field
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  first_text_field: prismic.RichTextField;

  /**
   * Main Image field in *Paragraph → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.primary.first_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  first_image: prismic.ImageField<never>;

  /**
   * Second Text Field field in *Paragraph → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.primary.second_text_field
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  second_text_field: prismic.RichTextField;
}

/**
 * Primary content in *Paragraph → Items*
 */
export interface ParagraphSliceDefaultItem {
  /**
   * Secondary Image field in *Paragraph → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.items[].secondary_images
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  secondary_images: prismic.ImageField<never>;
}

/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParagraphSliceDefaultPrimary>,
  Simplify<ParagraphSliceDefaultItem>
>;

/**
 * Slice variation for *Paragraph*
 */
type ParagraphSliceVariation = ParagraphSliceDefault;

/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: Paragraph
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSlice = prismic.SharedSlice<
  "paragraph",
  ParagraphSliceVariation
>;

/**
 * Primary content in *Services → Primary*
 */
export interface ServicesSliceDefaultPrimary {
  /**
   * Title field in *Services → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Subtitle field in *Services → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;
}

/**
 * Primary content in *Services → Items*
 */
export interface ServicesSliceDefaultItem {
  /**
   * Service field in *Services → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].service
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  service: prismic.ContentRelationshipField<"service">;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceDefaultPrimary>,
  Simplify<ServicesSliceDefaultItem>
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

/**
 * Primary content in *Team → Primary*
 */
export interface TeamSliceDefaultPrimary {
  /**
   * Title field in *Team → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: team.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Subtitle field in *Team → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;
}

/**
 * Primary content in *Team → Items*
 */
export interface TeamSliceDefaultItem {
  /**
   * Member field in *Team → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: team.items[].member
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  member: prismic.ContentRelationshipField<"member">;
}

/**
 * Default variation for Team Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSliceDefaultPrimary>,
  Simplify<TeamSliceDefaultItem>
>;

/**
 * Primary content in *Team → Primary*
 */
export interface TeamSliceExtendedPrimary {
  /**
   * Title field in *Team → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: team.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *Team → Items*
 */
export interface TeamSliceExtendedItem {
  /**
   * Member field in *Team → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: team.items[].member
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  member: prismic.ContentRelationshipField<"member">;
}

/**
 * Extended variation for Team Slice
 *
 * - **API ID**: `extended`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSliceExtended = prismic.SharedSliceVariation<
  "extended",
  Simplify<TeamSliceExtendedPrimary>,
  Simplify<TeamSliceExtendedItem>
>;

/**
 * Slice variation for *Team*
 */
type TeamSliceVariation = TeamSliceDefault | TeamSliceExtended;

/**
 * Team Shared Slice
 *
 * - **API ID**: `team`
 * - **Description**: Team
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSlice = prismic.SharedSlice<"team", TeamSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CaseDocument,
      CaseDocumentData,
      CaseDocumentDataImagesItem,
      CaseDocumentDataTagsItem,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSocialsItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      MemberDocument,
      MemberDocumentData,
      MemberDocumentDataSocialsItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ServiceDocument,
      ServiceDocumentData,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      CasesSlice,
      CasesSliceDefaultPrimary,
      CasesSliceDefaultItem,
      CasesSliceVariation,
      CasesSliceDefault,
      CasesListSlice,
      CasesListSliceDefaultPrimary,
      CasesListSliceVariation,
      CasesListSliceDefault,
      HomepageHeroSlice,
      HomepageHeroSliceDefaultPrimary,
      HomepageHeroSliceWithSubtextPrimary,
      HomepageHeroSliceVariation,
      HomepageHeroSliceDefault,
      HomepageHeroSliceWithSubtext,
      ParagraphSlice,
      ParagraphSliceDefaultPrimary,
      ParagraphSliceDefaultItem,
      ParagraphSliceVariation,
      ParagraphSliceDefault,
      ServicesSlice,
      ServicesSliceDefaultPrimary,
      ServicesSliceDefaultItem,
      ServicesSliceVariation,
      ServicesSliceDefault,
      TeamSlice,
      TeamSliceDefaultPrimary,
      TeamSliceDefaultItem,
      TeamSliceExtendedPrimary,
      TeamSliceExtendedItem,
      TeamSliceVariation,
      TeamSliceDefault,
      TeamSliceExtended,
    };
  }
}
