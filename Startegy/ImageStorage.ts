export class ImageStorage {
    store(image, compressor, filter){
        compressor.compress(image);
        filter.apply(image);

        console.log('image stored')
    }
}