import express from 'express';
import * as serviceController from '../controllers/serviceController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);
router.post('/', authenticate, serviceController.createService);
router.put('/:id', authenticate, serviceController.updateService);
router.delete('/:id', authenticate, serviceController.deleteService);

export default router;
