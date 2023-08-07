import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap jusitify-center gap-7">
      {technologies.map((technology) => (
        <div className="sm:w-28 sm:h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>

      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")