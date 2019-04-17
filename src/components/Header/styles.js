import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 13%;
    margin-right: 13%;
    left: 0;
    right: 0;
    top: 0;
    padding: 15px 16px 6px 15px;
    /* border: 1px solid white; */

    a {
        font-size: 20px;
        color: #fff;
        text-decoration: none;

        padding: 6px;
        border-radius: 3px;
        &:hover {
            cursor: pointer;
            color: #1a3156;
        }
    }
`;

export const HeaderHeaderBG = styled.div`
    background: linear-gradient(180deg, #4298c9 0%, #428dc9 100%);
    height: 153px;
`;

export const Input = styled.input`
    color: #fff;
    background: transparent;
    font-family: FontAwesome;
    width: 198px;
    height: 30px;
    padding: 0 0 0 10px;

    transition: all 0.2s linear;
    cursor: pointer;
    outline: none;
    border-radius: 12px;
    font-size: 14px;
    border: 1px solid rgba(255, 255, 255, 0.9);

    ::placeholder {
        color: inherit;
        opacity: 0.7;
    }
    @media (max-width: 525px) {
       display: none;
    }
`;
