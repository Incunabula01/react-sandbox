import React from 'react';

import './navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = ({ links }) => (
        <div className="Navigation">
            <ul>
                { links.map( link => (
                    <li key={link.to}>
                        <a href={link.to} title={link.label} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={link.icon}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

export default Navigation;