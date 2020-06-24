import React, { Component, Suspense } from "react";
// import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
// import ContactactData from "../../containers/CheckOut/Contact data/ContactactData";
const CheckoutSummary = React.lazy(() =>
  import("../../components/Order/CheckoutSummary/CheckoutSummary")
);
const ContactactData = React.lazy(() =>
  import("./Contact data/ContactactData")
);

class CheckOut extends Component {
  CheckoutCanceledHandler = () => {
    this.props.history.goBack();
  };
  CheckoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary
            CheckoutCancel={this.CheckoutCanceledHandler}
            CheckoutContinued={this.CheckoutContinuedHandler}
            ingredient={this.props.ings}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactactData}
          />
        </div>
      );
    }
    let purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
    return (
      <>
        {purchasedRedirect}
        <Suspense fallback={<Spinner />}>{summary}</Suspense>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredient,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(CheckOut);
