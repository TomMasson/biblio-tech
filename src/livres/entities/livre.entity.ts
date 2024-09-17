import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { genres } from "../enum/genres";

@Entity()
export class Livre {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titre: string

    @Column()
    auteurID: number

    @Column({default: genres.Autre})
    genre: genres

    @Column({nullable: true})
    serie: string
}
