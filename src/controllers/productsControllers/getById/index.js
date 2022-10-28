import { products } from "../../../containers/containers.js";

const getById = async (req, res) => {
    try {
      const item = await products.getById(req.params.id);
      item ? res.json(item) : res.json({error: `404 Not Found`, desc: `No encontramos la producto que buscas...`});
    } catch (err) {
      console.error(err);
    }
  }
  export default getById;