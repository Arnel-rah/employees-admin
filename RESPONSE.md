
### Question 1.1
Le dataProvider est un objet JavaScript qui sert de passerelle entre l'application React-Admin et l'API REST.

Son rôle est de traduire les actions de l'interface (comme afficher une liste, créer, modifier ou supprimer un employé) en requêtes HTTP (GET, POST, PUT, DELETE) que le serveur de données (json-server) peut comprendre

### Question 1.2
Lors du chargement de la liste, le navigateur envoie une requête avec la méthode GET

### Question 2.1
La prop rowClick="edit" rend toutes les lignes du tableau cliquables. Dès qu'un utilisateur clique sur la ligne d'un employé, il est automatiquement redirigé vers sa page de modification

### Question 2.2
Le tableau restreint son affichage à un maximum de 2 employés simultanément à l'écran.

### Question 3.1
Le formulaire bloque la validation et empêche la soumission et un message d'erreur rouge apparaît sous le champ Prénom pour indiquer qu'il est requis, et aucune requête HTTP n'est envoyée à l'API

### Question 3.2
Le formulaire bloque à nouveau la soumission. un message d'erreur s'affiche sous le champ Salaire indiquant que la valeur saisie est inférieure au seuil minimal autorisé, car la règle de validation minValue(1500) a été déclenchée

### Question 4.1
Lors de la sauvegarde d'une modification, la méthode HTTP utilisée est PUT ou PATCH. Elle envoie les données modifiées vers l'URL spécifique de l'enregistrement concern

### Question 4.2
Disponibilité :useRecordContext() est disponible uniquement si le composant qui l'appelle est placé à l'intérieur d'un composant parent qui fournit un contexte d'enregistrement
Pendant le chargement : Si l'enregistrement n'est pas encore chargé depuis l'API, le hook retourne undefined Il est donc indispensable de gérer ce cas pour éviter que l'application ne plante pendant le chargement des données.

### Question 5.1
SimpleShowLayout:  Il affiche tous les champs de l'employé les uns en dessous des autres sur une seule et unique page. C'est parfait pour les structures simples avec peu de données.
TabbedShowLayout :  Il organise les champs en **plusieurs onglets cliquables L'utilisateur doit naviguer d'un onglet à un autre pour révéler les différentes catégories d'informations
