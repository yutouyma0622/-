import styled from "styled-components";
import Link from 'next/link'

const HeaderContainer =styled.header`
  color:#fff;
  background-color: #000;
`;

const HeaderTitle = styled.h1`
  padding: 20px;
  margin: 0;
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: normal;

  & img {
    width: 50px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }
`;

export default function Header(props) {
	return (
	  <HeaderContainer>
		<HeaderTitle>
      <picture>
      <img src="/bara.svg" />
      </picture>
      <Link href={`/`}>
      Portfolio
      </Link>
      </HeaderTitle>
	  </HeaderContainer>
	);
  }