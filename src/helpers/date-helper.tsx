import isValid from 'date-fns/isValid';

export const getDate = (
  value: number | string | null | Date | undefined,
): Date | undefined => {
  if (value && isValid(new Date(value))) {
    return new Date(value);
  }
  return undefined;
};
