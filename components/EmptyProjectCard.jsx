import Image from 'next/image'
import Link from 'next/link'

const EmptyProjectCard = () => {
  return (
    <>
      <Link
        href={"/createProject"}
        className='flex flex-col items-center justify-center text-neutral-50 text-6xl bg-slate-200  rounded-3xl overflow-clip hover:ring-2 hover:ring-amber-400  hover:text-amber-400 ring-offset-4 transition duration-300'
      >
          +
      </Link>
    </>
  )
}

export default EmptyProjectCard