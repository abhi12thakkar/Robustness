import styled from 'styled-components'

const DashboardStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  height: 100%;

  .dashboard-container {
    height: 100%;
    box-sizing: border-box;

    .title {
      background-color: rgba(255, 255, 255, 0.45);
      padding: 30px;
      font-size: 1.25rem;
      font-weight: 400;
      color: #495057;
      background-color: #f7f9fa;
    }

    .verticals-container {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      background-color: #f1f4f6;
      height: 100%;

      .vertical {
        width: 28%;
        border-radius: 0.25rem;
        height: max-content;
        box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
          0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
          0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
          0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        font-size: 0.88rem;
        color: #fff;
        padding: 1rem;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        .vertical-title {
          font-weight: bold;
        }
        .stats {
          opacity: 0.5;
          font-weight: 400;
        }
      }

      .clients {
        background: linear-gradient(
          -20deg,
          #2b5876 0%,
          #4e4376 100%
        ) !important;
      }
      .assessment {
        background: radial-gradient(
          circle 248px at center,
          #16d9e3 0%,
          #30c7ec 47%,
          #46aef7 100%
        ) !important;
      }
      .management {
        background: linear-gradient(
          to top,
          #0ba360 0%,
          #3cba92 100%
        ) !important;
      }
    }
  }
`

export default DashboardStyles
