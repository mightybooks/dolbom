import type { CareType } from "@/lib/types/care";

export type CareResultContent = {
  title: string;
  description: string;
  image: string;
  og: string;
};

const RESULT_MAP: Record<CareType, CareResultContent> = {
  plant: {
    title: "Plant-Type Caregiver",
    description:
      "You notice subtle changes in the environment before anyone else, offering quiet stability through careful adjustment and patience.",
    image: "/tosil/results/result_plant.png",
    og: "/tosil/og/og_plant.png",
  },
  turtle: {
    title: "Turtle-Type Caregiver",
    description:
      "You protect life through caution and consistency, relying on steady routines and thoughtful observation rather than haste.",
    image: "/tosil/results/result_turtle.png",
    og: "/tosil/og/og_turtle.png",
  },
  dog: {
    title: "Dog-Type Caregiver",
    description:
      "Through warm interaction and direct expressions of care, you provide reassurance and emotional security to those who rely on you.",
    image: "/tosil/results/result_dog.png",
    og: "/tosil/og/og_dog.png",
  },
  cat: {
    title: "Cat-Type Caregiver",
    description:
      "You care through observation and subtle consideration, offering support without overstepping. Your strength lies in respectful distance.",
    image: "/tosil/results/result_cat.png",
    og: "/tosil/og/og_cat.png",
  },
  rabbit: {
    title: "Rabbit-Type Caregiver",
    description:
      "You quickly sense delicate signals and manage environments with care, creating the safest possible space for vulnerable beings.",
    image: "/tosil/results/result_rabbit.png",
    og: "/tosil/og/og_rabbit.png",
  },
  alien: {
    title: "Alien-Friendly Caregiver",
    description:
      "Your way of caring follows a logic unlike most on Earth. Tosil and Surimi are still trying to understand your unique algorithm.",
    image: "/tosil/results/result_alien.png",
    og: "/tosil/og/og_alien.png",
  },
  mix: {
    title: "Hybrid-Type Caregiver",
    description:
      "You don’t rely on a single caregiving style. Instead, multiple approaches blend together, forming a flexible and unconventional way of caring.",
    image: "/tosil/results/result_mix.png",
    og: "/tosil/og/og_mix.png",
  },
};

export default RESULT_MAP;
