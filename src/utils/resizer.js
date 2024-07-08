import Resizer from "react-image-file-resizer";

const resize = Resizer.imageFileResizer;

export let resizeImage = (file) => {
  return new Promise((resolve, reject) => {
    resize(file, 750, 750, "JPEG", 75, 0, uri => resolve(uri), "blob");
  });
};

export let resizeImages = async (files) => {
  let resized = [];
  for (let i = 0; i < files.length; i++) resized.push(await resizeImage(files[i]));
  return resized;
};

// ADD THIS TO SVELEKIT COMPONENT

// let Resizer, resize, resizeImage, resizeImages;

// onMount(async () => {
//   
//   Resizer = await import("react-image-file-resizer");
//   resize = Resizer.default.default.imageFileResizer;

//   resizeImage = (file) => {
//     return new Promise((resolve, reject) => {
//       resize(file, 750, 750, "JPEG", 75, 0, (uri) => resolve(uri), "blob");
//     });
//   };

//   resizeImages = async (files) => {
//     let resized = [];
//     for (let i = 0; i < files.length; i++) resized.push(await resizeImage(files[i]));
//     return resized;
//   };
// });
