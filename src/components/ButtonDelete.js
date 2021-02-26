import styled from 'styled-components'

export const ButtonDelete = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--red);
    color: var(--red);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: var(--red);
        color: var(--mainWhite);
    }
    &:focus {
        outline: none;
    }
`;