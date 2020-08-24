import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImageFeatured = styled.img`
  max-width: 500px;
  max-height: 400px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid black;
`;
export const SlideWrapper = styled.div`
  max-width: 500px;
  display: flex;
  min-height: 100px;
  align-items: center;
`;
export const Slide = styled.div`
  width: 440px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e1e2e2;
    outline: 1px solid slategrey;
    border-radius: 100px;
    transition: background-color 500ms ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #d39e11;
  }
`;
export const Thumb = styled.img`
  object-fit: cover;
  max-width: 180px;
  max-height: 100px;
  cursor: pointer;
  opacity: 0.5;
  margin: 5px;
  border: 2px solid black;

  &:hover {
    opacity: 1;
  }
`;
