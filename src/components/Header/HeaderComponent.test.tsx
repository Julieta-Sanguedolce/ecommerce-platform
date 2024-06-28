import { render, screen } from "../../testUtils/testUtils";
import { HeaderComponent } from "./HeaderComponent";

describe("HeaderComponent", async () => {
    test("Includes Collections text in the header component", () => {
        render(<HeaderComponent />);
        const elem = screen.getByText("Collections");
        expect(elem).toBeInTheDocument();
    });
});
