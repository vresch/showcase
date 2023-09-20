import Image from "next/image"

export function Bookmark({ href, title, image, children }) {
  return (
    <a href={href} className="not-prose">
      <div className="flex cursor-pointer flex-col items-center rounded-lg border bg-white shadow-xl  hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 md:flex-row">
        <div className="h-auto w-full rounded-t-lg object-contain  md:w-64 md:rounded-lg">
          <Image src={image} alt="" width={64} height={64} />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <span className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-300">{title}</span>
          <div className="prose mb-3 font-normal">{children}</div>
        </div>
      </div>
    </a>
  )
}
