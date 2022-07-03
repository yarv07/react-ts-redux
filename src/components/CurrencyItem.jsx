
const CurrencyItem = ({ currencySymbol, currencyRate, ratesBase }) => {
  return (
    <div>
      <strong>
        {currencySymbol}/{ratesBase}
      </strong>
      <span>{currencyRate}</span>
    </div>
  );
};

export default CurrencyItem;