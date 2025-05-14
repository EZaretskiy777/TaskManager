import { themeList } from "../../enums";

export const color = (theme) => {
  switch (theme) {
    case themeList.webDesign:
      return "orange";
    case themeList.research:
      return "green";
    case themeList.copywriting:
      return "purple";
    default:
      return "gray";
  }
};
