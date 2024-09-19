import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { genres } from "../enum/genres";
import { Auteur } from "src/auteurs/entities/auteur.entity";

@Entity({name: 'livre'})
export class Livre {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titre: string

    @Column({default: genres.Autre})
    genre: genres

    @Column({nullable: true})
    serie: string

    @Column({name: 'auteur_id'})
    auteurId: number

    @ManyToOne(() => Auteur, (auteur) => auteur.livres)
    @JoinColumn({name: 'auteur_id'})
    auteur: Auteur
}
