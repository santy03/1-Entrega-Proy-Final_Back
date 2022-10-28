import { products } from "../../../containers/containers.js";
import isAdmin from "../../isAdmin/index.js";

const del = async (req, res) => {
    if (isAdmin) {
      try {
        const isDeleted = await products.deleteById(req.params.id);
        isDeleted ? res.json({status: `200 OK`, desc: `Producto eliminado exitosamente`}) : res.json({error: 404, desc: `No encontramos el producto que busca eliminar...`});
      } catch (error) {
        console.error(error);
      }
    } else {
      res.json({ error: `403 Forbidden`, desc: `delete reservado para admins` });
    }
  }

  export default del;