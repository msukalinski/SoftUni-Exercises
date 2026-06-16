function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let inputElement = document.querySelector('#inputs > textarea');
   let bestRestaurantElement = document.querySelector('#bestRestaurant > p');
   let workersResult = document.querySelector('#workers > p');
   function onClick() {
      let input = document.querySelector('#inputs > textarea');
      let arr = JSON.parse(input.value);
      let restaurants = {};

      arr.forEach(element => {
         let tokens = element.split(' - ');
         let name = tokens[0];
         let workersArr = tokens[1].split(', ');

         let workers = [];

         for (const worker of workersArr) {
            let workerToken = worker.split(' ');
            let salary = Number(workerToken[1]);
            workers.push({ name: workerToken[0], salary });
         }
         if (restaurants[name]){
            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary,
         }
      });
      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;
      for (let name in restaurants){
         if (restaurants[name].averageSalary > bestRestaurantSalary){
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary,
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }
      bestRestaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let result = [];

      bestRestaurant.workers.forEach(worker => {
         result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });
      workersResult.textContent = result.join(' ');
   }
}
// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Peter 660", "TheLake - John 1300, Mike 780, Colin 660"]

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const bestRestaurantElement = document.querySelector('#bestRestaurant > p');
   const bestWorkersElement = document.querySelector('#workers > p');
   const inputElement = document.querySelector('#inputs > textarea');

   function onClick() {
      const arr = JSON.parse(inputElement.value);
      const result = {};
      for (const el of arr) {
         let [restaurantName, tokens] = el.split(' - ');
         if (!result[restaurantName]) {
            result[restaurantName] = {
               totalSalary: 0,
               avgSalary: 0,
               bestSalary: 0,
               workers: [],
            };
         };
         let workersData = tokens.split(', ');
         let sumSalary = 0;
         let bestSalary = 0;
         let workerArr = [];
         for (const worker of workersData) {
            let [workerName, workerSalary] = worker.split(' ');
            salary = Number(workerSalary);
            sumSalary += salary;
            if (bestSalary < salary) {
               bestSalary = salary;
            }
            workerArr.push({ name: workerName, salary });
         };
         if (result[restaurantName]) {
            result[restaurantName].workers = result[restaurantName].workers.concat(workerArr);
         }
         result[restaurantName].totalSalary += sumSalary;
         result[restaurantName].bestSalary = bestSalary;
         result[restaurantName].workers.sort((a, b) => b.salary - a.salary);
         result[restaurantName].avgSalary = result[restaurantName].totalSalary / result[restaurantName].workers.length;
      }
      let bestSalary = 0;
      let bestRestaurant = undefined;

      for (let restaurantName in result){
         if (result[restaurantName].avgSalary > bestSalary){
            bestRestaurant = {
               restaurantName,
               avgSalary: result[restaurantName].avgSalary,
               bestSalary: result[restaurantName].bestSalary,
               workers: result[restaurantName].workers
            }
            bestSalary = result[restaurantName].avgSalary;
         }
      }
      bestRestaurantElement.textContent = `Name: ${bestRestaurant.restaurantName} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let res = [];
      bestRestaurant.workers.forEach(worker => {
         res.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      });
      bestWorkersElement.textContent = res.join(' ');
      // console.log(result);
   }
}