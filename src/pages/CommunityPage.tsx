import styled from "styled-components"
import { StyledCommunityContent, StyledCommunityInfo, StyledCommunityReFunction, StyledPost } from "../style/Community"
import { Footer } from "../components/Footer"
import cat from '../image/cat.jpg';
import { StyledHeader } from "../components/Header";

export const CommunityPage = () => {
    return(
        <>
            <StyledHeader>
                <div style={{position:"relative", left:"20px"}}>
                    <img src={cat} alt="" style={{width:"12vw", height:"12vw", borderRadius:"50px"}}/>
                </div>
            </StyledHeader>
            <StyledPost>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <img src={cat} alt="" style={{width:"15vw", height:"15vw", borderRadius:"50px"}}/>
                </div>
                <StyledCommunityContent>
                    <StyledCommunityInfo>
                        <h3 style={{display:"inline"}}>수달</h3>
                        <span>@_yoonjisang · 10m</span>
                    </StyledCommunityInfo>
                    <p>경복궁 한복대여 왜이리 저렴하냐 여자친구랑 저녁에 와서 구경하셈 진짜 재밌넹 ㅋㅋ</p>
                    <StyledCommunityReFunction>
                    
                    </StyledCommunityReFunction>
                    <p>Show this thread</p>
                </StyledCommunityContent>
            </StyledPost>
            <Footer />
        </>    
    )
}