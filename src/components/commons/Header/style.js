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
  padding: 0.5rem 0 0.3rem 0;
  width: 100%;
  backdrop-filter: blur(0.094rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1900' height='54.59' preserveAspectRatio='none' viewBox='0 0 1900 54.59'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3cpath d='M282.9601298166351 12.29260942618094L278.286520945471 18.274555992970793 289.59624523123784 22.29399601632204z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M893.471321662683 23.0450728730151L882.5962132927054 29.059702325535284 891.8090893521688 34.816546218033174z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M204.65343070007808 20.837202647042986L202.45386116958414 38.61120550364392 216.9696617380455 32.74644138499266z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M259.9061469600058 20.868205074329705L254.47602239020569 27.339575538623087 266.8981403715458 32.24907716117658z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M675.9684991138687 17.92275307620561L662.1379418584846 21.62863972365819 679.6743857613212 31.75331033158973z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1087.7185438836914 45.2561794526041L1094.4367777171656 28.67348528056161 1078.9130159205451 30.579563556320963z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1366.0662190841874 30.615315430613848L1362.4438688147284 40.02504673019781 1371.1721140731431 38.79837185609302z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M150.4314826370708 28.02661438947814L145.24468736086936 36.65889134681275 159.06375959440538 33.21340966567956z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1111.1080057764616 3.173963307622153L1106.0981561535712 10.888455215890751 1118.8224976847303 8.183812930512534z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1014.4042424445615 17.404753755490862L1007.1387769987168 18.168384945025565 1011.9169565059412 28.684767519025264z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1611.3658555908994 38.429242578563255L1623.2022788166744 36.56609890750799 1616.7536591703033 28.312242151939234z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M39.16302634656854 42.633664996551325L46.283640547015196 45.95406192898683 47.703928845445134 33.612942162099095z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1855.5612130464706 46.04534576048019L1858.2370598325374 30.869864530576777 1840.3857318165672 43.36949897441333z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1254.256881083454 5.594936002652936L1248.8190208928895 12.075525420783213 1261.2588351153672 16.992020997564822z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1875.609976107887 27.977248166457713L1869.1766810493004 35.377907556186756 1883.4943176631873 41.32752044920211z' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1900' height='54.59' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 100%;

  @media screen and (max-width: 1280px) {
    width: 85%;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  gap: 0.3rem;
  transition: all transform 0.3s ease;

  span {
    height: 45px;
    font-size: 2.5rem;
    color: #7e49d9;
    opacity: 0;
    transition: opacity 0.3s ease-out;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  img {
    @media screen and (max-width: 500px) {
      width: 2.6994rem;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 2rem;

  @media screen and (max-width: 475px) {
    gap: 1.5rem;
  }
`;

export const NavLink = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;

  @media screen and (max-width: 475px) {
    display: none;
  }
`;

export const divThemeIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > * {
    transition: all 0.3s ease;
    font-size: 1.3rem;

    &:hover {
      cursor: pointer;
      color: #7e49d9;
    }

    @media screen and (max-width: 475px) {
      margin-bottom:0.2rem;
    }

  }
`;

export const MenuH = styled.div`
  display: none;

  @media screen and (max-width: 475px) {
    display: block;
  }
`;

export const DivMenuH = styled.div`
  & > * {
    font-size: 2.1875rem;
    color: ${(props) => (props.BackgroundTheme === "light" ? "#000" : "#fff")};
  }
`;
