export const token = !localStorage.token ? "{}" : localStorage.token;
export const isAdmin = JSON.parse(token);
export const config = {
  headers: {
    Authorization: `Bearer ${token && JSON.parse(token)}`,
  },
};
