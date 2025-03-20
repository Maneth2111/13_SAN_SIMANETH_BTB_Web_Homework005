export async function getAllBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
  const books = await res.json();
  return books.payload;
}
