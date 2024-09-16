import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { LivresService } from './livres.service';

@Controller('livres')
export class LivresController {
    constructor(private readonly livreService: LivresService) {}

    // GET /livres(?auteur={string})
    @Get()
    getLivres(@Query('auteur') auteur: string) {
        return this.livreService.getLivres(auteur)
    }

    // GET /livres/{id}
    @Get(':id')
    getLivre(@Param('id') id:string){
        return this.livreService.getLivre(+id);
    }

    //POST /livres
    @Post()
    createLivre(@Body() createLivreDto: CreateLivreDto) {
        return this.livreService.createLivre(createLivreDto);
    }

    @Put(':id')
    updateLivre(@Param('id') id:string, @Body() updatedLivreDto: UpdateLivreDto) {
        return this.livreService.updateLivre(+id, updatedLivreDto);
    }

    @Delete(':id')
    deleteLivre(@Param('id') id:string) {
        return this.livreService.removeLivre(+id);
    }
}

// GET /livres --> []
// GET /livres?auteur=string --> []
// GET /livres/:id --> {}
// POST /livres
// PUT /livres/:id --> {}
// DELETE /livres/:id