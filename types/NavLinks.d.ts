/**
 * Base nav item, displayed as text
 */
export interface NavItem {
  text: string;
  ariaLabel?: string;
}

/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends NavItem {
  children: T[];
}

/**
 * NavLink, i.e. inherited from NavItem, but extended with link properties.
 */
export interface NavLink extends NavItem {
  link: string;
  rel?: string;
  target?: string;
}

/**
 * Exported Navigation Menu Types
 */
export type NavigationItem = NavLink;
export type NavigationGroup = NavGroup<NavigationGroup | NavigationItem>;
export type NavigationMenu = (NavigationItem | NavigationGroup)[];
