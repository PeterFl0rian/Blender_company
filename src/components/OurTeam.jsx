import { Team } from "../constants"

const OurTeam = () => {
  return (
    <section id="our-team" className="bg-dark flex justify-center items-center flex-col h-fit md:h-screen">
      <div className="w-2/3 text-center text-white">
        <h2 className="text-tertiary md:text-3xl text-xl text-tertiary py-8 tracking-customtight">NAŠ TÍM</h2>
        <h3 className="md:text-5xl text-xl md:mb-7 mb-2">Spoznajte náš tím</h3>
        <h3 className="md:text-4xl text-md md:mb-2 mb-0">Vášnivý. Aktívny. Fantastický.</h3>
        <p className="md:text-xl text-sm">Vedieme so starostlivostov, konamé s rozumom a tvoríme vašu fantáziu</p>
      </div>

      <div className="w-5/6 flex justify-center items-center md:h-1/2 h-fit">
        <div className="w-5/6 flex md:justify-around justify-center flex-wrap">
          {Team.map((data) => (
              <div
                className="p-5"
                key={data.id}
              >
                <div className="w-48 h-48 bg-white rounded-full"></div>
                <h2 className="text-white text-center pt-5 text-2xl">{data.name}</h2>
                <p className="text-white text-center text-md">{data.position}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam