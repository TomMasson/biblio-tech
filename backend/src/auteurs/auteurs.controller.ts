import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put, Query, UseGuards } from '@nestjs/common';
import { AuteursService } from './auteurs.service';
import { CreateAuteurDto } from './dto/create-auteur.dto';
import { UpdateAuteurDto } from './dto/update-auteur.dto';
import { BiblioProtechaireGuard } from 'src/guard/biblio-protechaire.guard';

@Controller('auteurs')
export class AuteursController {
  constructor(private readonly auteursService: AuteursService) {}

  @Get()
  findAll(@Query('nom') name: string) {
    if (name) {
      return this.auteursService.findAuteurByName(name);
    }
   
    return this.auteursService.findAuteurs();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.auteursService.findAuteurById(id);
  }

  @Post()
  @UseGuards(BiblioProtechaireGuard)
  create(@Body() createAuteurDto: CreateAuteurDto) {
    return this.auteursService.create(createAuteurDto);
  }

  @Put(':id')
  @UseGuards(BiblioProtechaireGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAuteurDto: UpdateAuteurDto) {
    return this.auteursService.update(id, updateAuteurDto);
  }

  @Delete(':id')
  @UseGuards(BiblioProtechaireGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.auteursService.remove(id);
  }
}
