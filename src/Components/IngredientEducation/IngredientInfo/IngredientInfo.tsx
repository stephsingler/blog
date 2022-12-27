import React, { useState } from 'react';
import './IngredientInfo.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Ingredient } from "../../../Models";

type Props = {
    ingredient: Ingredient;
}

const IngredientInfoComponent = ({ ingredient }: Props) => {
    const [ showInfo, setShowInfo ] = useState(false);
    const { name, description, lookFor, ewg } = ingredient;
    const sources = ingredient?.sources?.content?.json?.content;

    const renderParagraphs = () => {
        const paragraphs = description?.split('\n');
        return paragraphs.map((p, i) => {
            return (
                <p key={i}>{p}</p>
            );
        });
    };

    const getHyperlinks = () => {
        return sources.map(el => {
            return el.content.map(nodeType => {
                return Object.values(nodeType)[1]
            });
        })
    };

    const getSources = () => {
        return getHyperlinks().map((link, i) => {
            return (
                <li key={i}>
                    <a href={link[1]?.uri}>{link[1]?.uri}</a>
                </li>
            );
        })
    };

    return (
        <section className="IngredientInfoComponent">
            <div className="ingredient-name">
                <h1>{name?.toUpperCase()}</h1>
                <p onClick={() => setShowInfo(!showInfo)}>
                    { showInfo ? <FaChevronUp size={20} /> : <FaChevronDown size={20} /> }
                </p>
            </div>
            { showInfo && (
                <div className="ingredient-info">
                    {renderParagraphs()}
                    {lookFor && (
                        <p><strong>Look for on the Label: </strong><span>{lookFor}</span></p>
                    )}
                    {ewg && (
                        <p><strong>EWG: </strong><span>{ewg}</span></p>
                    )}
                    { ingredient?.sources && (
                        <div className="sources">
                            <p><strong>Sources</strong></p>
                            <ul>
                                {getSources()}
                            </ul>
                        </div>
                    )}
                    <hr />
                </div>
            )}
        </section>
    );
};

export default IngredientInfoComponent;
