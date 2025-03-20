
import SearchNavbar from "@/components/searchNavbar/search-navbar";
import DashboardSidebar from "@/components/sidebar/dashboardSidebar";



export default function DashboardLayout({children}) {
  return (
    <>
      <div className="grid grid-cols-12  bg-slate-200 min-h-screen overflow-hidden">
        <aside className="col-span-3">
          <DashboardSidebar />
        </aside>

      <section className="col-span-9  px-10">
        <div className="py-5">
          <SearchNavbar />
        </div>
        <div className="bg-white rounded-2xl w-full h-full mt-7 p-4">
          {children}
        </div>
      </section>
    </div>
    </>
    
  )
}
