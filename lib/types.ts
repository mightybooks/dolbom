// lib/types.ts
export type Option = {
  text: string;
  required?: boolean;
};

export type Question = {
  id: number;
  question: string;
  options: Option[];
};
