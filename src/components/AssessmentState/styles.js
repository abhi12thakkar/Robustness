import styled from 'styled-components'

const AssessmentStateStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  height: 100%;

  .assessment-state-container {
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
      justify-content: space-evenly;
      align-content: flex-start;
      flex-wrap: wrap;
      background-color: #f1f4f6;
      height: 100%;

      .vertical {
        width: 28%;
        border-radius: 0.25rem;
        margin-bottom: 30px;
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
          opacity: .8;
        }
      }

      .identity {
        background-color: #4AA5DC !important;
      }
      .protect {
        background-color: #835294 !important;
      }
      .detect {
        background-color: #F89D1C !important;
      }
      .respond{
        background-color: #EB3D44 !important;
      }
      .recovery{
        background-color: #37B34A !important;
      }
    }
  }
`

export default AssessmentStateStyles
