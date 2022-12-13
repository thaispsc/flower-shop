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
  Link,
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
    <AppBar color='secondary' elevation={0}>
      <Container maxWidth='lg'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100px',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href='/flower-shop' underline='none'>
              <Logo />
            </Link>
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
                <Typography
                  variant='body1'
                  sx={{
                    '&:hover': {
                      color: '#FF8F52',
                    },
                  }}
                >
                  {page}
                </Typography>
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
