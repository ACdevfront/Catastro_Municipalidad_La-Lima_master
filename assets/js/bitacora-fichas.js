document.addEventListener("DOMContentLoaded", function () {
    const tablaBitacora = document.getElementById("tabla-bitacora");
    const filtro1 = document.getElementById("filtro1");
    const filtro2 = document.getElementById("filtro2");
    const totalRegistros = document.getElementById("total-registros");

    const registros = [
        { no: 1, noCatastral: "GP412Q-09-0019", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 2, noCatastral: "GP412Q-09-0020", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 3, noCatastral: "GP412Q-17-0019", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 4, noCatastral: "GP412Q-18-0063", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 5, noCatastral: "GP412V-03-0016", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 6, noCatastral: "GP412V-15-0020", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 7, noCatastral: "GP412V-21-0001", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 8, noCatastral: "GP412V-25-0042", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 9, noCatastral: "GP412V-26-0018", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 10, noCatastral: "GP412V-28-0001", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 11, noCatastral: "GP412V-29-0018", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 12, noCatastral: "GP412V-41-0001", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 13, noCatastral: "GP412V-43-0007", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 14, noCatastral: "GP421B-52-0001", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 15, noCatastral: "GP421B-52-0006", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 16, noCatastral: "GP421B-52-0012", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 17, noCatastral: "GP421B-52-0018", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 18, noCatastral: "GP421B-52-0019", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 19, noCatastral: "GP421B-52-0021", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 20, noCatastral: "GP421B-57-0034", ubicacion: "Nuevo San Juan", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 21, noCatastral: "GP421U-12-0001", ubicacion: "Campo Dos", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 22, noCatastral: "GP422A-16-0001", ubicacion: "Campo Dos", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 23, noCatastral: "GP422B-16-0028", ubicacion: "Campo Dos", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 24, noCatastral: "GP422B-16-0049", ubicacion: "Campo Dos", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 25, noCatastral: "GP422B-16-0050", ubicacion: "Campo Dos", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 26, noCatastral: "GP422B-16-0051", ubicacion: "Campo Dos", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 27, noCatastral: "GP422B-26-0001", ubicacion: "Campo Dos", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 28, noCatastral: "GP423A-08-0003", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 29, noCatastral: "GP423A-12-0041", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 30, noCatastral: "GP423A-12-0042", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 31, noCatastral: "GP423C-09-0028", ubicacion: "Res. Riberalta", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 32, noCatastral: "GP423D-07-0002", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 33, noCatastral: "GP423D-07-0005", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 34, noCatastral: "GP423D-07-0006", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 35, noCatastral: "GP423D-07-0010", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 36, noCatastral: "GP423D-10-0003", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 37, noCatastral: "GP423D-18-0006", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 38, noCatastral: "GP423D-18-0012", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 39, noCatastral: "GP423D-20-0010", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 40, noCatastral: "GP423E-70-0001", ubicacion: "Chiquita", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 41, noCatastral: "GP423F-01-0004", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 42, noCatastral: "GP423F-15-0002", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 43, noCatastral: "GP423F-29-0001", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 44, noCatastral: "GP423L-26-0008", ubicacion: "Los Pinos", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 45, noCatastral: "GP423U-02-0044", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 46, noCatastral: "GP423U-06-0002", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 47, noCatastral: "GP423U-07-0014", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 48, noCatastral: "GP423U-08-0008", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 49, noCatastral: "GP423U-08-0011", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 50, noCatastral: "GP423U-08-0012", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 51, noCatastral: "GP423U-08-0016", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 52, noCatastral: "GP423U-09-0001", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 53, noCatastral: "GP423U-09-0004", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 54, noCatastral: "GP423U-09-0005", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 55, noCatastral: "GP423U-09-0013", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 56, noCatastral: "GP423U-09-0014", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 57, noCatastral: "GP423U-10-0002", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 58, noCatastral: "GP423U-10-0004", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 59, noCatastral: "GP423U-10-0007", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 60, noCatastral: "GP423U-11-0001", ubicacion: "Filadelfia", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { No: 61, No_Catastral: "GP423U-13-0002", Ubicacion: "Filadelfia", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 62, No_Catastral: "GP423U-25-0007", Ubicacion: "Filadelfia", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 63, No_Catastral: "GP424Q-20-0001", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 64, No_Catastral: "GP424Q-25-0002", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 65, No_Catastral: "GP424Q-25-0004", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 66, No_Catastral: "GP424Q-38-0009", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 67, No_Catastral: "GP424Q-52-0002", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 68, No_Catastral: "GP424Q-53-0001", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 69, No_Catastral: "GP424Q-54-0001", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 70, No_Catastral: "GP424R-04-0002", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 71, No_Catastral: "GP424R-04-0006", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 72, No_Catastral: "GP424R-19-0002", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 73, No_Catastral: "GP424R-21-0001", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 74, No_Catastral: "GP424R-21-0002", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 75, No_Catastral: "GP424R-22-0001", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 76, No_Catastral: "GP424R-35-0006", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 77, No_Catastral: "GP424R-52-0006", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 78, No_Catastral: "GP424V-01-0012", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 79, No_Catastral: "GP424V-01-0014", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 80, No_Catastral: "GP424V-06-0003", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 81, No_Catastral: "GP424V-06-0008", Ubicacion: "Sitraterco", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 100, No_Catastral: "GP431C-30-0004", Ubicacion: "Res. Buenos Aires", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 101, No_Catastral: "GP431C-41-0010", Ubicacion: "Res. Buenos Aires", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 102, No_Catastral: "GP431D-52-0014", Ubicacion: "Res. Buenos Aires", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 103, No_Catastral: "GP431G-18-0087", Ubicacion: "Guaymuras", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 104, No_Catastral: "GP442W-04-0009", Ubicacion: "Res. Buenos Aires", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 105, No_Catastral: "GP442W-09-0008", Ubicacion: "Res. Buenos Aires", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" },
        { No: 106, No_Catastral: "GP442W-35-0007", Ubicacion: "Res. Buenos Aires", Propietario: "N/A", Identidad: "0000", Responsable: "Oscar Baday Badai", Tipo_Salida: "Mal Archivada/Extraviada", Estacion: "N/A" }

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
