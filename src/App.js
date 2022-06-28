import './App.css';
import './custom.css';
import { AppProvider, Frame} from '@shopify/polaris';
import { BrowserRouter } from 'react-router-dom';
import '@shopify/polaris/build/esm/styles.css';
import Sidenavigation from './components/Sidenavigation';
import TopBare from './components/Topbar';
import AppRoutes from './Approutes';


function App() {

  const logo = {
    image :'Bonanza',
    width: 124,
    topBarSource:require('./Assets/Images/logo.png'),
    contextualSaveBarSource:
      'https://admin.apps.cedcommerce.com/site/login',
    url: '',
    accessibilityLabel: 'Ced Commerce',
  };

  return (
      <BrowserRouter>
        <AppProvider>
          <Frame
            logo={logo}
            topBar={<TopBare/>}
            navigation={ <Sidenavigation/>}
          >
          <AppRoutes/>
          </Frame>
        </AppProvider>
      </BrowserRouter>
  );
}


export default App;