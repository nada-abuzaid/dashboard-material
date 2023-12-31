import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  Box, Drawer, Typography, Avatar,
} from '@mui/material';
import navConfig from '../../components/Sidebar/config';
import Logo from '../../components/common/Logo';
import { NavSection } from '../../components/Sidebar/NavSection';
import Scrollbar from '../../components/common/Scrollbar';

const NAV_WIDTH = 280;

const account = {
  displayName: 'Nada Abuzaid',
  email: 'nada@gmail.com',
  photoURL: '/assets/images/avatars/avatar_default.jpg',
  role: 'programmer',
};

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const Home = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const isDesktop = 'up';

  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [open]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
        backgroundColor: 'secondary.main',
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <StyledAccount>
          <Avatar src={account.photoURL} alt="photoURL" />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'custom.white' }}>
              {account.displayName}
            </Typography>
            <Typography variant="body2" sx={{ color: '#e2e2e2', fontSize: '10px' }}>
              {account.role.toUpperCase()}
            </Typography>
          </Box>
        </StyledAccount>
      </Box>

      <NavSection data={navConfig} />

    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={open}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};
export default Home;
