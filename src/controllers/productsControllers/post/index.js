import { products } from "../../../containers/containers.js";
import isAdmin from "../../isAdmin/index.js";

const post = async (req, res) => {
    const TITLE = req.body.nombre;
    const DESCRIPTION = req.body.descripcion;
    const URL_IMG = req.body.foto;
    const PRICE = req.body.precio;
    if (isAdmin) {
      try {
        products.save(TITLE, DESCRIPTION, URL_IMG, PRICE);
        res.json({ status: `200 OK`, desc: `Producto creado exitosamente =)` });
      } catch (err) {
        console.error(err);
      }
    } else {
      res.json({ error: `403 Forbidden`, desc: `post reservado para admins` });
    }
  }

  export default post