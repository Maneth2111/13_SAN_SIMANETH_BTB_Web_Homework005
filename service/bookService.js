export async function getAllBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
  const books = await res.json();
  return books.payload;
}
export const getBookById = async (id) => {
  const book = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
  const response = await book.json();
  return response.payload;
};
