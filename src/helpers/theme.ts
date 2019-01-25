export interface ThemeInterface {
  fontFamily: string;
  fontSizeDefault: string;
  fontSizeMedium: string;
  fontSizeLarge: string;
  fontSizeXLarge: string;
  colorWhite: string;
  colorGrey: string;
  colorBlack: string;
  colorBlue: string;
  colorYellow: string;
  section: {
    primary: string;
    secondary: string;
    dark: string;
    light: string;
  };
  spacingSmall: string;
  spacingMedium: string;
  spacingLarge: string;
  headerSmall: string;
  headerLarge: string;
}

export const theme: ThemeInterface = {
  fontFamily: `proxima-nova, sans-serif`,
  fontSizeDefault: '1rem',
  fontSizeMedium: '1.5rem',
  fontSizeLarge: '3.375rem',
  fontSizeXLarge: '5rem',
  colorWhite: '#fff',
  colorGrey: '#f1f1f1',
  colorBlack: '#000',
  colorBlue: '#2851dc',
  colorYellow: '#ffd642',
  section: {
    get primary() {
      return theme.colorBlue;
    },
    get secondary() {
      return theme.colorGrey;
    },
    get dark() {
      return theme.colorBlack;
    },
    get light() {
      return theme.colorWhite;
    },
  },
  spacingSmall: '20px',
  spacingMedium: '40px',
  spacingLarge: '80px',
  headerSmall: '70px',
  headerLarge: '100px',
};
