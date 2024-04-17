import styled from "styled-components";
import { theme } from "../../../styles/theme.js";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content:center;
  align-items:center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 20;
  width:100%;
  padding-top:1rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='71' preserveAspectRatio='none' viewBox='0 0 1440 71'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='71' x='0' y='0' fill='rgba(32%2c 33%2c 36%2c 1)'%3e%3c/rect%3e%3cpath d='M1018.3205865464104 4.168210120324174L1006.2555416868015 1.8230029707529636 1003.9103345372303 13.888047830361819 1015.9753793968391 16.23325497993303z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M45.418%2c49.287C48.679%2c49.355%2c51.92%2c47.814%2c53.44%2c44.928C54.88%2c42.195%2c53.945%2c38.932%2c52.225%2c36.366C50.711%2c34.106%2c48.138%2c32.986%2c45.418%2c32.958C42.642%2c32.93%2c39.864%2c33.888%2c38.367%2c36.226C36.751%2c38.749%2c36.536%2c41.967%2c37.959%2c44.603C39.454%2c47.372%2c42.272%2c49.221%2c45.418%2c49.287' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1130.4975328414705 69.4596748731945L1133.9490371272946 59.43577858195956 1117.18744054753 59.27047029884095z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1229.6601331186744 39.136345153809444L1219.691792279634 29.16800431476903 1219.691792279634 49.10468599284986z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1078.9180591830032 3.796710263572523L1066.5962720459495 2.9350869716318 1071.4647306765653 21.84857932318276z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='71' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width:75%;
  height:85%;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: end;
  gap: 0.30rem;
  transition: transform 0.3s ease;

  .hovered {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
  }

  span {
    font-size: 2.75rem;
    color: #7e49d9;
    opacity: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items:center;
  gap: 2rem;

  .Link2{
    border:  solid 1px #4007A2;
    border-radius: 0.5rem;
  }
`;
