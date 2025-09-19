document.addEventListener("DOMContentLoaded", function () {
  const tablaBitacora = document.getElementById("tabla-bitacora");
  const filtro1 = document.getElementById("filtro1");
  const filtro2 = document.getElementById("filtro2");
  const totalRegistros = document.getElementById("total-registros");

  const registros = [
    {
    codigo: "AGO23-01",
    fecha: "21/08/2023",
    noCatastral: "GP423A-09-0099",
    ubicacion: "Campo Colombia",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Inspección de Campo",
    responsable: "Alejandro Castillo",
    resolucion: "N/A",
    observaciones: "Apoyo: la (...)"
  },
  {
    codigo: "AGO23-02",
    fecha: "22/08/2023",
    noCatastral: "GP421Y-15-0004",
    ubicacion: "Suyapa",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Remedición de Terreno",
    responsable: "Alejandro Castillo",
    resolucion: "Se verificó que el solar de atrás se le metió",
    observaciones: "Apoyó Amado Brandon y (...)"
  },
  {
    codigo: "SEP23-01",
    fecha: "09/04/2023",
    noCatastral: "GP424M-43-0009",
    ubicacion: "Alvarez Martinez",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Inspección de Campo",
    responsable: "Alejandro Castillo",
    resolucion: "N/A",
    observaciones: "Apoyo: la (...)"
  },
  {
    codigo: "SEP23-02",
    fecha: "21/09/2023",
    noCatastral: "GP424V-35-0009",
    ubicacion: "Centro Norte",
    contribuyente: "JUAN RAMÓN RODRÍGUEZ PIERROBON Y COPROPIETARIOS",
    identidad: "0501 1970 04840",
    tipoTrabajo: "Elaboración de Croquis",
    responsable: "Alejandro Castillo",
    resolucion: "N/A",
    observaciones: "Apoyo: la (...)"
  },
  {
    codigo: "SEP23-03",
    fecha: "29/09/2023",
    noCatastral: "GP424V-19-0007",
    ubicacion: "Centro Norte",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Elaboración de Croquis",
    responsable: "Alejandro Castillo",
    resolucion: "N/A",
    observaciones: "Apoyó Amadito y (...)"
  },
  {
    codigo: "ABR24-01",
    fecha: "04/11/2024",
    noCatastral: "GP422G-30-0015",
    ubicacion: "Res. Oro Verde",
    contribuyente: "Yajayra Osorio",
    identidad: "N/A",
    tipoTrabajo: "Inspección de Campo",
    responsable: "Alejandro Castillo",
    resolucion: "En el frente tiene menos 20 cm, atrás el ancho del muro está a favor del vecino de atrás",
    observaciones: "Apoyó: (...), Brandon, (...) y Cristian"
  },
  {
    codigo: "JUL24-01",
    fecha: "19/07/2024",
    noCatastral: "GP423G-16-0015",
    ubicacion: "Col. Municipal",
    contribuyente: "Maria Menjivar",
    identidad: "N/A",
    tipoTrabajo: "Remedición de Terreno",
    responsable: "Alejandro Castillo",
    resolucion: "Se encontró que no se reportó al IP el pasaje que doña Maria le vendió a don Luis (vecino de atrás) cuando Regularización Predial les inscribió los resp. Lotes",
    observaciones: "Apoyó Cristian"
  },
  {
    codigo: "JUL24-02",
    fecha: "19/07/2024",
    noCatastral: "GP424Q-45-0009",
    ubicacion: "El Maestro",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Elaboración de Croquis",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Brandon y Orlando"
  },
  {
    codigo: "JUL24-03",
    fecha: "26/07/2024",
    noCatastral: "GP424W-03-0005",
    ubicacion: "4 De Julio",
    contribuyente: "Banco del País S.A.",
    identidad: "N/A",
    tipoTrabajo: "Elaboración de Croquis",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó Cristian. Se levantaron las mejoras, ya que no se encontró la ficha"
  },
  {
    codigo: "JUL24-04",
    fecha: "26/07/2024",
    noCatastral: "GP412Q-03-0020",
    ubicacion: "Nuevo San Juan",
    contribuyente: "Jose Livaldo Sanchez",
    identidad: "N/A",
    tipoTrabajo: "Elaboración de Croquis",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó Cristian. Se postergó el trabajo por problemas de energía"
  },
  {
    codigo: "JUL24-05",
    fecha: "30/07/2024",
    noCatastral: "GP423H-02-0017",
    ubicacion: "Barrio Alpha",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Asistencia Técnica al Juez",
    responsable: "Alejandro Castillo",
    resolucion: "El pasaje de servidumbre (adjudicado a esta clave por resolución del Juzgado de Letras de lo Civil) se le reducirá al área 531.34 M² de la Esc. Pública de la clave GP423H-02-0016",
    observaciones: "Apoyó Modesto. 1.5 horas"
  },
  {
    codigo: "AGO24-01",
    fecha: "08/01/2024",
    noCatastral: "GP424Y-12-0007",
    ubicacion: "La Paz",
    contribuyente: "Dilcia Inestroza García",
    identidad: "N/A",
    tipoTrabajo: "Fraccionamiento",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó Orlando"
  },
  {
    codigo: "AGO24-02",
    fecha: "08/09/2024",
    noCatastral: "0512-0507-00053",
    ubicacion: "Col. Cruz De Valencia",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Remedición de Terreno",
    responsable: "N/A",
    resolucion: "No llegaron los involucrados en la medición del terreno",
    observaciones: "Apoyaron: Brandon, memín y Alejandro"
  },
  {
    codigo: "AGO24-03",
    fecha: "16/08/2024",
    noCatastral: "GP423G-16-0015",
    ubicacion: "Col. Municipal",
    contribuyente: "Maria Menjivar",
    identidad: "N/A",
    tipoTrabajo: "Fraccionamiento",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó Cristian"
  },
  {
    codigo: "AGO24-04",
    fecha: "21/08/2024",
    noCatastral: "0512-0507-00053",
    ubicacion: "Col. Cruz De Valencia",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Remedición de Terreno",
    responsable: "N/A",
    resolucion: "El área de 7 X 22 que aduce don Fabian no se encuentra en lote en cuestión",
    observaciones: "Apoyaron: Brandon, Orlando y Alejandro"
  },
  {
    codigo: "AGO24-05",
    fecha: "23/08/2024",
    noCatastral: "GP423C-09-0052",
    ubicacion: "Centro Sur",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Elaboración de Croquis",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó Cristian"
  },
  {
    codigo: "AGO24-06",
    fecha: "23/08/2024",
    noCatastral: "GP423H-02-0017",
    ubicacion: "Barrio Alpha",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Elaboración de Croquis",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó Isaul"
  },
  {
    codigo: "SEP24-01",
    fecha: "29/08/2024",
    noCatastral: "GP423E-06-0010",
    ubicacion: "Luis Thiebaud",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Fraccionamiento",
    responsable: "Alejandro Castillo",
    resolucion: "Contribuyente solicitó constancia de avalúo para liberar hipoteca",
    observaciones: "Apoyó Cristian. Las medidas de la Escritura difiere con las medidas físicas (las mismas del PATH)"
  },
  {
    codigo: "SEP24-02",
    fecha: "29/08/2024",
    noCatastral: "GP423E-06-",
    ubicacion: "Luis Thiebaud",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Fraccionamiento",
    responsable: "Alejandro Castillo",
    resolucion: "Se le asignó clave catastral ya que se trajo Esc. Pública",
    observaciones: "Apoyó Cristian. Las medidas de la Escritura difiere con las medidas físicas (las mismas del PATH)"
  },
  {
    codigo: "SEP24-03",
    fecha: "09/06/2024",
    noCatastral: "GP422L-06-0009",
    ubicacion: "Res. Oro Verde",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Remedición de Terreno",
    responsable: "Alejandro Castillo",
    resolucion: "Está salido 0.85 mts para uno de los lados del rumbo sur",
    observaciones: "Apoyó Cristian"
  },
  {
    codigo: "SEP24-04",
    fecha: "17/09/2024",
    noCatastral: "0512-0503-00113",
    ubicacion: "Sector Indiana",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Asistencia Técnica al Juez",
    responsable: "Christopher Cáceres",
    resolucion: "El sr. (...) del margen de la orilla de la calle pral. cierra constantemente el paso a la calle de acceso de los otros propietarios adyacentes y daña la calle de acceso con su maquinaria en tiempos de lluvias",
    observaciones: "Apoyaron: Orlando y Alejandro"
  },
  {
    codigo: "SEP24-05",
    fecha: "20/09/2024",
    noCatastral: "GP431C-22-0008",
    ubicacion: "San Cristobal",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Fraccionamiento",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó Cristian"
  },
  {
    codigo: "SEP24-06",
    fecha: "20/09/2024",
    noCatastral: "GP431D-49-0009",
    ubicacion: "Independencia",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Remedición de Terreno",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó Brandon"
  },
  {
    codigo: "OCT24-01",
    fecha: "18/10/2024",
    noCatastral: "GP423D-16-0004",
    ubicacion: "Campo Pineda",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Inspección de Campo",
    responsable: "Alejandro Castillo",
    resolucion: "Se verificó que ya no funciona Escuela Timonel",
    observaciones: "N/A"
  },
  {
    codigo: "OCT24-02",
    fecha: "21/10/2024",
    noCatastral: "GP421Y-28-0018",
    ubicacion: "Suyapa",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Inspección de Campo",
    responsable: "Alejandro Castillo",
    resolucion: "Se me envió a verificar si contribuyente estaba de acuerdo con un fraccionamiento que pretendía la familia",
    observaciones: "N/A"
  },
  {
    codigo: "OCT24-03",
    fecha: "23/10/2024",
    noCatastral: "GP421Y-28-0018",
    ubicacion: "Suyapa",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Fraccionamiento",
    responsable: "Alejandro Castillo",
    resolucion: "Se fraccionaron 2 áreas: un Área de Terreno de 600 M2 a favor de Hector Almendarez, y 300 M2 a favor de Juan Pastor Matute.",
    observaciones: "Apoyaron: Orlando y Cristian"
  },
  {
    codigo: "OCT24-04",
    fecha: "25/10/2024",
    noCatastral: "GP442R-56-0008",
    ubicacion: "Col. San Francisco",
    contribuyente: "N/A",
    identidad: "N/A",
    tipoTrabajo: "Remedición de Terreno",
    responsable: "Modesto Rodríguez",
    resolucion: "Finalizado",
    observaciones: "Apoyaron: Alejandro y Cristian"
  },
  {
    codigo: "NOV24-01",
    fecha: "22/11/2024",
    noCatastral: "GP431C-18-0128",
    ubicacion: "San Cristobal",
    contribuyente: "AMILCAR ZABALA",
    identidad: "N/A",
    tipoTrabajo: "Inspección de Campo",
    responsable: "Alejandro Castillo",
    resolucion: "Se valuó Edif. De madera con detalles adicionales, y se remidió el terreno, para actualizar datos, con el fin de extender Constancia solicitada por contribuyente.",
    observaciones: "Apoyó: Orlando. Se confirmó que las edificaciones de la clave GP431C-18-0127 estaban en esta clave."
  },
  {
    codigo: "NOV24-02",
    fecha: "26/11/2024",
    noCatastral: "GP431C-18-0127",
    ubicacion: "San Cristobal",
    contribuyente: "AMILCAR ZABALA",
    identidad: "N/A",
    tipoTrabajo: "Reavaluo",
    responsable: "Alejandro Castillo",
    resolucion: "Se trasladaron las edificaciones y detalles adic. de la clave GP431C-18-0128 para esta clave; se corrigió el propietario del predio; se cambió el tipo de predio (a Esquina)",
    observaciones: "Apoyó: Alejandro Castillo"
  },
  {
    codigo: "NOV24-03",
    fecha: "29/11/2024",
    noCatastral: "GP423K-12-0099",
    ubicacion: "Martinez Rivera",
    contribuyente: "LUIS SAGASTUME",
    identidad: "N/A",
    tipoTrabajo: "Remedición de Terreno",
    responsable: "Alejandro Castillo",
    resolucion: "Se verificó que el lote se delineó en espacio de calle desde el año 2005 a favor de MAYRA VELAZQUEZ de parte de MARINA ROSADO; en el año 2009 se le traspasó a YOALNO CHICAS; en el año 2024 se traspasó a nombre de LUIS SAGASTUME",
    observaciones: "Apoyó: Isaul Lainez"
  },
  {
    codigo: "DIC24-01",
    fecha: "06/12/2024",
    noCatastral: "GP423K-12-0099",
    ubicacion: "Martinez Rivera",
    contribuyente: "LUIS SAGASTUME",
    identidad: "N/A",
    tipoTrabajo: "Elaboración de Croquis",
    responsable: "Alejandro Castillo",
    resolucion: "Finalizado",
    observaciones: "Apoyó: Orlando."
  },
  {
    codigo: "DIC24-02",
    fecha: "18/12/2024",
    noCatastral: "GP442R-18-0001",
    ubicacion: "Gracias A Dios",
    contribuyente: "CARLOS ISAAC KAWELL GUERRA",
    identidad: "N/A",
    tipoTrabajo: "Inspección de Campo",
    responsable: "Alejandro Castillo",
    resolucion: "Posible comprador pagó los impuestos de otra clave, por eso solicitó la inspección",
    observaciones: "Apoyó: Orlando."
  },
  {
    codigo: "ENE25-01",
    fecha: "8/1/2025",
    clave: "GP423G-16-0096",
    colonia: "Col. Municipal",
    propietario: "LUIS REYES / DELFINA YOBETH MEZA",
    referencia: "N/A",
    tramite: "Fraccionamiento",
    tecnico: "Alejandro Castillo",
    observacion: "Se le asignó Clave nueva.",
    apoyo: "Mat: 2251896; Asiento: 1"
  },
  {
    codigo: "ENE25-02",
    fecha: "8/1/2025",
    clave: "GP423G-16-0015",
    colonia: "Col. Municipal",
    propietario: "Maria Menjivar",
    referencia: "N/A",
    tramite: "Rest. del Terreno/Remanente",
    tecnico: "Alejandro Castillo",
    observacion: "Se actualizó el Área de Terreno por venta de Fracc. A favor de Luis Reyes/Delfina Meza, quedando el Resto Registral de este terreno en 416.41 M²",
    apoyo: "N/A"
  },
  {
    codigo: "ENE25-04",
    fecha: "14/1/2025",
    clave: "GP422L-13-0007",
    colonia: "Res. Oro Verde",
    propietario: "HAYDEE SUAZO",
    referencia: "N/A",
    tramite: "Remedición de Terreno",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó Orlando"
  },
  {
    codigo: "ENE25-05",
    fecha: "17/1/2025",
    clave: "GP423B-16-0026",
    colonia: "Barrio Las Flores",
    propietario: "RAFAEL OLIVA",
    referencia: "N/A",
    tramite: "Remedición de Terreno",
    tecnico: "Alejandro Castillo",
    observacion: "El contribuyente solicitó remedición por sospecha que su vecina construyó un muro dentro de la propiedad de él. El personal de Catastro corroboró que no es así.",
    apoyo: "Apoyó Orlando y Cristian"
  },
  {
    codigo: "ENE25-06",
    fecha: "17/1/2025",
    clave: "0501-6318-00014",
    colonia: "Brisas del Polvorin",
    propietario: "FRANCISCO CHINCHILLA",
    referencia: "N/A",
    tramite: "Inspección de Campo",
    tecnico: "Alejandro Castillo",
    observacion: "Se canceló el proceso porque se verificó que el predio está fuera del límite del municipio. SPS no lo tiene catastrado.",
    apoyo: "Apoyó Modesto y Cristian"
  },
  {
    codigo: "ENE25-07",
    fecha: "20/1/2025",
    clave: "GP422A-20-0011",
    colonia: "Res. Villa Esther",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Valuación Total",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó Juan y Maria"
  },
  {
    codigo: "ENE25-08",
    fecha: "21/1/2025",
    clave: "GP423H-02-0016",
    colonia: "Barrio Alpha",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Elaboración de Croquis",
    tecnico: "Alejandro Castillo",
    observacion: "No se efectuó el trabajo debido a inconsistencias en los planos originales y la disposición física de las edificaciones en los terrenos.",
    apoyo: "Apoyó Orlando y Maria"
  },
  {
    codigo: "ENE25-09",
    fecha: "23/1/2025",
    clave: "GP423G-16-0015",
    colonia: "Col. Municipal",
    propietario: "Maria Menjivar",
    referencia: "N/A",
    tramite: "Remedición de Terreno",
    tecnico: "Alejandro Castillo",
    observacion: "Contribuyente solicitó remedición del terreno para corroborar los puntos físicos del terreno.",
    apoyo: "Apoyó Orlando"
  },
  {
    codigo: "ENE25-11",
    fecha: "31/1/2025",
    clave: "GP442R-60-0007",
    colonia: "Col. San Francisco",
    propietario: "VICENTE LARA",
    referencia: "N/A",
    tramite: "Inspección de Campo",
    tecnico: "Alejandro Castillo",
    observacion: "Contribuyente solicitó inspección de campo porque no existe casa desde antes del 2020.",
    apoyo: "Apoyó Isaul"
  },
  {
    codigo: "FEB25-01",
    fecha: "7/2/2025",
    clave: "GP422E-54-0015",
    colonia: "Las Mañanitas",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Remedición de Terreno",
    tecnico: "Brandon Amaya",
    observacion: "Finalizado",
    apoyo: "Apoyó (...), Juan y Alejandro"
  },
  {
    codigo: "FEB25-02",
    fecha: "13/2/2025",
    clave: "GP424V-32-0007",
    colonia: "Centro Norte",
    propietario: "JUAN RODRIGUEZ",
    referencia: "N/A",
    tramite: "Elaboración de Croquis",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó (...), Juan e Isaul"
  },
  {
    codigo: "FEB25-03",
    fecha: "14/2/2025",
    clave: "GP431B-59-0018",
    colonia: "Nueva Jerusalen",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Inspección de Campo",
    tecnico: "Alejandro Castillo",
    observacion: "Contribuyente solicitó inspección de campo porque la casa está deshabitada desde el año 2004.",
    apoyo: "Apoyó María"
  },
  {
    codigo: "FEB25-04",
    fecha: "21/2/2025",
    clave: "GP431D-74-0001",
    colonia: "Villas del Campo",
    propietario: "PATRONATO",
    referencia: "N/A",
    tramite: "Remedición de Terreno",
    tecnico: "Alejandro Castillo",
    observacion: "La forma del polígono del Lote en el plano original difiere de la forma que tiene en físico (P.A.T.H.).",
    apoyo: "Apoyó Gonzalo y Elvis"
  },
  {
    codigo: "FEB25-05",
    fecha: "26/2/2025",
    clave: "GP442V-49-0008",
    colonia: "Nueva Jerusalen",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Rest. del Terreno/Remanente",
    tecnico: "Alejandro Castillo",
    observacion: "Se actualizó el Área de Terreno por venta de Fracc., quedando el Resto Registral de este terreno en 137.87 M²",
    apoyo: "N/A"
  },
  {
    codigo: "FEB25-06",
    fecha: "26/2/2025",
    clave: "GP442V-49-0021",
    colonia: "Nueva Jerusalen",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Fraccionamiento",
    tecnico: "Alejandro Castillo",
    observacion: "Se le asignó Clave nueva.",
    apoyo: "N/A"
  },
  {
    codigo: "MAR25-01",
    fecha: "21/3/2025",
    clave: "GP423D-03-0008",
    colonia: "Zona Americama",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Fraccionamiento",
    tecnico: "Alejandro Castillo",
    observacion: "Se corroboraron medidas de Fraccionamiento de acuerdo al plano levantado por Topógrafo privado y contribuyente solamente solicitó Constancia de Medidas y Colindancias, que le solicitó el abogado.",
    apoyo: "Apoyó Brandon Amaya"
  },
  {
    codigo: "MAR25-02",
    fecha: "28/3/2025",
    clave: "GP424V-28-0021",
    colonia: "Sitraterco",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Valuación Total",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó Gonzalo"
  },
  {
    codigo: "MAR25-03",
    fecha: "4/4/2025",
    clave: "GP424R-01-0007",
    colonia: "Sitraterco",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Inspección de Campo",
    tecnico: "Alejandro Castillo",
    observacion: "No se pudo efectuar la inspección porque una de las partes alegó que no le avisaron para estar presente en la inspección.",
    apoyo: "Apoyó Orlando"
  },
  {
    codigo: "MAY25-01",
    fecha: "14/5/2025",
    clave: "GP423A-07-0009",
    colonia: "23 De Septiembre",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Elaboración de Croquis",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado en 19/05/2025",
    apoyo: "Apoyó Gonzalo"
  },
  {
    codigo: "MAY25-02",
    fecha: "15/5/2025",
    clave: "GP424R-01-0007",
    colonia: "Sitraterco",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Inspección de Campo",
    tecnico: "Alejandro Castillo",
    observacion: "Se dictaminó la existencia de invasiones aéreas recíprocas y el incumplimiento de los retiros reglamentarios en las propiedades en mención.",
    apoyo: "Apoyó Orlando"
  },
  {
    codigo: "AGO25-01",
    fecha: "15/5/2025",
    clave: "GP423G-16-0100",
    colonia: "Municipal",
    propietario: "SAYDA MIRANDA",
    referencia: "N/A",
    tramite: "Valuación Total",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó María"
  },
  {
    codigo: "AGO25-02",
    fecha: "15/5/2025",
    clave: "GP423D-26-0001",
    colonia: "Nuevo Renacer",
    propietario: "JULIO A. BUESO",
    referencia: "N/A",
    tramite: "Valuación Parcial",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó Orlando"
  },
  {
    codigo: "AGO25-03",
    fecha: "18/8/2025",
    clave: "GP431D-74-0001",
    colonia: "Villas del Campo",
    propietario: "PATRONATO",
    referencia: "N/A",
    tramite: "Elaboración de Croquis",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "N/A"
  },
  {
    codigo: "AGO25-04",
    fecha: "20/8/2025",
    clave: "GP423E-06-0011",
    colonia: "Luis Thiebaud",
    propietario: "N/A",
    referencia: "N/A",
    tramite: "Valuación Parcial",
    tecnico: "Alejandro Castillo",
    observacion: "Se programó Valuación Parcial (ANEXO), pero se constató que el valuador y el calculista cometieron lapsus con la información, ya que el ANEXO ya estaba valuado.",
    apoyo: "Apoyó Elvis"
  },
  {
    codigo: "AGO25-05",
    fecha: "28/8/2025",
    clave: "GP423A-25-0013",
    colonia: "Los Angeles",
    propietario: "MARIA ROBLES",
    referencia: "N/A",
    tramite: "Elaboración de Croquis",
    tecnico: "Alejandro Castillo",
    observacion: "Se remedió el predio con la intención de obtener el croquis para escriturar, pero se encontró que las medidas difieren totalmente al plano de Catastro Municipal. El único punto de referencia correcto es el vértice de enfrente contiguo al predio #93.",
    apoyo: "Apoyó Elvis"
  },
  {
    codigo: "AGO25-06",
    fecha: "29/8/2025",
    clave: "GP424Q-17-0004",
    colonia: "Alvarez Martinez",
    propietario: "MARIA ARREVILLAGA",
    referencia: "N/A",
    tramite: "Remedición de Terreno",
    tecnico: "Alejandro Castillo",
    observacion: "Se remedió el predio en base a las medidas del PATH (Área calculada 346.96 M²), ya que tiene Resto Registral (333.25 M²) por venta de FRACCIÓN.",
    apoyo: "Apoyó Orlando"
  },
  {
    codigo: "SEP25-01",
    fecha: "2/9/2025",
    clave: "GP423B-35-0013",
    colonia: "Centro Norte",
    propietario: "MAGIN MUÑOZ",
    referencia: "N/A",
    tramite: "Reavalúo",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó Elvis y María"
  },
  {
    codigo: "SEP25-02",
    fecha: "5/9/2025",
    clave: "GP412Q-09-0005",
    colonia: "Nuevo San Juan",
    propietario: "JAGLYN FLORES",
    referencia: "N/A",
    tramite: "Reavalúo",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó Orlando"
  },
  {
    codigo: "SEP25-03",
    fecha: "5/9/2025",
    clave: "GP423G-16-0136",
    colonia: "Municipal",
    propietario: "FRANCISCA GUERRA",
    referencia: "N/A",
    tramite: "Remedición de Terreno",
    tecnico: "Alejandro Castillo",
    observacion: "Finalizado",
    apoyo: "Apoyó Orlando"
  },
  {
    codigo: "SEP25-04",
    fecha: "12/9/2025",
    clave: "GP423G-16-0136",
    colonia: "Municipal",
    propietario: "FRANCISCA GUERRA",
    referencia: "N/A",
    tramite: "Elaboración de Croquis",
    tecnico: "Alejandro Castillo",
    observacion: "ENTREGADO 16/09/2025 - 14:30. Medidas físicas tomadas en campo para rectificación de medidas de Documento Privado.",
    apoyo: "N/A"
  },
  {
    codigo: "SEP25-05",
    fecha: "12/9/2025",
    clave: "GP423G-37-0011",
    colonia: "Reformada",
    propietario: "MARIA MONTALVO",
    referencia: "N/A",
    tramite: "Inspección de Campo",
    tecnico: "Alejandro Castillo",
    observacion: "De manera primigenia este predio se tenía que fraccionar de la clave GP423G-37-0006; el PATH se lo adjudicó a la sra. Lizeth Montoya (SIN DOMINIO PLENO) y esta misma se lo vendió a la sra. María Montalvo, se lo vendió como la clave GP423G-37-0007, pero se tenía que fraccionar con nueva clave.",
    apoyo: "Apoyó Orlando"
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


