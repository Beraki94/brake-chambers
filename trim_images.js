const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images', 'home');
const images = [
  'compination-spring-brake.png',
  'service-brake-chamber.png',
  'air-disc-brake-chambers.png',
  'piggy-accessory.png'
];

async function trimImages() {
  for (const img of images) {
    const imgPath = path.join(imagesDir, img);
    const outPath = path.join(imagesDir, 'trimmed_' + img);
    try {
      if (fs.existsSync(imgPath)) {
        await sharp(imgPath).trim().toFile(outPath);
        fs.renameSync(outPath, imgPath);
        console.log('Trimmed: ' + img);
      } else {
        console.log('Not found: ' + img);
      }
    } catch (e) {
      console.error('Error trimming ' + img, e);
    }
  }
}

trimImages();
