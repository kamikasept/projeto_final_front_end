import MenuItem from "../components/MenuItem";
import Spacing from "../components/Spacing";
import { burgerArray } from "../assets/database/burgers";
import { aSideDishArray } from "../assets/database/aSideDish";
import { drinksArray } from "../assets/database/drinks";
import { dessertArray } from "../assets/database/desserts";

const Menu = () => {
  return (
    <div className="menu">
      <Spacing />
      <MenuItem
        title="Burgers"
        items={4}
        itemsArray={burgerArray}
        path="/burgers"
      />
      <MenuItem
        title="Acompanhamentos"
        items={4}
        itemsArray={aSideDishArray}
        path="/acompanhamentos"
      />
      <MenuItem
        title="Bebidas"
        items={4}
        itemsArray={drinksArray}
        path="/drinks"
      />
      <MenuItem
        title="Sobremesas"
        items={4}
        itemsArray={dessertArray}
        path="/sobremesa"
      />
    </div>
  );
};
export default Menu;
