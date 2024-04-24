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
  height: 15rem;
  padding: 0;
  background-color:${(props) => props.BackgroundTheme === "light" ? "#edf2f4" : "#202124"};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='475' height='240' preserveAspectRatio='none' viewBox='0 0 475 240'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M459.216%2c132.448C467.76%2c132.424%2c475.602%2c127.914%2c479.975%2c120.574C484.457%2c113.051%2c485.321%2c103.629%2c480.881%2c96.081C476.496%2c88.626%2c467.861%2c85.032%2c459.216%2c85.281C451.009%2c85.518%2c443.795%2c90.206%2c439.613%2c97.271C435.345%2c104.482%2c434.178%2c113.37%2c438.257%2c120.69C442.437%2c128.19%2c450.63%2c132.472%2c459.216%2c132.448' fill='rgba(126%2c 73%2c 217%2c 0.32)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M207.259%2c296.886C225.12%2c297.092%2c240.661%2c286.46%2c250.275%2c271.406C260.812%2c254.908%2c268.231%2c233.971%2c258.163%2c217.182C248.272%2c200.688%2c226.49%2c199.443%2c207.259%2c199.675C188.581%2c199.9%2c167.86%2c202.255%2c158.439%2c218.384C148.963%2c234.606%2c156.004%2c254.481%2c165.926%2c270.435C175.185%2c285.323%2c189.728%2c296.684%2c207.259%2c296.886' fill='rgba(126%2c 73%2c 217%2c 0.32)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M306.25%2c75.3C316.893%2c75.663%2c326.523%2c68.941%2c331.561%2c59.559C336.344%2c50.651%2c334.598%2c40.247%2c329.872%2c31.308C324.744%2c21.609%2c317.215%2c12.04%2c306.25%2c11.687C294.835%2c11.32%2c284.837%2c19.428%2c279.842%2c29.699C275.389%2c38.856%2c278.66%2c49.118%2c283.763%2c57.929C288.851%2c66.714%2c296.104%2c74.954%2c306.25%2c75.3' fill='rgba(126%2c 73%2c 217%2c 0.32)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M78.833%2c26.894C88.396%2c26.513%2c95.592%2c19.484%2c100.667%2c11.369C106.174%2c2.564%2c111.137%2c-7.908%2c106.369%2c-17.134C101.321%2c-26.902%2c89.809%2c-31.522%2c78.833%2c-30.877C68.858%2c-30.291%2c61.321%2c-22.885%2c56.384%2c-14.198C51.518%2c-5.636%2c49.036%2c4.599%2c53.757%2c13.241C58.647%2c22.192%2c68.641%2c27.301%2c78.833%2c26.894' fill='rgba(126%2c 73%2c 217%2c 0.32)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M89.734%2c133.537C99.678%2c133.082%2c107.936%2c126.373%2c112.558%2c117.557C116.846%2c109.378%2c116.299%2c99.707%2c111.656%2c91.724C107.04%2c83.788%2c98.915%2c78.407%2c89.734%2c78.313C80.393%2c78.217%2c72.081%2c83.414%2c67.021%2c91.266C61.439%2c99.927%2c58.106%2c110.748%2c62.983%2c119.825C68.066%2c129.286%2c79.005%2c134.028%2c89.734%2c133.537' fill='rgba(126%2c 73%2c 217%2c 0.32)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M348.821%2c237.841C364.698%2c238.358%2c381.16%2c231.657%2c388.357%2c217.496C395.095%2c204.238%2c387.964%2c189.22%2c379.87%2c176.744C372.668%2c165.643%2c362.045%2c157.025%2c348.821%2c156.554C334.753%2c156.052%2c320.959%2c162.332%2c313.685%2c174.384C306.176%2c186.825%2c306.471%2c202.345%2c313.51%2c215.057C320.783%2c228.192%2c333.815%2c237.352%2c348.821%2c237.841' fill='rgba(126%2c 73%2c 217%2c 0.32)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='475' height='240' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  padding: 0.5rem 0 0.3rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
