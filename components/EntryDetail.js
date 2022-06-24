import styled from "styled-components";
import Link from "next/link";
const EntryContainer = styled.article`
  margin: 16px auto;
  border: 1px solid #000;
  border-radius: 2px;
  max-width:1000px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const EntryTitle = styled.h2`
  margin: 0;
  background-color: #000;
  padding: 1em;
  color: #fff;
`;

const EntryImg = styled.figure`
  & img {
    margin:0 auto ;
    width:100% ;
  }
`;

const EntryBody = styled.div`
  & * {
    color: #fff;
  }
  & h2 {
    padding:16px ;
    background-color:#333 ;
    color:#fff ;
  }
  & img {
    margin:16px auto ;
    max-width:1000px ;
    display:block ;
  }
  & h3 {
    padding:16px ;
    color:#fff ;
    background-color:#333 ;
  }
  & p {
    margin:16px ;
  }
  & ul {
    margin:16px ;
  }
  & li {
    
  }
  
`

export default function Entry(props) {
  return (
    <EntryContainer>
      <EntryTitle>{props.entry.title}</EntryTitle>
      <EntryImg>
        <img src={props.entry.image.url} alt="" />
      </EntryImg>
      <EntryBody dangerouslySetInnerHTML={{ __html: props.entry.body }}></EntryBody>;
    </EntryContainer>
  );
}
