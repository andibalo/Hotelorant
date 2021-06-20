export const formatRupiah = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const locationColorResolver = (location) => {
  switch (location) {
    case "jakarta":
      return "orange";
    case "tangerang":
      return "yellow";
    case "depok":
      return "green";
    case "bekasi":
      return "teal";
    case "bogor":
      return "blue";
    default:
      return "gray";
  }
};
