import express from 'express';
export const router = express.Router();
router.get('/', getCat);

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