"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import { Bubbles } from "../Hero/Bubbles";
import { Direction } from "@/utils/enums";

/**
 * Props for `SkyDive`.
 */
export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive: FC<SkyDiveProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <h2 className="sr-only">{slice.primary.sentence}</h2>
      <View className="h-screen w-screen">
        <Scene
          flavor={slice.primary.flavor}
          sentence={slice.primary.sentence}
        />
        {/* <Bubbles count={300} speed={2} repeat={true} direction={Direction.DOWN} color="#000000" /> */}
      </View>
    </Bounded>
  );
};

export default SkyDive;
