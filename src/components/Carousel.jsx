import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let [currentIndex, setCurrIndex] = useState(0);
    console.log("img", images)

    function moveBackward(){
        if(currentIndex <= 0){
            setCurrIndex(images.length - 1)
        }
        else{
            setCurrIndex(currentIndex - 1)
        }
    }

    function moveFoward(){
        if(currentIndex == images.length - 1){
            setCurrIndex(0)
        }
        else{
            setCurrIndex(currentIndex + 1)
        }
    }
    return(
        <>
        <div className="Container-parent">
            <button onClick={moveBackward}><ArrowBackIosIcon/></button>
            <img src={images[currentIndex].img} alt="" />
            <h2>{images[currentIndex].title}</h2>
            <h3>{images[currentIndex].subtitle}</h3>
            <button onClick={moveFoward}><ArrowForwardIosIcon/></button>
        </div>
        </>
    )
}

export default Carousel;