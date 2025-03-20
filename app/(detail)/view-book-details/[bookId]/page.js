import BookDetail from "@/components/allCard/bookDetail";
import { getBookById } from "@/service/bookService";


export default async function DetailPage({ params }) {
  const bookId = params.id; 
  const book = await getBookById(bookId);
  return (
    <div>
      <BookDetail
        key={book?.id}
        title={book?.book_title}
        description={book?.description}
        bookImage={book?.image}
      />
    </div>
  );
}
