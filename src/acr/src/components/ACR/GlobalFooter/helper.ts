export const formatPhoneNumber = (text: string): string => {
  var cleaned = text.replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return '';
}

export const formatAddress = (address1: string, address2: string, city: string, state: string, zipcode: string, isLink?: boolean) => {
  if (isLink) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(`${address1} ${address2} ${city}, ${state} ${zipcode}`)}`
  }
  return `${address1} ${address2} ${city}, ${state} ${zipcode}`
};