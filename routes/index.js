
import express from 'express';
import { router as pigRouter } from './pig.js';
import { router as catRouter } from './cat.js';

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
router.get('/hello', (req, res) => {
  res.json('Hello, world!');
});

router.use('/pig', pigRouter);
router.use('/cat', catRouter);
// router.use('/data-after-login', [authentication, verifyStaffRole], dataAfterLoginRouter);
export default router;