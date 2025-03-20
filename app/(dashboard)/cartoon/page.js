import { getAllCartoons } from "@/service/cartoonService"

export default async function CartoonsPage() {
  const cartoons = await getAllCartoons();
  console.log(cartoons);
  return (
    <div>cartoon page</div>
  )
}
