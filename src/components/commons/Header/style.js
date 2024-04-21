import styled from "styled-components";
import { theme } from "../../../styles/theme.js";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  padding-top: 1rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='71' preserveAspectRatio='none' viewBox='0 0 1440 71'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1155%26quot%3b)' fill='none'%3e%3crect width='1440' height='71' x='0' y='0' fill='rgba(32%2c 33%2c 36%2c 1)'%3e%3c/rect%3e%3cpath d='M445.1196269635275 56.16503987522182L439.82971192085535 68.04638359189258 460.29668501719755 70.04058429756543z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M711.1027393116262 18.505014825199773L708.6164217606745 34.20300602848485 726.8007305149113 20.991332376151576z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M101.26313127518671 6.259559907644833L88.22554312979194-4.318659559847057 85.6770119003195 10.134779268587957z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1301.3316209477623 32.16609900281268L1317.4441933913324 37.09220675603737 1322.370301144557 20.97963431246735 1306.257728700987 16.053526559242655z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1381.407755432606 21.618451943838757L1389.9102023601267 5.627674987048282 1373.9194254033362-2.8747719404722574 1365.4169784758155 13.11600501631822z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M98.6182288120171 11.578088791401786L83.54825242502874 23.328933253096746 98.9253027911775 29.856103881113576z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M567.5977150485971 69.19064369486203L559.7459009584627 59.121013948756 555.3845011907406 69.39582790984717z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1121.888953636244 19.838747337943012L1131.637369274975 13.74726117562626 1117.6259322121343 2.170380798687763z' fill='rgba(126%2c 73%2c 217%2c 1)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1155'%3e%3crect width='1440' height='71' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 85%;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: end;
  gap: 0.3rem;
  transition: all transform 0.3s ease;

  span {
    font-size: 2.75rem;
    color: #7e49d9;
    opacity: 0;
    transition: opacity 0.3s ease-out;

    @media screen and (max-width: 500px) {
    display: none;
  }
  }

  img{
    @media screen and (max-width: 500px) {
      width:2.6994rem;
  }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 475px) {
    display: none;
  }

  .Link2 {
    border: solid 1px #4007a2;
    border-radius: 0.5rem;
  }
`;

export const MenuH = styled.div`
  display: none;

  @media screen and (max-width: 475px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DivMenuH = styled.div`
  & > * {
    font-size: 2.1875rem;
    color: #fff;
  }
`;
