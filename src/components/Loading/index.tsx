import React from 'react';
import './styles.sass';

interface Props {}

const Loading: React.FC<Props> = ({}) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default Loading;
