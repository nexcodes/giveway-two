export type NavItem = {
  title: string;
  href: string;
};

export type LanguagesType = {
  name: string;
  locale: string;
};

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}