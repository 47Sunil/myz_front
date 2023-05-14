import {
  AccountLogo,
  DashboardLogo,
  DomainLogo,
  LandingPagesLogo,
  LogoutLogo,
  OtherLogo,
  PaymentLogo,
  SubscriptionLogo,
  TransactionsLogo,
} from '../../assets/svg/SidebarIcons';

export const data1 = [
  {
    label: 'Dashboard',
    icon: <DashboardLogo />,
    path: 'dashboard',
  },
  {
    label: 'Landing Pages',
    icon: <LandingPagesLogo />,
    path: 'landing-pages',
  },
  {
    label: 'Transactions',
    icon: <TransactionsLogo />,
    path: 'transactions',
  },
  {
    label: 'Domains',
    icon: <DomainLogo />,
    path: 'domains',
  },
];

export const data2 = [
  {
    label: 'Payment Options',
    icon: <PaymentLogo />,
    path: 'payment',
  },
  {
    label: 'Account Options',
    icon: <AccountLogo />,
    path: 'account',
  },
  {
    label: 'Subscription',
    icon: <SubscriptionLogo />,
    path: 'subscription',
  },
  {
    label: 'Other Settings',
    icon: <OtherLogo />,
    path: 'other-settings',
  },
];

export const data3 = [
  {
    label: 'Logout',
    icon: <LogoutLogo />,
    path: 'logout',
  },
];
