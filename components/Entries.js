import styled from "styled-components"
import Link from 'next/link'

const EntriesContainer = styled.section`
  max-width: 1080px;
  width: calc(100% - 16px);
  margin: 8px auto;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 480px) {
    display: block;
  }
`

const EntriesContainerTitle = styled.h2`
  color: #fff;
  width: 100%;
  padding: 8px;
  background-color: #000;
  font-size: 18px;
  border-radius: 2px;
`

export default function Entries(props) {
  return (
    <EntriesContainer>
      <EntriesContainerTitle>{props.title}</EntriesContainerTitle>
      {props.children}
    </EntriesContainer>
  )
}