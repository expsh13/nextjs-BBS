import { BBSData } from "@/app/types/types";
import { BBScard } from "./BBScard";

export const CardList = ({ data }: { data: BBSData[] }) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {data.map((item) => (
        <BBScard key={item.id} data={item} />
      ))}
    </div>
  );
};
