import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '@/components/header'
import Footer from '@/components/footer'
const AppBox = styled.div`
    background-color: rgb(14, 45, 37);
    min-height: 100vh;
`
const OutletBox = styled.div`
    min-height: calc(100vh - 230px);
`
function App() {
    return (
        <AppBox>
            <Header></Header>
            <OutletBox>
                <Outlet />
            </OutletBox>
            <Footer></Footer>
        </AppBox>
    )
}

export default App
