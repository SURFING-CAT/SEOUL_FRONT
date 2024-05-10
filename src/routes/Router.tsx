import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CommunityPage } from "../pages/CommunityPage"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CommunityPage />}/>
            </Routes>
        </BrowserRouter>
    )
}