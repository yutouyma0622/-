import styled from "styled-components";
import Link from "next/link";

const ProfileContainer = styled.section`
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;

  @media screen and (max-width: 640px) {
    display: block;
  }
`;

const ProfileTitle = styled.h2`
  margin: 0 0 8px 0;
  padding: 0 0 8px 0;
  color: #fff;
  border-bottom: 1px solid #fff;
`;

const ProfileImg = styled.figure`
  margin: 0 32px 0 0;
  width: 200px;
  @media screen and (max-width: 640px) {
    margin: 0 auto;
  }
`;

const ProfileDescription = styled.dl`
  margin: 0;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
`;
const ProfileLabel = styled.dt`
  margin: 0;
  margin-right: 8px;
  color: #fff;
  line-height: 2;
  width: 15%;
`;
const ProfileValue = styled.dd`
  margin: 0;
  color: #fff;
  line-height: 2;
  width: calc(100% - 15% - 16px);
  &:before {
    content: " : ";
    margin-right: 8px;
  }
`;
const ProfileWrap = styled.div`
  margin: 16px 0;
  width: 40%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export default function Profile(props) {
  return (
    <ProfileContainer>
      <ProfileImg>
        <img src="/top_rogo.svg" alt="" />
      </ProfileImg>
      <ProfileWrap>
        <ProfileTitle>宇山 裕人 / Yuto Uyama</ProfileTitle>
        <ProfileDescription>
          <ProfileLabel>生年月日</ProfileLabel>
          <ProfileValue>2002.06.22 </ProfileValue>
          <ProfileLabel>趣味</ProfileLabel>
          <ProfileValue>YouTube鑑賞 / アイドル鑑賞 / 写真撮影</ProfileValue>
          <ProfileLabel>スキル</ProfileLabel>
          <ProfileValue>Photoshop / illustrator / HTML / CSS / JavaScript</ProfileValue>
        </ProfileDescription>
      </ProfileWrap>
    </ProfileContainer>
  );
}
