import React from "react";
import Card from "../Card/Card";

import "./Container.css";

const Container = () => {
  return (
    <div id="Container">
      <Card
        name="Lionel Messi"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg"
      />
      <Card
        name="Cristinao Ronaldo"
        img="https://www.futbolred.com/files/article_main/uploads/2022/10/16/634c95f2652e7.jpeg"
      />
      <Card
        name="Neymar"
        img="https://img.asmedia.epimg.net/resizer/adYWVQcPB_aFVa5gfsbXZOTUd-k=/1952x1098/filters:focal(264x94:274x104)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/O7NCRFK2LG3MXH4D5IL2C4L7LY.jpg"
      />
    </div>
  );
};

export default Container;
