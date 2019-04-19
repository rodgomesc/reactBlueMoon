import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    min-width: 210px;
    background: #fff;
    border-radius: 5px;
    margin-right: 20px;
    box-shadow: 2px 2px 9px -8px #000000;
    list-style: none;
`;

export const List = styled.div`
border: solid 1px pink;
padding: 0 20px 0 10px;
`
export const SubItem = styled.ul`
    margin-left: 182px;
    width: 200px;
    border-radius: 3px;
    list-style: none;
    background: #428dc9;
    color: #fff;
    z-index: 1;
    position: fixed;
    visibility: hidden;
    transition:all .2s ease;

    li{
        margin-top: 5px;
        padding: 5px 8px;
    a{
        color: #fff;
        text-decoration: none;
    }
    }
`;

export const Item = styled.li`
    margin-top: 6px;
    a {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        color: #000;
        div {
            height: 10px;
            width: 10px;
            border-radius:1px;
            border: 1px solid #428dc9;
        }
        &:hover{
            color: #fff;
            div{
                background: #428dc9;
            }
        }

    }
    &:hover{

        ${SubItem} {
            visibility: visible;
            margin-top: ${props => props.first ? '-27px' : '-8px'};


        }
  }

`;


