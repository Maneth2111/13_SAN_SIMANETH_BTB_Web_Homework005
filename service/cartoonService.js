export async function getAllCartoons() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon`);
  const cartoons = await res.json();
  return cartoons.payload || [];
}

export async function getAllCartoonGenres() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon_genre`);
  const genres = await res.json();
  return genres.payload || [];
}
