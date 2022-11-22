

import Room from './components/Room';


describe("Button Component" ,() => {
    const setToggle= jest.fn(); 
    render(<Button setToggle={setToggle} btnTxt="Add Room"/>); 
    const button = screen.getByTestId("abc"); 
      
    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument(); 
    })
  
    // Test 2 
    test("Button Text", () => {
        expect(button).toHaveTextContent("Add Room"); 
    })});