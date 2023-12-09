fetch('js/option.json') 
    .then(response => response.json())
    .then(data => {
        const formGroup1 = document.querySelectorAll('.form-group')[0];
        const checkboxContainer = document.createElement('div');
        checkboxContainer.style.display = 'flex';
        checkboxContainer.style.gap = '10px'; // Optional: adds some space between checkboxes
        data.shoeSize.forEach((size, index) => {
            const checkbox = document.createElement('input'); // Create a new checkbox
            checkbox.type = 'checkbox';
            checkbox.id = 'size' + index;
            checkbox.name = 'shoeSize';
            checkbox.value = size;
        
            const label = document.createElement('label');
            label.htmlFor = 'size' + index;
            label.textContent = size;
        
            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);
        });
        formGroup1.appendChild(checkboxContainer);

        const formGroup2 = document.querySelectorAll('.form-group')[1];
        const radioContainer = document.createElement('div'); // Create radioContainer
        radioContainer.style.display = 'flex';
        radioContainer.style.gap = '10px'; // Optional: adds some space between radio buttons
        data.opinion.forEach((opinion, index) => {
            const radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.id = 'opinion' + index;
            radioButton.name = 'opinion';
            radioButton.value = opinion;

            const label = document.createElement('label');
            label.htmlFor = 'opinion' + index;
            label.textContent = opinion;

            radioContainer.appendChild(radioButton);
            radioContainer.appendChild(label);
        });
        formGroup2.appendChild(radioContainer);

        const formGroup3 = document.querySelectorAll('.form-group')[2];
        const select = document.createElement('select');
        select.name = 'colorPreference';

        const options = [
            'Neutral/Earthy Tones',
            'Bright and Vibrant',
            'Monochrome/Black & White',
            'Pastel Colors',
            'Other'
        ];

        options.forEach((optionValue, index) => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            select.appendChild(option);
        });

        formGroup3.appendChild(select);


        const formGroup5 = document.querySelectorAll('.form-group')[4];
        const textarea = document.createElement('textarea');
        textarea.id = 'label5';
        textarea.name = 'materialPreference';
        textarea.placeholder = 'Please describe in detail the material you prefer for athletic shoes.';

        // Remove the existing input element
        const oldInput = formGroup5.querySelector('input');
        formGroup5.removeChild(oldInput);

        // Append the new textarea element
        formGroup5.appendChild(textarea);

        // Get all form-group elements
        const formGroups = document.querySelectorAll('.form-group');

        // Loop through each form-group
        formGroups.forEach(formGroup => {
            // Get the first child element that is an input, select, or textarea
            const inputElement = formGroup.querySelector('input, select, textarea');

            // If an input, select, or textarea element was found, add the required attribute
            if (inputElement) {
                inputElement.required = true;
            }
        });

        const formGroup4 = document.querySelectorAll('.form-group')[3];
        const inputElement4 = formGroup4.querySelector('input');
        const errorMessage = document.createElement('p');
        errorMessage.style.color = 'red';
        formGroup4.appendChild(errorMessage);

        inputElement4.addEventListener('input', () => {
            const value = inputElement4.value;
            if (value.length > 10 || (value.length > 0 && value[0] !== value[0].toUpperCase())) {
                errorMessage.textContent = 'Please make sure your answer starts with a capital letter and has at most 10 characters';
            } else {
                errorMessage.textContent = '';
            }
        });

        const textareaElement5 = formGroup5.querySelector('textarea');
        const errorMessage5 = document.createElement('p');
        errorMessage5.style.color = 'red';
        formGroup5.appendChild(errorMessage5);

        textareaElement5.addEventListener('input', () => {
            const value = textareaElement5.value;
            if (value.length < 30) {
                errorMessage5.textContent = 'Please make sure your answer is at least 30 characters long';
            } else {
                errorMessage5.textContent = '';
            }
        });
    });