
import React, { useState, useEffect } from 'react';
import "./ImagePage.css"
// import file from "../static/horror-00056-2171297153-joe%20biden%20chasing%20a%20deer%20through%20the%20woods%20at%20night%20%20trail%20cam%20footage%2C%208k%20clean.png";


// console.log(getImages)
const ImageObj = (item,index) => {
    console.log(item)

    if (item.index % 2 === 0) {
    return <div class="column"><h2>{item.item.Prompt}</h2>
    <p><i>{item.item.category}</i></p>
    <img src={item.item.path}></img>
    </div>
    }else{
    return <div class="column"><h2>{item.item.Prompt}</h2>
    <p><i>{item.item.category}</i></p>
    <img src={item.item.path}></img>
    </div>
    }
    }

function Button(props){
    const {category,onClick} = props;
    return <button onClick={onClick}>{category}</button>
}

const ImagePage = () => {
    const Categories = ()=>{
        const categories = ["all","horror","nice","other"]
        
    }
    
    let images = require("..//static//imgmanifest.json")
    console.log(images)
    const [filter, setFilter] = useState(null);

    const handleClick = (category) => {
      setFilter(category);
    }
  
    const filteredImages = filter ? images.filter(image => image.category === filter) : images;
  
    // let testImage = require("../static/AI-Images/horror/00056-2171297153-joe biden chasing a deer through the woods at night  trail cam footage, 8k clean.png"))
    // console.log(testImage)
return <div><h1 class="h1-title">AI generated images using StableDiffusion</h1>
<div class='div-container'>
    <h3>Categories</h3>
    <div class="div-container-2">
        <Button category="all" onClick={() => handleClick(null)} />
        <Button category="nice" onClick={() => handleClick("nice")} />
        <Button category="other" onClick={() => handleClick("other")} />
        <Button category="horror" onClick={() => handleClick("horror")} />
        </div>
</div>
<div class="row">
        {filteredImages.map((item,index)=>(
            <ImageObj item={item} index={index} />
        ))}
</div>
</div>

}

export default ImagePage;

