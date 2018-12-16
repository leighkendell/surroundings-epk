export interface ThemeInterface {
  fontFamily: string;
  colorWhite: string;
  colorGrey: string;
  colorBlack: string;
  colorBlue: string;
  colorYellow: string;
  spacingSmall: string;
  spacingMedium: string;
  spacingLarge: string;
  headerSmall: string;
  headerLarge: string;
}

export const theme: ThemeInterface = {
  fontFamily: `'Proxima Nova', serif`,
  colorWhite: '#fff',
  colorGrey: '#f1f1f1',
  colorBlack: '#000',
  colorBlue: '#2851dc',
  colorYellow: '#ffd642',
  spacingSmall: '20px',
  spacingMedium: '40px',
  spacingLarge: '80px',
  headerSmall: '70px',
  headerLarge: '100px',
};
