import {Chef} from "../../../db/models/Chef"

const chefsResolver = () => {
  return Chef.findAll();
}

export default chefsResolver;