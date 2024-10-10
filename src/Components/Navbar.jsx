import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

const HeaderTop = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 20px;
`;

const SearchBox = styled.div`
  & > input {
    width: 100px;
    border: none;
    border-bottom: 1px solid #000;
    padding: 4px 6px;
    text-align: center;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #f00;
  margin-bottom: 20px;
  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuArea = styled.div`
  & > ul {
    display: flex;
    gap: 20px;
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "발매",
  "랭킹",
  "세일",
  "무탠슈퍼세일",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    console.log(e);
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };
  return (
    <Wrapper>
      <HeaderTop>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onkeyUp={onCheckEnter} />
        </SearchBox>
        {    authenticate ?         <LoginAuth onClick={() => navigate("/login")}>
          <FontAwesomeIcon icon={faUser} />
          <span>로그인</span> : }

        </LoginAuth>
      </HeaderTop>
      <Logo>
        <Link to={"/"}>
          <img scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhK7hTpB0iV7KwaYrIzD991fyAIf0Nrz2ljw&s" />
        </Link>
      </Logo>
      <MenuArea>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </MenuArea>
    </Wrapper>
  );
};

export default Navbar;
