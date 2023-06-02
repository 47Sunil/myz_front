import { useQueryClient } from 'react-query';
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
    clicked: <DashboardLogo fillOpacity='1' />,
  },
  {
    label: 'Landing Pages',
    icon: <LandingPagesLogo />,
    path: 'landing-pages/home',
    clicked: <LandingPagesLogo fillOpacity='1' />,
  },
  {
    label: 'Transactions',
    icon: <TransactionsLogo />,
    path: 'transactions ',
    clicked: <TransactionsLogo fillOpacity='1' />,
  },
  {
    label: 'Domains',
    icon: <DomainLogo />,
    path: 'domain/home',
    clicked: <DomainLogo fillOpacity='1' />,
  },
];

export const data2 = [
  {
    label: 'Payment Options',
    icon: <PaymentLogo />,
    path: 'payment-gateways',
    clicked: <PaymentLogo fillOpacity='1' />,
  },
  {
    label: 'Account Options',
    icon: <AccountLogo />,
    path: 'account',
    clicked: <AccountLogo fillOpacity='1' />,
  },
  {
    label: 'Subscription',
    icon: <SubscriptionLogo />,
    path: `subscription`,
    clicked: <SubscriptionLogo fillOpacity='1' />,
  },
  {
    label: 'Other Settings',
    icon: <OtherLogo />,
    path: 'other-settings',
    clicked: <OtherLogo fillOpacity='1' />,
  },
];

export const data3 = [
  {
    label: 'Logout',
    icon: <LogoutLogo />,
    path: 'logout',
    clicked: <LogoutLogo fillOpacity='1' />,
  },
];
