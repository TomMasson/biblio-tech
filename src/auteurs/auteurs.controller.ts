import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuteursService } from './auteurs.service';
import { CreateAuteurDto } from './dto/create-auteur.dto';
import { UpdateAuteurDto } from './dto/update-auteur.dto';

@Controller('auteurs')
export class AuteursController {
  constructor(private readonly auteursService: AuteursService) {}

  @Post()
  create(@Body() createAuteurDto: CreateAuteurDto) {
    return this.auteursService.create(createAuteurDto);
  }

  @Get()
  findAll() {
    return this.auteursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auteursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuteurDto: UpdateAuteurDto) {
    return this.auteursService.update(+id, updateAuteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auteursService.remove(+id);
  }
}
