// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DevNav from './components/devNav/devNav';
import Homepage from './components/homepage/homePage';
import SignUpPage from './components/signup/signupPage';
import LoginPage from './components/login/loginPage';
import ProfilePage from './components/profile/profilePage';
import CellarPage from './components/profile/cellar/cellarPage';


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <DevNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/cellar" element={<CellarPage />} />
      </Routes>
    </Router>
    // </ApolloProvider>
  );
}

export default App;