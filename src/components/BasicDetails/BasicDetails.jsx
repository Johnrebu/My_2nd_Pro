import React from "react";
import "./BasicDetails.css";

const BasicDetails = () => {
  return (
    <div className="basic-details">
      <img
        src="/images/Basic Details.png"
        alt="Basic Details"
        className="basic-details-title"
      />

      <div className="details-container">
        <div className="details-grid">
          {/* Column 1 */}
          <div className="details-block">
            <p className="label">Name</p>
            <p className="value bold">
              M/s. AIONION CAPITAL MARKET <br /> 
              SERVICES PRIVATE LIMITED
            </p>
          </div>
          <div className="details-block">
            <p className="label">SEBI Registration Number</p>
            <p className="value bold">INZ000318532</p>
          </div>
          <div className="details-block">
            <p className="label">TAN</p>
            <p className="value bold">CHEA37281G</p>
          </div>
          <div className="details-block">
            <p className="label">AMFI Registration Number</p>
            <p className="value bold">ARN-296313</p>
          </div>

          {/* Column 2 */}
          <div className="details-block">
            <p className="label">Address</p>
            <p className="value bold">
              3rd Floor, Meerlan Towers, No.33, Hanumantha Road, Royapettah,
              Chennai – 600 014
            </p>
          </div>
          <div className="details-block">
            <p className="label">GST Registration Number</p>
            <p className="value bold">33ABACA2285K1ZR</p>
          </div>
          <div className="details-block">
            <p className="label">BSE Member Code</p>
            <p className="value bold">6878</p>
          </div>
          <div className="details-block">
            <p className="label">Mail id</p>
            <p className="value bold">compliance@aionioncapital.com</p>
          </div>

          {/* Column 3 */}
          <div className="details-block">
            <p className="label">Company PAN</p>
            <p className="value bold">ABACA2285K</p>
          </div>
          <div className="details-block">
            <p className="label">CIN</p>
            <p className="value bold">U66120TN2024PTC167864</p>
          </div>
          <div className="details-block">
            <p className="label">NSE Member Code</p>
            <p className="value bold">90405</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
