import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Book from "./pages/Book";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/book" component={Book} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
