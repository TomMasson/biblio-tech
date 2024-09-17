import { IsEnum, MinLength } from "class-validator"
import { genres } from "../enum/genres"

export class CreateLivreDto {
    id: number
    @MinLength(3, {message: "Le titre d'un livre fait probablement plus de 2 caractères..."})
    titre: string
    auteurId: number
    @IsEnum(genres, {message: "Le genre du livre proposé n'est pas correct"})
    genre: genres
}
