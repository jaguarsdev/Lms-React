function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.jwt) {
    // return { Authorization: 'Bearer ' + user.accessToken };
    // console.log("hi")
    return { Authorization: `Bearer ${user.jwt}` };
  } else {
    return {};
  }
}

export default authHeader;
