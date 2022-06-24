import styled from "styled-components"
import Link from 'next/link'

const EntryContainer = styled.section`
  margin: 8px;
  border: 1px solid #000;
  border-radius: 3px;
  width: calc(100% / 3 - (8 * 2px));
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  & a {
    display: block;
    flex-grow: 1;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity 0.2s ease-in;
    &:hover {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    width: calc(100% - (8 * 2px));
  }
`

const EntryTitle = styled.h2`
  background-color: #000;
  margin: 0;
  padding: 8px;
  font-size: 16px;
  color: #333;
  line-height: 1.8;
  color: #fff;
`

const EntryImage = styled.figure`
  & img {
    width: 100%;
  }
`

export default function Entry(props) {
  return (
    <EntryContainer>
      <Link href={`/entry/${props.entry.id}`}>
        <a>
        <EntryTitle>
              {props.entry.title}
        </EntryTitle>
        <EntryImage>
          <picture>
          <img src={props.entry.image?.url} alt="" />
          </picture>
        </EntryImage>
        </a>
      </Link>
    </EntryContainer>
  )
}