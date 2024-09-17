import { Module } from '@nestjs/common';
import { LivresController } from './livres.controller';
import { LivresService } from './livres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livre } from './entities/livre.entity';

@Module({
  controllers: [LivresController],
  providers: [LivresService],
  imports: [TypeOrmModule.forFeature([Livre])]
})
export class LivresModule {}
