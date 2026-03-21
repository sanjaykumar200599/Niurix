import React from "react";

import { homePage as data } from "../../data/homePage/homepage";

function blogs() {
  return (
    <>
      <div>{data.blog_heading.title}</div>

      {data.blog_heading.blogs_content_swipper.map((item, index) => (
        <div>
          <div>{item.imageName}</div>
          <div>{item.title}</div>
          <div>{item.para}</div>
          <div>{item.date}</div>
          <div>{item.subtitle}</div>
        </div>
      ))}
    </>
  );
}

export default blogs;
