// components/Renderer.js

import { Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";


/*v1:
If you're on v4, don't use styled at all - just use className directly on React Native components.
If you're on v2, make sure you have:

Correct import: import { styled } from 'nativewind';
Proper babel config (the simple one I mentioned earlier)
*/
// // Wrap Native components to support Tailwind
// const StyledText = styled(Text);
// const StyledView = styled(View);

// // SDUI Renderer
// export default function Renderer({ data }) {
//   if (!data) return null;

//   switch (data.type) {
//     case "Text":
//       return (
//         <StyledText className={data.props?.style || ""}>
//           {data.props?.content || "No content"}
//         </StyledText>
//       );

//     case "container":
//       return (
//         <StyledView className={data.props?.style || ""}>
//           {data.children?.map((child, index) => (
//             <Renderer key={index} data={child} />
//           ))}
//         </StyledView>
//       );

//     default:
//       return <StyledText>Unsupported type: {data.type}</StyledText>;
//   }
// }

//Safe Version
// SDUI renderer component without styled()
export default function Renderer({ data }) {
  if (!data) return null;

  switch (data.type) {
    case "text":
      return (
        <Text className={data.props?.style || ""}>
          {data.props?.content || "No content"}
        </Text>
      );

    case "container":
      return (
        <View className={data.props?.style || ""}>
          {data.children?.map((child, idx) => (
            <Renderer key={idx} data={child} />
          ))}
        </View>
      );

    default:
      return <Text>Unsupported type: {data.type}</Text>;
  }
}