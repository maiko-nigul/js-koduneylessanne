async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!response.ok) {
      throw new Error(`HTTP viga! Olek: ${response.status}`);
    }

    const data = await response.json();
    console.log("Andmed:", data);
  } catch (error) {
    console.error("Viga andmete pärimisel:", error.message);
  }
}

getPosts();