

import FilterByCatagory from '@/components/filter/filter-by-catagory';
import BookCard from '@/components/allCard/book-card';
import { getAllBooks } from '@/service/bookService'

export default async function BooksPage() {
  const books = await getAllBooks();
  return (
    <>
    <div className="mb-4 p-4 bg-gray-100 rounded-md shadow-md flex justify-between">
      <h1 className="text-xl font-bold text-gray-700">All Books</h1>
      <FilterByCatagory/>
    </div>
      <div className='flex justify-around flex-wrap gap-3 h-[90vh] overflow-y-auto overflow-hidden'>
        {books.map((book)=>(
          <BookCard
            key={book.id}
            title={book.book_title} 
            description={book.description} 
            bookImage={book.image}
          />
        ))}
      </div>
    </>
  );
}