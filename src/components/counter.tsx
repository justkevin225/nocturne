const digits = Array.from({ length: 10 }, (_, digit) => digit);

export const Counter = () => {
  return (
    <div className="hero-overlay">
      <div className="counter">
        {[0, 1].map((column) => (
          <div className="digit-col" key={column}>
            {digits.map((digit) => (
              <span key={digit}>{digit}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
