import GlobalStyles from "./styles/global-styles";
import { Layout } from "./components/layout";
import {Navbar} from './components/navbar'

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
