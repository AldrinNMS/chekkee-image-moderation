import { Chip } from "@material-tailwind/react";
import { ErrorIcon, NormalIcon, PassedIcon, ProhibitedIcon, ReviewIcon } from "../components/Common/IconComponent";

export const Data = [
  {
    original: "/images/Human.png",
    thumbnail: "/images/Human.png",
    thumbnailHeight: "",
    result: (
      <Chip
        icon={<PassedIcon />}
        size="lg"
        value="Pass"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    type: (
      <Chip
        icon={<NormalIcon />}
        size="lg"
        value="Normal"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    reason: (
      <Chip
        icon={<ProhibitedIcon />}
        size="lg"
        value="Prohibited"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
  },
  {
    original: "/images/Animal.png",
    thumbnail: "/images/Animal.png",
    result: (
      <Chip
        icon={<ReviewIcon />}
        size="lg"
        value="Review"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    type: (
      <Chip
        icon={<NormalIcon />}
        size="lg"
        value="Normal"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    reason: (
      <Chip
        icon={<NormalIcon />}
        size="lg"
        value="Normal"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
  },
  {
    original: "/images/Lego Bomb.png",
    thumbnail: "/images/Lego Bomb.png",
    result: (
      <Chip
        icon={<ReviewIcon />}
        size="lg"
        value="Review"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    type: (
      <Chip
        icon={<ProhibitedIcon />}
        size="lg"
        value="Prohibited"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    reason: (
      <Chip
        icon={<ProhibitedIcon />}
        size="lg"
        value="Prohibited"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
  },
  {
    original: "/images/Food.png",
    thumbnail: "/images/Food.png",
    result: (
      <Chip
        icon={<PassedIcon />}
        size="lg"
        value="Pass"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    type: (
      <Chip
        icon={<NormalIcon />}
        size="lg"
        value="Normal"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    reason: (
      <Chip
        icon={<NormalIcon />}
        size="lg"
        value="Normal"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
  },
  {
    original: "/images/Nature.png",
    thumbnail: "/images/Nature.png",
    result: (
      <Chip
        icon={<PassedIcon />}
        size="lg"
        value="Pass"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    type: (
      <Chip
        icon={<NormalIcon />}
        size="lg"
        value="Normal"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    reason: (
      <Chip
        icon={<NormalIcon />}
        size="lg"
        value="Normal"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
  },
  {
    original: "/images/Skull.png",
    thumbnail: "/images/Skull.png",
    result: (
      <Chip
        icon={<ReviewIcon />}
        size="lg"
        value="Review"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    type: (
      <Chip
        icon={<ProhibitedIcon />}
        size="lg"
        value="Prohibited"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    reason: (
      <Chip
        icon={<ProhibitedIcon />}
        size="lg"
        value="Prohibited"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
  },
  {
    original: "/images/Robot.png",
    thumbnail: "/images/Robot.png",
    result: (
      <Chip
        icon={<ErrorIcon />}
        size="lg"
        value="Error"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    type: (
      <Chip
        icon={<ProhibitedIcon />}
        size="lg"
        value="Prohibited"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
    reason: (
      <Chip
        icon={<ProhibitedIcon />}
        size="lg"
        value="Prohibited"
        className="bg-white text-black rounded-full font-heading font-light normal-case"
      />
    ),
  },
];
