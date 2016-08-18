# Taxi4U

Taxi4U est une application permettant de lister les taxis disponnibles à proximité d'une adresse donnée.<br />
La liste des diférents taxis peut être obtenue soit en saisisant directement l'adresse, soit en partageant sa géolocalisation.

L'application comporte deux composants :
  - apinode
  - guiangular

L'API (apinode) permet de gérer les coordonnées géographiques et les envoie vers l'API [le.taxi][df1] afin de récupérer la liste des taxis.

Le client associé (guiangular) est une interface web communiquant avec l'API et affichant les taxis.

### Version
1.2

### Tech

Taxi4U utilise les technologies suivantes pour son fonctionnement:

* [AngularJS] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework


### Installation

* apinode:

```sh
$ git clone [git-repo-url] taxi4u
$ cd taxi4u
$ cd apinode
$ npm install
$ node server.js
```

* guiangular:

Lancer *index.html*


   [git-repo-url]: <https://github.com/aliascorporation/taxi4u.git>
   [df1]: <http://le.taxi/>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>


