import { Donut } from './canvas'

const Parallax = () => {
  return (
    <section className='h-screen bg-dark'>
      <div className='h-screen relative'>
        <Donut></Donut>
        <a className='absolute bottom-0 left-0 right-0 mx-auto w-36 h-36 cursor-pointer'>
          <img className='w-36' src="../../src/assets/Scrolldown.gif" alt="" />
        </a>
      </div>
    </section>
  )
}

export default Parallax