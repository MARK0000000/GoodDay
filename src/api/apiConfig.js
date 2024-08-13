const API_BASE_URL = 'https://api-gd.sava.site';

const cityid = '1';
const endpoints = {
  UPLOADS: `${API_BASE_URL}/uploads`,
//   USER_ME: `${API_BASE_URL}/user/me`,
//   LOGIN: `${API_BASE_URL}/user/login`,
//   REGISTRATION: `${API_BASE_URL}/user/registration`,
  DISCOUNTSBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&isServices=false&isInfo=false&isDiscount=true`,

  PROMOTION: `${API_BASE_URL}/promotion?cityId=${cityid}`,

  SERVICEBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=1&isServices=false&isInfo=false`,
  EDUCATIONBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=2&isServices=false&isInfo=false`,
  GIFTSBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=3&isServices=false&isInfo=false`,
  FOODBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=4&isServices=false&isInfo=false`,
  HEALTHBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=5&isServices=false&isInfo=false`,
  BEAUTYBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=6&isServices=false&isInfo=false`,
  ENTERTAIMENTBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=7&isServices=false&isInfo=false`,
  AUTOBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=8&isServices=false&isInfo=false`,
  RECREACTIONBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=9&isServices=false&isInfo=false`,
  CHILDRENBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=10&isServices=false&isInfo=false`,
  CLOTHESANDSHOESBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=11&isServices=false&isInfo=false`,
  ACCESSORIESBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=12&isServices=false&isInfo=false`,
  EVERYTHINGFORHOMEBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=13&isServices=false&isInfo=false`,
  REPAIRBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=14&isServices=false&isInfo=false`,
  OTHERBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=15&isServices=false&isInfo=false`,
  EQUIPMENTBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=16&isServices=false&isInfo=false`,
  PETSBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=17&isServices=false&isInfo=false`,
  MASTERCLASSESBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=18&isServices=false&isInfo=false`,
  SPORTBUSINESS: `${API_BASE_URL}/business?cityId=${cityid}&categoryId=19&isServices=false&isInfo=false`,
  

  BUSINESSBYID: `${API_BASE_URL}/business/`,
};
export default endpoints;