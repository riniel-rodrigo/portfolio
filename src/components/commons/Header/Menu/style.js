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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='475' height='240' preserveAspectRatio='none' viewBox='0 0 475 240'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1075%26quot%3b)' fill='none'%3e%3crect width='475' height='240' x='0' y='0' fill='rgba(32%2c 33%2c 36%2c 1)'%3e%3c/rect%3e%3cpath d='M306.46%2c99.162C313.713%2c99.211%2c319.424%2c93.614%2c322.894%2c87.245C326.197%2c81.183%2c326.933%2c73.907%2c323.477%2c67.931C320.025%2c61.962%2c313.355%2c58.83%2c306.46%2c58.827C299.559%2c58.824%2c292.83%2c61.919%2c289.416%2c67.916C286.034%2c73.857%2c287.134%2c81.023%2c290.408%2c87.024C293.851%2c93.336%2c299.27%2c99.113%2c306.46%2c99.162' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M34.161%2c284.061C55.198%2c283.521%2c76.657%2c278.392%2c88.304%2c260.865C101.221%2c241.428%2c104.068%2c216.184%2c92.878%2c195.705C81.261%2c174.444%2c58.386%2c162.168%2c34.161%2c161.778C9.213%2c161.377%2c-15.4%2c172.181%2c-27.922%2c193.762C-40.486%2c215.415%2c-39.203%2c243.144%2c-25.02%2c263.773C-12.357%2c282.191%2c11.817%2c284.634%2c34.161%2c284.061' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M451.191%2c60.685C462.32%2c61.165%2c471.641%2c52.543%2c476.548%2c42.543C480.915%2c33.643%2c478.596%2c23.528%2c473.635%2c14.945C468.679%2c6.371%2c461.092%2c-1.116%2c451.191%2c-1.325C440.983%2c-1.54%2c431.77%2c4.911%2c427.046%2c13.962C422.641%2c22.402%2c424.987%2c32.051%2c429.358%2c40.508C434.234%2c49.944%2c440.58%2c60.227%2c451.191%2c60.685' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M110.69%2c172.64C127.693%2c172.786%2c143.976%2c165.263%2c153.006%2c150.855C162.632%2c135.497%2c164.89%2c116.057%2c156.082%2c100.216C147.046%2c83.963%2c129.237%2c73.397%2c110.69%2c74.745C93.887%2c75.967%2c83.511%2c91.285%2c75.451%2c106.079C67.854%2c120.023%2c62.184%2c136.105%2c69.614%2c150.139C77.443%2c164.927%2c93.958%2c172.496%2c110.69%2c172.64' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M290.276%2c254.687C304.58%2c255.006%2c320.884%2c253.431%2c327.897%2c240.959C334.831%2c228.627%2c327.114%2c214.303%2c319.791%2c202.198C312.823%2c190.68%2c303.716%2c179.536%2c290.276%2c178.773C275.652%2c177.943%2c261.626%2c185.783%2c254.325%2c198.482C247.046%2c211.143%2c247.586%2c227.039%2c255.455%2c239.342C262.78%2c250.795%2c276.684%2c254.384%2c290.276%2c254.687' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M237.828%2c64.176C252.622%2c63.526%2c265.256%2c54.008%2c272.111%2c40.882C278.47%2c28.706%2c277.272%2c14.17%2c270.045%2c2.488C263.196%2c-8.583%2c250.845%2c-14.362%2c237.828%2c-14.533C224.471%2c-14.709%2c211.623%2c-9.422%2c204.108%2c1.621C195.471%2c14.313%2c190.616%2c30.627%2c197.9%2c44.141C205.473%2c58.19%2c221.883%2c64.876%2c237.828%2c64.176' fill='rgba(126%2c 73%2c 217%2c 0.65)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1075'%3e%3crect width='475' height='240' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
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
