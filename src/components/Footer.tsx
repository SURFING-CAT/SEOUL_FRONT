import styled from "styled-components"
import home from '../image/home.png';
import bell from '../image/bell.png';
import more from '../image/more.png';
import camera from '../image/camera.png';

const StyledFooter = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #888;
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <img src={home} style={{width:"30px", height:"30px"}}/>
            <img src={bell} style={{width:"30px", height:"30px"}}/>
            <img src={more} style={{width:"30px", height:"30px"}}/>
            <img src={camera} style={{width:"30px", height:"30px"}}/>
        </StyledFooter>
    )
}