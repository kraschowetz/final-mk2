import styled, {keyframes} from 'styled-components';

const titleWobble = keyframes`
    0%, 100%{
        transform: translate3d(-2px, 0, 0);
    }
    50%{
        transform: translate3d(2px, 0, 0);
    }
`;

export const TextBox = styled.div`
    background-color: ${props => props.bg};
    width: ${props => props.width};
    margin: 20px;
    padding: 10px;
    border-radius: 8px;
    min-height: 30px;
    height: fit-content;
    text-align: center;
  `;

export const Text = styled.p`
    color: ${props => props.color};
    list-style-position: inside;
    font-family:'verdana', sans-serif;
    line-height: 30px;
    font-size: 20px;
    margin: 20px;
    text-align: center;
  `;

export const Title = styled.h1`
    color: ${props => props.color};
    margin: 30px;
    margin-top: 80px;
    list-style-position: inside;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    user-select: none;
    &:hover,
    &:focus {
        animation-name: ${titleWobble};
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
  `;