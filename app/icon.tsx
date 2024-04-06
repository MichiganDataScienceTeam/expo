import { createElement } from "react";
import { IconType } from "react-icons";
import {
  IoArrowBackCircle,
  IoArrowForward,
  IoArrowForwardCircle,
  IoBrowsersOutline,
  IoCalendarOutline,
  IoCaretDown,
  IoCaretUp,
  IoClipboardOutline,
  IoCopyOutline,
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoSlack,
  IoMail,
} from "react-icons/io5";

interface IconProps {
  name: string;
}

interface IconMap {
  [key: string]: IconType;
}

const iconMap: IconMap = {
  envelope: IoMail,
  instagram: IoLogoInstagram,
  linkedin: IoLogoLinkedin,
  github: IoLogoGithub,
  caret_up: IoCaretUp,
  caret_down: IoCaretDown,
  "arrow-left": IoArrowBackCircle,
  "arrow-right": IoArrowForwardCircle,
  "arrow-stem-left": IoArrowForward,
  clipboard: IoClipboardOutline,
  website: IoBrowsersOutline,
  slack: IoLogoSlack,
  copy: IoCopyOutline,
  calendar: IoCalendarOutline,
  discord: IoLogoDiscord,
};

export default function Icon({ name }: IconProps) {
  if (!(name in iconMap)) {
    console.error("Could not find name " + name);
    return null;
  }
  return createElement(iconMap[name], { name });
}
