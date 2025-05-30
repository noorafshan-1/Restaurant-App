import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodItem from "../components/FoodItem";
import FoodItemContainer from "../components/FoodItemContainer";
import FoodLinks from "../components/FoodLinks";
import { fetchFoods } from "../redux/slices/foodSlice";

const Desserts = () => {
  const {
    food: { data },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const dessertItems = data.filter((item) => item.category === "dessert");

  useEffect(() => {
    dispatch(fetchFoods());
  }, []);
  return (
    <>
      <div className="max-w-6xl mx-auto min-h-[83vh] p-3">
        <FoodLinks />
        <FoodItemContainer>
          {dessertItems.map((item) => {
            return <FoodItem key={item._id} item={item} />;
          })}
        </FoodItemContainer>
        
      </div>
    </>
  );
};

export default Desserts;
