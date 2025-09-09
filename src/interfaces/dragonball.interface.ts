import type { LinksInterface, MetaInterface } from "./";

export interface DragonballItem {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  afiliation: string;
  deleteAt: string;
}

export interface DragonballData {
  items: DragonballItem[];
  meta: MetaInterface;
  links: LinksInterface;
}