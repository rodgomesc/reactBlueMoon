import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    display: flex;
    margin: -90px 13% 0 13%;
    height: 90px;
    border-radius: 3px 3px 0 0;
    background-image: -webkit-linear-gradient(158deg, #1a3156 22%, #fff 22.2%);
    @media (max-width: 425px) {
        margin: -65px 2% 0 2%;
        background: #fff;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const ToolbarContent = styled.div`
    display: flex;
    width: 100%;
    color: #fff;
    justify-content: flex-end;
    margin: 10px 20px;
    @media (max-width: 425px) {
        display: none;
    }
    ul {
        list-style: none;
        display: flex;
        width: 50%;

        li {
            background: brown;
            border: 1px solid red;
            margin-right: 10px;
            height: 60px;
            width: 100%;
            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    width: 22%;
    height: 100%;

    margin-top: 10px;
    img {
        margin-left: 10%;
        width: 75%;
        height: 100%;
    }
`;

export const ToolbarFooter = styled.div`
    background: #1a3156;
    color: #fff;
    padding: 7px 30px;
    border-radius: 0 0 3px 3px;
    border-top: 1px solid rgba(0, 0, 0, 0 0.075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05),
        inset 0 -1px 0 rgba(255, 255, 255, 0.035);
    min-height: 35px;
    margin: 0 13% 0 13%;
    @media (max-width: 425px) {
        margin: 0 2% 0 2%;
    }
`;

export const ToggleButton = styled.div`
    display: flex;
    margin: 5px 8px;


    button {
        margin-left: 5px;
        height: 24px;
        border: none;
        outline: 0;
        color: #000;
        background: transparent;
        cursor: pointer;
        z-index: 1;

    }
    @media (min-width: 425px) {
        display: none;
    }
`;
