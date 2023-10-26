const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// 1. Printing each name
names.forEach((name) => {
    console.log(name);
});

// 2. Printing each name with its corresponding province
names.forEach((name, index) => {
    const province = provinces[index];
    console.log(`${name}, ${province}`);
});

// 3. Mapping provinces to uppercase
const uppercaseProvinces = provinces.map((province) => {
    return province.toUpperCase();
});
console.log(uppercaseProvinces);

// 4. Mapping name lengths
const nameLengths = names.map((name) => {
    return name.length;
});
console.log(nameLengths);

// 5. Sorting provinces alphabetically
const sortedProvinces = provinces.slice().sort(); // Create a copy to avoid modifying the original array
console.log(sortedProvinces);

// 6. Filtering provinces that don't include 'Cape'
const nonCapeProvinces = provinces.filter((province) => {
    return !province.includes('Cape');
});
console.log(nonCapeProvinces.length);

// 7. Checking if names contain 's'
const containsSArray = names.map((name) => {
    return name.toLowerCase().includes('s');
});
console.log(containsSArray);

// 8. Creating a name-to-province mapping
const nameToProvinceMap = names.reduce((result, name, index) => {
    result[name] = provinces[index];
    return result;
}, {});
console.log(nameToProvinceMap);