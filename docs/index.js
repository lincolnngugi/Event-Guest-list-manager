document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const guestList = document.getElementById("guest-list");
  const maxGuests = 10;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("guest-name");
    const category = document.getElementById("guest-category").value;

    if (guestList.children.length >= maxGuests) {
      alert("Guest list limit reached!");
      return;
    }

    const li = document.createElement("li");
    const tag = document.createElement("span");
    tag.textContent = category;
    tag.className = `tag ${category}`;

    const nameSpan = document.createElement("span");
    nameSpan.textContent = input.value;

    const time = document.createElement("small");
    time.textContent = `Added at ${new Date().toLocaleTimeString()}`;

    const rsvpButton = document.createElement("button");
    rsvpButton.textContent = "Attending";
    rsvpButton.className = "attending";
    rsvpButton.addEventListener("click", () => {
      rsvpButton.textContent = rsvpButton.textContent === "Attending" ? "Not Attending" : "Attending";
      rsvpButton.classList.toggle("attending");
      rsvpButton.classList.toggle("not-attending");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.append(tag, nameSpan, rsvpButton, deleteBtn, time);
    guestList.appendChild(li);
    form.reset();
  });
});
