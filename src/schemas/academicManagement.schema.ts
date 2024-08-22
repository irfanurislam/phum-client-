import { z } from "zod";
export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "please selet a name" }),
  year: z.string({ required_error: "please selet a year" }),
  startMonth: z.string({ required_error: "please selet a month start" }),
  endMonth: z.string({ required_error: "please selet a month end" }),
});
