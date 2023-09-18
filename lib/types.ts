import { links } from "./data";

export type sectionName = (typeof links)[number]["name"];

export type Theme = "light" | "dark";
