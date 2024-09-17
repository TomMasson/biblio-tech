import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { LivresService } from './livres.service';
import { BiblioProtechaireGuard } from 'src/livres/guard/biblio-protechaire.guard';

@Controller('livres')
export class LivresController {
    constructor(private readonly livreService: LivresService) {}

    // GET /livres(?auteur={auteurID})
    @Get()
    getAllLivres() {
        return this.livreService.getLivres()
    }

    // GET /livres/{id}
    @Get(':id')
    getLivre(@Param('id', ParseIntPipe) id:number){
        try {
        return this.livreService.getLivre(id);
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //POST /livres
    @Post()
    @UseGuards(BiblioProtechaireGuard)
    createLivre(@Body(new ValidationPipe()) createLivreDto: CreateLivreDto) {
        return this.livreService.createLivre(createLivreDto);
    }

    @Put(':id')
    updateLivre(@Param('id', ParseIntPipe) id:number, @Body() updatedLivreDto: UpdateLivreDto) {
        return this.livreService.updateLivre(id, updatedLivreDto);
    }

    @Delete(':id')
    deleteLivre(@Param('id', ParseIntPipe) id:number) {
        return this.livreService.removeLivre(id);
    }
}

// GET /livres --> []
// GET /livres?auteur=string --> []
// GET /livres/:id --> {}
// POST /livres
// PUT /livres/:id --> {}
// DELETE /livres/:id