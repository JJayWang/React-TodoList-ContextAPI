import { nanoid } from "nanoid";

const categoryData = [
  {
    id: nanoid(),
    name: "Work",
    default: true,
  },
  {
    id: nanoid(),
    name: "Meeting",
    default: true,
  },
  {
    id: nanoid(),
    name: "Other",
    default: false,
  },
];

export default categoryData;
export const categoryDefault = categoryData[0].id;
export const categoryNames = categoryData.reduce((accumulator, current) => {
  return {
    ...accumulator,
    [current.id]: current.name,
  };
}, {});
