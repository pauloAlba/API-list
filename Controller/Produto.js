import {openDb} from "../configDB.js"

export async function insertProduto(req, res) {
  let produto = req.body
  openDb().then((db) => {
    db.run(`INSERT INTO produtos (nomeProduto, quantidade) VALUES (?,?)`, [
      produto.nomeProduto,
      produto.quantidade,
    ]);
  });
  res.json({
    "statusCode": 200
  })
}

export async function updateProduto(req, res) {
  let produto = req.body
  openDb().then((db) => {
    db.run(`UPDATE Produtos SET nomeProduto=?, quantidade=? WHERE id=?`, [
      produto.nomeProduto,
      produto.quantidade,
      produto.id,
    ]);
  });
  res.json({
    "statusCode": 200
  })
}

export async function selectProdutos(req, res) {
  openDb().then((db) => {
    db.all(`SELECT * FROM produtos`)
    .then((produtos) => res.json(produtos));
  });
}

export async function selectProduto(req,res) {
  let id = req.query.id
  openDb().then((db) => {
    db.get(`SELECT * FROM produtos WHERE id=?`, [id])
    .then((produto) => res.json(produto));
  });
}


export async function deleteProduto(req, res) {
  let id = req.body.id
  openDb().then((db) => {
    db.get(`DELETE FROM produtos WHERE id=?`, [id])
    .then((res) => res);
  });
  res.json({
    "statusCode": 200
  })
}
