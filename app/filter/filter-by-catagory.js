"use client"
import {Select, SelectItem} from "@heroui/react";
export default function FilterByCatagory() {
  const options =[   
    {key: "book1", label: "Comedy "},
    {key: "book2", label: "Action & Adventure "},
    {key: "book3", label: "Fantasy & Sci-Fi"},
    {key: "book4", label: "Superhero "},
    {key: "book5", label: "Slice of Life"},
    {key: "book6", label: "Educational "},
    {key: "book7", label: "Horror/Mystery "},

];
  return (
    <>
    <Select
      isRequired
      className="max-w-xs"
      defaultSelectedKeys={["Comedy"]}
      placeholder="filter by Cetagory"
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
    </>
  )
}
