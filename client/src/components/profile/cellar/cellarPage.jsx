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
            <CellarItem position={itemGrid.item2} />
            <CellarItem position={itemGrid.item3} />
            <CellarItem position={itemGrid.item4} />
            <CellarItem position={itemGrid.item5} />
            <CellarItem position={itemGrid.item6} />
            <CellarItem position={itemGrid.item7} />
            <CellarItem position={itemGrid.item8} />
            <CellarItem position={itemGrid.item9} />
            <CellarItem position={itemGrid.item10} />
            <CellarItem position={itemGrid.item11} />
            <CellarItem position={itemGrid.item12} />
            <CellarItem position={itemGrid.item13} />
            <CellarItem position={itemGrid.item14} />
            <CellarItem position={itemGrid.item15} />
            <CellarItem position={itemGrid.item16} />
        </section>
    );
}

export default CellarPage;

// have initial state be set from the db as opposed to hardcoding.
// 