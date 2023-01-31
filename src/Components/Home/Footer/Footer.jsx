import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer row py-5">
        <div className="col-12 text-muted">©2022-2023 54DNAtype</div>
        <div className="row justify-content-center cursor-pointer">
          <div className="col-12 col-lg-1 fw-bold mt-2">Contact</div>
          <div className="col-12 col-lg-2 fw-bold mt-2">Terms & Conditions</div>
          <div className="col-12 col-lg-1 fw-bold mt-2 text-nowrap">
            Privacy Policy
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <svg
            className="mx-3 cursor-pointer"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="18.5185" fill="white" stroke="#EBEBEB" />
            <mask
              id="mask0_802_1963"
              maskUnits="userSpaceOnUse"
              x="15"
              y="10"
              width="10"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 10H25V29.4118H15V10Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_802_1963)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7274 28.2353V20.4542H23.3287L23.7184 17.4217H20.7274V15.4859C20.7274 14.6073 20.9703 14.0089 22.2242 14.0089L23.8235 14.0084V11.2964C23.5467 11.2596 22.5975 11.1765 21.4929 11.1765C19.1868 11.1765 17.6083 12.59 17.6083 15.1853V17.4217H15V20.4542H17.6083V28.2353H20.7274Z"
                fill="#999999"
              />
            </g>
          </svg>
          <svg
            className="mx-3 cursor-pointer"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="18.5185" fill="white" stroke="#EBEBEB" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.5268 23.5005C26.5268 25.1934 25.1542 26.566 23.4611 26.566H16.5392C14.8463 26.566 13.4738 25.1934 13.4738 23.5005V16.5787C13.4738 14.8855 14.8463 13.513 16.5392 13.513H23.4611C25.1542 13.513 26.5268 14.8855 26.5268 16.5787V23.5005ZM23.3816 12H16.6181C14.0676 12 12 14.0673 12 16.6181V23.3819C12 25.9321 14.0676 27.9997 16.6181 27.9997H23.3816C25.9324 27.9997 28 25.9321 28 23.3819V16.6181C28 14.0673 25.9324 12 23.3816 12ZM20.0004 22.7306C18.514 22.7306 17.3094 21.5258 17.3094 20.0397C17.3094 18.5533 18.514 17.3484 20.0004 17.3484C21.4868 17.3484 22.6914 18.5533 22.6914 20.0397C22.6914 21.5258 21.4868 22.7306 20.0004 22.7306ZM20.0001 15.8881C17.7073 15.8881 15.8485 17.7467 15.8485 20.0397C15.8485 22.3325 17.7073 24.191 20.0001 24.191C22.2928 24.191 24.1517 22.3325 24.1517 20.0397C24.1517 17.7467 22.2928 15.8881 20.0001 15.8881ZM23.3228 15.7305C23.3228 15.196 23.7559 14.7633 24.2901 14.7633C24.8242 14.7633 25.2573 15.196 25.2573 15.7305C25.2573 16.2644 24.8242 16.6974 24.2901 16.6974C23.7559 16.6974 23.3228 16.2644 23.3228 15.7305Z"
              fill="#999999"
            />
          </svg>
          <svg
            className="mx-3 cursor-pointer"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="18.5185" fill="white" stroke="#EBEBEB" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.6609 28.4C24.4535 28.4 28.1681 22.86 28.1681 18.0568C28.1681 17.8992 28.1649 17.7429 28.1576 17.5864C28.8787 17.0736 29.5055 16.4332 30 15.7043C29.3384 15.9939 28.6262 16.1892 27.8794 16.2771C28.6415 15.8269 29.2271 15.1151 29.5033 14.2658C28.7892 14.6821 27.9991 14.9854 27.1581 15.1482C26.4843 14.4416 25.5243 14 24.4627 14C22.4229 14 20.7689 15.628 20.7689 17.6348C20.7689 17.9201 20.8015 18.1974 20.8647 18.4638C17.7953 18.3118 15.0739 16.8656 13.2527 14.6657C12.935 15.203 12.7526 15.8269 12.7526 16.4923C12.7526 17.7537 13.4044 18.8672 14.3959 19.5185C13.7901 19.5005 13.2209 19.336 12.7229 19.064C12.7224 19.079 12.7224 19.0941 12.7224 19.11C12.7224 20.8711 13.9955 22.3408 15.6852 22.6741C15.3749 22.757 15.0489 22.8016 14.7117 22.8016C14.4736 22.8016 14.2424 22.7785 14.0175 22.736C14.4875 24.1804 15.8508 25.2313 17.4674 25.2608C16.2032 26.2361 14.6108 26.8175 12.8809 26.8175C12.5826 26.8175 12.2887 26.8001 12 26.767C13.6344 27.7978 15.5748 28.4 17.6609 28.4Z"
              fill="#999999"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
