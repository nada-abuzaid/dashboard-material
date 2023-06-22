import SvgColor from '../common/SvgColor';

const icon = (name: any) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Tasks',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Account',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
