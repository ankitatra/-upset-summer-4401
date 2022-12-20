import React, { useEffect, useState } from "react";
import SingleProductImg from "./SingleProductImg";

const imgArray = [
  "https://images.bewakoof.com/t1080/gojo-domain-oversized-fit-t-shirt-520746-1658344284-1.jpg",
  "https://images.bewakoof.com/t1080/gojo-domain-oversized-fit-t-shirt-520746-1658344289-2.jpg",
  "https://images.bewakoof.com/t1080/gojo-domain-oversized-fit-t-shirt-520746-1658344294-3.jpg",
  "https://images.bewakoof.com/t1080/gojo-domain-oversized-fit-t-shirt-520746-1658344299-4.jpg",
  "https://images.bewakoof.com/t1080/gojo-domain-oversized-fit-t-shirt-520746-1658344305-5.jpg",
];

const SingleProductSlider = ( {data,im} ) => { 
   
  

  let d=data
  const arr=im
  const [url, setUrl] = useState(d);
  useEffect(()=>{
    setUrl(d)
  
  },[data])
  return (
    <>
      <div>
        <div style={{ display: "flex" }} className="px-2 py-2">
          {/* <div className="flex"> */}
          <div className="w-[20%]">
          {im && im.map((img, i) => {
              return (
                <div
                  style={{ margin: "10px", width: "100px" }}
                  className="w-[70px] h-[86.5px] mb-3"
                  key={i}
                >
                  <img
                    style={{ width: "100%" }}

                    className="w-full"
                    src={img}
                    alt=""
                    onClick={() => setUrl(img)}
                  />
                </div>
              );
            })}
            {/* </div> */}
            {/* <div className="w-[80%]">
            <div className="w-[400px]">
              <img src={url} alt="" />
            </div>
          </div> */}
          </div>
          <div>
            <SingleProductImg data={url} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductSlider;
