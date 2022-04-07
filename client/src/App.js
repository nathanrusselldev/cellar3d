import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={``} />
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