import {format} from "date-fns";

export const formatDate = (date) => {
  const newDate = new Date(date)
  return format(newDate, 'd, MMM yyyy')
}