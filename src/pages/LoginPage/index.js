import React, { useContext, useEffect, useState } from 'react';
import {
    Button,
    Container,
    Input,
    LinkStyled,
    LogoCard,
    LogoWrapper,
    SignUpCard,
    SignUpWrapper,
    Subtitle,
    Title } from '../../styles/formUser.js';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router';
import UserContext from '../../providers/UserContext.js';
import { login } from '../../services/api.js';

function LoginPage() {
    const navigate = useNavigate();
    const { setUserInfos, token, setToken } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");

    useEffect(() => {
        if (token) {
            navigate('/timeline')
        }
    }, [token, navigate])

    function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        setInputLoading("disabled");
        if (email === "" || password === "") {
            alert("Fill all fields!");
            setIsLoading(false);
            setInputLoading("");
        }
        else {
            const promise = login({

                email: email,
                password: password
            });

            promise.then(response => {
                setUserInfos(response.data.user)
                setToken(response.data.token)
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userInfos", JSON.stringify(response.data.user))
                navigate('/timeline')

            })
            promise.catch(error => {
                if (error.response.status === 401) {
                    alert("Email or password incorrect. Try again!")
                }
                else {
                    alert("System error! Try again.")
                }
                setIsLoading(false);
                setInputLoading("");
            })
        }
    }

    return (
        <Container>
            <LogoWrapper >
                <motion.LogoCard initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                    stiffness: 260,
                    damping: 20,
                    duration: 1
                }}>
                    <Title>RepoProvas</Title>
                    <Subtitle>save, share and discover</Subtitle>
                    <Subtitle>the best links on the web</Subtitle>
                </motion.LogoCard>
            </LogoWrapper>
            <SignUpWrapper>
                <SignUpCard >
                    <motion.form onSubmit={handleLogin} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{
                            stiffness: 260,
                            damping: 20,
                            duration: 1
                        }}>
                        <Input
                            type="email"
                            placeholder="e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            disabled={inputLoading}
                        />
                        <Input
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            disabled={inputLoading}
                        />
                        <Button>{isLoading ? ("loading...") : ("Log In")} </Button>


                        <LinkStyled to="/sign-up" > First time?Create an account! </LinkStyled>
                    </motion.form>
                </SignUpCard>

            </SignUpWrapper>

        </Container >
    )
}

export default LoginPage;