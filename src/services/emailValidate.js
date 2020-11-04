export default function emailValidate(email) {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexp.test(email);
}
