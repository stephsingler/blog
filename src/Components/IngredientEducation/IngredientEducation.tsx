import React, {useEffect, useState} from 'react';
import './IngredientEducation.scss';
import AvoidProducts from '../../Images/ingredient-avoid.png';
import AvoidFood from '../../Images/ingredient-avoid-food.png';

import { GetIngredientCollection } from "../../Utils";
import IngredientInfoComponent from "./IngredientInfo/IngredientInfo";

const IngredientEducationComponent = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        (async () => {
            const { ingredients } = await GetIngredientCollection();
            ingredients.sort((a, b) => {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            setIngredients(ingredients);
        })();
    }, []);

    return (
        <section className="IngredientEducationComponent">
            <div className="ingredients-chart">
                <img src={AvoidProducts} />
                <p>Screenshot to reference when reading labels!</p>
                <img src={AvoidFood} />
            </div>
            <div className="ingredients-collection">
                {ingredients.map((ingredient, i ) => {
                    return <IngredientInfoComponent key={i} ingredient={ingredient} />
                })}
            </div>
        </section>
    );
};

export default IngredientEducationComponent;
