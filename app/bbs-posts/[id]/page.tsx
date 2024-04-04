import { BBSData } from "@/app/types/types";
import React from "react";

async function getDetailBBSData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  const bbsDetailData: BBSData = await response.json();
  return bbsDetailData;
}

const BBSDetailPage = async ({ params }: { params: { id: number } }) => {
  const bbsDetailData = await getDetailBBSData(params.id);
  console.log(bbsDetailData);
  return <div>BBSDetailPage</div>;
};

export default BBSDetailPage;
