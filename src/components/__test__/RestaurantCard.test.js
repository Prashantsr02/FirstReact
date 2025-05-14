import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Rescontainer } from "../Resturants";
import { EnhancedRescontainer } from "../Resturants";
import MOCK_DATA from "../mocks/rescardmock.json"



it("should render the RestaurantCard component", () => {

  render(<Rescontainer resdata={MOCK_DATA} />);

  const restaurantCard = screen.getByText("McDonald's");
  expect(restaurantCard).toBeInTheDocument();
});

it("should render the RestaurantCard component with promoted label", () => {

  const Enhanced = EnhancedRescontainer(Rescontainer);

  render(<Enhanced data={MOCK_DATA} />);

//   const restaurantCard = screen.getByText("McDonald's");
//   expect(restaurantCard).toBeInTheDocument();
//   expect(screen.getByText(/Promoted/i)).toBeInTheDocument();
});
