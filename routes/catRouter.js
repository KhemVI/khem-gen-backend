import express from 'express';
export const router = express.Router();
router.get('/', getCat);

/**
 * @swagger
 * /cat/:
 *   get:
 *     summary: Returns cat data
 *     description: Returns cat data from the server
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
 *               - name: 'cat1'
 *                 weight: 8
 *               - name: 'cat2'
 *                 weight: 6.5
 */
export async function getCat(req, res, next) {
  try {
    res.status(200).send({
      data: [
        { name: 'cat1', weight: 8 },
        { name: 'cat2', weight: 6.5 }
      ],
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}