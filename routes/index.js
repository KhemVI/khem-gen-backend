
import express from 'express';
import { router as pigRouter } from './pigRouter.js';
import { router as catRouter } from './catRouter.js';
import { router as mailRouter } from './mailRouter.js';

const router = express.Router()

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a greeting message
 *     description: Returns a greeting message from the server
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Hello, world! 2
 */
router.get('/', (req, res) => {
  res.json('Hello, world! This is API');
});

router.use('/pig', pigRouter);
router.use('/cat', catRouter);
router.use('/mail', mailRouter);

export default router;