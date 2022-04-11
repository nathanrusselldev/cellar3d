import CellarItem from "./cellarItem";
import itemGrid from "./itemGrid";
import { Link } from "react-router-dom";
import AssetRouter from "../../../assets/images"; 
import { useQuery } from "@apollo/client";
import { FIND_BOTTLES } from "../../../utils/queries";

// Create a query to find all .

// create an array of 16 empty elements, 

const bottleArray = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,]

function CellarPage() {
    
  const { loading, data } = useQuery(FIND_BOTTLES)

  const bottleInfo = data?.bottles || [];

    bottleInfo.map((bottle,i)=> {
        bottleArray[bottle.position] = bottle
    })

    return (
        <section className="cellarPage">
            <header>
                <Link className="backToProfile" to='/profile'>
                    <img src={AssetRouter.backArrow.src} alt={AssetRouter.backArrow.alt}  /> Back To Profile
                </Link>
            </header>
            {
                bottleArray.map((bottle, i) => {
                    return <CellarItem position={itemGrid[`item${i}`]} item={bottle} key={i} />
                })
            }
          
        </section>
    );
}

export default CellarPage;

// have initial state be set from the db as opposed to hardcoding.
// 