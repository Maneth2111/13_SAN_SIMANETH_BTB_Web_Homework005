"use client"
import logo from "@/asset/logo.png"
import Image from "next/image"
import Link from "next/link"

import book from "@/asset/book.png"
import home from "@/asset/home-2.png"
import emoji from "@/asset/emoji-happy.png"
import video from "@/asset/video.png"
import music from "@/asset/music.png"
import camera from "@/asset/camera.png"
import weight from "@/asset/weight.png"
import edit from "@/asset/edit.png"
import airplane from "@/asset/airplane.png"
import code from "@/asset/code.png"
import setting from "@/asset/setting-2.png"
import { usePathname } from "next/navigation"



export default function DashboardSidebar() {

  const pathname = usePathname();
  const sidebarIcon = [
    { icon: home, label: "Home", href: "/home" },
    { icon: book, label: "Book Categories", href: "/book" },
    { icon: emoji, label: "Old-School Cartoons", href: "/cartoon" },
    { icon: video, label: "Movies & TV Shows" },
    { icon: music, label: "Music" },
    { icon: camera, label: "Photography" },
    { icon: weight, label: "Sports & Fitness" },
    { icon: edit, label: "Technology & Gadgets" },
    { icon: airplane, label: "Travel & Exploration" },
    { icon: code, label: "Writing & Journaling" },
    { icon: setting, label: "Setting" },
  ];

  return (
    <div className="flex flex-col items-center ml-3 h-full overflow-hidden text-gray-700 bg-gray-100 rounded">
      <Link className="mt-3" href="#">
        <Image src={logo} alt="logo" className="w-40 h-40 rounded-full mb-3"/>
        <h2 className="text-md font-bold text-center">Black Monster</h2>
        <h2 className="text-xl">blackmonster@gmail.com</h2>
      </Link>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
          {sidebarIcon.map((item, index) => (
            item.href ? (
              <Link
                key={index}
                className={`flex items-center w-full h-12 px-3 mt-0.5 rounded hover:bg-gray-300 ${pathname === item.href ? "bg-gray-300" : "bg-none"}`}
                href={item.href}
              >
                <Image src={item.icon} alt="icon" />
                <span className="ml-2 text-sm font-medium">{item.label}</span>
              </Link>
            ) : (
              <div
                key={index}
                className="flex items-center w-full h-12 px-3 mt-0.5 rounded hover:bg-gray-300"
              >
                <Image src={item.icon} alt="icon" />
                <span className="ml-2 text-sm font-medium">{item.label}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

