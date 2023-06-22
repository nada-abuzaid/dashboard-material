import {
  Box, List, ListItemText, ListItemIcon, ListItemButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledNavItem:any = styled(
  () => <ListItemButton disableGutters />,
)(({ theme }):any => ({
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: '#808080',
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
  console.log(item);

  return (
    <StyledNavItem
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
};

export const NavSection = ({ data }:any) => (
  <Box>
    <List disablePadding sx={{ p: 1 }}>
      {data.map((item: any) => (
        <NavItem key={item.title} item={item} />
      ))}
    </List>
  </Box>
);
