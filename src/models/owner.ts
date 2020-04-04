import { Gender } from "./gender"
import Pet from "./pet"

type Owner = {
    name: string
    gender: Gender
    age: number
    pets: Pet[] | null | undefined
}

export default Owner