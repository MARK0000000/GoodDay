import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateContext } from '../../context/Navigate';
import { TypeOfDataContext } from '../../context/TypeOfData';

export default function Breadcrambs({main, mainRoute, elements, current }) {
    const navigate = useNavigate();
    const {handleNavigate} = useContext(NavigateContext)
    const {changeType} = useContext(TypeOfDataContext)

    const handleNavigatePosters = (route, buttonId) => {
        handleNavigate(route, buttonId)
    }
    return (
        <div className="breadCrambs">
            <a onClick={() => handleNavigatePosters(mainRoute, mainRoute)} className="breadCrambs__link">{main}</a>
            {elements !== undefined && elements.map((item, index) => (
                <React.Fragment key={index}>
                    <span className="breadCrambs__span">&gt;</span>
                    <a className="breadCrambs__link" onClick={() => handleNavigatePosters(item.path, item.path)}>{item.text}</a>
                </React.Fragment>
            ))}
            <span className="breadCrambs__span">&gt;</span>
            <a className="breadCrambs__link">{current}</a>
        </div>
    );
}