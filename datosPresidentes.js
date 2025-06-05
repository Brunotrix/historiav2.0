const presidentesNacionales = {
  "Francisco I. Madero": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Francisco_I_Madero-retouched.jpg/1717px-Francisco_I_Madero-retouched.jpg",
    info: "1911–1913. Líder antirreeleccionista, inicio de la Revolución Mexicana."
  },
  "Victoriano Huerta": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/V_Huerta.jpg/250px-V_Huerta.jpg",
    info: "1913–1914. Golpe de Estado, régimen militar."
  },
  "Venustiano Carranza": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dY87W-8Bqi5MQsth_ydaVNR6rO4M2Ch2HA&s",
    info: "1914–1920. Constitución de 1917, líder constitucionalista."
  },
  "Álvaro Obregón": {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Portrait_of_%C3%81lvaro_Obreg%C3%B3n_4.jpg",
    info: "1920–1924. Reconstrucción nacional, reforma educativa."
  },
  "Plutarco Elías Calles": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Presidente_Calles.png/640px-Presidente_Calles.png",
    info: "1924–1928. Guerra Cristera, fundador del PNR."
  },
  "Lázaro Cárdenas": {
    img: "https://www.inehrm.gob.mx/sitios/proceres/images/paginas/cardenas.png",
    info: "1934–1940. Nacionalizó el petróleo, creó el IPN."
  },
  "Adolfo López Mateos": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Retrato_de_Adolfo_L%C3%B3pez_Mateos.png/640px-Retrato_de_Adolfo_L%C3%B3pez_Mateos.png",
    info: "1958–1964. Nacionalización de la electricidad, ISSSTE."
  },
  "Gustavo Díaz Ordaz": {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Retrato_de_Gustavo_D%C3%ADaz_Ordaz.png",
    info: "1964–1970. Movimiento estudiantil del 68."
  },
  "Carlos Salinas de Gortari": {
    img: "https://www.efemerides.info/imagen/escala/2019/1/a1040/carlos_salinas_gortari-mx.jpg",
    info: "1988–1994. Privatizaciones, firma del TLCAN."
  },
  "Ernesto Zedillo": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ernesto_Zedillo_Ponce_de_Leon_Official_Photo_1999.jpg/800px-Ernesto_Zedillo_Ponce_de_Leon_Official_Photo_1999.jpg",
    info: "1994–2000. Fobaproa, transición democrática."
  },
  "Vicente Fox": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVO2HrCoUJMaz0ISDPzCcfhVgjZl4kW_Y4g&s",
    info: "2000–2006. Primer presidente del PAN, alternancia política."
  },
  "Felipe Calderón": {
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Presidente_Felipe_Calderon_%28cropped%29.jpg",
    info: "2006–2012. Guerra contra el narcotráfico."
  },
  "Enrique Peña Nieto": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Enrique_Pena_Nieto.jpg/1200px-Enrique_Pena_Nieto.jpg",
    info: "2012–2018. Reformas estructurales, escándalos de corrupción."
  },
  "Andrés Manuel López Obrador": {
    img: "https://imagenes.elpais.com/resizer/v2/FPEJXPYNJRE37KZ5SJFAXE5HSE.jpeg?auth=de3cf4e14bf93ebf9b65e100e1da0f503c40abfe3acc1590a3454e24b8565b70&width=414",
    info: "2018–2024. Cuarta Transformación, programas sociales."
  }
};

const presidentesMunicipales = {
  "Luis Donaldo Colosio Riojas": {
    img: "https://sabervotar.mx/wp-content/uploads/2023/07/Luis-Donaldo-Colosio-Riojas2.jpg",
    info: "Monterrey. Digitalización, participación ciudadana."
  },
  "Renán Barrera Concha": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tGWI1C5ZULOCm85u_ETzb75kvkhXx9g9salnSFT2jCy8v5L_3rxU-jfZYSscVawNoAg&usqp=CAU",
    info: "Mérida. Seguridad, sustentabilidad, turismo."
  },
  "Eduardo Rivera Pérez": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Eduardo_Rivera_7-50.tif/lossy-page1-1200px-Eduardo_Rivera_7-50.tif.jpg",
    info: "Puebla. Transporte, reactivación económica."
  },
  "Clara Brugada": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaM-zA5b5sAcEmKWmrpKAmtqaaj2e1H1rFQ&s",
    info: "Iztapalapa. Utopías, espacios culturales y deportivos."
  },
  "Santiago Taboada": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIJ7DEjm2A5DXpeOlcnsmNu6gBzNq3yY11Q&s",
    info: "Benito Juárez. Seguridad, programa Blindar BJ."
  },

  "Adrián Rubalcava": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUa-JYvJEBnPdSkzHxIeDYFIrCLLwiS3bOQ&s",
    info: "Cuajimalpa. Desarrollo urbano y ordenado."
  },
  "Patricia Aceves": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwg5fG9I-uNjwWoWN0MV4qJcmoucH9wOkUg&s",
    info: "Tlalpan. Educación, salud y equidad."
  }
};