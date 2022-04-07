import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/homePage';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signIn" element={``} />
          <Route path="/signUp" element={``} />
          <Route path="/profile" element={``} />
          <Route path="/profile/cellar" element={``} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;