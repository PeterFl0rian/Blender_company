const Services = () => {
  return (
    <section id="services" className="bg-dark flex flex-col justify-center items-center">
      <div className="w-2/3">
        <h2 className="text-tertiary md:text-3xl text-xl py-8 tracking-customtight text-center">SLUŽBY</h2>
      </div>
      
      {/*Product design*/}
      <div className="text-center">
        <h1 className="text-white">Productovy dizajn</h1>
        <h1 className="text-white">Vývoj</h1>
        <h1 className="text-white">Reverzné inžinierstvo</h1>
        <h1 className="text-white">Rapid prototyping</h1>
        <h1 className="text-white">3D animácie pre marketingové účely</h1>
      </div>

      {/*Screen*/}
      <div className='flex items-center justify-center overflow-hidden bg-secondary'>
        <div>
          <video className='w-screen' autoPlay loop muted>
            <source src='../../src/assets/Bg-video.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Services