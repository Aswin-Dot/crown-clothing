import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../Redux/directory/dierctory-selectors';
import MenuItem from '../Menu-item/menu-item';
import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {console.log(selectDirectorySections)}
        {
            sections.map(({id, ...otherSectionProps}) => {
                return <MenuItem 
                    key={id}
                    {...otherSectionProps}/>
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);