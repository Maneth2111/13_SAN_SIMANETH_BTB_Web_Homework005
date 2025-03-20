import React from 'react'
import { getAllBooks } from '@/service/bookService'
export default async function page() {
    console.log(await getAllBooks());
  return (
    <div>page</div>
  )
}
