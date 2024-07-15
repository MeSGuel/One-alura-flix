import { useState } from "react"
import styled from "styled-components"


const StyledFormInput = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    width: 90%;
    background-color: transparent;
`

const StyledLabel = styled.label`
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 6px;
    color: #FFFFFF;
    &.invalid{
        color: #AA0000;
    }

`
const StyledInput = styled.input`
    width: 100%;
    height: 62px;
    font-size: 1.25rem;
    background-color: transparent;
    font-weight: 600;
    color: #FFFFFF;
    border: 3px solid ${(props) => props.$color};
    border-radius: 15px;
    padding: 15px 15px;
    outline: none;
    &::placeholder{
        color:#b4a9a9;
        font-weight: 600;
        letter-spacing: 3px;
    }
    &.invalid{
        border: 3px solid #AA0000;
    }
`

const FormInput = ({color,label,id,type,value,placeholder,handleChange}) =>{
    const [isValid, setIsValid]= useState(true)
    return(
        <StyledFormInput>
            <StyledLabel
                className={isValid ? "" : "invalid"} 
                htmlFor={id}
            >
                {label}:
            </StyledLabel>
            <StyledInput
                className={isValid? "" : "invalid"}
                $color={color}
                id={id} 
                placeholder={placeholder} 
                type={type} 
                value={value} 
                required
                onChange={(event) => handleChange(event.target.value)}
                onBlur={(event) => setIsValid(event.target.validity.valid)}
                
            />
        </StyledFormInput>
    )
}

export default FormInput