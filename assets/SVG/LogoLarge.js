import * as React from "react"
import Svg, { Path, Mask, G, Defs, Pattern, Use, Image } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    width={161}
    height={161}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      d="M22.5 93.49c-10-5.773-10-20.207 0-25.98l75.75-43.735c10-5.773 22.5 1.444 22.5 12.99v87.469c0 11.547-12.5 18.764-22.5 12.991L22.5 93.49Z"
      fill="#363F4E"
    />
    <Mask
      id="a"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x={30}
      y={32}
      width={88}
      height={92}
    >
      <Path
        d="M39.726 99.349c-10.706-4.326-12.715-18.62-3.615-25.728l48.453-37.856c9.099-7.11 22.482-1.702 24.089 9.733l8.557 60.889c1.607 11.435-9.767 20.321-20.473 15.995l-57.01-23.034Z"
        fill="#D9D9D9"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        transform="rotate(-98 36.251 135.695)"
        fill="url(#b)"
        d="M36.251 135.695h100v100h-100z"
      />
    </G>
    <Defs>
      <Pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#c" transform="scale(.001099)" />
      </Pattern>
      <Image
        id="c"
        width={1000}
        height={1000}
      />
    </Defs>
  </Svg>
)
export default SvgComponent