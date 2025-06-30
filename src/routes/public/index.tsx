import { useChangeTitlePage } from '@hooks/useChangeTitlePage'
import { PublicLayout } from '@layouts/public'
import { Products } from '@modules/products/pages'
import { Home } from "@modules/products/pages/home"
import { Contacts } from "@pages/contacts"
import type React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

export const PublicRouter: React.FC = () => {
    const { titlePage } = useChangeTitlePage()
    useEffect(() => {
        window.document.title = titlePage
    }, [titlePage])
    return (
        <Routes>
            <Route path='/' element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/products' element={<Products />} />
            </Route>
        </Routes>
    )
}
