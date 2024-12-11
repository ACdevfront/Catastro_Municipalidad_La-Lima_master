document.addEventListener("DOMContentLoaded", function () {
    const tablaBitacora = document.getElementById("tabla-bitacora");
    const filtro1 = document.getElementById("filtro1");
    const filtro2 = document.getElementById("filtro2");
    const totalRegistros = document.getElementById("total-registros");

    const registros = [
        { no: 1, noCatastral: "GP431B-23-0041", ubicacion: "Guaymuras", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 2, noCatastral: "GP431B-07-0034", ubicacion: "Guaymuras", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 3, noCatastral: "GP431B-05-0025", ubicacion: "Guaymuras", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 4, noCatastral: "GP431B-13-0039", ubicacion: "Guaymuras", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 5, noCatastral: "GP431C-11-0028", ubicacion: "Guaymuras", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 6, noCatastral: "GP431C-02-0011", ubicacion: "Guaymuras", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 7, noCatastral: "GP431C-25-0025", ubicacion: "Guaymuras", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 8, noCatastral: "GP431G-18-0087", ubicacion: "Guaymuras", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 9, noCatastral: "GP442W-17-0021", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Fraccionamiento", estacion: "Ofic.Técnico Dibujante" },
        { no: 10, noCatastral: "GP442W-17-0022", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Fraccionamiento", estacion: "Ofic.Técnico Dibujante" },
        { no: 11, noCatastral: "GP442W-17-0023", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Fraccionamiento", estacion: "Ofic.Técnico Dibujante" },
        { no: 12, noCatastral: "GP423K-12-0099", ubicacion: "Martinez Rivera", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Elab. de Croquis y Constancia", estacion: "Ofic.Técnico Dibujante" },
        { no: 13, noCatastral: "GP431C-41-0010", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 14, noCatastral: "GP431C-29-0008", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 15, noCatastral: "GP431C-30-0004", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 16, noCatastral: "GP431D-52-0014", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 17, noCatastral: "GP442W-35-0007", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 18, noCatastral: "GP442W-10-0003", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 19, noCatastral: "GP442W-04-0009", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 20, noCatastral: "GP442W-09-0008", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 21, noCatastral: "GP442W-30-0026", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Fraccionamiento", estacion: "Ofic.Técnico Dibujante" },
        { no: 22, noCatastral: "GP431C-36-0024", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Fraccionamiento", estacion: "Ofic.Técnico Dibujante" },
        { no: 23, noCatastral: "GP431C-29-0006", ubicacion: "Res. Buenos Aires", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Fraccionamiento", estacion: "Ofic.Técnico Dibujante" },
        { no: 24, noCatastral: "GP423F-21-0008", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Fraccionamiento", estacion: "Ofic.Técnico Dibujante" },
        { no: 25, noCatastral: "GP423F-21-0009", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Damaris Loami Coto", tipoSalida: "Fraccionamiento", estacion: "Ofic.Técnico Dibujante" },
        { no: 26, noCatastral: "GP423F-29-0001", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 27, noCatastral: "GP423F-01-0004", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 28, noCatastral: "GP423F-15-0002", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 29, noCatastral: "GP423A-12-0041", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 30, noCatastral: "GP423A-12-0042", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 31, noCatastral: "GP423A-08-0003", ubicacion: "23 De Septiembre", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 32, noCatastral: "GP424W-27-0028", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 33, noCatastral: "GP424W-02-0003", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 34, noCatastral: "GP424W-24-0010", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 35, noCatastral: "GP424V-46-0008", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 36, noCatastral: "GP424V-06-0003", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 37, noCatastral: "GP424V-06-0008", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 38, noCatastral: "GP424V-07-0003", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 39, noCatastral: "GP424V-07-0006", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 40, noCatastral: "GP424V-07-0008", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 41, noCatastral: "GP424V-07-0010", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 42, noCatastral: "GP424V-10-0001", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 43, noCatastral: "GP424R-52-0006", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 44, noCatastral: "GP424R-04-0002", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 45, noCatastral: "GP424R-04-0006", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 46, noCatastral: "GP424R-19-0002", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 47, noCatastral: "GP424R-21-0001", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 48, noCatastral: "GP424R-21-0002", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 49, noCatastral: "GP424R-35-0006", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        { no: 50, noCatastral: "GP424R-22-0001", ubicacion: "Sitraterco", propietario: "N/A", identidad: "0000", responsable: "Oscar Baday Badai", tipoSalida: "Mal Archivada/Extraviada", estacion: "N/A" },
        {
            no: 51,
            noCatastral: "GP424Q-52-0002",
            ubicacion: "Sitraterco",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 52,
            noCatastral: "GP424Q-38-0009",
            ubicacion: "Sitraterco",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 53,
            noCatastral: "GP424Q-20-0001",
            ubicacion: "Sitraterco",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 54,
            noCatastral: "GP424Q-25-0002",
            ubicacion: "Sitraterco",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 55,
            noCatastral: "GP424Q-25-0004",
            ubicacion: "Sitraterco",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 56,
            noCatastral: "GP424Q-31-0011",
            ubicacion: "Sitraterco",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Damaris Loami Coto",
            tipoSalida: "Fraccionamiento",
            estacion: "Ofic.Técnico Dibujante"
        },
        {
            no: 57,
            noCatastral: "GP424Q-32-0011",
            ubicacion: "Sitraterco",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Damaris Loami Coto",
            tipoSalida: "Fraccionamiento",
            estacion: "Ofic.Técnico Dibujante"
        },
        {
            no: 58,
            noCatastral: "GP423C-09-0028",
            ubicacion: "Res. Riberalta",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 59,
            noCatastral: "GP423L-26-0008",
            ubicacion: "Los Pinos",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 60,
            noCatastral: "GP423L-29-0012",
            ubicacion: "Los Pinos",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Damaris Loami Coto",
            tipoSalida: "Fraccionamiento",
            estacion: "Ofic.Técnico Dibujante"
        },
        {
            no: 61,
            noCatastral: "GP442W-75-0005",
            ubicacion: "Res. Villa San Fernando",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Alejandro Castillo",
            tipoSalida: "Reavaluo",
            estacion: "Gabinete de Técnico Valuador"
        },
        {
            no: 62,
            noCatastral: "GP442W-75-0010",
            ubicacion: "Res. Villa San Fernando",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Alejandro Castillo",
            tipoSalida: "Reavaluo",
            estacion: "Gabinete de Técnico Valuador"
        },
        {
            no: 63,
            noCatastral: "GP442X-79-0007",
            ubicacion: "Res. Villa Nova",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Alejandro Castillo",
            tipoSalida: "Reavaluo",
            estacion: "Gabinete de Técnico Valuador"
        },
        {
            no: 64,
            noCatastral: "GP423U-02-0044",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 65,
            noCatastral: "GP423U-07-0014",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 66,
            noCatastral: "GP423U-08-0008",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 67,
            noCatastral: "GP423U-08-0011",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 68,
            noCatastral: "GP423U-08-0012",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 69,
            noCatastral: "GP423U-08-0016",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 70,
            noCatastral: "GP423U-09-0001",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 71,
            noCatastral: "GP423U-09-0004",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 72,
            noCatastral: "GP423U-09-0005",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 73,
            noCatastral: "GP423U-09-0013",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 74,
            noCatastral: "GP423U-09-0014",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 75,
            noCatastral: "GP423U-10-0002",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 76,
            noCatastral: "GP423U-10-0004",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 77,
            noCatastral: "GP423U-10-0007",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 78,
            noCatastral: "GP423U-11-0001",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 79,
            noCatastral: "GP423U-13-0002",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 80,
            noCatastral: "GP423U-25-0007",
            ubicacion: "Filadelfia",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Oscar Baday Badai",
            tipoSalida: "Mal Archivada/Extraviada",
            estacion: "N/A"
        },
        {
            no: 81,
            noCatastral: "GP423C-36-0002",
            ubicacion: "Centro Sur",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Alejandro Castillo",
            tipoSalida: "Incremento de B. I.",
            estacion: "Ventanilla"
        },
        {
            no: 82,
            noCatastral: "GP423C-09-0005",
            ubicacion: "Centro Sur",
            propietario: "N/A",
            identidad: "0000",
            responsable: "Alejandro Castillo",
            tipoSalida: "Incremento de B. I.",
            estacion: "Gabinete de Técnico Valuador"
        },
        {
            no: 83,
            noCatastral: "GP431C-50-0004",
            ubicacion: "Res. Buenos Aires",
            propietario: "Elizabeth Navas",
            identidad: "0000",
            responsable: "Karina Beatriz Dubon",
            tipoSalida: "Cambio de Propietario",
            estacion: "Oficina de Secretaria"
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
