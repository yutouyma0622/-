import styled from "styled-components";
import Link from 'next/link'



const TopContainer =styled.header`
  text-align:center ;
  width:1920px ;
  height:1080px ;
`;

export default function Top(props) {
	return (
	  <TopContainer>
		<picture>
		<img scr="./img/ロゴ.png"></img>
		</picture>
	  </TopContainer>
	);
  }