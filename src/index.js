import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Earn from '@/pages/earn'
import App from '@/App'
import { persistor, store } from '@/store/index.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '@/assets/sass/custom.scss'
import '@/assets/font/iconfont.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="earn" element={<Earn />} />
                        <Route path="*" element={<p>There's nothing here!</p>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PersistGate>
    </Provider>
)
