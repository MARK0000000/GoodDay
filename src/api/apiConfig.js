const API_BASE_URL = 'http://localhost:3001';

const endpoints = {
  USER_ME: `${API_BASE_URL}/user/me`,
  LOGIN: `${API_BASE_URL}/user/login`,
  REGISTRATION: `${API_BASE_URL}/user/registration`,
  DISCOUNTSBUSINESS: `${API_BASE_URL}/business?cityId=1&categoryId=1&isServices=false&isInfo=false&isDiscount=true`,
};
export default endpoints;