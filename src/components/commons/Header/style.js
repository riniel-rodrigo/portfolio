import styled from "styled-components";

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
  backdrop-filter: blur(0.100rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='3000' height='58' preserveAspectRatio='none' viewBox='0 0 3000 58'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1046%26quot%3b)' fill='none'%3e%3cpath d='M2414.053%2c60.14C2419.271%2c60.253%2c2424.054%2c57.387%2c2426.754%2c52.921C2429.556%2c48.287%2c2430.077%2c42.584%2c2427.569%2c37.785C2424.867%2c32.615%2c2419.886%2c28.718%2c2414.053%2c28.622C2408.07%2c28.523%2c2402.4%2c31.963%2c2399.742%2c37.325C2397.318%2c42.215%2c2399.372%2c47.766%2c2402.272%2c52.39C2404.949%2c56.658%2c2409.016%2c60.031%2c2414.053%2c60.14' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M18.737%2c66.517C23.047%2c66.452%2c27.515%2c65.126%2c29.655%2c61.385C31.783%2c57.665%2c30.516%2c53.227%2c28.503%2c49.443C26.322%2c45.343%2c23.381%2c40.827%2c18.737%2c40.866C14.129%2c40.905%2c11.476%2c45.569%2c9.25%2c49.604C7.13%2c53.448%2c5.082%2c57.896%2c7.23%2c61.725C9.408%2c65.609%2c14.285%2c66.584%2c18.737%2c66.517' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1781.814%2c46.085C1784.512%2c46.119%2c1787.201%2c44.834%2c1788.42%2c42.427C1789.552%2c40.191%2c1788.451%2c37.675%2c1787.163%2c35.525C1785.923%2c33.455%2c1784.227%2c31.392%2c1781.814%2c31.4C1779.411%2c31.408%2c1777.739%2c33.485%2c1776.53%2c35.562C1775.311%2c37.656%2c1774.405%2c40.099%2c1775.492%2c42.264C1776.677%2c44.623%2c1779.174%2c46.052%2c1781.814%2c46.085' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1932.013%2c31.177C1937.616%2c31.008%2c1941.038%2c25.593%2c1943.62%2c20.617C1945.945%2c16.135%2c1947.112%2c11.022%2c1944.799%2c6.534C1942.292%2c1.669%2c1937.485%2c-1.778%2c1932.013%2c-1.904C1926.332%2c-2.035%2c1920.915%2c0.948%2c1918.161%2c5.919C1915.482%2c10.753%2c1916.466%2c16.512%2c1919.124%2c21.358C1921.908%2c26.434%2c1926.227%2c31.352%2c1932.013%2c31.177' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1043.505%2c10.419C1046.206%2c10.38%2c1047.855%2c7.677%2c1049.003%2c5.232C1049.957%2c3.2%2c1049.862%2c0.972%2c1048.89%2c-1.052C1047.736%2c-3.455%2c1046.164%2c-6.017%2c1043.505%2c-6.216C1040.592%2c-6.434%2c1037.815%2c-4.594%2c1036.513%2c-1.979C1035.323%2c0.411%2c1036.414%2c3.068%2c1037.725%2c5.394C1039.069%2c7.777%2c1040.769%2c10.458%2c1043.505%2c10.419' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M484.594%2c47.186C487.513%2c47.219%2c489.645%2c44.761%2c491.081%2c42.22C492.488%2c39.73%2c493.247%2c36.78%2c491.898%2c34.258C490.481%2c31.609%2c487.596%2c29.981%2c484.594%2c30.096C481.763%2c30.204%2c479.503%2c32.267%2c478.194%2c34.78C476.989%2c37.093%2c477.156%2c39.76%2c478.352%2c42.078C479.673%2c44.638%2c481.713%2c47.154%2c484.594%2c47.186' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M137.36%2c48.193C142.123%2c48.093%2c146.471%2c45.401%2c148.713%2c41.198C150.835%2c37.221%2c149.89%2c32.611%2c147.805%2c28.614C145.507%2c24.209%2c142.318%2c19.753%2c137.36%2c19.435C131.962%2c19.089%2c126.91%2c22.366%2c124.308%2c27.108C121.797%2c31.684%2c122.4%2c37.257%2c125.148%2c41.695C127.749%2c45.897%2c132.419%2c48.297%2c137.36%2c48.193' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1502.823%2c6.774C1504.822%2c6.739%2c1506.412%2c5.317%2c1507.429%2c3.596C1508.468%2c1.838%2c1509.125%2c-0.345%2c1508.058%2c-2.086C1507.022%2c-3.776%2c1504.803%2c-4.017%2c1502.823%2c-3.921C1501.043%2c-3.835%2c1499.357%2c-3.121%2c1498.399%2c-1.618C1497.362%2c0.01%2c1497.026%2c2.057%2c1497.926%2c3.764C1498.884%2c5.581%2c1500.769%2c6.81%2c1502.823%2c6.774' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M2949.162%2c35.786C2954.527%2c35.661%2c2958.283%2c30.956%2c2960.691%2c26.161C2962.824%2c21.913%2c2962.962%2c17.024%2c2960.673%2c12.859C2958.292%2c8.527%2c2954.105%2c5.249%2c2949.162%2c5.181C2944.111%2c5.111%2c2939.621%2c8.164%2c2937.086%2c12.533C2934.541%2c16.919%2c2934.328%2c22.22%2c2936.665%2c26.72C2939.207%2c31.615%2c2943.647%2c35.914%2c2949.162%2c35.786' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M2989.939%2c40.363C2992.395%2c40.218%2c2994.206%2c38.357%2c2995.449%2c36.234C2996.71%2c34.081%2c2997.723%2c31.438%2c2996.409%2c29.317C2995.136%2c27.263%2c2992.355%2c27.267%2c2989.939%2c27.343C2987.703%2c27.414%2c2985.426%2c27.875%2c2984.138%2c29.704C2982.632%2c31.843%2c2981.919%2c34.663%2c2983.169%2c36.961C2984.463%2c39.339%2c2987.237%2c40.523%2c2989.939%2c40.363' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M253.098%2c30.554C256.221%2c30.488%2c258.765%2c28.457%2c260.458%2c25.831C262.345%2c22.904%2c263.942%2c19.339%2c262.31%2c16.263C260.607%2c13.055%2c256.727%2c11.808%2c253.098%2c11.964C249.743%2c12.108%2c246.8%2c14.069%2c245.164%2c17.001C243.571%2c19.856%2c243.529%2c23.331%2c245.181%2c26.153C246.816%2c28.946%2c249.863%2c30.622%2c253.098%2c30.554' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1883.796%2c37.911C1888.393%2c38.016%2c1892.218%2c34.603%2c1894.33%2c30.519C1896.271%2c26.764%2c1895.704%2c22.439%2c1893.726%2c18.703C1891.586%2c14.66%2c1888.362%2c10.902%2c1883.796%2c10.618C1878.793%2c10.307%2c1873.71%2c12.835%2c1871.466%2c17.318C1869.387%2c21.471%2c1871.68%2c26.07%2c1874.066%2c30.054C1876.361%2c33.887%2c1879.329%2c37.809%2c1883.796%2c37.911' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M819.158%2c46.876C824.275%2c46.76%2c828.201%2c42.866%2c830.713%2c38.407C833.169%2c34.046%2c834.426%2c28.697%2c831.794%2c24.44C829.26%2c20.341%2c823.977%2c19.736%2c819.158%2c19.72C814.301%2c19.704%2c809.027%2c20.286%2c806.38%2c24.358C803.537%2c28.731%2c804.081%2c34.419%2c806.655%2c38.955C809.265%2c43.554%2c813.871%2c46.996%2c819.158%2c46.876' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1385.625%2c37.784C1390.521%2c37.757%2c1395.5%2c36.408%2c1398.19%2c32.317C1401.147%2c27.82%2c1401.949%2c21.85%2c1399.104%2c17.281C1396.38%2c12.906%2c1390.764%2c11.743%2c1385.625%2c12.139C1381.192%2c12.48%2c1377.69%2c15.352%2c1375.319%2c19.113C1372.731%2c23.217%2c1370.468%2c28.212%2c1372.813%2c32.46C1375.208%2c36.8%2c1380.668%2c37.812%2c1385.625%2c37.784' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1375.579%2c26.59C1377.569%2c26.553%2c1379.37%2c25.38%2c1380.286%2c23.613C1381.137%2c21.972%2c1380.769%2c20.033%2c1379.794%2c18.462C1378.877%2c16.986%2c1377.315%2c16.11%2c1375.579%2c16.034C1373.683%2c15.951%2c1371.701%2c16.469%2c1370.67%2c18.062C1369.557%2c19.782%2c1369.533%2c22.021%2c1370.555%2c23.797C1371.58%2c25.577%2c1373.525%2c26.629%2c1375.579%2c26.59' fill='rgba(126%2c 73%2c 217%2c 0.5)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1046'%3e%3crect width='3000' height='58' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
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

  & > * {
    backdrop-filter: invert(30%);
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
