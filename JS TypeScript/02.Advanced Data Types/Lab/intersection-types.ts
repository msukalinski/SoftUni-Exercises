function showContact (contactPerson: {name: string} & {email: string}) {
    return contactPerson;
}

let contactPerson: {name: string} & {email: string} =
{
    name: 'Pesho Ivanov',
    email: 'pesho@abv.bg',
}

console.log(showContact(contactPerson));