let bgColor = ["#28423b", "#115917", "#330536", "#8f1f09", "#594d00", "#594d00", "#594d00", "#594d00", "#122e5e", "#6e0b8f"];

export function ChangeUserLoginBgColor(loginUserName) {
  const lastDigit = loginUserName?.slice(-1);
  const color = bgColor[lastDigit];
  return color;
}
