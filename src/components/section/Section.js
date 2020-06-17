import React from 'react';

const Section = ({name, children}) => (
    <div>
        <h2>{name}</h2>
        {children}
    </div>
)

export default Section;