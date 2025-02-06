import React from "react";
import Image from "next/image";
import Link from "next/link";

import data from "@/lib/data.json";

import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { getDepartmentNews } from "@/server/get-courses";

const LatestPosts = async ({ department }: { department?: string }) => {
  const data = await getDepartmentNews(department, true);

  return (
    <div>
      <h4 className="text-lg font-semibold">Latest Posts</h4>
      <Separator className="mt-2 mb-2" />
      <ScrollArea className="h-full lg:h-[500px]">
        <ul className="space-y-4 mt-4">
          {data.data.map((item, index) => (
            <li key={index}>
              <div className="flex gap-2">
                <div className="aspect-video h-[70px] relative">
                  <Image
                    className="object-cover"
                    fill
                    src={
                      item.cover_image
                        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.cover_image}`
                        : "/images/news-portal/1.jpg"
                    }
                    alt={item.title}
                  />
                </div>
                <div>
                  <Link
                    href={`/news-portal/${item.uuid}`}
                    className="hover:underline"
                  >
                    <h6 className="line-clamp-1 text-base font-medium">
                      {item.title}
                    </h6>
                  </Link>
                  <p className="line-clamp-2 text-sm">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>

      <div className="mt-4 flex justify-end">
        <Link href={`/news-events`}>
          <Button>View all</Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestPosts;
