"use client"
import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function BookCard({ title, description, bookImage }) {
  return (
    <Card className="py-4 grid grid-cols-2 bg-white w-[46%]">
      <CardHeader className="overflow-hidden py-2 ">
        <Image
          alt={title}
          className="object-cover rounded-xl"
          src={bookImage || "/default-book.png"} 
          width={270}
          height={300}
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col self-center">
        <div className=" p-2 rounded-lg">
          <h4 className="font-bold text-2xl">{title}</h4>
          <p className="text-md mt-2 line-clamp-4">{description}</p> 
        </div>
      </CardBody>
    </Card>
  );
}
