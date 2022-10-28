import { carts } from "../../../containers/containers.js";

const postNewCart = async (req, res) => {
const newCart = await carts.addNewCart();
    res.json(`Carrito creado exitosamente con id: ${newCart}`);
  }

  export default postNewCart;