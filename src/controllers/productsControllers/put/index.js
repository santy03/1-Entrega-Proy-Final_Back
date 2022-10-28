import { products } from "../../../containers/containers.js";
import isAdmin from "../../isAdmin/index.js";
const  put = async (req, res) => {
    const ID = req.params.id;
    const NOMBRE = req.body.nombre;
    const DESCRIPTION = req.body.descripcion;
    const URL_IMG = req.body.foto;
    const PRICE = req.body.precio;
    const STOCK = req.body.stock;
  
    if (isAdmin) {
      try {
        const update = await products.updateProduct(ID, NOMBRE, DESCRIPTION, URL_IMG, PRICE, STOCK);
        update ? res.json({status:`200 OK`, desc: `Producto modificado exitosamente =)`}) : res.json({error: `404 Not Found`, desc: `No encontramos el producto a modificar`});
      } catch (err) {
        console.error(err);
      }
    } else {
      res.json({ error: `403 Forbidden`, desc: `put reservado para admins` });
    }
  }

  export default put