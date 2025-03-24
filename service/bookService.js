// export async function getAllBooks() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
//   const books = await res.json();
//   return books.payload;
// }
export const getBookById = async (id) => {
  const book = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
  const response = await book.json();
  return response.payload;
};
export async function getAllBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
  const books = await res.json();
  return books.payload || [];
}

export async function getAllBookCategories() {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book_category`);
  const categories = await res.json();
  return categories.payload || [];
}
