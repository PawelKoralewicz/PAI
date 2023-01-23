const table = document.querySelector(".table");

const insertRow = () => {
  const dayOfTheWeek = moment().format("dddd");
  const day = moment().format("D");
  const month = moment().format("MMMM");
  const year = moment().format("YYYY");
  const hour = moment().format("LTS");
  const data = 
  [
    {
        cell0: dayOfTheWeek,
        cell1: day,
        cell2: month,
        cell3: year,
        cell4: hour
    },
    {
        cell0: dayOfTheWeek,
        cell1: day,
        cell2: month,
        cell3: year,
        cell4: hour
    }
  ];

for(let i=0; i<data.length; i++){
    const newRow = table.insertRow(-1);
    newRow.insertCell().textContent = data[i].cell0;
    newRow.insertCell().textContent = data[i].cell1;
    newRow.insertCell().textContent = data[i].cell2;
    newRow.insertCell().textContent = data[i].cell3;
    newRow.insertCell().textContent = data[i].cell4; 
  }
};

