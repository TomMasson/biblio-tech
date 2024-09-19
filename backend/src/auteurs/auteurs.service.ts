import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuteurDto } from './dto/create-auteur.dto';
import { UpdateAuteurDto } from './dto/update-auteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auteur } from './entities/auteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuteursService {
  constructor(
    @InjectRepository(Auteur)
    private readonly auteurRepository: Repository<Auteur>,
  ) {}

  findAuteurs() {
    return this.auteurRepository.find({
      relations: {
        livres: true,
      },
    });
  }

  async findAuteurById(id: number) {
    try {
      const auteur = await this.auteurRepository.findOne({ where: { id: id } });

      if (!auteur) {
        throw new NotFoundException(
          "L'auteur dont l'ID est " + id + " n'existe pas.",
        );
      }

      return auteur;
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new BadRequestException(
        "Une erreur est survenue lors de la récupération de l'auteur.",
      );
    }
  }

  async findAuteurByName(name: string) {
    try {
      const auteur = await this.auteurRepository.findOne({
        where: { nom: name },
      });

      if (!auteur) {
        throw new NotFoundException("L'auteur " + name + " n'existe pas");
      }

      return auteur;
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new BadRequestException(
        "Une erreur est survenue lors de la récupération de l'auteur.",
      );
    }
  }

  async create(createAuteurDto: CreateAuteurDto) {
    try {
      const livre = this.auteurRepository.create(createAuteurDto);
      return await this.auteurRepository.save(livre);
    } catch (error) {
      throw new BadRequestException(
        'Une erreur est survenue lors de la création de votre auteur.',
      );
    }
  }

  async update(id: number, updateAuteurDto: UpdateAuteurDto) {
    try {
      const auteur = await this.auteurRepository.findOne({ where: { id: id } });

      if (!auteur) {
        throw new NotFoundException(
          "L'auteur que vous cherchez à modifier n'existe pas ou plus.",
        );
      }

      const newAuteur = { ...auteur, ...updateAuteurDto };
      await this.auteurRepository.save(newAuteur);

      return newAuteur;
    } catch (error) {
      // 404 est la seule erreur gérée
      if (error.status === 404) {
        throw error;
      }
      throw new BadRequestException(
        'Une erreur est survenue lors de la modification du livre ' +
          updateAuteurDto.nom,
      );
    }
  }

  async remove(id: number) {
    try {
      return await this.auteurRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(
        "Une erreur est survenue lors de la supression de l'auteur.",
      );
    }
  }
}
