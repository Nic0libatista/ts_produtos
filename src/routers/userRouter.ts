import { Router } from "express";
import { getProduto, create, update,deleta } from "../controllers/userController";
const route = Router();
route.get("/produto",getProduto);
route.post("/create", create);
route.put("/update/:id",update)
route.delete("/delete/:id",deleta);
export default route;
