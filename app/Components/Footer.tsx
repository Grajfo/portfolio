import Link from "next/link"

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light
    sm:text-base">
        <div className="py-8 flex items-center justify-between pt-0 w-full h-full z-0 bg-light dark:bg-dark p-32
        lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
        <div className="flex items-center lg:py-2">
        Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
        by&nbsp;<Link href="https://github.com/Grajfo" className="underline underline-offset-2" target="_blank">Grajfo</Link>
        </div>
        <Link href="https://github.com/Grajfo" className="underline underline-offset-2" target="_blank">Say hello &#128512;</Link>
        </div>
        
    </footer>
  )
}

export default Footer