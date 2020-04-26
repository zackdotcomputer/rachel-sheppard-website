import React from "react";
// import Img from "gatsby-image";

// interface ImageInfo {
//   alt?: string;
//   childImageSharp?: object;
//   image: object | ImageInfo | string;
//   style?: object;
// }

// interface Props {
//   imageInfo: ImageInfo;
// }

// function isImageInfo(thing: any): thing is ImageInfo {
//   return thing instanceof Object && thing.hasOwnProperty("image");
// }

// const PreviewCompatibleImage = ({ imageInfo }: Props) => {
//   const imageStyle = { borderRadius: "5px" };
//   const { alt = "", childImageSharp, image } = imageInfo;

//   if (isImageInfo(image) && !!image.childImageSharp) {
//     return <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />;
//   }

//   if (!!childImageSharp) {
//     return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
//   }

//   if (!!image && typeof image === "string") return <img style={imageStyle} src={image} alt={alt} />;

//   return null;
// };

// export default PreviewCompatibleImage;
