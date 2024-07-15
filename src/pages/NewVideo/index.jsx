import styled from "styled-components";
import Form from "../../components/Form";
import AddCategoryModal from "../../components/AddCategoryModal";
import { useState } from "react";
import { useGamesContext } from "../../context/Games";

const StyledNewVideoContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 90px auto 120px;
  padding: 0 10px;
  position: sticky;
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  text-shadow: 1px 2px 1px black;
  color: #ffffff;
  margin-bottom: 20px;
`;
const StyledParagraph = styled.p`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-shadow: 1px 2px 1px black;
  color: #ffffff;
  margin-bottom: 40px;
`;
const StyledFormContainer = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledNewCategoryButton = styled.button`
  position: absolute;
  top: -50px;
  right: 20px;
  background-color: transparent;
  border: 3px solid #ffffff;
  box-shadow: 2px 3px 2px 1px black;
  border-radius: 10px;
  padding: 10px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    border: 4px solid #ffffff;
    font-size: 1.1rem;
  }
`;

const NewVideo = () => {
  const gameContext = useGamesContext();

  return (
    <StyledNewVideoContainer>
      <StyledTitle> NOVO VÍDEO </StyledTitle>
      <StyledParagraph>
        Preencha todo o formulário para criar um novo vídeo
      </StyledParagraph>
      <StyledFormContainer>
        <Form />
      </StyledFormContainer>
      <StyledNewCategoryButton onClick={() => gameContext.categoryModal(true)}>
        Novo Sistema
      </StyledNewCategoryButton>
      <AddCategoryModal />
    </StyledNewVideoContainer>
  );
};

export default NewVideo;
