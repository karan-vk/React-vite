import React, { Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientsummary = Object.keys(this.props.ingredients).map(
      (igKeys) => {
        return (
          <li key={igKeys}>
            <span style={{ textTransform: "capitalize" }}>{igKeys}</span>:{" "}
            {this.props.ingredients[igKeys]}{" "}
          </li>
        );
      }
    );
    return (
      <>
        <h3>Your Order</h3>
        <p>Delicious burger with the foowing ingredients:</p>
        <ul>{ingredientsummary}</ul>
        <p>
          <strong>Total price :{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={this.props.orderCancled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaceContinued}>
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;
