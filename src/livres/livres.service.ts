import { Injectable } from '@nestjs/common';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livre } from './entities/livre.entity';

@Injectable()
export class LivresService {
    constructor(
        @InjectRepository(Livre)
        private livreRepository: Repository<Livre>
       ) {}

    getLivres() {
        return this.livreRepository.find();
    }

    getLivresByAuteurID(auteurID: number) {
        return this.livreRepository.findBy({auteurID});
    }

    getLivre(id: number) {
        const livre = this.livreRepository.findOne({where: {id: id}});

        if (!livre) {
            throw new Error("Le livre dont l'ID est "+id+" n'existe pas");
        }

        return livre;
    }

    createLivre(createLivreDto: CreateLivreDto) {
        const newLivre = {
            ...createLivreDto
        }
        return this.livreRepository.save(newLivre);
    }

    async updateLivre(id: number, updateLivreDto: UpdateLivreDto) {
        const livre = await this.livreRepository.findOne({where: {id: id}});

        if (livre) {
            const newLivre = {...livre, ...updateLivreDto};
            this.livreRepository.save(newLivre);

            return newLivre;
        }

        return null;
    }

    async removeLivre(id:number) {
        return await this.livreRepository.delete(id);
    }
}
