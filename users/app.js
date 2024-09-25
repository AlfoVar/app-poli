document.addEventListener("DOMContentLoaded", () => {
    const users = [
      {
        name: "Juan Lopez",
        surname: "Martinez",
        contact: "juan.lopez@example.com",
        phone: "123-456-7890",
        region: "América del Norte",
        status: "Activo",
      },
      {
        name: "Maria Garcia",
        surname: "Fernandez",
        contact: "maria.garcia@example.com",
        phone: "098-765-4321",
        region: "Europa",
        status: "Inactivo",
      },
      {
        name: "Carlos Sanchez",
        surname: "Rodriguez",
        contact: "carlos.sanchez@example.com",
        phone: "555-555-5555",
        region: "Asia",
        status: "Activo",
      },
    ];

    const tbody = document.querySelector("tbody");

    users.forEach((user) => {
      const tr = document.createElement("tr");

      const checkboxTd = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkboxTd.appendChild(checkbox);

      const nameTd = document.createElement("td");
      nameTd.innerHTML = `${user.name} <span class="secondary-info">${user.surname}</span>`;

      const contactTd = document.createElement("td");
      contactTd.innerHTML = `${user.contact} <span class="secondary-info">${user.phone}</span>`;

      const regionTd = document.createElement("td");
      regionTd.textContent = user.region;

      const statusTd = document.createElement("td");
      statusTd.textContent = user.status;
      statusTd.className =
        user.status === "Activo" ? "status-active" : "status-inactive";

      const actionsTd = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      actionsTd.appendChild(editButton);
      actionsTd.appendChild(deleteButton);

      tr.appendChild(checkboxTd);
      tr.appendChild(nameTd);
      tr.appendChild(contactTd);
      tr.appendChild(regionTd);
      tr.appendChild(statusTd);
      tr.appendChild(actionsTd);

      tbody.appendChild(tr);
    });
  });