

export default function SearchNavbar() {
  return (
  <>
    <div className="relative  transition-all">
    <input
        type="text"
        placeholder="Search anything you want to"
        id="searchInput"
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full outline-none transition-all border-gray-300"
    />
    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-400 transition-all"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</div>


  </>
   
  )
}
