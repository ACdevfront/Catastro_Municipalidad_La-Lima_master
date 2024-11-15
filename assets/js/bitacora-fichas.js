document.addEventListener("DOMContentLoaded", function () {
    const tablaBitacora = document.getElementById("tabla-bitacora");
    const filtro1 = document.getElementById("filtro1");
    const filtro2 = document.getElementById("filtro2");
    const totalRegistros = document.getElementById("total-registros");

    const registros = [
      { no: 1, noCatastral: "GP423U-14-0015", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "Alejandro", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
      { no: 2, noCatastral: "GP423U-04-0001", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "Alejandro", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
      { no: 3, noCatastral: "GP423U-14-0016", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "Alejandro", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
      { no: 4, noCatastral: "GP423U-14-0014", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "Alejandro", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
      { no: 5, noCatastral: "GP423U-14-0007", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "Alejandro", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
      { no: 6, noCatastral: "GP423U-14-0004", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "Alejandro", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
      { no: 7, noCatastral: "GP423U-14-0003", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
      { no: 8, noCatastral: "GP423U-14-0003", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
      { no: 9, noCatastral: "GP432O-03-0049", ubicacion: "Guaruma I ", nombreContribuyente:" N/A ", noIdentidad:" N/A ", responsable:" N/A ", fechaSalida:" N/A ", tipoSalida:" N/A ", estacion:" N/A ", observaciones:" N/A" },
      {no :11,noCatastral : 'GP423F-12-0087',ubicacion:'Martinez Rivera',nombreContribuyente:'N / A',noIdentidad:' N / A ',responsable:' N / A ',fechaSalida:' N / A ',tipoSalida:' N / A ',estacion:' N / A ',observaciones:' N / A '},
      {no :12,noCatastral : 'GP432N-08-0002',ubicacion:'Nueva Guadalupe ',nombreContribuyente:' N / A ',noIdentidad:' N / A ',responsable:' N / A ',fechaSalida:' N / A ',tipoSalida:' N / A ',estacion:' N / A ',observaciones:' N / A '},
      {no :13,noCatastral : 'GP442W-75-0005',ubicacion:'Res. Villa San Fernando',nombreContribuyente:' N / A ',noIdentidad:' N / A ',responsable:' N / A ',fechaSalida:' N / A ',tipoSalida:' N / A ',estacion:' N / A ',observaciones:' N / A '},
      {no :14,noCatastral : 'GP442X-79-0007',ubicacion:'Res. Villa Nova',nombreContribuyente:' N / A ',noIdentidad:' N / A ',responsable:' N / A ',fechaSalida:' N / A ',tipoSalida:' N / A ',estacion:' N / A ',observaciones:' N / A '},
      {no :15,noCatastral : 'GP423L-27-0004',ubicacion:'Los Pinos ',nombreContribuyente:' N / A ',noIdentidad:' N / A ',responsable:' N / A ',fechaSalida:' N / A ',tipoSalida:' N / A ',estacion:' N / A ',observaciones:' N / A '},
      {no :16,noCatastral : 'GP423G-09-0019',ubicacion:'Chulavista',nombreContribuyente:' N /A',noIdentidad :' NA',responsable :' NA',fechaSalida :' NA',tipoSalida :' NA',estacion :' NA',observaciones :' NA'},
      {no :17,noCatastral : 'GP423G-09-0003',ubicacion :'Chulavista',nombreContribuyente :' NA',noIdentidad :' NA',responsable :' NA',fechaSalida :' NA',tipoSalida :' NA',estacion :' NA',observaciones :' NA'},
      {no :18,noCatastral : 'GP423G-09-0017',ubicacion :'Chulavista',nombreContribuyente :' NA',noIdentidad :' NA',responsable :' NA',fechaSalida :' NA',tipoSalida :' NA',estacion :' NA',observaciones :' NA'},
      {no :19,noCatastral : 'GP423G-09-0015',ubicacion :'Chulavista',nombreContribuyente :' NA',noIdentidad :' NA',responsable :' NA',fechaSalida :' NA',tipoSalida :' NA',estacion :' NA',observaciones :' NA'},
      {no :20,noCatastral : 'GP423G-09-0014',ubicacion :'Chulavista',nombreContribuyente :' NA',noIdentidad :' NA',responsable :' NA',fechaSalida :' NA',tipoSalida :' NA',estacion :' NA',observaciones :' NA'},
      {no :21,noCatastral : 'GP423G-09-0016',ubicacion :'Chulavista' ,nombreContribuyente :"NA" ,noIdentidad :"NA" ,responsable :"NA" ,fechaSalida :"NA" ,tipoSalida :"NA" ,estacion :"NA" ,observaciones :"NA"},
      {no :22,noCatastral :" GP423H-08-0004 ",ubicacion :" El Caiman ",nombreContribuyente :"NA" ,noIdentidad :"NA" ,responsable :"NA" ,fechaSalida :"NA" ,tipoSalida :"NA" ,estacion :"NA" ,observaciones :"NA"},
      {no :23,noCatastral :" GP423H-08-0010 ",ubicacion :" El Caiman ",nombreContribuyente :"NA" ,noIdentidad :"NA" ,responsable :"NA" ,fechaSalida :"NA" ,tipoSalida :"NA" ,estacion :"NA" ,observaciones :"NA"},
      {no :24,noCatastral :" GP423H-13-0017 ",ubicacion :" El Caiman ",nombreContribuyente :"NA" ,noIdentidad :"NA" ,responsable :"NA" ,fechaSalida :"NA" ,tipoSalida :"NA" ,estacion :"NA" ,observaciones :"NA"},
      {no :25,noCatastral :" GP423H-13-0012 ",ubicacion :" El Caiman ",nombreContribuyente :"NA" ,noIdentidad :"NA" ,responsable :"NA" ,fechaSalida :"NA" ,tipoSalida :"NA" ,estacion :"NA" ,observaciones :"NA"},
      {no :26,noCatastral :" GP423G-03-0009 ",ubicacion :" Sula ",nombreContribuyente :"NA" ,noIdentidad :"NA" ,responsable :"NA" ,fechaSalida :"NA" ,tipoSalida :"NA" ,estacion :"NA" ,observaciones :"NA"},
      {no :27,noCatastral:" GP423L-27-0008 ",ubicacion:" Los Pinos ",nombreContribuyente:" NA ",noIdentidad:" N/A ",responsable:" N/A ",fechaSalida:" N/A ",tipoSalida:" N/A ",estacion:" N/A ",observaciones:" N/A"},
      { no: 28, noCatastral:"GP423L-21-0010", ubicacion:"Los Pinos ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 29, noCatastral:"GP423G-09-0010", ubicacion:"Chulavista ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 30, noCatastral:"GP423G-09-0006", ubicacion:"Chulavista ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 31, noCatastral:"GP423G-09-0005", ubicacion:"Chulavista ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 32, noCatastral:"GP422A-14-0001", ubicacion:"Res. Villa Esther ", nombreContribuyente:" N /A ", noIdentidad:" N /A ", responsable:" N /A ", fechaSalida:" N /A ", tipoSalida:" N /A ", estacion:" N /A ", observaciones:" N /A"},
      { no: 33, noCatastral:"GP422A-14-0009", ubicacion:"Res. Villa Esther ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 34, noCatastral:"GP422A-14-0020", ubicacion:"Res. Villa Esther ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 35, noCatastral:"GP442W-75-0010", ubicacion:"Res. Villa San Fernando ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 36, noCatastral:"GP423H-03-0007", ubicacion:"El Cementerio ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 37, noCatastral:"GP423H-03-0006", ubicacion:"El Cementerio ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 38, noCatastral:"GP423H-03-0013", ubicacion:"El Cementerio ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 39, noCatastral:"GP423H-03-0011", ubicacion:"El Cementerio ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
      { no: 40, noCatastral:"GP423H-03-0008", ubicacion:"El Cementerio ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
    { no: 41, noCatastral:"GP432N-08-0005", ubicacion:"Nueva Guadalupe ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
    { no: 42, noCatastral:"GP432N-08-0006", ubicacion:"Nueva Guadalupe ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
    { no: 43, noCatastral:"GP432N-09-0003", ubicacion:"Nueva Guadalupe ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
    { no: 44, noCatastral:"GP432N-09-0005", ubicacion:"Nueva Guadalupe ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
    { no: 45, noCatastral:"GP432N-10-0006", ubicacion:"Nueva Guadalupe ", nombreContribuyente:"N/A ", noIdentidad:"N/A ", responsable:"N/A ", fechaSalida:"N/A ", tipoSalida:"N/A ", estacion:"N/A ", observaciones:"N/A"},
    { no: 46, noCatastral: "GP423U-14-0017", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 47, noCatastral: "GP423U-04-0004", ubicacion: "Filadelfia", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 48, noCatastral: "GP423H-09-0027", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 49, noCatastral: "GP423H-04-0012", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 50, noCatastral: "GP423C-36-0011", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 51, noCatastral: "GP423C-36-0006", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 52, noCatastral: "GP423C-36-0005", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad:" N/A ", responsable:" N/A ", fechaSalida:" N/A ", tipoSalida:" N/A ", estacion:" N/A ", observaciones:" N/A"},
    { no :53, noCatastral : 'GP423B-29-0001',ubicacion : 'Centro Sur',nombreContribuyente : ' N / A ',noIdentidad : ' N / A ',responsable : ' N / A ',fechaSalida : ' N / A ',tipoSalida : ' N / A ',estacion : ' N / A ',observaciones : ' N / A '},
    { no :54, noCatastral :" GP423B-30-0010",ubicacion :" Centro Sur ",nombreContribuyente :"NA" ,noIdentidad :"NA" ,responsable :"NA" ,fechaSalida :"NA" ,tipoSalida :"NA" ,estacion :"NA" ,observaciones :"NA"},
    {no :55,noCatastral:' GP423H-09-0014',ubicacion:' Centro Sur ',nombreContribuyente:' NA ',noIdentidad:' NA ',responsable:' NA ',fechaSalida:' NA ',tipoSalida:' NA ',estacion:' NA ',observaciones:' NA '},
    {no :56,noCatastral:' GP423H-04-0008',ubicacion:' Centro Sur ',nombreContribuyente:' NA ',noIdentidad:' NA ',responsable:' NA ',fechaSalida:' NA ',tipoSalida:' NA ',estacion:' NA ',observaciones:' NA '},
    {no :57,noCatastral:' GP423H-04-0009',ubicacion:' Centro Sur ',nombreContribuyente:' NA ',noIdentidad:' NA ',responsable:' NA ',fechaSalida:' NA ',tipoSalida:' NA ',estacion:' NA ',observaciones:' NA '},
    {no :58,noCatastral:' GP423H-04-0011',ubicacion:' Centro Sur ',nombreContribuyente:' NA ',noIdentidad:' NA ',responsable:' NA ',fechaSalida:' NA ',tipoSalida:' NA ',estacion:' NA ',observaciones:' NA '},
    {no :59,noCatastral:' GP423H-04-0005',ubicacion:' Centro Sur ',nombreContribuyente:' NA ',noIdentidad:' NA ',responsable:' NA ',fechaSalida:' NA ',tipoSalida:' NA ',estacion:' NA ',observaciones:' NA '},
    {no :60,noCatastral:' GP423H-04-0004',ubicacion :' Centro Sur',nombreContribuyente :' N / A',noIdentidad :' N / A',responsable :' N / A',fechaSalida :' N / A',tipoSalida :' N / A',estacion :' N / A',observaciones :' N / A'},
    {no :61,noCatastral :' GP423H-01-0011',ubicacion :' Centro Sur',nombreContribuyente :' n/a',noIdentidad :' n/a',responsable :' n/a',fechaSalida :' n/a',tipoSalida :' n/a',estacion :' n/a',observaciones :' n/a'},
    {no :62,noCatastral :' GP423H-04-0001',ubicacion :' Centro Sur',nombreContribuyente :' n/a',noIdentidad :' n/a',responsable :' n/a',fechaSalida :' n/a',tipoSalida :' n/a',estacion :' n/a',observaciones :' n/a'},
    {no :63,noCatastral :' GP423H-04-0002',ubicacion :' Centro Sur',nombreContribuyente :' n/a',noIdentidad :' n/a',responsable :' n/a',fechaSalida :' n/a',tipoSalida :' n/a',estacion :' n/a',observaciones :' n/a'},
    { no: 64, noCatastral: "GP423H-01-0010", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 65, noCatastral: "GP423H-01-0006", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 66, noCatastral: "GP423H-01-0002", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 67, noCatastral: "GP423C-36-0004", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 68, noCatastral: "GP423C-36-0003", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 69, noCatastral: "GP423C-36-0001", ubicacion: "Centro Sur", nombreContribuyente: "N/A", noIdentidad: "N/A", responsable: "N/A", fechaSalida: "N/A", tipoSalida: "N/A", estacion: "N/A", observaciones: "N/A" },
    { no: 70, noCatastral:"GP423C-36-0002" ,ubicacion:"Centro Sur" ,nombreContribuyente:" N / A ",noIdentidad:" N / A ",responsable:" N / A ",fechaSalida:" N / A ",tipoSalida:" N / A ",estacion:" N / A ",observaciones:" N / A"},
    { no :71,noCatastral :" GP423C-09-0005 ",ubicación :" Centro Sur ",nombreContribuyente :"NA ",noIdentidad :"NA ",responsable :"N/A ", fechasalida: "NA", tiposalida: "NA",estación : "NA " ,observaciones :"NA"},
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
    scrollToTopBtn.style.backgroundColor = "#a9a9a9";
    scrollToTopBtn.style.color = "#ffff00";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.borderRadius = "40px";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.display = "none"; // Inicialmente oculto

    scrollToTopBtn.addEventListener("click", function() {
        mainSection.scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("scroll", function() {
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
