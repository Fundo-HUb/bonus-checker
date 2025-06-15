async function validate() {
  const email = document.getElementById("email").value;
  const url = document.getElementById("url").value;
  const resultBox = document.getElementById("result");

  if (!email || !url) {
    resultBox.textContent = "Please enter both email and API URL.";
    return;
  }

  const fullUrl = `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/junior-dev?url=${encodeURIComponent(url)}&email=${encodeURIComponent(email)}`;
  
  try {
    const response = await fetch(fullUrl);
    const data = await response.json();
    resultBox.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    resultBox.textContent = "Something went wrong. Make sure your URL is correct.";
  }
}
