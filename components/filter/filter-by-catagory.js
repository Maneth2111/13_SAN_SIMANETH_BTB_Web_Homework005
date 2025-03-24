"use client"
import {Select, SelectItem} from "@heroui/react";
export default async function FilterByCatagory() {
  const options =[   
    {key: "book1", label: "FICTION "},
    {key: "book2", label: "FICTION "},
    {key: "book3", label: "FANTASY "},
    {key: "book4", label: "SCIENCE FICTION"},
    {key: "book5", label: "MYSTERY & THRILLER"},
    {key: "book6", label: "HORROR"},
    {key: "book7", label: "ROMANCE"},
    {key: "book8", label: "HISTORICAL FICTION"},
    {key: "book9", label: "BIOGRAPHY & AUTOBIOGRAPHY"},
    {key: "book10", label: "SELF-HELP & PERSONAL DEVELOPMENT"},
    {key: "book11", label: "PHILOSOPHY & PSYCHOLOGY"},
    {key: "book12", label: "POETRY"},
    {key: "book13", label: "GRAPHIC NOVELS & COMICS"},
    {key: "book14", label: "YOUNG ADULT"},
    {key: "book15", label: "CHILDREN’S BOOKS"},

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