import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivresModule } from './livres/livres.module';
import { AuteursModule } from './auteurs/auteurs.module';

@Module({
  imports: [LivresModule, AuteursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
