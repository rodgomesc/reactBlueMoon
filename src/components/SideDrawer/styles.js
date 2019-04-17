import styled from 'styled-components';

export const Container = styled.div`
    background: #293e5f;
    display: flex;
    flex-direction: column;
    color: #fff;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 70%;
    max-width: 400px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    padding: 15px 0 0 40px;
    transform: ${props => props.activated ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-out;
    z-index: 3;

    ul {
        list-style: none;
        li {
            margin-top: 15px;
            &:first-child{
                margin-top: 0px;
            }
            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
    nav {
        display: flex;
        margin-top: 30px;
        height: 100%;
    }
`;

export const Input = styled.input`
    color: #fff;
    background: #19364d;
    font-family: FontAwesome;
    width: 210px;
    height: 30px;
    padding: 0 0 0 10px;

    transition: all 0.2s linear;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    ::placeholder {
        color: inherit;
        opacity: 0.7;
    }
`;

export const PhoneInfo = styled.div`
    display: flex;
    flex-direction: column;
    strong {
        margin: 20px 0 8px;
    }
    a {
        color: #428dc9;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;
