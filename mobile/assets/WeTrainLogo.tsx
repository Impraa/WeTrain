import * as React from "react";
import Svg, { SvgProps, Path, G, Text, TSpan } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
import { memo } from "react";
const SvgComponent = (props: SvgProps) => (
  <Svg width={250} height={100} {...props}>
    <G>
      <Path
        id="XTkkK8da_2Zp6oLS6FLNH"
        strokeLinecap="round"
        d="M-20.495 1.373h40.99v-2.746h-40.99z"
        stroke="#000"
        strokeWidth="0.5"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        fill="#fff"
        fillOpacity="0"
        fillRule="nonzero"
        opacity="1"
        transform="translate(80.201 18.621)"
      />
      <Path
        id="AmRJl8x1tJwxqC0a3mFEj"
        strokeLinecap="round"
        d="M-4.06-10.166h.003"
        stroke="#000"
        strokeWidth="1"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        fill="none"
        fillRule="nonzero"
        opacity="1"
      />
      <Path
        id="_3iSYgwq8C-kxxM9skEOr"
        strokeLinecap="round"
        d="M0-10.146c5.6 0 10.146 4.545 10.146 10.146 0 5.6-4.545 10.146-10.146 10.146-5.6 0-10.146-4.545-10.146-10.146 0-5.6 4.545-10.146 10.146-10.146z"
        stroke="#000"
        strokeWidth="1"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        fill="#df7700"
        fillRule="nonzero"
        opacity="1"
        transform="matrix(.555 0 0 .555 59.456 18.621)"
      />
      <Path
        id="OM9vhOwrx4wkdVe133-M9"
        strokeLinecap="round"
        d="M-13.799-22.727-.203 22.727 1.42-4.464l6.9 26.177 5.479-44.44L5.885-8.726H-2.84z"
        stroke="#000"
        strokeWidth="1"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        fill="#df7700"
        fillRule="nonzero"
        opacity="1"
        transform="translate(80.201 42.796)"
      />
      <Path
        id="y9m67C77J4KSM2TrI7rAk"
        strokeLinecap="round"
        d="M0-10.146c5.6 0 10.146 4.545 10.146 10.146 0 5.6-4.545 10.146-10.146 10.146-5.6 0-10.146-4.545-10.146-10.146 0-5.6 4.545-10.146 10.146-10.146z"
        stroke="#000"
        strokeWidth="1"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        fill="#e3d5c0"
        fillRule="nonzero"
        opacity="1"
        transform="matrix(.48 0 0 .48 81.372 29.64)"
      />
      <Path
        id="tm0OVLc2r42RzoFMYHtoc"
        strokeLinecap="round"
        d="M0-10.146c5.6 0 10.146 4.545 10.146 10.146 0 5.6-4.545 10.146-10.146 10.146-5.6 0-10.146-4.545-10.146-10.146 0-5.6 4.545-10.146 10.146-10.146z"
        stroke="#000"
        strokeWidth="1"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        fill="#df7700"
        fillRule="nonzero"
        opacity="1"
        transform="matrix(.555 0 0 .555 104.907 18.621)"
      />
      <G id="5YDPpTK9jog0y8c6gZMop" transform="translate(109.75 50)">
        <Text
          fontFamily="GFS Didot"
          fontSize={33}
          stroke="#000"
          strokeWidth="0.5"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeDashoffset={0}
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          fill="#df7700"
          fillRule="nonzero"
          opacity={1}
        >
          <TSpan x={-15} y={14.012}>
            {"e"}
          </TSpan>
        </Text>
      </G>
      <G id="HazMB14bemTsvtrRWZn6C">
        <Text
          fontFamily="GFS Didot"
          fontSize={33}
          stroke="#000"
          strokeWidth={0.5}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeDashoffset={0}
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          fill="#fff"
          fillRule="nonzero"
          opacity={1}
          transform="translate(164.586 50)"
        >
          <TSpan x={-39.336} y={14.012}>
            {"Train"}
          </TSpan>
        </Text>
      </G>
    </G>
  </Svg>
);
const WeTrainLogo = memo(SvgComponent);
export default WeTrainLogo;
