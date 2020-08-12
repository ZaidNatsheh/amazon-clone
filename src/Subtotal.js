/* eslint-disable no-unused-vars */
import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./data/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./data/reducer";
function Suptotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :
              <strong>{`${value} `}</strong>
            </p>
            <smal className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift.
            </smal>
          </>
        )}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Suptotal;
