import Button from "@material-ui/core/Button";

import { CartItemType } from "../App";

import { Wrapper } from "./CartItem.styles";

import "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>{item.title}</div>
      <div className="information">
        <p>Price: $ {item.price}</p>
        <p>Total: $ {(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
        <img src={item.image} alt={item.title} />
      </div>
    </Wrapper>
  );
};

export default CartItem;
