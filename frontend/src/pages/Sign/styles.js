import styled from 'styled-components';
import background from '../../assets/background-login.png'

export const Container = styled.div`
background-image: url(${background});
background-size: cover;display: flex;
justify-content: space-around;
align-items: center;
width: 100vw;
height: 100vh;
max-width: 100%;

.presentation-text{
    color: red;

    .first-span{
        font-size: 26px;
        text-align: left;
        color: #ffffff;        
    }

    h1{
        font-size: 80px;
        font-weight: 900;
        text-align: left;
        color: #ffffff;    
        margin: 20px 0 70px 0;
    }

    .second-span{
        font-size: 20px;
        text-align: left;
        color: #ffffff;    
    }
}

.forms-wrapper{
    display: flex;
    flex-direction: column;
    max-width: 400px;

    .tabs-wrapper{
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        width: 100%;
    }
    
    .forgot-password{
        text-align: center;
        width: 100%;
        margin-top: 30px;
        font-size: 18px;
        color: #ffffff;
    }

}


`;

export const Button = styled.button`
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 2px;
    background-color: #fd7e40;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
`;

export const Tabs = styled.div`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    padding: 15px 30px;
    cursor: pointer;
        &.active{
            border-bottom: 4px solid;
        }
`;


