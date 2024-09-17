import { MinLength } from "class-validator"

export class CreateAuteurDto {
    id: number

    @MinLength(2, {message: "Merci de mettre plus que ses initiales !"})
    nom: string
}
