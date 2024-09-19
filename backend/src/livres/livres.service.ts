import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livre } from './entities/livre.entity';

@Injectable()
export class LivresService {
  constructor(
    @InjectRepository(Livre)
    private livreRepository: Repository<Livre>,
  ) {}

  getLivres() {
    return this.livreRepository.find({
      relations: {
        auteur: true,
      },
    });
  }

  getLivresByAuteur(auteur: string) {
    return this.livreRepository.find({
      relations: {
        auteur: true,
      },
      where: {
        auteur: {
          nom: auteur,
        },
      },
    });
  }

  async getLivre(id: number) {
    try {
      const livre = await this.livreRepository.findOne({
        relations: {
          auteur: true,
        },
        where: { id: id },
      });

      if (!livre) {
        throw new NotFoundException(
          "Le livre dont l'ID est " + id + " n'existe pas",
        );
      }

      return livre;
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new BadRequestException(
        'Une erreur est survenue lors de la récupération du livre.',
      );
    }
  }

  async createLivre(createLivreDto: CreateLivreDto) {
    try {
      const livre = this.livreRepository.create(createLivreDto);
      return await this.livreRepository.save(livre);
    } catch (error) {
      throw new BadRequestException(
        'Une erreur est survenue lors de la création de votre livre.',
      );
    }
  }

  async updateLivre(id: number, updateLivreDto: UpdateLivreDto) {
    try {
      const livre = await this.livreRepository.findOne({ where: { id: id } });

      if (!livre) {
        throw new NotFoundException(
          "Le livre que vous cherchez à modifier n'existe pas ou plus.",
        );
      }

      const newLivre = { ...livre, ...updateLivreDto };
      await this.livreRepository.save(newLivre);

      return newLivre;
    } catch (error) {
      // 404 est la seule erreur gérée
      if (error.status === 404) {
        throw error;
      }
      throw new BadRequestException(
        'Une erreur est survenue lors de la modification du livre ' +
          updateLivreDto.titre,
      );
    }
  }

  async removeLivre(id: number) {
    try {
      return await this.livreRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(
        'Une erreur est survenue lors de la suppression du livre.',
      );
    }
  }
}
