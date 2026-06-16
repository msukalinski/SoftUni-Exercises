function cityTaxes(city, population, treasury) {
    const cityReport = {
        name: city,
        population, 
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
        },
    };
    return cityReport;
}
const city = cityTaxes('Sofia', 2000000, 1000000);
console.log(city);