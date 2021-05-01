import {Chef} from "../../db/models/Chef";
import {Restaurant} from "../../db/models/Restaurant";

const resolvers = {
  restaurants: (chef: Chef) => {
    return Restaurant.findAll({
      include: [
        {
          model: Chef,
          where: {id: chef.id}
        }
      ],
      order: [["name", "ASC"]]
    })
  }
}

export default resolvers;