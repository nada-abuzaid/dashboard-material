import {
  Box, List, ListItemText, ListItemIcon, ListItemButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledNavItem:any = styled(
  (props) => <ListItemButton disableGutters {...props} />,
)(({ theme }):any => ({
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.custom.white,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const NavItem = ({ item }: any) => {
  const {
    title, icon, info, path,
  } = item;
  return (
    <StyledNavItem
      to={path}
      sx={{
        '&.active': {
          color: 'custom.white',
          bgcolor: 'custom.divider',
          fontWeight: 'fontWeightBold',
        },
        '&:hover': {
          bgcolor: 'custom.divider',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
};

export const NavSection = ({ data, ...other }:any) => (
  <Box {...other}>
    <List disablePadding sx={{ p: 1 }}>
      {data.map((item: any) => (
        <NavItem key={item.title} item={item} />
      ))}
    </List>
  </Box>
);
