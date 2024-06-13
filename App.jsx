import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";
import About from "./components/About";
import Contact from "./components/Contact";
import GithubUserList from "./components/GithubUserList";
import NwGitHubUsers from "./components/NwGitHubUsers";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/github-users">Github Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<NwGitHubUsers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github-users" element={<GithubUserList />}>
            <Route index element={<div>Add a user and select it.</div>} />
          </Route>
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
