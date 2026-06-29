import { ReactElement } from "react";

export type LinkItem = {
  href: string;
  icon: ReactElement; // React element representing the icon component
  label: string;
};

export type Venture = {
  id: string;             // Unique key for rendering lists
  title: string;
  desc: string[];
  href: string;
  img: string;
  fimg: string;
  tag?: string;
  bullets?: string[];
  links?: LinkItem[];     // Optional array of social / website links with icons
};
