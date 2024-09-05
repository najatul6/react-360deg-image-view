import ShowImage from "./Components/ShowImage.jsx/ShowImage";

function App() {
  return (
    <>
      <h2 className="text-5xl font-bold text-center py-5 px-2 bg-orange-600 text-white">
        Image 360<sup>&#176;</sup> view
      </h2>
      <div className="flex justify-center items-center py-10">
        <ShowImage />
      </div>
    </>
  );
}

export default App;
