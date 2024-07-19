
//   export const fetchGet = async (url, token) => {
//     try {
//       const response = await axios.get(url, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };
  
// export const fetchPost = async (data, url) => {
//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log('Success:', JSON.stringify(response.data));
//     return response.data;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

export async function fetchPost(data, url) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Проверка на успешный ответ
      if (!response.ok) {
        // Логирование для различных статус-кодов
        if (response.status >= 400 && response.status < 500) {
          console.error(`Ошибка ${response.status}: Некорректный запрос.`);
        } else if (response.status >= 500 && response.status < 600) {
          console.error(`Ошибка ${response.status}: Ошибка сервера.`);
        }
        return false;
      }
  
      const json = await response.json();
      console.log("Успех:", JSON.stringify(json));
      return json;
  
    } catch (error) {
      console.error("Ошибка:", error);
      throw error; // Прокидываем ошибку выше для обработки
    }
}

export async function fetchGet(url) {
  try {
    const res = await fetch(url)
    const json = await res.json();
    return json;
  } catch (err) {
    console.warn(err);
  }
}

export async function fetchDelete(url) {
  try {
      const response = await fetch(url, {
          method: "DELETE", 
          headers: {
              "Content-Type": "application/json",
          },
      });
      if (response.ok) {
          const json = await response.json();
          console.log("Успех:", JSON.stringify(json));
          return json;
      } else {
          console.error("Ошибка:", response.status, response.statusText);
      }
  } catch (error) {
      console.error("Ошибка:", error);
  }
}

// Функция для получения всех куки
// Функция для получения всех куки
function getAllCookies() {
    const cookies = document.cookie.split(';');
    const cookieObj = {};
    cookies.forEach(cookie => {
      if (cookie.trim() !== '') {
        const [key, value] = cookie.split('=');
        const cookieName = key.trim();
        cookieObj[cookieName] = value.trim();
      }
    });
    return cookieObj;
  }
  
  // Функция для выполнения GET-запроса с куками
  export async function fetchWithCookies(url) {
    const cookies = getAllCookies();
    const cookieString = Object.entries(cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');
  
    console.log('Cookies in document:', document.cookie);
    console.log('Cookies in header:', cookieString);
  
    const response = await fetch(url, {
      headers: {
        'Cookie': cookieString
      }
    });
  
    return response.json();
  }
  // export const fetchPost = async (data, url, token) => {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response.json())
//   return await response.json();
// };

// export const fetchGet = async (url, token) => {
//   const response = await fetch(url, {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   });
//   return await response.json();
// };
// export async function fetchGet(url) {
