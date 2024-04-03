import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/BBSCard/Card";
import { BBSData } from "@/app/types/types";
import Link from "next/link";

export const BBScard = ({ data }: { data: BBSData }) => {
  const { title, content, createdAt, username, id } = data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link className="text-blue-500" href={`/bbs-posts/${id}`}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};
