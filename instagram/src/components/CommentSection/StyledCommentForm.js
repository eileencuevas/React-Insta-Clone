import styled from 'styled-components';

const AddComment = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #EFEFEF;
    margin: 0 auto;

    input {
        width: 56rem;
        padding: 14px 14px 14px 0;
        border: none;
        color: #9E9E9E;

        &:focus {
            outline: 0;
        }
    }
`

export { AddComment };