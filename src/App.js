import WaterTracker from './components/WaterTracker';
import './amplify-authenticator-custom.css';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

function App() {
  return (
    <div className='amplify-authenticator-custom'>
      <WaterTracker/>
    </div>
  );
}

export default withAuthenticator(App);
