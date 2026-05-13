import type { NavItem, SiteContent } from "./types";

export function getHeaderNav(content: SiteContent): NavItem[] {
  const hasAbout = Boolean(content.home.about);

  return content.header.nav
    .filter((item) => item.key !== "cv")
    .map((item) => {
      if (item.key !== "about" || hasAbout) {
        return item;
      }

      return {
        ...item,
        href: item.children?.[0]?.href ?? `/${content.lang}/`,
      };
    });
}
