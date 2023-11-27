import Button from '../components/Button'
import HeroText from '../components/HeroText'

const swap = () => {
  return (
    <>
      <div>
          <HeroText title={"swap."} description={"Coming SoonTM"}/>
      </div>
      <div className='flex flex-col w-full items-center'>
        <div className='flex flex-col w-96 bg-gray-200 items-center justify-center rounded-2xl p-4 gap-4 m-8'>
          <div className='flex w-full bg-neutral-100 rounded-xl justify-end items-center py-3 px-3 font-bold gap-4'>
            <div>
              20,000
            </div>
            <div>
              wBAN
            </div>
          </div>
          <Button label={"↓"} className={"w-10 h-10 rounded-full"}/>
          <div className='flex w-full bg-neutral-100 rounded-xl justify-end items-center py-3 px-3 font-bold gap-4'>
            <div>
              100
            </div>
            <div>
              BAN
            </div>
          </div>
          <Button label={"swap."}/>
        </div>

        <div>
          Swap your Banano to wBan and back.
        </div>
      </div>
    </>
  )
}

export default swap