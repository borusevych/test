import { useEffect, useState } from "react";
import BodyTopImage from "../components/BodyTopImage/BodyTopImage";
import Goods from "../components/Goods/Goods";

export default function Home({favorites, addToFavorites, removeFromFavorites, cart, addToCart}) {

    return (
      <>
        <BodyTopImage />
        <Goods 
          favorites={favorites} 
          addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites}
          cart={cart}
          addToCart={addToCart}
        />
      </>
    )
}
