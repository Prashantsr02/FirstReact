
global.fetch = jest.fn(() =>   //Replicating the fetch function
    Promise.resolve(()=>{
            Promise.resolve(()=>{
                data: {};
            })
    }))

it("shouls render Body component with Search component", () => {
        act(()=> {
        render(<Body />)})

        const searchComponent=screen.getByTestId("search");
        const inputBox=screen.getByTestId("inputBox");
        fireevent.click(searchComponent);

    });