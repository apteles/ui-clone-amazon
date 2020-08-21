import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 250px;
  
  display: flex;
  flex-direction: column;

  height: 420px;
  margin: 10px;
  background: #fff;
  padding: 20px;
  > img{
    width: 100%;
    max-height: 230px;
    object-fit: contain;
    margin-bottom: 20px;
  }
  > button{
    border-radius: 3px;
    padding: 7px 12px;
    background: var(--secondary-color);
    text-transform: uppercase;
    cursor: pointer;
    transition: background ease 500ms;

    &:hover{
      background: #db8e30;
    }
  }

`;

export const ProductInfo = styled.div`
`;

export const Price = styled.div`
`;


export const Title = styled.div`


`;

export const Rating = styled.div`


`;
