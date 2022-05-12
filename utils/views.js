function view(category) {
    const selection = category.split(' ').pop();

    console.info(selection);

    if (selection === 'Employees') {
        console.log('You have selected Employee')
    } else if (selection === 'Roles') {
        console.log('You have selected Roles')
    } else {
        console.log('You have selected Departments')
    }
}

module.exports = view;