

it("should render the RestaurantCard component", () => {
    const restaurantDetails = {
        id: "1",
        name: "Test Restaurant",
        imageUrl: "https://example.com/image.jpg",
        rating: 4.5,
        cuisine: "Italian",
        deliveryTime: 30,
    };

    render(
        <Rescontainer
            data={restaurantDetails} />)

    const restaurantCard = screen.getByText(/Test Restaurant/i);
    expect(restaurantCard).toBeInTheDocument();

})

it("should render the RestaurantCard component with promoted label", () => {
    const restaurantDetails = {
        id: "1",
        name: "Test Restaurant",
        imageUrl: "https://example.com/image.jpg",
        rating: 4.5,   
        cuisine: "Italian",
        deliveryTime: 30,
        promoted: true,
    };

    const Enhanced=EnhancedRescontainer(Rescontainer);

    render(<Enhanced
        data={restaurantDetails} />)

    const restaurantCard = screen.getByText(/Test Restaurant/i);
    expect(restaurantCard).toBeInTheDocument();
    expect(screen.getByText(/Promoted/i)).toBeInTheDocument();
    
})