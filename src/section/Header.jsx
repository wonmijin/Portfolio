import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { styled } from "styled-components";
import MyLogo from "../assets/logo.png"

export const Header = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const intro = document.querySelector('#introSection')
        const introHeight = intro.clientHeight
        const introBottom = intro.offsetTop + introHeight

        if (window.scrollY >= introBottom) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    return(
        <HeaderWrap show={show}>
            <InnerWrap>
                <Logo>
                    <Link
                        activeClass="active"
                        to="introSection"
                        spy={true}
                        smooth={true}
                        duration={400}
                    >
                        <img src={MyLogo} alt="로고이미지" />
                    </Link>
                </Logo>

                <NavigationBar>
                    <ul>
                        <li>
                            <Link
                            activeClass="active"
                            to="introSection"
                            spy={true}
                            smooth={true}
                            duration={400}
                            >
                            INTRO
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="aboutSection"
                            spy={true}
                            smooth={true}
                            duration={400}
                            >
                            ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="skillSection"
                            spy={true}
                            smooth={true}
                            duration={400}
                            >
                            SKILLS
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="projectSection"
                            spy={true}
                            smooth={true}
                            duration={400}
                            >
                            PROJECT
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="contactSection"
                            spy={true}
                            smooth={true}
                            duration={400}
                            >
                            CONTACT
                            </Link>
                        </li>
                    </ul>
                </NavigationBar>
            </InnerWrap>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${props => props.show ? "#fff" : "#87C6BC"};
    opacity: 0.8;
    color: ${props => props.show ? "#1d1d1d" : "#fff"};
`
const InnerWrap = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`
const Logo = styled.h1`
    cursor: pointer;

    img {
        width: 45px;
    }
`
const NavigationBar = styled.nav`
    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        
        li {
            font-size: 20px;
            padding: 8px 8px;
            margin: 8px 0;
            cursor: pointer;

            &:hover {
                transition: all 0.4s;
                color: #8560b6;
            }
        }

        @media (max-width: 768px) {
            li {
                font-size: 14px;
                padding: 0 2px;
                margin: 0 2px;
            }
        }
    }
`