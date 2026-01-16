document.addEventListener("DOMContentLoaded", function () {
  const tablaBitacora = document.getElementById("tabla-bitacora");
  const filtro1 = document.getElementById("filtro1");
  const filtro2 = document.getElementById("filtro2");
  const totalRegistros = document.getElementById("total-registros");

  const registros = [
  {
    cod: "OCT23-01",
    fecha: "17/10/2023",
    noCatastral: "GP421Y-35-0018",
    ubicacion: "Suyapa",
    contribuyente: "VALENTINA ORELLANA ORELLANA",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Terminado",
    observaciones: "Prop. ant.: Lester Eugenio Romero"
  },
  {
    cod: "OCT23-02",
    fecha: "30/10/2023",
    noCatastral: "GP424V-35-0009",
    ubicacion: "Centro Norte",
    contribuyente: "PURIFICACIÓN ORTEZ",
    identidad: "1706 1961 00077",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Terminado",
    observaciones: "Prop. ant.: Juan Ramón Rodriguez Pierrobon y coop."
  },
  {
    cod: "SEP24-01",
    fecha: "//2024",
    noCatastral: "GP134U-03-0013",
    ubicacion: "El Buen Samaritano",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "La información de la ficha se sacó del SAFT, porque no se encontró la ficha",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "SEP24-02",
    fecha: "//2024",
    noCatastral: "GP442W-10-0003",
    ubicacion: "Res. Buenos Aires",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Se efectuó primero en el SAFT, y después se hizo en la ficha",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "SEP24-03",
    fecha: "9/10/2024",
    noCatastral: "GP424Y-27-0005",
    ubicacion: "La Paz",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "-",
    fecha: "9/11/2024",
    noCatastral: "GP424M-39-0002",
    ubicacion: "Alvarez Martinez",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "OCT24-01",
    fecha: "22/10/2024",
    noCatastral: "GP423B-02-0005",
    ubicacion: "Guadalupe",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "OCT24-02",
    fecha: "28/10/2024",
    noCatastral: "GP431D-71-0005",
    ubicacion: "El Rosario",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "OCT24-03",
    fecha: "28/10/2024",
    noCatastral: "GP421Y-06-0003",
    ubicacion: "Flores De Oriente",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "NOV24-01",
    fecha: "25/11/2024",
    noCatastral: "GP431C-18-0128",
    ubicacion: "San Cristobal",
    contribuyente: "TABATA ZABALA",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Orlando Arjuna Ayala",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.: Amilcar Zabala"
  },
  {
    cod: "DIC24-01",
    fecha: "20/12/2024",
    noCatastral: "GP412Q-01-0046",
    ubicacion: "Nuevo San Juan",
    contribuyente: "MIRIAM FLORES",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. Ant.: MIREYA TURCIOS"
  },
  {
    cod: "DIC24-02",
    fecha: "20/12/2024",
    noCatastral: "GP431C-31-0024",
    ubicacion: "Res. Buenos Aires",
    contribuyente: "BAYRON VEGA",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "La Propiedad fue vendida por los herederos (Ivan Martinez, Damaris Martinez y Juan Ramon Martinez) al sr. Bayron Vega",
    observaciones: "Prop. ant.: ALMA RAUDALES"
  },
  {
    cod: "ENE25-01",
    fecha: "9/1/2025",
    noCatastral: "GP442V-50-0009",
    ubicacion: "Nueva Jerusalen",
    contribuyente: "JOSE OVIL RIVERA",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.: Ministerio Monte de Santidad"
  },
  {
    cod: "ENE25-02",
    fecha: "27/1/2025",
    noCatastral: "GP423C-01-0006",
    ubicacion: "Centro Sur",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "FEB25-01",
    fecha: "25/2/2025",
    noCatastral: "GP423E-19-0009",
    ubicacion: "Campo Pineda",
    contribuyente: "VILMA LARA",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "FEB25-02",
    fecha: "25/2/2025",
    noCatastral: "GP424V-30-0025",
    ubicacion: "Centro Norte",
    contribuyente: "FREDY MARTINEZ",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "MAR25-01",
    fecha: "17/3/2025",
    noCatastral: "GP134Q-08-0010",
    ubicacion: "San Jose",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "MAR25-02",
    fecha: "18/3/2025",
    noCatastral: "GP424M-16-0005",
    ubicacion: "Alvarez Martinez",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "MAR25-03",
    fecha: "20/3/2025",
    noCatastral: "GP423G-16-0060",
    ubicacion: "Municipal",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "MAR25-04",
    fecha: "26/3/2025",
    noCatastral: "GP421X-30-0007",
    ubicacion: "Suyapa",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "SEP25-01",
    fecha: "19/8/2025",
    noCatastral: "GP423E-04-0004",
    ubicacion: "La Paz",
    contribuyente: "JUVENTINA MARADIAGA",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 08/09/2025 - 16:00",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "SEP25-02",
    fecha: "19/8/2025",
    noCatastral: "GP442X-62-0003",
    ubicacion: "Ciudad Planeta",
    contribuyente: "SUYAPA CRUZ",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 08/09/2025 - 16:00",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "SEP25C-03",
    fecha: "18/8/2025",
    noCatastral: "GP424L-16-0004",
    ubicacion: "Alvarez Martinez",
    contribuyente: "ANTONIO NIETO",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 11/09/2025 - 16:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "SEP25C-04",
    fecha: "20/8/2025",
    noCatastral: "GP442R-18-0005",
    ubicacion: "Gracias A Dios",
    contribuyente: "LETTY RAMOS",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 11/09/2025 - 16:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "SEP25C-03",
    fecha: "18/8/2025",
    noCatastral: "GP424L-16-0004",
    ubicacion: "Alvarez Martinez",
    contribuyente: "ANTONIO NIETO",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 11/09/2025 - 16:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "SEP25C-04",
    fecha: "20/8/2025",
    noCatastral: "GP442R-18-0005",
    ubicacion: "Gracias A Dios",
    contribuyente: "LETTY RAMOS",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 11/09/2025 - 16:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "OCT25C-01",
    fecha: "6/10/2025",
    noCatastral: "GP424W-42-0006",
    ubicacion: "4 De Julio",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 09/10/2025 - 10:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "OCT25C-02",
    fecha: "6/10/2025",
    noCatastral: "GP422G-01-0021",
    ubicacion: "Res. Oro Verde",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 09/10/2025 - 10:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "OCT25C-03",
    fecha: "6/10/2025",
    noCatastral: "GP431D-17-0023",
    ubicacion: "Villas del Campo",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 09/10/2025 - 10:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "OCT25C-04",
    fecha: "21/10/2025",
    noCatastral: "GP423G-09-0020",
    ubicacion: "Chulavista",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Fraccionamiento",
    responsables: "Alejandro Castillo",
    resolucion: "CLAVE NUEVA",
    observaciones: "N/A"
  },
  {
    cod: "OCT25C-05",
    fecha: "21/10/2025",
    noCatastral: "GP423G-09-0013",
    ubicacion: "Chulavista",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Rest. del Terreno/Remanente",
    responsables: "Alejandro Castillo",
    resolucion: "RESTO REGISTRAL",
    observaciones: "N/A"
  },
  {
    cod: "OCT25C-06",
    fecha: "22/10/2025",
    noCatastral: "GP134Q-07-0022",
    ubicacion: "San Jose",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 27/11/2025 - 10:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "OCT25C-07",
    fecha: "28/10/2025",
    noCatastral: "GP431D-37-0022",
    ubicacion: "Donaldo Sierra",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 28/11/2025 - 10:30",
    observaciones: "Prop. ant.:"
  },
  {
    cod: "DIC25C-01",
    fecha: "4/12/2025",
    noCatastral: "GP442X-14-0023",
    ubicacion: "Ciudad Planeta",
    contribuyente: "PETRONA RODRIGUEZ",
    identidad: "N/A",
    tipoTrabajo: "Cambio de Propietario",
    responsables: "Alejandro Castillo",
    resolucion: "ENTREGADO 10/12/2025 - 11:30",
    observaciones: "Prop. ant.:"
  }
    // Agrega más registros aquí
  ];

  function actualizarTabla() {
    const filtro1Valor = filtro1.value.toLowerCase();
    const filtro2Valor = filtro2.value.toLowerCase();
    const tbody = tablaBitacora.querySelector("tbody");

    // Limpia la tabla antes de insertar datos nuevos
    tbody.innerHTML = "";

    let totalFiltrados = 0;

    for (const registro of registros) {
      const coincideFiltro1 = Object.values(registro).some(valor =>
        String(valor).toLowerCase().includes(filtro1Valor)
      );
      const coincideFiltro2 = Object.values(registro).some(valor =>
        String(valor).toLowerCase().includes(filtro2Valor)
      );

      if (coincideFiltro1 && coincideFiltro2) {
        const row = document.createElement("tr");
        for (const campo in registro) {
          const cell = document.createElement("td");
          cell.textContent = registro[campo];
          row.appendChild(cell);
        }
        tbody.appendChild(row);
        totalFiltrados++;
      }
    }

    // Actualiza el total de registros filtrados
    totalRegistros.textContent = totalFiltrados;
  }

  filtro1.addEventListener("input", actualizarTabla);
  filtro2.addEventListener("input", actualizarTabla);
  actualizarTabla(); // Llena la tabla al cargar la página

  // Código para el botón flotante
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.id = "scroll-to-top";
  scrollToTopBtn.textContent = " ↑ ";

  // Agregar el botón al final de la sección
  const mainSection = document.getElementById("bitacora");
  mainSection.appendChild(scrollToTopBtn);

  // Estilos del botón flotante
  scrollToTopBtn.style.fontSize = "23px";
  scrollToTopBtn.style.fontFamily = "Arial Black, Arial, sans-serif";
  scrollToTopBtn.style.fontWeight = "bold";
  scrollToTopBtn.style.opacity = "0.8";
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.bottom = "20px";
  scrollToTopBtn.style.left = "50%";
  scrollToTopBtn.style.transform = "translateX(-50%)";
  scrollToTopBtn.style.padding = "10px 20px";
  scrollToTopBtn.style.backgroundColor = "#FFFF66";
  scrollToTopBtn.style.color = "#008000";
  scrollToTopBtn.style.border = "none";
  scrollToTopBtn.style.borderRadius = "40px";
  scrollToTopBtn.style.cursor = "pointer";
  scrollToTopBtn.style.display = "none"; // Inicialmente oculto

  scrollToTopBtn.addEventListener("click", function () {
    mainSection.scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    const sectionRect = mainSection.getBoundingClientRect();
    const footer = document.querySelector("footer"); // Cambiar esto si el footer tiene un ID diferente
    const footerRect = footer.getBoundingClientRect();

    if (window.scrollY > 600 && sectionRect.bottom > window.innerHeight) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }

    // Asegurarse de que el botón no se desplace más allá del final de la sección
    if (sectionRect.bottom <= window.innerHeight) {
      scrollToTopBtn.style.position = "absolute";
      scrollToTopBtn.style.bottom = "20px";
    } else {
      scrollToTopBtn.style.position = "fixed";
      scrollToTopBtn.style.bottom = "20px";
    }
  });
});
