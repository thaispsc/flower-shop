import * as React from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
  Container,
} from '@mui/material'
import Logo from '../logo/Logo'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import { Cart } from './Cart'
import { User } from './User'

const PagesLinks = ['Home', 'Shop', 'Blog', 'About']

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <AppBar position='fixed' color='secondary' elevation={0}>
      <Container maxWidth='xl'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100px',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Logo />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
            >
              <MenuIcon color='primary' fontSize='large' />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MenuItem>
                <Typography>Home</Typography>
              </MenuItem>
              <MenuItem>
                <Typography>Shop</Typography>
              </MenuItem>
              <MenuItem>
                <Typography>Blog</Typography>
              </MenuItem>
              <MenuItem>
                <Typography>About</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Logo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {PagesLinks.map(page => (
              <Button
                key={page}
                disableRipple
                disableFocusRipple
                sx={{
                  '&:hover': {
                    background: 'none',
                  },
                }}
              >
                <Typography variant='body1'>{page}</Typography>
              </Button>
            ))}
          </Box>
          <Box>
            <IconButton>
              <User />
            </IconButton>
            <IconButton>
              <Cart />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
