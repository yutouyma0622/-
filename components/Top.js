import styled from "styled-components";
import Link from 'next/link'


export default function Top(props) {
	return (
	  <HeaderContainer>
		<HeaderTitle>
      <Link href={`/`}>
      Portfolio
      </Link>
      </HeaderTitle>
	  </HeaderContainer>
	);
  }