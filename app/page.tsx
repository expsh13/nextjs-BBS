import { CardList } from "./components/BBSCard/CardList";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData = await response.json();
  console.log(bbsAllData);

  return (
    <main className="">
      <CardList />
    </main>
  );
}
