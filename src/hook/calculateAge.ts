import { DateInputSchemaType } from "@/lib/types";

const calculateAge = async (info: DateInputSchemaType) => {
  const currentYear = await new Date().getFullYear();
  const currentMonth = (await new Date().getMonth()) + 1;

  const calculateAgeInYear = currentYear - info.yy;

  const calculateAgeMonth = currentMonth - info.mm;

  if (calculateAgeMonth < 0) {
    return {
      year: calculateAgeInYear - 1,
      month: calculateAgeMonth + 12,
      message: `you are ${calculateAgeInYear - 1} years & ${calculateAgeMonth + 12} months old`,
    };
  }
  if (calculateAgeMonth > 0) {
    return {
      year: calculateAgeInYear,
      month: calculateAgeMonth,
      message: `you are ${calculateAgeInYear} years & ${calculateAgeMonth} months old`,
    };
  }
  if (calculateAgeMonth === 0) {
    return {
      year: calculateAgeInYear,
      month: 0,
      message: `you are ${calculateAgeInYear} years old`,
    };
  }
};

export default calculateAge;
