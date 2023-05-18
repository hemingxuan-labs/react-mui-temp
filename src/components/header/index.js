import * as React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '@/assets/image/logo.png'
import message from '@/components/message'
import './index.scss'
import { MyButton } from '@/components/mui-components/index.js'
import { copyTextToClipboard } from '@/utils/utils.js'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const MySnackbar = styled(Snackbar)`
    .MuiSnackbarContent-message {
        color: #acf10c !important;
    }
`
export default function PrimarySearchAppBar() {
    const navigate = useNavigate()
    let menuList = [
        {
            title: 'Mint',
            path: 'mint'
        },
        {
            title: 'About',
            path: 'about'
        },
        {
            title: 'Economics',
            path: 'economics'
        },
        {
            title: 'Earn',
            path: '/earn'
        },
        {
            title: 'Staking',
            path: '/staking'
        }
    ]
    const [openSnackbar, setOpenSnackbar] = React.useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSnackbar(false)
    }
    const walletAddress = useSelector((state) => state.persist.walletAddress)
    const scrollToAnchor = (anchorName) => {
        // 锚点定位
        if (anchorName) {
            navigate('/')
            setTimeout(() => {
                let anchorElement = document.getElementById(anchorName)
                if (anchorElement) {
                    anchorElement.scrollIntoView()
                }
            }, 100)
        }
    }
    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = () => {
        copyTextToClipboard('opopopopopopo')
    }
    return (
        <div>
            <MySnackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={openSnackbar}
                autoHideDuration={2500}
                onClose={handleClose}
                message="Coming Soon"
                action={action}
            />
            <header className="header-box webkit-scrollbar-none pb-0">
                <div className="logo-box d-flex-center">
                    <img
                        className="me-3"
                        style={{
                            width: 34
                        }}
                        src={logo}
                        alt=""
                    />
                    POPOS
                </div>
                <div className="header-item-box">
                    {menuList.map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="header-item text-nowrap"
                                onClick={() => {
                                    if (item.path === '/staking') {
                                        message.success({
                                            content: 'Coming Soon',
                                            duration: 2000,
                                            iconShow: false
                                        })
                                        return
                                    }
                                    scrollToAnchor(item.path)
                                    return
                                }}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div className="header-button">
                    {!walletAddress ? (
                        <MyButton className="text-nowrap px-3" onClick={handleClick}>
                            Connect Wallet
                        </MyButton>
                    ) : (
                        <div className="text-white cursor-pointer" onClick={handleClick}>
                            {walletAddress}
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}
