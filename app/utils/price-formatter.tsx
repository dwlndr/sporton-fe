const priceformatter = (price: number) => {
  const newformat = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  }).format(price);

  return newformat;
};

export default priceformatter;
