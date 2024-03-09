"use client"
import { useNotionData } from "@app/swr/useNotionData";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function LeftBar() {
  const { posts: menus } = useNotionData();
  const pathname = usePathname();

  if (!menus) return <nav className="lg:w-52 fixed top-16 left-0"></nav>;

  return (
    <nav className="lg:w-52 flex flex-col gap-2 pt-5 p-2 text-zinc-700 dark:text-zinc-200 font-light text-sm fixed top-16 left-0">
      {menus.map((menu) => {
        const selectedId = pathname.split("/").pop();
        const isSelected = menu.id === selectedId;
        const title = (menu.properties["Title"] as any).title[0].plain_text;

        return (
          <div
            key={menu.id}
            className={`hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg p-2 ${isSelected ? "bg-slate-50 dark:bg-zinc-950" : ""}`}
          ><Link href={`/archive/${menu.id}`}>{title}</Link></div>
        )
      })}
    </nav>
  )
}