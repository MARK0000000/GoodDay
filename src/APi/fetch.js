export async function fetchPost(data, url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    });
    const json = await res.json();
    return json
  } catch (err) {
    console.warn(err);
  }
}

export async function fetchGetWithCount(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
    });
    const totalCount = res.headers.get('X-Total-Count');
    const json = await res.json();
    return { data: json, totalCount };
  } catch (err) {
    console.warn(err);
  }
}



