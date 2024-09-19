import { Livre } from "src/livres/entities/livre.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'auteur'})
export class Auteur {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nom: string

    @OneToMany(() => Livre, (livre) => livre.auteur)
    livres: Livre[]
}
