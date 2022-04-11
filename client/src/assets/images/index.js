// This js file is to act as a router for all of the images that are included inside of it, this allows the images to be imported easier.
import backArrowImage from './backArrow.svg'
import splashImage from './cellar3dSplash.png'

const AssetRouter = {
    backArrow: {
        src: backArrowImage,
        alt: `icon of a back arrow.`,
    },
    splash: {
        src: splashImage,
        alt: `wine bottles`
    }
}


export default AssetRouter;