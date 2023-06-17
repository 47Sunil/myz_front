import { useState } from 'react';
import OtherSettingsCommon from './components/OtherSettingsCommon';
import {
  useIntegrationMutation,
  useIntegrationPhoneMutation,
} from '../../actions/OtherSettings';
import { toast } from 'react-hot-toast';

const Index = () => {
  return (
    <>
      <OtherSettingsCommon />
    </>
  );
};

export default Index;
