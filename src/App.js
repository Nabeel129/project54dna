import './App.css';
import '../src/Common/scss/_general.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Views/Home/HomePage';
import { SignUpPage } from './Views/Signup/SignupPage';
import { ReactNotifications } from 'react-notifications-component';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { WelcomePage } from './Views/WelcomePage/WelcomePage';
import SearchPage from './Views/SearchPage/SearchPage';
import QuestionPage from './Views/QuestionPage/QuestionPage';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <Routes>
        <Route exact path={'/'} element={<HomePage />} />
        <Route exact path={'/signup'} element={<SignUpPage />} />
        <Route exact path={'/welcome'} element={<WelcomePage />} />
        <Route exact path={'/search'} element={<SearchPage />} />
        <Route exact path={'/questions'} element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
