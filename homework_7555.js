// Завдання №1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

myBlend(arr);
console.log(arr); 

// Завдання № 2

const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
      {
          name: 'Клієнт 1',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
              {
                  name: 'Клієнт 1.1',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
              },
              {
                  name: 'Клієнт 1.2',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
                  partners: [
                      {
                          name: 'Клієнт 1.2.3',
                          type: 'subSubCompany',
                          uses: 'Рішення для продажу квитків',
                          sells: 'Рішення для продажу квитків',
                      }
                  ]
              }
          ]
      },
      {
          name: 'Клієнт 2',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків'
      }
  ]
};

function findValueByKey(companyName, company) {
  console.log(`Checking company: ${company.name}`);
  
  if (company.name === companyName) {
      console.log(`Found company: ${company.name}`);
      return company;
  } else if (company.clients) {
      for (const client of company.clients) {
          const result = findValueByKey(companyName, client);
          if (result) {
              return result;
          }
      }
  }
  
  if (company.partners) {
      for (const partner of company.partners) {
          const result = findValueByKey(companyName, partner);
          if (result) {
              return result;
          }
      }
  }
  
  return null;
}

const companyNameToFind = 'Клієнт 1.2.3';
const result = findValueByKey(companyNameToFind, company);

if (result) {
  console.log(`Інформація про ${companyNameToFind}:`, result);
} else {
  console.log(`Компанія ${companyNameToFind} не знайдена.`);
} 
