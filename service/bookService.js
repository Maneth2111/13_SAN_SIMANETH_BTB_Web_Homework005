export async function getAllBooks() {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
  const books = await res.json();
  console.log(`books`,books);
  return books.payload;
}