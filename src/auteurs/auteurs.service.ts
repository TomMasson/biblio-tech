import { Injectable } from '@nestjs/common';
import { CreateAuteurDto } from './dto/create-auteur.dto';
import { UpdateAuteurDto } from './dto/update-auteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auteur } from './entities/auteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuteursService {
  constructor (
    @InjectRepository(Auteur)
    private readonly auteurRepository: Repository<Auteur>) {}

  findAuteurs() {
    return this.auteurRepository.find();
  }
  
  findAuteurById(id: number) {
    const auteur = this.auteurRepository.findOne({where: {id: id}});

    if (!auteur) {
      throw new Error("L'auteur dont l'ID est " + id + " n'existe pas.")
    }

    return auteur;
  }

  findAuteurByName(name: string) {
    const auteur = this.auteurRepository.findOne({where: {nom: name}});

    if (!auteur) {
      throw new Error("L'auteur " + name + " n'existe pas");
    }

    return auteur;
  }

  create(createAuteurDto: CreateAuteurDto) {
    const newAuteur = {
      ...createAuteurDto
    }

    return this.auteurRepository.save(newAuteur);
  }

    async update(id: number, updateAuteurDto: UpdateAuteurDto) {
    const auteur = await this.auteurRepository.findOne({where: {id: id}});

    if (auteur) {
      const newAuteur = {...auteur, ...updateAuteurDto}
      return this.auteurRepository.save(newAuteur);
    }

    return null;
  }

  remove(id: number) {
    return this.auteurRepository.delete(id);
  }
}
