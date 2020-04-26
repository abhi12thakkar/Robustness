import styled from 'styled-components'

const UserAccountsStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  height: 100%;

  .user-accounts-container {
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
      padding: 30px 45px;

      .table {
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
          0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
          0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
          0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
        border-radius: 0.25rem;
        border: 1px solid rgba(26, 54, 126, 0.125);

        .table-header {
          font-size: 0.88rem;
          color: rgba(13, 27, 62, 0.7);
          font-weight: bold;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e9ecef;
        }
        .table-body{
            div{
            &:last-child{
                border-bottom: none !important;
            }
            }
        }
        .row {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #e9ecef;

          .id{
              width: 3%;
          }
          .first-name{
            width: 12%;
          }
          .last-name{
            width: 12%;
          }
          .organisation{
            width: 15%;
          }
          .email{
            width: 20%;
          }
          .designation{
            width: 20%;
          }
          .contact{
            width: 15%;
          }

          .column {
            padding: 0.55rem;
            font-size: 0.88rem;
            font-weight: 400;
            color: #495057;
          }
          .column-header,
          .id {
            font-weight: bold;
          }
        }
        .column-headers {
          border-bottom: 2px solid #e9ecef;
        }
      }
    }
  }
`

export default UserAccountsStyles
