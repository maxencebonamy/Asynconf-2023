# Tournoi Asynconf 2023

<p align="center">
	<img src="https://github.com/maxencebonamy/maxencebonamy/blob/main/assets/Asynconf_2023.png" width="100%" alt="Sand Box">
</p>

<br>

## Description

Voici mon projet pour cette édition du tournoi de l'Asynconf. Je l'ai réalisé sous forme de site web, disponible à l'adresse <a href="https://asynconf.maxencebonamy.fr" target="_blank">asynconf.maxencebonamy.fr</a>.
<br>
Vous retrouverez ci-dessous les instructions pour exécuter le code, ainsi qu'une description brève du travail que j'ai réalisé conformément aux attentes du jury. Ensuite, vous retrouverez les technologies que j'ai utilisées pour réaliser le projet ainsi que l'arborescence du projet.

> [!IMPORTANT]
> Le projet se lance sur Replit mais n'est vraiment pas stable du tout, donc si vous voulez l'essayer, je vous conseille très fortement de vous rendre plutôt ici : <a href="https://asynconf.maxencebonamy.fr" target="_blank">asynconf.maxencebonamy.fr</a> !

<br>

## Lancement du code

### Lancer le code avec Replit

1. **Se rendre** sur le <a href="https://replit.com/@MaxenceBonamy/AGB" target="_blank">dépôt Replit</a>.

2. **Cliquer** sur le bouton `Run`, ceci installera les dépendances et exécutera le code.

### Lancer le code sur une autre machine

> [!NOTE]
> *Prerequis:*
> - [x] *Git doit être installé. Si ce n'est pas le cas, <a href="https://git-scm.com/downloads" target="_blank">se rendre ici</a>.*
> - [x] *NodeJS doit être installé. Si ce n'est pas le cas, <a href="https://nodejs.org/" target="_blank">se rendre ici</a>.*
<br>

1. **Cloner** ce dépôt GitHub à l'aide de la commande suivante :
```
git clone https://github.com/maxencebonamy/AGB
```

2. **Naviguer** à l'intérieur du dossier en tapant cette commande :
```
cd AGB
```

3. **Installer** les dépendances NodeJS à l'aide de la commande suivante :
```
npm i
```

4. **Exécuter** le code en tapant cette commande :
```
npm run dev
```

<br>

## Travail réalisé

- Le site est entièrement "responsive", c'est-à-dire qu'il est adapté pour les tailles d'écran les plus communes (notament ordinateur, tablette et smartphone).
- Il est possible de choisir entre le thème sombre et le thème clair, et ce à l'aide du "toggle" placé à droite de la barre de navigation.
- Des tests unitaires ont été mis en place pour tester l'algorithme principal, ainsi que d'autres fonctionnalités. Pour les lancer, il suffit de taper la commmande :
```
npx jest
```
- J'ai choisi d'utiliser des fichiers au format `json` pour stocker les données liées au fonctionnement de l'algorithme. Ils sont placés dans le dossier `src/assets/data`.
- La modification d'un de ces fichiers entraînera automatiquement des modifications sur le site de manière à ajouter, modifier ou supprimer des options très facilement.
- Le code est commenté de manière à expliquer les instructions ou fonctions qui ne sont pas explicites.

- *Je n'ai malheureusement pas eu le temps de réaliser des tests de scénarios pour les composants avec React Testing Library.*

<br>

## Technologies utilisées

Pour réaliser ce projet, j'ai fait le choix d'utiliser les technologies suivantes :

- [x] **<a href="https://nextjs.org" target="_blank">NextJS</a>** : Un des framework React les plus répandus. Bien que je n'utilise pas la plupart de ses fonctionnalités dans ce projet, il reste un choix tout à fait cohérent.
- [x] **<a href="https://typescriptlang.org" target="_blank">Typescript</a>** : Le langage que j'ai choisi d'utiliser pour avoir un code type-safe et ainsi plus maintenable.
- [x] **<a href="https://react.dev" target="_blank">React</a>** : La librairie JavaScript que j'utilise le plus, c'est donc un choix assez logique pour moi de l'utiliser dans ce projet.
- [x] **<a href="https://tailwindcss.com" target="_blank">TailwindCSS</a>** : La librairie CSS que j'utilise dans la plupart de mes projets pour gagner en efficacité.
- [x] **<a href="https://ui.shadcn.com" target="_blank">Shadcn/UI</a>** : Une librairie React & Tailwind qui fournit des composants d'UI. J'ai ensuite apporté quelques modifications sur certains.
- [x] **<a href="https://eslint.org" target="_blank">ESLint</a>** : Le linter TypeScript que j'ai utilisé pour écrire du code propre et maintenable (je l'utilise également comme formatter).
- [x] **<a href="https://jestjs.io/" target="_blank">Jest</a>** : Une librairie JavaScript pour réaliser des tests unitaires.

<br>

- [x] J'ai également utilisé le logiciel **<a href="https://figma.com" target="_blank">Figma</a>** pour réaliser une maquette du site avant de le coder.
- [x] De plus, j'ai utilisé le site **<a href="https://flaticon.com" target="_blank">Flaticon</a>** pour trouver les icônes présentes sur le site.
- [x] Ensuite, j'ai utilisé quelques autres librairies utilitaires telles que **<a href="https://lucide.dev" target="_blank">Lucide</a>** pour quelques icônes supplémentaires ainsi que **<a href="https://www.npmjs.com/package/react-parallax-tilt" target="_blank">ReactParallaxTilt</a>** pour réaliser un effet "Tilt" sur certaines cartes.
- [x] Finalement, Pour héberger le site, j'ai utilisé **<a href="https://vercel.com/" target="_blank">Vercel</a>**.

<br>


## Arborescence du projet

Tout le code source se situe dans le dossier `src`.
- Sous-dossier `app` : Point de départ de l'application, le fichier `layout.tsx` englobe le fichier `page.tsx` (fonctionnement du routing de NextJS).
- Sous-dossier `assets` : Images, icônes et fichier de données au format `json`. Un fichier `README.md` est placé dans le dossier des données pour plus d'explications.
- Sous-dossier `components` : Tous les composants React utilisées dans l'application, ceux présents dans le sous-dossier `ui` viennent de la librairie Shadcn/UI, ce sont donc les seuls que je n'ai pas écrits.
- Sous-dossier `lib` : Les fichiers sources, qui correspondent à l'algorithme, aux fonctions utilitaires et les types.

Tous les tests se situent dans le dossier `tests`. La même arborescence que le dossier `src` est gardée.
