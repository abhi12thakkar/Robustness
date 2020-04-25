import styled from 'styled-components'

const HeaderStyles = styled.div`
  .header-container {
    position: fixed;
    width: 100vw;
    box-sizing: border-box;
    z-index: 101;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    background-color: #fafbfc;
    padding: 6px 24px;
    box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
      0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
      0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
      0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);

    .left-side {
      display: flex;
      align-items: center;

      .logo-burger{
          transition: all 0.3s cubic-bezier(0, 0.105, 0.035, 1.57);
          display: flex;
          align-items: center;
      }
      .no-logo-burger{
          display: none;
      }
      .hamburger-container {
        display: flex;
        margin-right: 48px;
        flex-direction: column;
        justify-content: space-between;
        width: 24px;
        height: 14px;
        cursor: pointer;

        .strip {
          width: 100%;
          height: 2px;
          background-color: #3f6ad8;
        }
      }

      .search-container {
        width: 42px;
        height: 42px;
        border-radius: 42px;
        background-color: rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        position: relative;
      }

      .crossIcon {
        position: absolute;
        top: 14px;
        opacity: 0;
        cursor: pointer;
      }
      .slidingCross {
        animation: slideThrough 0.3s linear 0.3s;
        animation-fill-mode: forwards;
      }

      @keyframes slideThrough {
        0% {
          transform: translateX(0px);
          opacity: 0;
        }
        50% {
          opacity: 0;
        }
        100% {
          transform: translateX(310px);
          opacity: 1;
        }
      }

      .expandSearch {
        animation: expand 0.2s linear;
        animation-fill-mode: forwards;
      }

      @keyframes expand {
        0% {
          width: 42px;
        }
        70% {
          width: 350px;
        }
        100% {
          width: 290px;
        }
      }
      .shrinkSearch {
        animation: shrink 0.2s linear;
        animation-fill-mode: forwards;
      }

      @keyframes shrink {
        0% {
          width: 290px;
        }
        100% {
          width: 42px;
        }
      }
      .search-icon {
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.06);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        transform: rotate(90deg);
        margin-left: auto;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.65, -0.6, 0.24, 1.65);

        .rotateIcon {
          animation: rotateGlass 0.2s linear;
          animation-fill-mode: forwards;
        }

        @keyframes rotateGlass {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-90deg);
          }
        }

        /* .antirotate{
                animation: antirotateGlass 0.2s linear;
                animation-fill-mode:forwards;
            }

            @keyframes antirotateGlass {
                from{transform: rotate(0deg);}
                to{transform: rotate(90deg);}
            } */
      }

      input {
        width: 100%;
        padding: 0 70px 0 20px;
        top: 0;
        left: 0;
        background-color: transparent;
        box-sizing: border-box;
        outline: none;
        border: none;
        transition: all 0.3s cubic-bezier(0, 0.105, 0.035, 1.57);
        /* transition-delay: 0.3s; */
        font-size: 0.88rem;
        display: none;
        flex: 1;
      }
      .hop {
        display: block;
        animation: hopText 0.3s linear;
      }

      @keyframes hopText {
        0% {
          transform: translate(0, 20px);
        }
        70% {
          transform: translate(0, -10px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      position: relative;

      .dropdown {
        position: absolute;
        display: none;
        box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
          0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
          0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
          0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
        background-color: #fff;
        z-index: 10;
        color: #495057;
        border: 1px solid rgba(0,0,0,0.15);
        padding: 0.65rem 0;
        border-radius: 0.25rem;
        min-width: 15rem;
        font-family: sans-serif;

        .logout{
            border-top: 1px solid #e9ecef;
        }

        .clickable, .logout{
            color: #212529;
            font-weight: 400;
            font-size: 0.88rem;
            padding: .8rem 1.5rem;
            background-color: transparent;
            transition: background-color 0.3s ease, color 0.3s ease;
            cursor: pointer;

            &:hover{
                background-color: #e0f3ff
            }
        }
      }

      .showDropdown {
        animation: fade-in2 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
        transform: translate3d(-180px, 115px, 0px);
        animation-fill-mode: forwards;
        display: block;
      }

      @keyframes fade-in2 {
        0% {
          margin-top: -50px;
          opacity: 0;
        }

        100% {
          margin-top: 0px;
          opacity: 1;
        }
      }

      .account-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        margin-right: 16px;
        font-family: sans-serif;

        .first-line {
          color: #495057;
          font-size: 0.88rem;
          font-weight: bold;
          opacity: 0.8;
        }
        .second-line {
          font-size: 0.8rem;
          font-weight: 400;
          opacity: 0.5;
        }
      }
    }
  }
`

export default HeaderStyles
