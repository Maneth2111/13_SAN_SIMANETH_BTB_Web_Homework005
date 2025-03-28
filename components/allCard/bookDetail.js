"use client"
import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";

export default function BookDetail({title, description, bookImage}) {
  return (
    <div className='bg-white'>
      <Card className="grid grid-cols-2 py-3">
      <CardHeader className="overflow-hidden py-2 ">
        <Image
          alt={title}
          className="object-cover rounded-xl"
          src={bookImage } 
          width={270}
          height={300}
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col self-center">
        <div className=" p-2 rounded-lg">
          <h4 className="font-bold text-2xl">{title}</h4>
          <p className="text-md mt-2 ">{description}</p> 
        </div>
      </CardBody>
    </Card>
    </div>
  )
}
