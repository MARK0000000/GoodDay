export async function fetchPost(data, url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status >= 400 && response.status < 500) {
        console.error(`Ошибка ${response.status}: Некорректный запрос.`);
      } else if (response.status >= 500 && response.status < 600) {
        console.error(`Ошибка ${response.status}: Ошибка сервера.`);
      }
      return false;
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error;
  }
}
export async function fetchGet(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      //credentials: 'include',
    });
    const json = await res.json();
    return json
  } catch (err) {
    console.warn(err);
  }
}
export async function fetchGetCategory(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      //credentials: 'include',
    });

    const totalCount = res.headers.get('X-Total-Count');
    const json = await res.json();
    return { data: json, totalCount };
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

