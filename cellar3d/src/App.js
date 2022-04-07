import './App.css';
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
          <Route path="/login" element={`REPLACE WITH PAGE RENDER OBJECT`} />
          <Route path="/signUp" element={`REPLACE WITH PAGE RENDER OBJECT`} />
          <Route path="/profile" element={`REPLACE WITH PAGE RENDER OBJECT`} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
