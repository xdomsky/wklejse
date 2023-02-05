import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`
const Text = styled.span`
    font-size: 95px;
    font-style: italic;
    font-family: 'Gilda Display', serif;
`
const Info = styled.span`
    font-family: 'Gilda Display', serif;
    font-size: 1.2rem;
    font-style: italic;
`
const Href = styled.a`
    color: #fff;
    font-family: 'Gilda Display', serif;
    font-size: 1.2rem;
    font-style: italic;
`
const Page404 = () => {
    return (
        <Error>
            <Text>404</Text>
            <Info>Nie znaleziono strony</Info>
            <Href href="/">Powrót na główną strone</Href>
        </Error>
    )
}

export default Page404