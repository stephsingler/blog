import React from 'react';
import './IngredientEducation.scss';
import AvoidProducts from '../../Images/ingredient-avoid.png';
import AvoidFood from '../../Images/ingredient-avoid-food.png';

const IngredientEducationComponent = () => {
    return (
        <section className="IngredientEducationComponent">
            <div className="ingredients-chart">
                <img src={AvoidProducts} />
                <p>Screenshot to reference when reading labels!</p>
                <img src={AvoidFood} />
            </div>
        </section>
    );
};

export default IngredientEducationComponent;
