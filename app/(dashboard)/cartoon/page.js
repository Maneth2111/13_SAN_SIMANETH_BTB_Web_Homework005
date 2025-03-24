
import FilterByCatagory from "@/components/filter/filter-by-catagory";
import CartoonCard from "@/components/allCard/cartoon-card";
import { getAllCartoons } from "@/service/cartoonService"

export default async function CartoonsPage() {
  const cartoons = await getAllCartoons();

  return (
        <>
        <div className="mb-4 p-4 bg-gray-100 rounded-md shadow-md flex justify-between">
          <h1 className="text-xl font-bold text-gray-700">All Cartoons</h1>
          <FilterByCatagory/>
        </div>
          <div className='flex justify-around flex-wrap gap-3 h-[90vh] overflow-y-auto overflow-hidden'>
            {cartoons.map((cartoon)=>(
              <CartoonCard
                key={cartoon.id}
                cartoonTitle={cartoon.ct_title} 
                cartoonImage={cartoon.image}
              />
            ))}
          </div>
        </>
  )
}