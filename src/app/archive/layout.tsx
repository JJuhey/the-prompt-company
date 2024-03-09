import LeftBar from "@app/menu/LeftBar";

export default function ArchiveLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-row">
      <div className="max-md:hidden">
        <LeftBar />
      </div>
      <div className="flex-1 pt-7 px-10 md:ml-52 max-w-full">
        {children}
      </div>
    </div>
  )
}