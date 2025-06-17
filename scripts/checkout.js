import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart } from "../data/cart.js";
renderOrderSummary();
renderPaymentSummary();


export function updateItemQuantity(){

    let cartQuantity = 0;

      cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity;
      });

      document.querySelector('.js-item-quantity').innerHTML = `${cartQuantity} Items`;

}
 updateItemQuantity();