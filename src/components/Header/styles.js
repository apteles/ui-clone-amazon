import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary-color);
  height: 60px;
  padding: 20px;
  display: flex;
  align-items: center;
  position: sticky;
  top:0;
  z-index: 999;
  
`;
export const Logo = styled.img`
  width: 100%;
  max-width: 97px;
  height:35px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const SearchForm = styled.form`
  flex: 2 1 auto;
  display: flex;
  margin-right: 10px;
  input{
    width: 100%;
    height: 40px;
    padding: 7px 12px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
   
    outline:none;
    background: #fff;

    &:focus{
      border: 2px solid #F3A847;
      padding: 7px 10px;
    }
  }

  button{
    background: var(--secondary-color);
    height: 40px;
    padding: 7px 20px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }
  
`;

export const NavbarRight = styled.nav`

  flex: 1 0 auto;
  margin-top: 10px;  
  > ul{
    width: 100%;
    display: flex;
    list-style:none;
    > li{
     
      padding-top: 2px;
      padding-left: 11px;
      padding-right: 11px;
      padding-bottom: 12px;
      > a{
      
        width: 100%;
        text-decoration: none;
        span:first-of-type {
          color:#CCCCCC;
          font-size: 12px;
          font-weight: 300;
        }
        span:last-of-type {
          color:#fff;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
`;
export const ShoppingBasket = styled.div`
  display: flex;
  align-items: center;
  > span{
    margin-left: 5px;
    color: var(--secondary-color) !important;
  }
  >svg{
    font-size: 2em;
    color: #fff;
  }
  
`;
