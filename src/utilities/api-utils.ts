
export const getAllMembers = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/members");
  const members = await response.json();

  return members.members;
};
