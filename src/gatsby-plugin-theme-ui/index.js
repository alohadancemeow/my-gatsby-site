import codeTheme from '@theme-ui/prism/presets/shades-of-purple.json'
import baseTheme from '@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui'

export default {

  // ? default color
    // text: '#ffffff',
    // background: '#282a36',
    // muted: '#8394ca',
    // highlight: '#5a6084',
    // surface: '#323442',
    // primary: '#ff79c6',
    // secondary: '#8be9fd',
    // success: '#50fa7b',
    // error: '#ff5555',
    // black: '#000000',
  
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: '#FFFFFF',
    muted: '#8394ca',
    // primary: '#f056c7',
    primary: '#ff79c6',
    // secondary: '#c39eff',
    secondary: '#8be9fd',
    // error: '#ff4343',
    error: '#ff5555',
    // success: '#58e6d9',
    success: '#50fa7b',
    // background: '#131127',
    background: '#282a36',
    // surface: '#232140',
    surface: '#323442',
    // highlight: '#ffeb3b',
    highlight: '#5a6084',
    placeholder: '#4e4b85',
  },

  styles: {
    ...baseTheme.styles,
    root: {
      ...baseTheme.styles.root,
      '.mdx-embed': {
        '.twitter-tweet-mdx-embed': {
          minHeight: 500,
        },
      },
    },
    p: {
      ...baseTheme.styles.p,
      a: {
        ...baseTheme.styles.p.a,
        color: 'muted',
        wordBreak: 'break-word',
      },
      code: {
        ...baseTheme.styles.p.code,
        color: 'inherit',
        fontSize: '14px',
        wordBreak: 'break-word',
        backgroundColor: 'surface',
      },
      mark: {
        color: 'background',
        backgroundColor: 'highlight',
      },
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme,
    },
    a: {
      ...baseTheme.styles.a,
      color: 'muted',
      button: {
        cursor: 'pointer',
      },
    },
  },

  buttons: {
    ...baseTheme.buttons,
    success: {
      ...baseTheme.buttons.success,
    },
    primary: {
      ...baseTheme.buttons.primary,
      ':disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'surface',
      },
    },
    ghost: {
      ...baseTheme.buttons.primary,
      color: 'muted',
      backgroundColor: 'background',
      transition: '.2s linear background-color',
      ':hover': {
        backgroundColor: 'surface',
      },
    },
  },

  forms: {
    ...baseTheme.forms,
    label: {
      ...baseTheme.forms.label,
      color: 'primary',
    },
    input: {
      ...baseTheme.forms.input,
      '::placeholder': {
        color: 'placeholder',
      },
    },
  },

  cards: {
    primary: {
      ...baseTheme.cards.primary,
      transition: '.2s linear box-shadow, .2s ease-in-out transform',
      ':hover': {
        transform: 'translateY(-0.25rem)',
        boxShadow: 2,
      },
    },
  },
}
