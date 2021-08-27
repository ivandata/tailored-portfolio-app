export interface MainTheme {
  colors: {
    bkg: {
      [key: string]: string;
    };
    chart: {
      [key: string]: string;
    };
    txt: {
      [key: string]: string;
    };
    interactive: {
      [key: string]: string;
    };
    border: string;
  };
  spacing: {
    [key: string]: number;
  };
  font: {
    size: {
      [key: string]: number;
    };
  };
}

export const mainTheme = {
  colors: {
    bkg: {
      page: '#FAFAF9',
      container: '#FFFFFF',
    },
    chart: {
      '01': '#F9A8D4',
      '02': '#22D3EE',
      '03': '#0EA5E9',
    },
    txt: {
      body: '#1F2937',
      description: '#9CA3AF',
    },
    interactive: {
      default: '#0EA5E9',
      hover: '#0284C7',
      active: '#38BDF8',
      disabled: '#D1D5DB',
      txt: '#FFF',
    },
    border: '#E7E5E4',
  },
  spacing: {
    xs: 0.25,
    sm: 0.5,
    md: 1,
    lg: 1.5,
    xl: 2,
  },
  font: {
    size: {
      sm: 0.8,
      md: 1,
      lg: 1.5,
      xl: 2,
    },
  },
};

export default mainTheme;
