import CellarItem from "./cellarItem";
import itemGrid from "./itemGrid";
import { Link } from "react-router-dom";
import AssetRouter from "../../../assets/images"; 

function CellarPage() {
    return (
        <section className="cellarPage">
            <header>
                <Link className="backToProfile" to='/profile'>
                    <img src={AssetRouter.backArrow.src} alt={AssetRouter.backArrow.alt}  /> Back To Profile
                </Link>
            </header>
            <CellarItem position={itemGrid.item1} />
        </section>
    );
}

export default CellarPage;