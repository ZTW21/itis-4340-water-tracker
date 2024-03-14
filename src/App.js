import WaterTracker from './components/WaterTracker';
import './amplify-authenticator-custom.css';

import { Amplify, Auth } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

function App() {
  const signOut =  async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  
  }

  return (
    <div className='amplify-authenticator-custom'>
      <button 
        onClick={signOut} 
        style={{position: 'absolute', right: 20, top: 20}}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign Out
      </button>
      <WaterTracker/>
    </div>
  );
}

export default withAuthenticator(App);
