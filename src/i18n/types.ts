export type Language = "en" | "zh";

export interface ActionLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem extends ActionLink {
  key: string;
  children?: NavItem[];
}

export interface StatItem {
  label: string;
  value: string;
}

export interface IntroPanelContent {
  eyebrow: string;
  title: string;
  description: string;
  links?: ActionLink[];
  stats?: StatItem[];
  tags?: string[];
  tagPlacement?: "inline" | "side";
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  badges: string[];
  interests?: {
    title: string;
    items: string[];
  };
  stats: StatItem[];
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
  bannerImage: string;
  bannerAlt: string;
}

export interface AboutContent {
  id: string;
  title: string;
  intro: string[];
  highlights: StatItem[];
  chips: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  gpa?: string;
  logo: string;
  logoAlt: string;
  description: string[];
}

export interface EducationSectionContent {
  id: string;
  title: string;
  intro?: string;
  items: EducationEntry[];
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  dates: string;
  location: string;
  kind: string;
  summary: string;
  highlights: string[];
}

export interface ExperienceSectionContent {
  id: string;
  title: string;
  intro?: string;
  items: ExperienceEntry[];
}

export interface CourseBubble {
  code?: string;
  title: string;
  grade?: string;
  weight: number;
  term?: string;
  detail?: string;
}

export interface CourseGroup {
  name: string;
  accent: string;
  subtitle?: string;
  courses: CourseBubble[];
}

export interface CoursesSectionContent {
  id: string;
  title: string;
  intro?: string;
  note: string;
  groups: CourseGroup[];
}

export interface Project {
  title: string;
  year: string;
  program?: string;
  abstract: string;
  tags: string[];
  reportLink?: ActionLink;
  githubLink?: ActionLink;
  demoLink?: ActionLink;
  image?: string;
  imageFit?: "cover" | "contain";
  featured?: boolean;
}

export interface ProjectsSectionContent {
  id: string;
  title: string;
  intro: string;
  note?: string;
  cta: ActionLink;
  items: Project[];
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  note: string;
}

export interface ContactSectionContent {
  id: string;
  title: string;
  intro: string;
  channels: ContactChannel[];
}

export interface ResearchSectionBlock {
  title: string;
  body: string[];
  items?: string[];
}

export interface ResearchPageContent extends IntroPanelContent {
  sections: ResearchSectionBlock[];
}

export interface ProjectsPageContent extends IntroPanelContent {
  note: string;
  items: Project[];
}

export interface AwardEntry {
  title: string;
  meta: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ResumePageContent extends IntroPanelContent {
  resumeNote: string;
  snapshot: StatItem[];
  awardsTitle: string;
  awards: AwardEntry[];
  skillsTitle: string;
  skills: SkillGroup[];
}

export interface FooterContent {
  note: string;
  copyright: string;
  links: ActionLink[];
}

export interface SiteContent {
  lang: Language;
  meta: {
    title: string;
    description: string;
  };
  site: {
    brand: string;
    brandMark?: string;
    location: string;
  };
  header: {
    menuLabel: string;
    nav: NavItem[];
  };
  footer: FooterContent;
  home: {
    hero: HeroContent;
    about?: AboutContent;
    education: EducationSectionContent;
    experience: ExperienceSectionContent;
    courses: CoursesSectionContent;
    projects: ProjectsSectionContent;
    contact: ContactSectionContent;
  };
  researchPage: ResearchPageContent;
  projectsPage: ProjectsPageContent;
  cvPage: ResumePageContent;
}
