"use client"

import { useNotionData } from "@app/swr/useNotionData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileRightBar({ closeMenuBar }: {closeMenuBar: () => void}) {
  const pathname = usePathname();
  const [selectedId, setSelectedId] = useState("");
  const { posts: menus } = useNotionData();

  useEffect(() => {
    setSelectedId(pathname.split("/").pop() || "");
  }, [selectedId])

  if (!menus) return null;

  return (
    <ul className="absolute right-0 top-[65px] bg-white/95 dark:bg-zinc-800/95 min-h-[100vh] w-52å p-5 flex flex-col gap-5 border-l text-sm">
      {menus.map(menu => {
        const isSelected = menu.id === selectedId;
        const title = (menu.properties["Title"] as any).title[0].plain_text;
        return (
          <li key={menu.id} className={`${isSelected ? "text-red-400" : ""}`}>
            <Link
              href={`/archive/${menu.id}`}
              onClick={closeMenuBar}
            >{title}</Link>
          </li>
        )
      })}
      <li className={`${selectedId === "projects" ? "text-red-400" : ""}`}>
        <Link
          href="/projects"
          onClick={closeMenuBar}
        >Projects</Link>
      </li>
      <li className={`${selectedId === "contact" ? "text-red-400" : ""}`}>
        <Link
          href="/contact"
          onClick={closeMenuBar}
        >Contact</Link>
      </li>
      <li className={`${selectedId === "people" ? "text-red-400" : ""}`}>
        <Link
          href="/people"
          onClick={closeMenuBar}
        >People</Link>
      </li>
    </ul>
  )
}