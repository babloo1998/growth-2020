import React from "react";
import "./style.scss";
import FilterData from './filterData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

export default class FilterScreen extends React.Component {
  state = {
    imageUrl: "",
    filterName : "" 
  };

  componentDidMount(){
    this.setState({
        imageUrl: localStorage.getItem('imageUrl')
    })
  };

  applyFilter = (filterName) =>{
    this.setState({
      filterName : filterName
    })
  };

  saveImage = async() =>{
    const { filterName } = this.state;
    let canvas = document.createElement("canvas");
    const image = document.getElementById("filter-image");
    let context = canvas.getContext("2d");
    if(filterName == 'filter-1977'){
      context.filter = "grayscale(1)";
    }
    else if(filterName == 'filter-aden'){
      context.filter = "sepia(.15) brightness(1.2)";
    }
    if(filterName == 'filter-1977'){
      context.filter = "grayscale(1)";
    }
    else if(filterName == 'filter-xpro-ii'){
      context.filter = "sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg)";
    }
    if(filterName == 'filter-sutro'){
      context.filter = "sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg)";
    }
    else if(filterName == 'filter-toaster'){
      context.filter = "sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg)";
    }
    if(filterName == 'filter-poprocket'){
      context.filter = "sepia(.15) brightness(1.2)";
    }
    else if(filterName == 'filter-hudson'){
      context.filter = "sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg)";
    }
    if(filterName == 'black-and-white'){
      context.filter = "grayscale(100%)";
    }
    else if(filterName == 'dim'){
      context.filter = "contrast(200%)";
    }
    context.drawImage(image, 0, 0, 300, 150);
    var data = await canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
    window.open(data,"_blank")
  }

  render() {
    const { imageUrl, filterName } = this.state;
    return (
      <div className="filterScreen">
        <div className="captured-image">
          <img id ='filter-image' className = {filterName} src = {imageUrl}></img>
        </div>
        <div className= 'slider'>
        <Slider {...settings}>
          {FilterData.map(item =>{return(<img onClick={()=>this.applyFilter(item.filterName)} className={item.filterName} src={imageUrl}></img>)})}
        </Slider>
        </div>
        <button className ='save-btn' onClick={() =>this.saveImage()}>Save To Gallery</button>
      </div>
    );
  }
}
