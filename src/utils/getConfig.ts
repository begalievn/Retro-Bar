export const token = !localStorage.accessToken
  ? "{}"
  : localStorage.accessToken;
export const isAdmin = JSON.parse(token);
export const config = {
  headers: {
    Authorization: `Bearer ${token && JSON.parse(token)}`,
  },
};
