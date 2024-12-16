// Gunakan theme di sini
import { Box, ThemeProvider } from "@mui/material";

// Gunakan MUI di sini
import { Button, Typography } from "@mui/material";

// Import ListMovies (Data JSON)
import ListMovies from "./containers/ListMovies";

function App() {
  return (
    // Gunakan ThemeProvider di sini
    // Inject Context Theme di sini
    <div className="App">
      <header className="App-header">
        <Box p={2}>
          <Typography variant="h5">React List dan Axios</Typography>
        </Box>
      </header>
      {/* Panggil ListMovies Component di sini */}
      <section style={{ paddingLeft: 16, paddingRight: 16 }}>
        <ListMovies />
      </section>
    </div>
  );
}

export default App;
