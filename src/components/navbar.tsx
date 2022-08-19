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
          alt={'SharePrime logo'}
          className="cursor-pointer"
        />
        <ul className="flex h-[69px] items-center gap-4 pr-4 md:gap-[60px]">
          <li
            className={`cursor-pointer border-[#ffb500] after:block after:transition-all after:duration-1000 transition-all duration-500 ease-linear after:h-[3px] after:w-0 after:hover:w-full after:bg-[#ffb500] hover:text-[#ffb500] ${
              router.pathname === '/admin' && 'text-[#ffb500]'
            }`}
            onClick={() => router.push('/admin')}
          >
            <small className="font-black">Admin</small>
          </li>
          <li className="cursor-pointer border-[#ffb500] transition-all duration-500 ease-linear after:block after:h-[3px] after:w-0 after:bg-[#ffb500] after:transition-all after:duration-1000 hover:text-[#ffb500] after:hover:w-full">
            <a
              href="https://github.com/lirbre/shareprime-test"
              target="_blank"
              rel="noreferrer"
            >
              <small className="font-black">Github</small>
            </a>
          </li>
          <li className="cursor-pointer border-[#ffb500] transition-all duration-500 ease-linear after:block after:h-[3px] after:w-0 after:bg-[#ffb500] after:transition-all after:duration-1000 hover:text-[#ffb500] after:hover:w-full">
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
