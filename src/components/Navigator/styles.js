import styled from 'styled-components'

const NavigatorStyles = styled.div`
  .navigator-container {
    width: 280px;
    height: 100vh;
    position: fixed;
    padding: 2px 24px 24px 24px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    box-sizing: border-box;

    .options-container {
      .title {
        margin: 12px 0;
        font-weight: bold;
        font-size: 0.8rem;
        color: #3f6ad8;
      }
      .option {
        color: #343a40;
        font-weight: 400;
        padding: 0 1.5rem 0 45px;
        border-radius: 0.25rem;
        margin: 0.1rem 0;
        transition: all 0.2s;
        height: 2.4rem;
        display: flex;
        align-items: center;
        font-size: 0.88rem;
        cursor: pointer;

        &:hover {
          background-color: #e0f3ff !important;
        }
      }
    }
  }
`

export default NavigatorStyles
