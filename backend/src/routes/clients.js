import express from 'express';
import * as clientController from '../controllers/clientController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientById);
router.post('/', authenticate, clientController.createClient);
router.put('/:id', authenticate, clientController.updateClient);
router.delete('/:id', authenticate, clientController.deleteClient);

export default router;
