import {
  AccountMenuItem,
  CopyHashMenuItem,
  ViewAccountOnExplorerMenuItem
} from '@make-software/csprclick-ui';
import CSPRClickIcon from '@/logo.svg';

export const accountMenuItems = [
  <ViewAccountOnExplorerMenuItem key={0} />,
  <CopyHashMenuItem key={1} />,
  <AccountMenuItem
    key={2}
    onClick={() => {
      window.open('https://docs.cspr.click', '_blank');
    }}
    icon={CSPRClickIcon}
    label={'CSPR.click docs'}
    badge={{ title: 'new', variation: 'green' }}
  />
];
