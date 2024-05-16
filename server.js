const express = require("express");
const app = express();

app.use(express.json());

const apiUrl = 'https://jsonplaceholder.typicode.com';

async function fetchUsers() {
  try {
    const response = await fetch(`${apiUrl}/users`);
    const users = await response.json();
    return users
  }
  catch {
    return {error: 'teste'}
  }
}

app.get("/clients", async (req, res) => {
  const users = await fetchUsers();
  if(users.error) {
    res.status(500).send(users)
  } else {
    res.send(users)
  }
});

app.get("/clients/:id", async (req, res) => {
  const { id } = req.params
  const clients = await fetchUsers();

  const client = clients.find(cli => cli.id == id);

  if (!client) {
    return res.status(204).send({error: 'Client not found'});
  }
  
  res.send(client);
});

app.post("/clients", (req, res) => {
  const {name, email} = req.body

  // salvar

  res.send({name, email})
  
});

app.put("/clients/:id", async (req, res) => {
const {id} = req.params
const clients = await fetchUsers();

const client = clients.find(cli => cli.id == id);

if(!client) return res.status(204).send({error: "Client not found"})

const { name } = req.body;

client.name = name;

res.send(client);
  
});

app.delete("/clients/:id", async (req, res) => {
  const { id } = req.params;
  const clients = await fetchUsers();

  const clientsFiltered = clients.filter(cli => cli.id != id);

  res.send({data: clientsFiltered, message: "User deleted"});
});

app.listen(3000, () => {
  console.log("Server is running!");
});