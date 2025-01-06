import React from 'react';
import phone from '../../images/other/phone.png';
import useEndpoints from '../../api/apiConfig';
export default function BecomePartnes() {
  const endpoints = useEndpoints();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${endpoints.PDF + 'doPartnership'}`;
    link.download = 'doPartnership.pdf';
    link.click();
  };

  return (
    <div className="becomePartner">
      <img src={phone} alt="" className="becomePartner__img" />
      <div className="becomePartner__content">
        <span className="becomePartner__text becomePartner__text_bold">Good Day</span>
        <span className="becomePartner__text">для вашего бизнеса</span>
        <button className="becomePartner__button" onClick={handleDownload}>Стать партнером</button>
      </div>
    </div>
  );
}