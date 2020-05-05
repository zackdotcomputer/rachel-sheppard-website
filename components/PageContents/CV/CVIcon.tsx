import { IconType } from "./Props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faTrophy,
  faSearch,
  faMountain,
  faMicrophoneAlt,
  faHandshake,
  faChalkboardTeacher,
  faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

function getIcon(cv: IconType): IconProp {
  switch (cv) {
    case IconType.diploma:
      return faGraduationCap;
    case IconType.trophy:
      return faTrophy;
    case IconType.magnifier:
      return faSearch;
    case IconType.mountain:
      return faMountain;
    case IconType.microphone:
      return faMicrophoneAlt;
    case IconType.handshake:
      return faHandshake;
    case IconType.teacher:
      return faChalkboardTeacher;
    case IconType.leaf:
      return faPagelines;
    case IconType.lovehand:
      return faHandHoldingHeart;
  }
}

export default function CVIcon({ icon }: { icon: IconType }) {
  return <FontAwesomeIcon icon={getIcon(icon)} />;
}
