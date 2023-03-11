const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default separateThemes({
  name: ['light', 'dark'],
  text: ['#000', '#fff'],
  placeholderText: ['#808080', '#a6a6a6'],
  background: ['#fff', '#0d0d0d'],
  background2: ['#f0f0f0', '#171717'],
  shadow: ['rgba(0,0,0, 0.3)','rgba(255,255,255, 0.1)'],
  tint: [tintColorLight, tintColorDark],
  tabIconDefault: ['#ccc', '#ccc'],
  tabIconSelected: [tintColorLight, tintColorDark],
  RightBubble: ['#92f7d9', '#00b880'],
  LeftBubble: ['#d6d6d6', '#4a4a4a']
});


function separateThemes<T extends string>(obj: Record<T, [string, string]>): {
  light: Record<T, string>;
  dark: Record<T, string>;
} {
  const light: Record<T, string> = {} as Record<T, string>;
  const dark: Record<T, string> = {} as Record<T, string>;

  Object.keys(obj).forEach((key: string) => {
    light[key as T] = obj[key as T][0];
    dark[key as T] = obj[key as T][1];
  });

  return { light, dark };
}