import { Router } from 'express';
import { getInvoiceByUserValidator, updateInvoiceValidator } from '../middlewares/invoice-validator.js';
import { updateInvoice,getInvoiceByUser } from './invoice.controller.js';

const router = Router();

router.put("/updateInvoice/:id", updateInvoiceValidator, updateInvoice)
router.get("/invoices", getInvoiceByUserValidator, getInvoiceByUser)

export default router;