import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { LivresService } from './livres.service';
import { BiblioProtechaireGuard } from 'src/guard/biblio-protechaire.guard';

@Controller('livres')
export class LivresController {
  constructor(private readonly livreService: LivresService) {}

  // GET /livres/(?auteur={nom})
  @Get()
  getLivres(@Query('auteur') auteur: string) {
    if (auteur) {
      return this.livreService.getLivresByAuteur(auteur);
    }

    return this.livreService.getLivres();
  }

  // GET /livres/{id}
  @Get(':id')
  getLivre(@Param('id', ParseIntPipe) id: number) {
    return this.livreService.getLivre(id);
  }

  // POST /livres
  @Post()
  @UseGuards(BiblioProtechaireGuard)
  async createLivre(
    @Body(new ValidationPipe()) createLivreDto: CreateLivreDto,
  ) {
    return this.livreService.createLivre(createLivreDto);
  }

  // PUT /livres
  @Put(':id')
  @UseGuards(BiblioProtechaireGuard)
  updateLivre(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe({ skipMissingProperties: true }))
    updatedLivreDto: UpdateLivreDto,
  ) {
    return this.livreService.updateLivre(id, updatedLivreDto);
  }

  // DELETE /livres
  @Delete(':id')
  @UseGuards(BiblioProtechaireGuard)
  deleteLivre(@Param('id', ParseIntPipe) id: number) {
    return this.livreService.removeLivre(id);
  }
}
