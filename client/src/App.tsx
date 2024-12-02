import BikeConfigurator from "./components/BikeConfigurator/BikeConfigurator";

function App() {
  return (
    <div className="flex flex-col text-center gap-y-3">
      <h1 className="text-6xl"> Markus Bike Shop</h1>
      <p className="text-lg text-gray-500">
        Welcome to the most famous bike shop on Earth!
      </p>
      <BikeConfigurator />
    </div>
  );
}

export default App;
