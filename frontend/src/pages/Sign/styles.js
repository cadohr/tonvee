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

.logo{
    position: absolute;
    top: 50px;
    left: 0;
}


.presentation-text{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;

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

        .react-tabs{
            width: 400px;

            .react-tabs__tab-panel{
                height: 330px;

                form{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    min-width: 100%;
                    justify-content: center;
                    align-items: center;
                }
            }
            
            .react-tabs__tab-list{
                display: flex;
                justify-content: space-around;
                border: none;
                
                .single-tab{
                    font-size: 24px;
                    font-weight: 600;
                    text-align: center;
                    color: #ffffff;
                    padding: 15px 30px;
                    cursor: pointer;
                    
                    &.react-tabs__tab--selected{
                        background: transparent;
                        border-bottom: 4px solid #ffffff;
                    }
                }
            }
        }
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


