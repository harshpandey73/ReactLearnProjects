import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

function App() {
  return (
    <>
      <div className="bg-gray-500 text-black bg-opacity-80">
      <div className="grid grid-cols-3 grid-rows-10 grid-flow-row bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-300 to-blue-500 h-screen text-black bg-opacity-50">
        <div className="col-span-3 row-span-1">
          <Header />
        </div>
        <div className="col-span-1 mx-1 my-1 row-span-9">
          <List />
        </div>
        <div className="col-span-2 mx-1 my-1 row-span-9">
          <Map />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
