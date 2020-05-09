var db = require("../models");
var path = require("path");

var Sequelize = require("sequelize");

module.exports = function(app){

	const Op = Sequelize.Op;

	app.post("/api/login", function(req, res){

		var email = req.body.email;
		var password = req.body.password;

		db.users.findAll({where: {email: email, password: password}})
			.then(result => {

				if(result[0] === undefined){

					res.json({"user": false});

				}
				else{

					res.json({"user": true, "id": result[0].id});

				}

			})
			.catch(err => {throw err;});

	});

	app.post("/api/signup", function(req, res){

		db.users.create(req.body)
			.then(result => {

				res.json(result);

			})
			.catch(err => {throw err;});

	});

	app.post("/api/vendors/login", function(req, res){

		var email = req.body.email;
		var password = req.body.password;

		db.vendors.findAll({where: {email: email, password: password}})
			.then(result => {

				if(result[0] === undefined){

					res.json({"user": false});

				}
				else{

					res.json({"user": true, "id": result[0].id});

				}

			})
			.catch(err => {throw err;});

	});

	app.post("/api/vendors/signup", function(req, res){

		db.vendors.create(req.body)
			.then(result => {

				res.json(result);

			})
			.catch(err => {throw err;});

	}); 

	app.get("/api/services", function(req, res){

		db.services.findAll()
			.then(result => {
				res.json(result);
			})
			.catch(err => {throw err;});

	});

	app.get("/api/services/:id", function(req, res){

		var id = req.params.id;

		db.services.findAll({where: {id: id}})
			.then(result => {
				res.json(result);
			})
			.catch(err => {throw err;});

	});

	app.post("/api/create/services", function(req, res){

		db.services.create(req.body)
			.then(result => {
				res.json(result);
			})
			.catch(err => {throw err;});

	});

	app.get("/api/search/:keyword", function(req, res){

		var keyword = req.params.keyword;

		db.services.findAll({where: {title: {[Op.like]: "%" + keyword + "%"}}})
			.then(result => {

				res.json(result);

			})
			.catch(err => {throw err;});
    
	});

	app.post("/api/create/reviews", function(req, res){

		db.reviews.create(req.body)
			.then(result => {
				res.json(result);
			})
			.catch(err => {throw err;});

	});

	app.get("/api/reviews/:id", function(req, res){

		var id = req.params.id;

		db.reviews.findAll({where: {id_service: id}})
			.then(result => {
				res.json(result);
			})
			.catch(err => {throw err;});

    });
    
    app.get("/index", function(req, res){

        res.sendFile(path.join(__dirname, "index.html"));

    });

};