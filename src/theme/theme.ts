export interface MainTheme {
  colors: {
    bkg: {
      [key: string]: string
    }
  },
  spacing: {
    [key: string]: number
  }
}

export const mainTheme = {
  colors: {
    bkg: {
      page: '#F3F4F6',
      container: '#F9FAFB'
    },
  },
  spacing: {
    xs: 0.25,
    sm: 0.5,
    md: 1,
    lg: 1.5,
    xl: 2
  }
};

export default mainTheme;
