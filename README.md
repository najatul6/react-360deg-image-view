# React 360° Image Viewer

This project implements a 360-degree image viewer using React and the `react-360-view` library. It allows users to interactively view a product from multiple angles by rotating a set of images.

## Features

- **360° Image View**: Allows users to rotate an image set for a complete view of a product.
- **Responsive Design**: The viewer is optimized for different screen sizes.
- **Customizable**: Easily change the number of images, path, and interaction behaviors.

## Project Structure

```javascript
. ├── public/ │ └── assets/ │ └── tshirts/ │ ├── image1.png │ ├── image2.png │ ├── image3.png │ ├── image4.png │ ├── image5.png │ └── image6.png ├── src/ │ ├── App.jsx │ └── Components/ │ └── ShowImage.jsx ├── README.md └── package.json


### Image Structure

Images are stored in the `public/assets/tshirts` folder and follow the naming convention `image{index}.png`, where `{index}` is the number representing the angle of the product image.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-360deg-image-view.git

   ```

2. Navigate to the project directory:

   ```bash
    cd react-360deg-image-view

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Start the development server:

   ```bash
   npm start
   ```

This will run the project on http://localhost:3000.

### Usage

The App.jsx file renders the 360° image viewer. The main component for displaying the image rotation is ShowImage.jsx, which uses the react-360-view library.


