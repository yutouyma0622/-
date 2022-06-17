import styled from "styled-components";
import Link from 'next/link'

const MainVisualContainer =styled.figure`
  margin:40px;
  & img {
    width: 100%;
  }
`;

const MainVisualTitle = styled.h1`
  padding:20px ;
  margin:0 ;
  font-size:30px ;
`;

export default function MainVisual (props) {
	return (
	  <MainVisualContainer>
      <img src="/rogo.png" />
	  </MainVisualContainer>
	);
  }