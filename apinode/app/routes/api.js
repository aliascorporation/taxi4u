module.exports = function (app) {
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
		var lon = req.query.lon;
		var lat = req.query.lat;
		var taxis = [];
		
		lesTaxis.forEach(function(taxi){
			if(taxi.position.lat == lat && taxi.position.lon == lon){
				taxis.push(taxi);
			}
		});
		
		var result = {data : taxis};
		
		res.type('application/json');
		res.json(result);
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