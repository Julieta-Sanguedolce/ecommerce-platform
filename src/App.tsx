import "./App.css";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header>
                    <HeaderComponent />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
