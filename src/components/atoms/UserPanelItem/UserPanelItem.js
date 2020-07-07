import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemWrapper = styled.div`
    width: 100%;
    height: 45px;
    padding: 0 20px;
    background-color: rgba(10, 10, 10, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    border-radius: 3px;
    border-bottom: 1px solid white;
    cursor: pointer;
    @media (min-width: 768px){
        width: 200px;
        height: 35px;
        transform: ${props => 'translateX(25px) translateY(' + props.index*35 + 'px)'};
        transition: transform 0.3s ease-in-out;
        position: absolute;
        bottom: 0;
        left: 0;
    }

`

const UserPanelItem = ({ index, content, icon, handleItemClick }) => (
    <ItemWrapper onClick={handleItemClick} index={ index }>
        {content}
        <FontAwesomeIcon icon={icon} />
    </ItemWrapper>
)

UserPanelItem.propTypes = {
    index: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    handleItemClick: PropTypes.func.isRequired,
}

export default UserPanelItem;
