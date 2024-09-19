import { Module } from '@nestjs/common';
import { AuteursService } from './auteurs.service';
import { AuteursController } from './auteurs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auteur } from './entities/auteur.entity';

@Module({
  controllers: [AuteursController],
  providers: [AuteursService],
  imports: [TypeOrmModule.forFeature([Auteur])],
})
export class AuteursModule {}
