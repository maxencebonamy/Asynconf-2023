# Données

Chaque fichier de données `json` est une liste d'objets dont les propriétés sont expliquées ci-dessous.
Chaque liste peut être modifiée : des éléments peuvent être rajoutés, supprimés ou édités, à la seule condition de respecter les instrictions suivantes.
À noter que les modifications seront automatiquement mises à jour sur le site web.

## Type de véhicule (`cars.json`)

- `id` : Identifiant de type `string`, doit être **unique**
- `name` : Nom du véhicule affiché sur la carte
- `minWeight` : Poids minimal (uniquement à titre informatif)
- `maxWeight` : Poids maximal (uniquement à titre informatif)
- `mark` : Note /10 d'écologie

## Type d'énergie (`energies.json`)

- `id` : Identifiant de type `string`, doit être **unique**
- `name` : Nom de l'énergie affiché sur la carte
- `mark` : Note /10 d'écologie

## Distance parcourue (`distances.json`)

*Les distances minimales et maximales mises bout à bout doivent se suivre.*
- `id` : Identifiant de type `number`, doit être **unique**
- `min` : Distance minimale
- `max` : Distance maximale
- `mark` : Note /10 d'écologie

## Année de fabrication (`years.json`)

*Les années inférieures et supérieures mises bout à bout doivent se suivre.*
- `id` : Identifiant de type `number`, doit être **unique**
- `min` : Année inférieure
- `max` : Année supérieure
- `mark` : Note /10 d'écologie

## Nombre de passagers (`passengers.json`)

- `id` : Identifiant de type `number`, doit être **unique**
- `name` : Nom affiché sur la carte
- `nbPassengers` : Nombre de passagers
- `extra` : Taux ajouté (ou oté si négatif) au taux final

## Taux d'emprunts (`loan_rates.json`)

*Les scores inférieurs et supérieurs mises bout à bout doivent se suivre.*
*De plus, le taux maximal doit être prévu pour correspondre à la somme totale possible.*
- `id` : Identifiant de type `number`, doit être **unique**
- `scoreMin` : Score inférieur
- `scoreMax` : Score supérieur
- `rate` : Taux d'emprunt