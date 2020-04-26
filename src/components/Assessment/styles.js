import styled from 'styled-components'

const AssessmentStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  height: 100%;

  .assessment-container {
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

    .body {
      background-color: #f1f4f6;
      height: 100%;
      padding: 30px;

      .buttons-container{
        display: flex;

        .changeState{
          font-weight: 400;
          padding: .375rem .75rem;
          width: max-content;
          border-radius: .25rem;
          font-size: .8rem;
          cursor: pointer;
        }
        .next-button{
          background-color: #3f6ad8;
          color: #495057;

          &:hover{
            color: #fff;
          }
           
        }
        .back-button{
          background-color: #3ac47d;
          color: #fff;
          margin-right: 8px;

          &:hover{
            color: #495057;
          }
        }
      }

      .phase-container {
        background-color: #fff;
        box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
          0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
          0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
          0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
        border-radius: 0.25rem;
        border: 1px solid rgba(26, 54, 126, 0.125);

        .phase-title {
          padding: 0 20px;
          height: 3.5rem;
          display: flex;
          align-items: center;
          font-weight: bold;
          color: rgba(13, 27, 62, 0.7);
          font-size: 0.88rem;
          border-bottom: 1px solid rgba(26, 54, 126, 0.125);
        }

        .parts-container {
          padding: 20px;

          .part {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
            padding-bottom: 1rem;

            &:nth-last-child(2){
                border-bottom: none;
            }
            .part-title {
              color: #495057;
              font-size: 0.88rem;
              font-weight: bolder;
              margin-bottom: 16px;
            }

            .questions-container {
              .question {
                margin-bottom: 1rem;
                .text,
                .description {
                  font-size: 0.88rem;
                  color: #495057;
                  margin-bottom: 0.5rem;
                  font-weight: 400;
                }
                select {
                  border-radius: 0.25rem;
                  width: 100%;
                  height: calc(2.25rem + 2px);
                  padding: 0.375rem 0.75rem;
                  font-size: 1rem;
                  font-weight: 400;
                  color: #495057;
                  border: 1px solid #ced4da;
                }
                .difficulty-level-container {
                  font-size: 1rem;
                  font-weight: 400;
                  color: #495057;
                  font-size: 0.88rem;
                  display: flex;
                  align-items: center;
                  margin-top: 10px;
                  margin-bottom: 0.5rem;

                  .difficulty-level{
                      display: flex;
                      align-items: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default AssessmentStyles
