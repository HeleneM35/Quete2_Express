const express = require('express');
const app = express();
const connection = require('./conf');
const port = 3000;

app.use(express.json())

app.get('/api/movies', (req, res) => {
  connection.query('SELECT * from movie', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films')
    } else {
      res.json(results)
    }
  })
});

// app.get('/api/movies/:id', (request, response) => {
//   response.json({ id: request.params.id });
//   });

// app.get('/api/employee', (request, response) => {
//   const name = request.query.name
//   response.status(404).send(`Impossible de récupérer l\'employé ${name}`)
//   });


// // écoute de l'url "/api/employees"
// app.get('/api/employees', (req, res) => {
//   // connection à la base de données, et sélection des employés
//   connection.query('SELECT * from employee', (err, results) => {
//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       res.status(500).send('Erreur lors de la récupération des employés');
//     } else {
//       // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//       res.json(results);
//     }
//   });
// });

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});