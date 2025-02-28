import { Router } from 'express';
import { updateInvoiceValidator } from '../middlewares/invoice-validator.js';
import { updateInvoice } from './invoice.controller.js';

const router = Router();

router.put("/updateInvoice/:id", updateInvoice)

export default router;