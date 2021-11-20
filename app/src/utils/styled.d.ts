import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
     color: {
        cyanProcess: string;
        raisinBlack: string;
        mintCream: string;
        salmonPink: string;
        bottleGreen: string;
     },
     fontSize: {
        small: string;
        medium: string;
        large: string;
      }
  }
}
