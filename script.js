const validRollNumber = '21-1-43-012258';
const validDob = '31-01-2003';
const validName = 'Yash';

function formatRollNumber(input) {
    let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    let formattedValue = '';

    if (value.length > 0) formattedValue += value.substring(0, 2);
    if (value.length > 2) formattedValue += '-' + value.substring(2, 3);
    if (value.length > 3) formattedValue += '-' + value.substring(3, 5);
    if (value.length > 5) formattedValue += '-' + value.substring(5, 11); // Allow up to 11 digits

    input.value = formattedValue;
}

function showHallTicket() {
    const rollNumber = document.getElementById('rollNumber').value;
    const dob = document.getElementById('dob').value;
    const name = document.getElementById('name').value;

    if (rollNumber && dob && name) {
        const formattedDob = formatDate(dob);
        if (rollNumber === validRollNumber && formattedDob === validDob && name === validName) {
            const params = new URLSearchParams({
                rollNumber: rollNumber,
                dob: dob,
                name: name
            });
            window.location.href = `hallticket.html?${params.toString()}`;
        } else {
            document.getElementById('error').classList.remove('hidden');
        }
    } else {
        alert('Please fill out all fields.');
    }
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function resetForm() {
    document.getElementById('error').classList.add('hidden');
}
