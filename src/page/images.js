
const images = require.context('../images', false, /\.(webp|png|jpg|jpeg)$/);

const imagesData = {};
images.keys().forEach((item, index) => {
  imagesData[item.replace('./', '')] = images(item);
});

export default imagesData;
