import styled from "styled-components";
import Link from 'next/link'

export default function Sample() {
	return <img scr="./img/ロゴ.png"></img>
  }

const TopContainer =styled.header`
  text-align:center ;
  width:1920px ;
  height:1080px ;
`;

export default function Top(props) {
	return (
	  <TopContainer>
		<img scr="./img/ロゴ.png"></img>
	  </TopContainer>
	);
  }