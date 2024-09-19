import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BiblioProtechaireGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // CET EXERCICE EST EFFECTUE PAR UN DEBUTANT, NE PAS REPRODUIRE
    // dans un contexte proffesionnel, il faudrait utiliser soit un token d'authenntification, soit implémenter des users avec différents droits
    if (request.query.mdp) {
      return request.query.mdp === 'IAmBiblioProtecter';
    }

    return false;
  }
}
