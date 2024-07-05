import "./App.css"
import { HeaderComponent } from "./components/Header/HeaderComponent"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { LandingPage } from "./components/LandingPage/LandingPage"

function App() {
    const theme = createTheme()

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header>
                    <HeaderComponent />
                </header>
                <main>
                    <LandingPage />
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
