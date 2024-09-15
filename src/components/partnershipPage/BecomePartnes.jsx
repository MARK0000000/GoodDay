import React from 'react';
import phone from '../../images/other/phone.png';

export default function BecomePartnes() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://vh369.by2040.ihb.by/pdfs/doPartnership';
    link.download = 'doPartnership.pdf'; // Имя файла для скачивания
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