import './App.css'
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'

const pages = ['Main', 'Our Story', 'Event Info'];

function App() {

  return (
    <>
      <AppBar>
        <img id='usImage' height={ '200' }/>
        <Toolbar sx={{ backgroundColor: 'var(--blue)', padding: 0, flexDirection: 'column' }}>
          <Box sx={{ flexGrow: 1, justifyContent: 'center', backgroundColor: 'var(--blue)', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ color: 'var(--text-color)' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default App
