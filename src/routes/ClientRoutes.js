
import express from "express";
import { createClient, getClientById, getClients, updateClient, deleteClient } from "../controllers/userController.js"

const router = express.Router();

router.post("/", createClient);
router.get("/", getClients);
router.get("/:id", getClientById);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;
