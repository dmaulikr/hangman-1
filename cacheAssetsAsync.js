import { Asset, Font } from 'expo';

export default function cacheAssetsAsync({ images = [], fonts = [], audio = [] }) {
  return Promise.all([
    ...cacheImages(images),
  ]);
}

const cacheImages = val => val.map(file => Asset.fromModule(file).downloadAsync());