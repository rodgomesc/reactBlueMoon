import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    min-width: 210px;
    background: #fff;
    border-radius: 5px;
    margin-right: 10px;
    padding-left: 20px;
    box-shadow: 2px 2px 9px -8px #000000;
    list-style: none;
`;
export const SubItem = styled.ul`
    list-style: none;
    margin-left: 200px;

    z-index: 1;
    position: fixed;
    border: solid 1px red;
    visibility: hidden;
`;

export const Item = styled.li`
    margin-top: 6px;
    a {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        color: #000;
        div {
            height: 20px;
            width: 20px;
            border: 1px solid;
        }

    }
    &:hover{
        color: blue;
        ${SubItem} {
            color: red;
            border: solid 1px green;
            visibility: visible;
            margin-top: ${props => props.first ? '-20px' : '0px'};


        }
  }

`;


