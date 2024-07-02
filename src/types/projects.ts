export interface Projects {
  componentChunkName: string;
  path: string;
  result: Result;
  staticQueryHashes: string[];
  slicesMap: SlicesMap;
}

export interface Result {
  data: Data;
  pageContext: PageContext;
}

export interface Data {
  locales: Locales;
  allProjects: AllProjects;
  allTags: AllTags;
  allFeatured: AllFeatured;
  allFile: AllFile;
}

export interface AllFeatured {
  nodes: AllFeaturedNode[];
}

export interface AllFeaturedNode {
  Name: string;
}

export interface AllFile {
  nodes: AllFileNode[];
}

export interface AllFileNode {
  childImageSharp: ChildImageSharp;
  parent: null;
}

export interface ChildImageSharp {
  gatsbyImageData: GatsbyImageData;
}

export interface GatsbyImageData {
  layout: Layout;
  images: Images;
  width: number;
  height: number;
}

export interface Images {
  fallback: Fallback;
  sources: Source[];
}

export interface Fallback {
  src: string;
  srcSet: string;
  sizes: string;
}

export interface Source {
  srcSet: string;
  type: Type;
  sizes: string;
}

export enum Type {
  ImageWebp = "image/webp",
}

export enum Layout {
  Constrained = "constrained",
}

export interface AllProjects {
  nodes: AllProjectsNode[];
}

export interface AllProjectsNode {
  id: string;
  Name: string;
  Description: string;
  Website: string;
  Twitter: string;
  Tag: string;
  Status: Status;
  Date_Created: Date;
  Date_Modified: Date;
  childrenFile: ChildrenFile[];
}

export enum Status {
  Live = "Live",
  LiveActive = "Live - Active",
  NotLiveInDevelopment = "Not Live - In Development",
}

export interface ChildrenFile {
  childImageSharp: ChildImageSharp;
}

export interface AllTags {
  nodes: AllTagsNode[];
}

export interface AllTagsNode {
  tagName: string;
  numOfItems: number;
}

export interface Locales {
  edges: Edge[];
}

export interface Edge {
  node: EdgeNode;
}

export interface EdgeNode {
  ns: string;
  data: string;
  language: string;
}

export interface PageContext {
  language: string;
  i18n: I18N;
}

export interface I18N {
  language: string;
  languages: string[];
  defaultLanguage: string;
  generateDefaultLanguagePage: boolean;
  routed: boolean;
  originalPath: string;
  path: string;
}

export interface SlicesMap {}
