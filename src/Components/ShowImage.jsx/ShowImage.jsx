import ThreeSixty from 'react-360-view'

const ShowImage = () => {
  return (
    <div className='w-[400px] border p-5 shadow-xl'>
      <ThreeSixty
         amount={6} // number of images
         imagePath="assets/tshirts" // path/to/your/images
         fileName="image{index}.png" // file format for images
         spinReverse // optional: to reverse the spin direction
      />
    </div>
  );
};

export default ShowImage;
