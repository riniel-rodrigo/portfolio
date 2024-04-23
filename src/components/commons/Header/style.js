import styled from "styled-components";
import { theme } from "../../../styles/theme.js";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items:center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 0.3rem 0;
  width: 100%;
  backdrop-filter: blur(0.094rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1900' height='54.59' preserveAspectRatio='none' viewBox='0 0 1900 54.59'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1105%26quot%3b)' fill='none'%3e%3crect width='1900' height='54.59' x='0' y='0' fill='rgba(32%2c 33%2c 36%2c 0.84)'%3e%3c/rect%3e%3cpath d='M1351.5687250230108 42.6955953809272L1364.8389270838159 36.802468080752526 1354.7021119512651 29.16382998247565z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M911.8576917953039 5.363796601477516L906.0553882981486 7.249079291224363 911.7844640813465 15.00989319208397z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1421.8421957099881 54.5631598676313L1423.355783800044 47.44228776580681 1411.9176816022793 48.73234168163536z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M436.22227866788995 16.41718363062999L438.7935403891602 27.554541742782618 447.3596367800426 13.84592190935969z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1680.440788053382 20.389849462770066L1691.263356843928 20.211257934572707 1686.53239920847 12.016998941503388z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M261.6265133305231 5.641304519848351L249.23979941472743 3.667339005046752 252.9899024289904 13.970662357362981z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1510.3540774734954 8.005871809483452L1517.7021279216965 14.393434612909157 1516.741640276921 0.6578213612824522z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1010.7185483135312 11.782780992225405L1000.703712405042 14.844623599224484 1010.3038942697851 28.335956158458803z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1002.6768521114509 21.3204586361099L991.6994154425073 16.432988939938433 997.7893824152794 32.297895305053494z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1537.1173159344269 36.17818332343203L1542.7558510375536 44.23084599190798 1552.0155774887041 31.746712002979834z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M17.53332481995153 14.757839390944776L5.5203773979806865 12.2044085914079 14.979894020414655 26.77078681291562z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1512.7444635881297 52.27543000868104L1517.279735553249 38.317298145020814 1498.7863317244696 47.740158043561706z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M238.24317749718114 25.957697115100423L246.66619278197442 41.18743067511591 254.72819967391362 28.28552267257864z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1144.9246752974286 58.55970569217394L1150.4186719646857 42.65324222983713 1135.931375828121 45.20774341622699z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M153.0415891171121 41.59550792156078L144.25196825038842 43.463799511374646 154.90988070692595 50.38512878828445z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1105'%3e%3crect width='1900' height='54.59' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 75%;
  height:100%;

  @media screen and (max-width: 1280px) {
    width: 85%;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  gap: 0.3rem;
  transition: all transform 0.3s ease;

  span {
    height:45px;
    font-size: 2.5rem;
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
