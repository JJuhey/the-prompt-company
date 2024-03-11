"use client"

import Link from "next/link";
import { useState } from "react";
import MobileRightBar from "./MobileRightBar";

export default function TopBar() {
  const [mode, setMode] = useState("light");
  const [show, setShow] = useState(false);

  return (
    <nav className="flex flex-row p-5 justify-between border-b sticky top-0 bg-white/80 dark:bg-zinc-900">
      <div className="font-bold">
        <Link href="/">The Prompt Company</Link>
      </div>
      <div>
        <ul className="flex flex-row gap-5">
          <li className="max-md:hidden">
            <Link href="/archive">Archive</Link>
          </li>
          <li className="max-md:hidden">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="max-md:hidden">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="max-md:hidden">
            <Link href="/people">People</Link>
          </li>
          <li>
            <button className="cursor-pointer mx-2" id="darkModeToggle"value={mode} onClick={() => {
              const newMode = mode === 'dark' ? "light" : "dark"
              document.documentElement.classList.toggle("dark");
              setMode(newMode)
            }}>{mode === "dark" ? (
              <svg fill="none" viewBox="2 2 20 20" width="12" height="12" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="currentColor" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            ): (<svg fill="none" viewBox="3 3 18 18" width="12" height="12" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="currentColor" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                
            )}</button>
          </li>
          <li className="md:hidden cursor-pointer" onClick={() => setShow(!show)}>
            <svg fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className=""><g><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16"></path></g><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16"></path><g><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16"></path></g></svg>
          </li>
        </ul>
      </div>
      {show && <MobileRightBar closeMenuBar={() => setShow(false)}/>}
    </nav>
  )
}
