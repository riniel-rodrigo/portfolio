import styled from "styled-components";

export const ProjectsMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='530' preserveAspectRatio='none' viewBox='0 0 1440 530'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1027%26quot%3b)' fill='none'%3e%3cpath d='M13 530L543 0L957 0L427 530z' fill='url(%26quot%3b%23SvgjsLinearGradient1028%26quot%3b)'%3e%3c/path%3e%3cpath d='M344.8 530L874.8 0L1242.3 0L712.3 530z' fill='url(%26quot%3b%23SvgjsLinearGradient1028%26quot%3b)'%3e%3c/path%3e%3cpath d='M675.6 530L1205.6 0L1388.6 0L858.6 530z' fill='url(%26quot%3b%23SvgjsLinearGradient1028%26quot%3b)'%3e%3c/path%3e%3cpath d='M1384 530L854 0L450.5 0L980.5 530z' fill='url(%26quot%3b%23SvgjsLinearGradient1029%26quot%3b)'%3e%3c/path%3e%3cpath d='M1119.2 530L589.2 0L469.20000000000005 0L999.2 530z' fill='url(%26quot%3b%23SvgjsLinearGradient1029%26quot%3b)'%3e%3c/path%3e%3cpath d='M796.4 530L266.4 0L-209.10000000000002 0L320.9 530z' fill='url(%26quot%3b%23SvgjsLinearGradient1029%26quot%3b)'%3e%3c/path%3e%3cpath d='M1042.2427792222752 530L1440 132.24277922227532L1440 530z' fill='url(%26quot%3b%23SvgjsLinearGradient1028%26quot%3b)'%3e%3c/path%3e%3cpath d='M0 530L397.7572207777247 530L 0 132.24277922227532z' fill='url(%26quot%3b%23SvgjsLinearGradient1029%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1027'%3e%3crect width='1440' height='530' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1028'%3e%3cstop stop-color='rgba(126%2c 73%2c 217%2c 0.13)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(126%2c 73%2c 217%2c 0.13)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1029'%3e%3cstop stop-color='rgba(126%2c 73%2c 217%2c 0.13)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(126%2c 73%2c 217%2c 0.13)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  max-width: 80rem;
  width: 80%;
  height: 23rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1300px) {
    width: 85%;
  }

  @media screen and (max-width: 1185px) {
    width: 90%;
  }

  @media screen and (max-width: 1090px) {
    width: 95%;
  }

  @media screen and (max-width: 1025px) {
    height: 100%;
  }

  @media screen and (max-width: 860px) {
    width: 37rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 0.5rem 0rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1025px) {
    flex-direction: column;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const divLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    @media screen and (max-width: 600px) {
      width: 20rem;
      height: 12.5rem;
    }

    &.mindly-image {
      @media screen and (max-width: 600px) {
        width: 17.5rem;
        height: 15rem;
      }
    }

    @media screen and (max-width: 600px) {
      width: 20rem;
      height: 12.5rem;
    }

    @media screen and (max-width: 400px) {
      width: 16.875rem;
      height: 9.375rem;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const divRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;

  @media screen and (max-width: 600px) {
    width: 20rem;
  }

  @media screen and (max-width: 400px) {
    width: 16.875rem;
  }

  h1 {
    text-align: start;
    font-size: 1.2rem;
    font-weight: 700;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  p {
    max-width: 26rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 300;

    @media screen and (max-width: 600px) {
      font-size: 0.813rem;
      width: 100%;
    }

    @media screen and (max-width: 400px) {
      text-align: justify;
    }
  }
`;

export const divBadges = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Title = styled.h3`
  margin-top: 2.5rem;
  margin-bottom: 4rem;
  font-weight: 500;
`;

export const ProjectsContainerOthers = styled(ProjectsContainer)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

export const CardProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20rem;
  height: 28rem;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media screen and (max-width: 600px) {
    height: 31rem;
  }
`;

export const cardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  h1 {
    text-align: start;
    font-size: 1rem;
    font-weight: 700;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  p {
    max-width: 20rem;
    font-size: 0.8rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
`;
