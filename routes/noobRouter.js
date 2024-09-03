import express from 'express';
export const router = express.Router();

router.get('/', getInformation);
router.post('/', addInformation);

export async function getInformation(req, res, next) {
  try {
    res.status(200).send({
      data: [
        { name: 'dog', weight: 45 },
        { name: 'rat', weight: 1.25 }
      ],
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function addInformation(req, res, next) {
  const { body } = req;
  try {
    res.status(200).send({ yourBody: body });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}