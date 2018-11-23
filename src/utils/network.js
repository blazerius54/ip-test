export const ipRequest = ip => {
  return fetch(
    `https://api.2ip.ua/geo.json?ip=${ip}`,
  )
    .then(response => {
      if (response.status !== 200) {
        return;
      }
      return response;
    })
};