import atlassian from "./atlassian.jpg";
import zephyr from "./zephyr.jpg";
import testrail from "./testrail.png";
import ironMan from "./iron-man.jpg";
import honda from "./honda.png";
import darkKnight from "./the-dark-knight.jpg";
import messi from "./messi.jpg";
import python from "./python.png";
import jira from "./jira.png";
import ai from "./ai.png";

export const assets = {
  atlassian,
  zephyr,
  testrail,
  ironMan,
  honda,
  darkKnight,
  messi,
  python,
  jira,
  ai,
} as const;
export type AssetKey = keyof typeof assets;
