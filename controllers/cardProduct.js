import CardProduct from "../models/cardProduct.js";
import NotReqError from "../errors/not-req-error.js";
import NotFoundError from "../errors/not-found-error.js";

export async function getCards(req, res, next) {
  await CardProduct.find({ type: req.query.productType })
    .orFail(() => {
      throw new NotFoundError("lista de cartas no encontrada");
    })
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
}

export async function getProduct(req, res, next) {
  await CardProduct.findOne({ cod: req.query.productCode })
    .orFail(() => {
      throw new NotFoundError("producto no encontrado");
    })
    .then((product) => {
      res.send(product);
      console.log(product);
    })
    .catch(next);
}

export async function createCardProduct(req, res, next) {
  const { photo, name, description, cod, price, type } = req.body;

  try {
    const newCardProduct = await CardProduct.create({
      photo,
      name,
      description,
      cod,
      price,
      type,
    });
    if (!newCardProduct) {
      throw new NotReqError("datos ingresados incorrectos");
    }
    res.status(201).send({ newCardProduct: newCardProduct });
  } catch (error) {
    next(error);
  }
}
