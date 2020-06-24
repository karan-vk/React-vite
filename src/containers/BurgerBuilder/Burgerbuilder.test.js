import { Burgerbuilder } from "./Burgerbuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";

configure({ adapter: new Adapter() });

describe("<Burgerbuilder/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Burgerbuilder onInitIngredients={() => {}} />);
  });
  it("Should render <BuildControls/> when reciving ingredients ", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
