import styled from 'styled-components';

export const Container = styled.div`
  

  > div{

    max-width: 34rem;
    flex: 0 1 34rem;
    width: 100%;
    margin: 1rem;
    padding: 1.5rem;
    height: 50rem;
    box-shadow: 0px 10px 15px #1b1c2029;
    border-radius: 3px;
    background: #fff;

    .product-image{
        width: 310px;
        height: 340px;
        margin-bottom: 2rem;
    }

    .row-name{
        height: 16px;
        width: 90%;
        margin-bottom: 1rem;
    }

    .row-brand{
        height: 16px;
        width: 40%;
        margin-bottom: 2rem;
    }
    .row-price{
        height: 40px;
        width: 20%;
    }


  }
`;
