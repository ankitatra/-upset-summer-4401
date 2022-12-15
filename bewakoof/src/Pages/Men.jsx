import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Store } from '../Components/Store'

export const Men = () => {






  return (
  
 <Store/>

  )
}

// konw about gte lte


//FOR WOMEN BRAND
// useEffect(()=>{
//   const brand=['Burberry',  'Gucci',  'Prada', 'Louis Vuitton']
//   let k=0
//     for(let i=1;i<=100;i){
//       let t=Date.now()
//       while(Date.now()-t<=400){
//       }  
//  console.log(k)
   
//           axios({
//             method:"patch",
//             url:"http://localhost:8080/womensdata/"+i,
//             data:{
//               brand_namez:brand[k]
//             }
//           })
//           i++
//           k++
//           if(k==3){
//             k=0
//           }
//         }




// },[])



/* FOR DISCOUNT 

useEffect(()=>{
  axios({
    method:"get",
    url:"http://localhost:8080/mensdata",
  }).then((res)=>{

res.data.map(({id,discountedPriceText,actualPriceText})=>{
console.log(actualPriceText,discountedPriceText,id)
if(discountedPriceText>actualPriceText){
let temp=actualPriceText;
actualPriceText=discountedPriceText;
discountedPriceText=temp
}
let discount=Math.floor(((actualPriceText-discountedPriceText)*100)/actualPriceText)
let off=`${discount}% OFF`
let t=Date.now()
while(Date.now()-t<=300){

} 
axios({
method:"patch",
url:"http://localhost:8080/mensdata/"+id,
data:{
  off,actualPriceText,discountedPriceText
}
})


})
})
  
  },[])

*/


  


/* FOR SIZE
// useEffect(()=>{

//   for(let i=1;i<=100;i){
// let t=Date.now()
// while(Date.now()-t<=300){
// }  

//     axios({
//       method:"patch",
//       url:"http://localhost:8080/womensdata/"+i,
//       data:{
//         size: [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL",
//           "2XL",
//           "3XL"]
//       }
//     })
//     i++
//   }

// },[])

*/




/* FOR RATING
useEffect(()=>{

  for(let i=1;i<=100;i){
let t=Date.now()
while(Date.now()-t<=400){
  
}  

    axios({
      method:"patch",
      url:"http://localhost:8080/womensdata/"+i,
      data:{
        "rating":(Math.random()*4+1).toFixed(0)
      }
    })
    i++
  }

},[])

*/


// Brands
// {Burberry: 'Burberry', Gucci: 'Gucci', Prada: 'Prada', Louis Vuitton: 'Louis Vuitton', Click n Buy: 'Click n Buy'}