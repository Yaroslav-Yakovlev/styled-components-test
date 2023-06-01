import React from 'react';
import {Content} from "../content";
import { CardStyled } from './styles/Card.styled';

interface CardProps {
    item: Content;
}

const Card: React.FC<CardProps> = ({ item: { id, title, body, image } }) => {
    return (
        <CardStyled layout={id % 2 === 0 ? 'row-reverse' : ''}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt='image'/>
            </div>
        </CardStyled>
    );
};

export default Card;
