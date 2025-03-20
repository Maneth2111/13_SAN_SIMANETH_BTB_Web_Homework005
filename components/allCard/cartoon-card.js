"use client"
import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";


export default function CartoonCard({cartoonTitle, cartoonImage}) {
  return (
    <Card className="py-4 bg-white w-2/5 ">
    <CardHeader className="overflow-hidden ">
      <Image
        alt={cartoonTitle}
        className="object-cover rounded-xl mx-auto"
        src={cartoonImage} 
        width={270}
        height={300}
      />
    </CardHeader>
    <CardBody className="pb-0 pt-2 px-4 flex-col self-center">
      <div className=" p-2 rounded-lg mx-auto">
        <h4 className="font-bold text-2xl">{cartoonTitle}</h4>
      </div>
    </CardBody>
  </Card>
  )
}
