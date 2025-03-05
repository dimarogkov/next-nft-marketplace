import LoaderWrapper from './LoaderWrapper';
import LoaderImage from './LoaderImage';
import LoaderLink from './LoaderLink';

const ImageLoader = Object.assign(LoaderWrapper, {
    Image: LoaderImage,
    Link: LoaderLink,
});

export default ImageLoader;
