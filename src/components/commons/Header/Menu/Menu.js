import styled from "styled-components";

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`;

export const MenuH = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 17.5rem;
  padding: 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='475' height='280' preserveAspectRatio='none' viewBox='0 0 475 280'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2588%26quot%3b)' fill='none'%3e%3crect width='475' height='280' x='0' y='0' fill='rgba(32%2c 33%2c 36%2c 1)'%3e%3c/rect%3e%3cpath d='M148.79594004611928 154.95514090926585L97.28507233128266 157.60548775189707 121.1781585711013 195.84241866683442z' fill='rgba(56%2c 33%2c 96%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M321.67392813472514 103.08595348817049L355.58065846618285 167.00211401957733 390.0278861843749 113.95803495579074z' fill='rgba(56%2c 33%2c 96%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M290.38995392835307 17.99821806692198L275.5743070155222 49.77047540331387 330.6405164765255 56.10781710436423z' fill='rgba(56%2c 33%2c 96%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M262.9320590289208 295.116419063496L333.58721659331167 320.8327933143227 288.6484332797475 224.4612614991051z' fill='rgba(56%2c 33%2c 96%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M245.20601066222167 41.246963445065255L213.57325428646234 45.13097754681142 235.21565362696126 90.63810505957733z' fill='rgba(56%2c 33%2c 96%2c 1)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2588'%3e%3crect width='475' height='280' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding-top: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
