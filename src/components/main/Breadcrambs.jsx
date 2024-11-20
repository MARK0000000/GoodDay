import React, {useContext} from 'react';
import { NavigateContext } from '../../context/Navigate';

export default function Breadcrambs({main, mainRoute, elements, current }) {
    const {handleNavigate} = useContext(NavigateContext)

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