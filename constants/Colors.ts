import { Writable, WritableDeep } from "type-fest";

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default separateThemes({
  name: ['light', 'dark'],
  text: ['#000', '#fff'],
  placeholderText: ['#808080', '#a6a6a6'],
  background: ['#fff', '#0d0d0d'],
  background2: ['#f0f0f0', '#171717'],
  shadow: [[0,0,0,.2], [0,0,0,.5]],
  tint: [tintColorLight, tintColorDark],
  tabIconDefault: ['#ccc', '#ccc'],
  tabIconSelected: [tintColorLight, tintColorDark],
  RightBubble: ['#92f7d9', '#00b880'],
  LeftBubble: ['#d6d6d6', '#4a4a4a']
} as const);

function separateThemes<O extends { [key: string]: any }> (obj: O) {
  type SeparatedThemes = {
    light: {
      [key in keyof O]: O[key][0]
    }, 
    dark: {
      [key in keyof O]: O[key][1]
    }
  }

  const light = {} as SeparatedThemes['light'];
  const dark = {} as SeparatedThemes['dark'];

  Object.keys(obj).forEach((key: keyof SeparatedThemes[keyof SeparatedThemes]) => {
    light[key] = obj[key][0];
    dark[key] = obj[key][1];
  });

  return { light, dark } as WritableDeep<SeparatedThemes>;
}