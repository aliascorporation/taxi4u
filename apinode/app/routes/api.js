module.exports = function (app) {
	var request = require('request');
	var geocoder = require('geocoder');
	
	//Données de test
	var lesTaxis = [
		 {
		  "ads": {
			"insee": "string",
			"numero": "string"
		  },
		  "crowfly_distance": 0,
		  "driver": {
			"departement": "string",
			"professional_licence": "string"
		  },
		  "id": "01",
		  "last_update": 0,
		  "operator": "string",
		  "position": {
			"lat": 49,
			"lon": 2
		  },
		  "rating": 0,
		  "status": "string",
		  "vehicle": {
			"characteristics": [
			  "string"
			],
			"color": "string",
			"constructor": "string",
			"licence_plate": "string",
			"model": "string",
			"nb_seats": 0
		  }
		},
		
		//2
		{
		  "ads": {
			"insee": "string",
			"numero": "string"
		  },
		  "crowfly_distance": 0,
		  "driver": {
			"departement": "string",
			"professional_licence": "string"
		  },
		  "id": "02",
		  "last_update": 0,
		  "operator": "string",
		  "position": {
			"lat": 50,
			"lon": 3
		  },
		  "rating": 0,
		  "status": "string",
		  "vehicle": {
			"characteristics": [
			  "string"
			],
			"color": "string",
			"constructor": "string",
			"licence_plate": "string",
			"model": "string",
			"nb_seats": 0
		  }
		},
		
		//3
		{
		  "ads": {
			"insee": "string",
			"numero": "string"
		  },
		  "crowfly_distance": 0,
		  "driver": {
			"departement": "string",
			"professional_licence": "string"
		  },
		  "id": "03",
		  "last_update": 0,
		  "operator": "string",
		  "position": {
			"lat": 49,
			"lon": 2
		  },
		  "rating": 0,
		  "status": "string",
		  "vehicle": {
			"characteristics": [
			  "string"
			],
			"color": "string",
			"constructor": "string",
			"licence_plate": "string",
			"model": "string",
			"nb_seats": 0
		  }
		}
	];

	// Add headers
	app.use(function (req, res, next) {
		res.setHeader('X-Powered-By', 'UNIV-LR');
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
	    res.setHeader('Access-Control-Allow-Credentials', true);
	    next();
	});
	
	app.options('*', function (req, res) {
	    res.send();
	});
	
	app.get('/taxis', function(req, res) {
		var ville = req.query.ville;
		var lon = req.query.lon;
		var lat = req.query.lat;
		
		//Sans géolocalisation ip, on cherche à partir de la vile rensignée
		if(typeof lon === 'undefined' || typeof lat === 'undefined'){
			geocoder.geocode(ville, function ( err, data ) {
			  // do stuff with data
			  lon = data.results[0].geometry.location.lng;
			  lat = data.results[0].geometry.location.lat;
			  
			  console.log(lat);
			  console.log(lon);
			  
			  //API le.taxi
				request({
					uri: "https://api.taxi/taxis?lat="+lat+"&lon="+lon,
					method: "GET",
					headers: {
						"Accept": "application/json",
						"X-VERSION": 2,
						"X-API-KEY": "46f06ed1-0124-4edc-9283-0df69a604ef4"
					}
				}, function(err, response, body){
					var result = {data : JSON.parse(body)};
					res.type('application/json');
					res.json(result);
					
				});
			  
			});
		}
		
		else{
			//Si on a la géolocalisation ip, on trouve directement les taxi avec lat/lon
			geocoder.reverseGeocode( lat, lon, function ( err, data ) {
			  var addr = data.results[0].formatted_address;
			  request({
					uri: "https://api.taxi/taxis?lat="+lat+"&lon="+lon,
					method: "GET",
					headers: {
						"Accept": "application/json",
						"X-VERSION": 2,
						"X-API-KEY": "46f06ed1-0124-4edc-9283-0df69a604ef4"
					}
				}, function(err, response, body){
					var result = {data : JSON.parse(body).data, adress: addr};
					console.log(result);
					res.type('application/json');
					res.json(result);
					
				});
			  
			  
			});
		}
		
		
		//Notre API
		/*var taxis = [];
		lesTaxis.forEach(function(taxi){
			if(taxi.position.lat == lat && taxi.position.lon == lon){
				taxis.push(taxi);
			}
		});*/
		
		
	});
	
	app.get('/taxis/:id', function(req, res) {
		var id = req.params.id;
		var taxiFound;
		lesTaxis.forEach(function(taxi){
			if(taxi.id == id){
				taxiFound = taxi;
				return;
			}
		});
		
		var result = {data:taxiFound};
		res.json(result);
	});
}