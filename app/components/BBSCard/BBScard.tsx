import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/BBSCard/Card";
import Link from "next/link";

export const BBScard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis autem
        impedit eligendi, aliquid, dolores quibusdam, totam repellat
        necessitatibus sint veritatis harum recusandae deserunt cupiditate
        voluptatibus consequatur provident voluptatem libero magnam.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link className="text-blue-500" href={"/bbs-posts/1"}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};
