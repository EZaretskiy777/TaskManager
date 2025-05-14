import { ClipLoader } from "react-spinners";

const overrideCss = {
  position: "fixed",
  top: "45%",
  left: "45%",
  borderColor: "#565eef",
  zIndex: 99,
};

export const Loader = () => {
  return (
    <ClipLoader
      cssOverride={overrideCss}
      size={150}
      aria-label="Loader"
      data-testid="loader"
    />
  );
};
