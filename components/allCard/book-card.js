

import { Card, CardHeader, CardBody } from "@heroui/react";
import img from "@/asset/book1.png"
export default function BookCard() {
  return (
    <>
    <Card className="py-4 grid grid-cols-2 bg-red-300 w-3/6">
      <CardHeader className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width={270}
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col self-center">
        <div className="bg-yellow-200 ">
          <h4 className="font-bold text-large">Frontend Radio</h4>
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="">12 Tracks</small>
          </div>
      </CardBody>
    </Card>
    </>
  )
}