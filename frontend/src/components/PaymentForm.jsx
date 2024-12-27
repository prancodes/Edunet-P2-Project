// src/components/PaymentForm.jsx

import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null); // Track payment status

  const handlePayment = (e) => {
    e.preventDefault();

    // Basic mock validation (you can add more sophisticated validation if needed)
    if (cardNumber.length === 16 && expiryDate && cvv.length === 3) {
      setPaymentStatus('success');
    } else {
      setPaymentStatus('failed');
    }
  };

  return (
    <div className="payment-form">
      <h2>Make Payment</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            placeholder="Enter card number"
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            placeholder="Enter CVV"
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>

      {paymentStatus && (
        <div className={`payment-status ${paymentStatus}`}>
          {paymentStatus === 'success' ? (
            <p>Payment Successful! Thank you for your purchase.</p>
          ) : (
            <p>Payment Failed! Please check your details.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
