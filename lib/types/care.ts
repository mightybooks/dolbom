// lib/types/care.ts

export type CareType =
  | "plant"
  | "turtle"
  | "cat"
  | "dog"
  | "rabbit"
  | "alien"
  | "mix";

export type CareScoreType =
  | "plant"
  | "turtle"
  | "cat"
  | "dog"
  | "rabbit"
  | "alien";

export interface ChoiceOption {
  id: string;
  label: string;
  type: CareType | "weird";
  isCoreRabbit?: boolean;
}

export interface QuestionItem {
  id: string;
  title: string;
  options: ChoiceOption[];
}
