let login = (username, password) => {
  if(username !== "admin" || password !== "raidcal"){
    console.log("incorrect login");
  }
};

login("admin", "idunno");
