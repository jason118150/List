import styled from 'styled-components';

export const PaginatedListContainer = styled.div`
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    width: 100%;
`;

export const ControlContainer = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
`;

export const ControlItem = styled.li`
    list-style-type: none;
    padding: 10px;
    background: #c1503c;
    border-right: 1px solid #9c462b;
    border-top: 1px solid #9c462b;
    border-bottom: 1px solid #9c462b;
    color: #f1f1f1;
    cursor: pointer;
    display: flex;
    transition: 0.3s ease all;
    &:first-of-type {
        border-left: 1px solid #9c462b;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    &:last-of-type {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    &.active {
        background: #9e4343;
    }
    &:hover {
        background: #9e4343;
    }
`;

export const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.3rem;

    & > li {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #e45021;
        border-left: 1px solid #e45021;
        border-right: 1px solid #e45021;

        &:last-child {
            border-bottom: 1px solid #e45021;
        }

        & > span {
            flex-basis: 33.3%;
            padding: 1rem;
            text-align: center;
            &:first-child {
                border-right: 1px solid #e45021;
            }
        }
    }
`;

export const ListAvatar = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    height: 160px;
    width: 200px;
    background-position: center;
    margin-left: 50%;
    transform: translateX(-50%);
`;
export const DetailAvatar = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    height: 300px;
    width: 250px;
    margin-top: 10px;
    background-position: center;
    margin-left: 50%;
    transform: translateX(-50%);
`;