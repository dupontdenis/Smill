
getData();

async function getData() {
  const response = await fetch("/api");
  const data = await response.json();

  for (item of data) {
    const root = document.createElement("div");
    const mood = document.createElement("h1");
    const date = document.createElement("span");
    const image = document.createElement("img");

    mood.textContent = `mood: ${item.mood}`;
    
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    
    image.src = item.image64;

    root.append(mood, date, image);
    document.querySelector(".grid").insertAdjacentElement("beforeend", root)
  }
  console.table(data);
}
