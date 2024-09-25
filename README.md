<h1>BIBLIO-TECH</h1>
<p>Emprunter des livres n'a jamais été aussi fluide</p>

## Description

Ce projet a but pédagogique cherche a créer un système de stockage & d'emprunt de livres

## SOCLE TECHNIQUE

NestJS & React

## SETUP L'ENVIRONNEMENT

En l'état, le front se lance sur le port 3000 & le back sur le port 3001. Pour l'instant aucune config n'a été fait sur des variables d'env, il faut donc ajuster ces ports dans `backend/src/main.ts` & `frontend/package.json`
#L'objectif à terme est de configurer des fichiers .env

## DEMARRER L'APPLI

Pour démarrer le front (en mode dev), il suffit de lancer

```bash
npm run dev
```

Pour le back (toujours en mode dev), on lance

```bash
npm start dev
```
