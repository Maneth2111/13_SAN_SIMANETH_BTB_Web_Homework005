

import { getAllBooks } from '@/service/bookService'

export default async function BooksPage() {
  console.log(await getAllBooks());
  return (
      <>
      <div>Book Page</div>
        

      </>
  );
}
