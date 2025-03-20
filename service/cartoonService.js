export async function getAllCartoons() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon`);
    const cartoons = await res.json();
    return cartoons.payload;
  }