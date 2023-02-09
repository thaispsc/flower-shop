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
import { UserIcon } from './UserIcon'
import { CartIcon } from './CartIcon'

const PagesLinks = [
  { name: 'Home', link: '/flower-shop' },
  { name: 'Shop', link: '/shop' },
  { name: 'Blog', link: '#' },
  { name: 'About', link: '#' },
]

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
            paddingX: '0',
            '&.MuiToolbar-root': {
              padding: '0',
            },
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
                <Link href='/flower-shop' underline='none'>
                  <Typography>Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href='/flower-shop' underline='none'>
                  <Typography>Shop</Typography>
                </Link>
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
                key={page.name}
                disableRipple
                disableFocusRipple
                sx={{
                  '&:hover': {
                    background: 'none',
                  },
                }}
              >
                <Link href={page.link} underline='none'>
                  <Typography
                    variant='body1'
                    sx={{
                      '&:hover': {
                        color: '#FF8F52',
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
          <Box>
            <IconButton>
              <Link href='/login' underline='none'>
                <UserIcon />
              </Link>
            </IconButton>
            <IconButton>
              <CartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
