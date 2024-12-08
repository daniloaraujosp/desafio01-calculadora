import { ButtonContainer } from "./styles";

const ButtonPurple = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
        {label}
      </ButtonContainer>
    );
  }
  
  export default ButtonPurple;