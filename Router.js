import { Router } from "express";
import {
  insertProduto,
  updateProduto,
  selectProdutos,
  selectProduto,
  deleteProduto,
} from "./Controller/Produto.js";

const router = Router();

router.post("/Produto", insertProduto);
router.put("/Produto", updateProduto);
router.get("/Produtos", selectProdutos);
router.get("/Produto", selectProduto);
router.delete("/Produto", deleteProduto);

export default router;
