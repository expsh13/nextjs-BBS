import { BBScard } from "./BBScard";

export const CardList = () => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <BBScard />
      <BBScard />
      <BBScard />
      <BBScard />
    </div>
  );
};
