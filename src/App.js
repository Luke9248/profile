import React, { useState } from 'react';
import TopNavBar from "./shared/TopNavBar";

// components
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material';
import { blue, pink } from '@mui/material/colors'

import routes from "./routes";

const theme = createTheme({
  palette: {
    primary: {main: blue[700]},
    secondary: pink,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TopNavBar/>
        <div style={{paddingTop: 50, paddingBottom: 22}}>
          {routes}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
