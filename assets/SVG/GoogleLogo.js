import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

export default function GoogleLogo() {
  
  return(<Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <G clipPath="url(#clip0_34_77)">
      <Path
        fill="#fff"
        d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574 0-4.185 3.345-7.574 7.439-7.574 2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
      ></Path>
    </G>
    <Defs>
      <ClipPath id="clip0_34_77">
        <Path fill="#fff" d="M0 0H24V24H0z"></Path>
      </ClipPath>
    </Defs>
  </Svg>)
}