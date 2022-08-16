import Image from 'next/image'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter()

  return (
    <header className="sticky mb-16 h-[69px] w-full border border-b border-[#000]/20">
      <nav className="mx-auto flex h-[69px] w-full max-w-[1920px] items-center justify-between px-4">
        <Image
          src="https://www.shareprime.com.br/images/Menu/logo-shareprime-active.png"
          height={38}
          width={35}
          onClick={() => router.replace('/')}
        />
        <ul className="flex h-[69px] items-center gap-4 pr-4 md:gap-[60px]">
          <li
            className="cursor-pointer border-[#ffb500] transition-all duration-500 ease-linear hover:border-b-2 hover:text-[#ffb500]"
            onClick={() => router.push('/admin')}
          >
            <small className="font-black">Admin</small>
          </li>
          <li
            className="cursor-pointer border-[#ffb500] transition-all duration-500 ease-linear hover:border-b-2 hover:text-[#ffb500]"
            onClick={() => router.push('/admin')}
          >
            <a
              href="https://github.com/lirbre/shareprime-test"
              target="_blank"
              rel="noreferrer"
            >
              <small className="font-black">Github</small>
            </a>
          </li>
          <li
            className="cursor-pointer border-[#ffb500] transition-all duration-500 ease-linear hover:border-b-2 hover:text-[#ffb500]"
            onClick={() => router.push('/admin')}
          >
            <a
              href="https://www.linkedin.com/in/lirbre/"
              target="_blank"
              rel="noreferrer"
            >
              <small className="font-black">Contato</small>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
