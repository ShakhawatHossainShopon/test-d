
import "../assets/css/img-slider.css";


const ImageSlider = ({image , gridSize , value, deg}) => {
    
  
    
    // Create grid items
    const createGridItems = () => {
      let items = [];
      for (let i = 0; i < gridSize.rows * gridSize.cols; i++) {
        items.push(
          <div key={i} className="grid-item">
            <div
              className="image-container"
            >
              <img src={image} alt="hello" style={{
                 filter: `brightness(100%) contrast(100%) saturate(0%) sepia(100%) hue-rotate(${deg.toString()+"deg"})`}} width="100%" height="100%"  />
            </div>
          </div>
        );
      }
      return items;
    };
  
    return (
      <>
      <div>
        <>
        <label htmlFor="slider" className="label">
          {value}
        </label>
      
        </>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize.cols}, auto)`, // Fix template string
            transition: "all 2s linear",
          }}
        >
          {createGridItems()}
        </div>
      </div>
      </>
    );
//   return (
//     // <>

//     //   <img
//     //     style={{ objectFit: "cover" }}
//     //     alt="user"
//     //     src={image}
//     //     width="100%" // Adjust the width as needed
//     //     height="100%" // Adjust the height as needed
//     //   />
//     // </>
//   );
};

export default ImageSlider;
