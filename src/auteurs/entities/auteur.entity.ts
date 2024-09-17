import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auteur {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nom: string
}
