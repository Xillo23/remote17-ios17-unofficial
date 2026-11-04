import type { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";
import { withUniwind } from "uniwind";

const ThemedPath = withUniwind(Path);

export function T3Wordmark(props: {
  readonly height: number;
  readonly color?: ColorValue;
  readonly colorClassName?: string;
}) {
  // Fork: a generic prompt glyph; the original T3 logo is a trademark of its owner.
  const aspectRatio = 100 / 60;
  return (
    <Svg
      accessibilityLabel="Server"
      height={props.height}
      width={props.height * aspectRatio}
      viewBox="0 0 100 60"
    >
      <ThemedPath
        d="M6 4 L36 30 L6 56 L0 49 L22 30 L0 11 Z M44 48 H96 V58 H44 Z"
        color={props.color}
        colorClassName={props.colorClassName}
        fill="currentColor"
      />
    </Svg>
  );
}
