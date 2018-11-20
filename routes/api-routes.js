const db =  require('../models');

module.exports = function(app) {

    //getting users
    app.get('/api/users', function (req, res) {
        db.User.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });

    });

    //posting the users
    app.post('/api/users', function (req, res) {
        db.User.create(req.body)
            .then(function (data) {
                res.json({
                    success: true
                });
            }).catch(function (err) {
                res.json(err);
            });
    });

    //get a single user
    app.get('/api/users/:id', function (req,res) {
        db.User.findById(req.params.id)
        .then(function(data) {
            res.json(data)    
        }).catch(function(err){
            res.json(err)
        })

    });

    //getting all posts
    app.get('/api/posts', function (req, res) {
        db.Post.find({})
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
      });
    

      //posting a post
      app.post('/api/posts', function (req, res) {
        db.Post.create(req.body)
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
      });
    

    //gettting a single post  
    app.get('/api/posts/:id', function (req,res) {
        db.Post.findById(req.params.id)
        .then(function(data) {
            res.json(data)    
        }).catch(function(err){
            res.json(err)
        })

    });



};