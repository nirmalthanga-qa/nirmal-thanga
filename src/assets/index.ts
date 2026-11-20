import atlassian from "./atlassian.jpg";
import zephyr from "./zephyr.jpg";
import testrail from "./testrail.png";
import ironMan from "./iron-man.jpg";
import honda from "./honda.png";
import darkKnight from "./the-dark-knight.jpg";
import messi from "./messi.jpg";

export const assets = {
  atlassian,
  zephyr,
  testrail,
  ironMan,
  honda,
  darkKnight,
  messi,
} as const;
export type AssetKey = keyof typeof assets;
