import styled, { extensionsHook } from '../styled-components';

export const PrismDiv = styled.div`
  /**
  * Based on prism-dark.css
  */

  code[class*='language-'],
  pre[class*='language-'] {
    /* color: white;
    background: none; */
    text-shadow: 0 -0.1em 0.2em black;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.punctuation {
    opacity: 0.7;
    color: #E00051;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol {
    color: #017D14;
  }

  .token.number {
    color: #047D7E;
  }
  .token.boolean {
    color: #047D7E;
  }
  .token.url {
    color: #0172B1;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #047D7E;
    & + a,
    & + a:visited {
      color: #047D7E;
      text-decoration: underline;
    }
  }

  /* .property.token.string {
    color: white;
  } */


  .token.operator,
  .token.entity,
  .token.variable {
    color: hsl(40, 90%, 60%);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(350, 40%, 70%);
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }

  ${extensionsHook('Prism')};
`;
