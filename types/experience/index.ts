import { Stack } from "@utils/constants/stack";

export interface IJobPosition {
  title: string;
  date: string;
  company: string;
  place: string;
  description: string[];
  stack: Stack[];
}
