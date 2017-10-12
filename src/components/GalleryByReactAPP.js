'use strict';
require('normalize.css');
require('../styles/main.scss');

let React = require('react');

//获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDataArr){
  for(let i = 0,j = imageDataArr.length;i < j; i++){
    let singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
})(imageDatas);

console.log(imageDatas);

let GalleryByReactAPP = React.createClass({
  render:function(){
    return (
      <section className="stage">
        <section className="img-sec">
          <nav className="controller-nav">
            111111
          </nav>
        </section>
      </section>
    );
  }
});

export default GalleryByReactAPP;
