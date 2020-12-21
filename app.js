document.getElementById('temprature-form').addEventListener('submit', function (e) {
    

    // FOR LOADER TIME
    // Hide Results
    document.getElementById('result').style.display = 'none';

    // Show Loader
    document.getElementById('loader').style.display = 'block';

    setTimeout(calculateResult, 1000);
    
    
    e.preventDefault();
});

// calculateResult()

function calculateResult() {
    console.log("Calc");

    // UI varables

    const UIdegree = document.getElementById('degree');


    const UIfahrenheit = document.getElementById('fahrenheit');

    const degreeVal = parseFloat(UIdegree.value);

    const temprature = (degreeVal * 9 / 5) + 32;

    if (isFinite(degreeVal)) {
        UIfahrenheit.value = temprature.toFixed(2);
        
        // Show Results
        document.getElementById('result').style.display = 'block';

        // Hide Loader
        document.getElementById('loader').style.display = 'none';
    }
    else {
        //Funtion ShowError
        ShowError('Please check your number');
    }
}

function ShowError(error) {

    // Hide Result
    document.getElementById('result').style.display = 'none';
    // Hide Loader
    document.getElementById('loader').style.display = 'none';
    
    // Create DIV
    const errDiv = document.createElement('div');

    // Get Elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class 
    errDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errDiv.appendChild(document.createTextNode(error));

    // Insert before heading 

    card.insertBefore(errDiv, heading);
    
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}