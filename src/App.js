import "./App.css";
import WarningSign from "./components/WarningSign";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import MyBadge from "./components/MyBadge";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterBookList from "./components/FilterBookList";
import "./components/MyFooter.css";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <WarningSign text="This is some random text" />
      <MyBadge text="This is the badge text" color="success" />
      <div className="mb-5">
        <FilterBookList />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
