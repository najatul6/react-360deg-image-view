import ShowImage from "./Components/ShowImage.jsx/ShowImage";

function App() {
  return (
    <>
      <h2 className="text-5xl font-bold text-center py-5 px-2 bg-orange-600 text-white">
        Image 360<sup>&#176;</sup> view
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="hidden lg:flex justify-center items-center">
          <a
            href="https://github.com/najatul6/react-360deg-image-view"
            target="_blank"
          >
            <button className="text-xl font-bold uppercase py-3 px-5 bg-orange-600 rounded-xl text-white hover:text-orange-600 hover:bg-transparent hover:outline">
              Source Code &raquo;
            </button>
          </a>
        </div>
        <div className="flex justify-center items-center py-5">
          <ShowImage />
        </div>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/najatul6/react-360deg-image-view"
            target="_blank"
          >
            <button className="text-xl font-bold uppercase py-3 px-5 bg-orange-600 rounded-xl text-white hover:text-orange-600 hover:bg-transparent hover:outline">
              Source Code &raquo;
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
