import express from 'express';
export const router = express.Router();
router.get('/', getPig);

/**
 * @swagger
 * /pig/:
 *   get:
 *     summary: Returns pigs data
 *     description: Returns pigs data from the server
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   weight:
 *                     type: number
 *                     format: float
 *             example:
 *               - name: 'pig1'
 *                 weight: 45
 *               - name: 'pig2'
 *                 weight: 70
 */
export async function getPig(req, res, next) {
  try {
    res.status(200).send({
      data: [
        { name: 'pig1', weight: 45 },
        { name: 'pig2', weight: 70 }
      ],
    });
  } catch (err) {
    logger.customError(req, err);
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}