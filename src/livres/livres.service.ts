import { Injectable } from '@nestjs/common';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';

@Injectable()
export class LivresService {
    private livres = [
        {id: 0, titre: 'Pot-bouille', auteur: 'Zola'},
        {id: 1, titre: 'Germinal', auteur: 'Zola'},
        {id: 2, titre: '20 milieux sous les maires', auteur: 'Jules Vernes'},
        {id: 3, titre: "L'Etranger", auteur: 'Albert Camus'}
    ]

    getLivres(auteur?: string) {
        if (auteur) {
            return this.livres.filter((livre) => livre.auteur === auteur);
        }

        return this.livres;
    }

    getLivre(id?: number) {
        const livre = this.livres.find((livre) => livre.id === id)

        if (!livre) {
            throw new Error("Le livre dont l'ID est "+id+" n'existe pas");
        }

        return livre;
    }

    createLivre(createLivreDto: CreateLivreDto) {
        const newLivre = {
            id: Date.now(),
            ...createLivreDto
        }
        this.livres.push(newLivre);

        return newLivre;
    }

    updateLivre(id: number, updateLivreDto: UpdateLivreDto) {
        this.livres = this.livres.map((livre) => {
            if (livre.id === id) {
                return {...livre, ...updateLivreDto}
            }

            return livre;
        });

        return this.getLivre(id);
    }

    removeLivre(id:number) {
        const livreToRemove = this.getLivre(id);

        this.livres = this.livres.filter((livre) => livre.id !== id);

        return livreToRemove;
    }
}
