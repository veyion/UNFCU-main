import Image from "next/image"

const Header = () => {
  return (
    <div className="h-24 flex flex-col justify-center max-w-[750px] mx-auto bg-white">
      <a href="https://www.unfcu.org/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/logo.png"
          alt="logo"
          height={150}
          width={150}
          className="mx-auto cursor-pointer"
        />
      </a>
    </div>
  )
}

export default Header
