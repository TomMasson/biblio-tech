import { Module } from '@nestjs/common';
import { LivresModule } from './livres/livres.module';
import { AuteursModule } from './auteurs/auteurs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livre } from './livres/entities/livre.entity';
import { Auteur } from './auteurs/entities/auteur.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [Livre, Auteur],
    synchronize: true
  }),
  LivresModule, AuteursModule]
})
export class AppModule {}
