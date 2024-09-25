document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
          name: "Pelota Antiestrés",
          make: "Miniso",
          description: "Pelota antiestrés de silicona suave, ideal para aliviar el estrés y la ansiedad.",
          price: 3.99,
          status: "Disponible",
        },
        {
          name: "Auriculares Bluetooth",
          make: "Miniso",
          description: "Auriculares inalámbricos con Bluetooth, sonido de alta calidad y batería de larga duración.",
          price: 19.99,
          status: "Disponible",
        },
        {
          name: "Botella de Agua",
          make: "Miniso",
          description: "Botella de agua reutilizable de 500ml, hecha de material libre de BPA.",
          price: 7.99,
          status: "Agotado",
        },
        {
          name: "Almohada de Viaje",
          make: "Miniso",
          description: "Almohada de viaje ergonómica, perfecta para viajes largos en avión o coche.",
          price: 12.99,
          status: "Disponible",
        },
        {
          name: "Lámpara LED",
          make: "Miniso",
          description: "Lámpara LED portátil con luz ajustable, ideal para lectura y trabajo.",
          price: 14.99,
          status: "Disponible",
        },
        {
          name: "Organizador de Escritorio",
          make: "Miniso",
          description: "Organizador de escritorio multifuncional, perfecto para mantener tu espacio de trabajo ordenado.",
          price: 9.99,
          status: "Disponible",
        },
        {
          name: "Mochila Casual",
          make: "Miniso",
          description: "Mochila casual de diseño moderno, ideal para uso diario y viajes cortos.",
          price: 24.99,
          status: "Agotado",
        },
        {
          name: "Taza de Cerámica",
          make: "Miniso",
          description: "Taza de cerámica con diseño minimalista, perfecta para café o té.",
          price: 5.99,
          status: "Disponible",
        },
        {
          name: "Set de Cubiertos",
          make: "Miniso",
          description: "Set de cubiertos de acero inoxidable, incluye cuchillo, tenedor y cuchara.",
          price: 8.99,
          status: "Disponible",
        },
        {
          name: "Espejo de Maquillaje",
          make: "Miniso",
          description: "Espejo de maquillaje con luz LED, ideal para aplicar maquillaje con precisión.",
          price: 17.99,
          status: "Disponible",
        },
      ];
    const tbody = document.querySelector("tbody");

    products.forEach((product) => {
      const tr = document.createElement("tr");

      const checkboxTd = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkboxTd.appendChild(checkbox);

      const nameProductId = document.createElement("td");
      nameProductId.innerHTML = `${product.name} <span class="secondary-info">${product.make}</span>`;

      const description = document.createElement("td");
      description.innerHTML = `${product.description}`;

      const price = document.createElement("td");
      price.textContent = product.price;

      const statusTd = document.createElement("td");
      statusTd.textContent = product.status;
      statusTd.className =
        product.status === "Disponible" ? "status-active" : "status-inactive";

      const actionsTd = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      actionsTd.appendChild(editButton);
      actionsTd.appendChild(deleteButton);

      tr.appendChild(checkboxTd);
      tr.appendChild(nameProductId);
      tr.appendChild(description);
      tr.appendChild(price);
      tr.appendChild(statusTd);
      tr.appendChild(actionsTd);

      tbody.appendChild(tr);
    });
  });