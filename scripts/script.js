document.addEventListener('DOMContentLoaded', function () {
    // Get references to the HTML elements
    const addArtistButton = document.getElementById('addArtist');
    const artistFieldsContainer = document.getElementById('artistFields');

    const addComposerButton = document.getElementById('addComposer');
    const composerFieldsContainer = document.getElementById('composerFields');

    const addLyricistButton = document.getElementById('addLyricist');
    const lyricistFieldsContainer = document.getElementById('lyricistFields');

    addArtistButton.addEventListener('click', function () {
        const artistFieldContainer = document.createElement('div');
        artistFieldContainer.classList.add('form-group');

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'form-control';
        inputField.name = 'artist[]';
        inputField.required = true;

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';

        // Event listener to delete the input field when the "Delete" button is clicked
        deleteButton.addEventListener('click', function () {
            artistFieldContainer.remove();
        });

        artistFieldContainer.appendChild(inputField);
        artistFieldContainer.appendChild(deleteButton);
        artistFieldsContainer.appendChild(artistFieldContainer);
    });

    // Event listener to add a new composer input field
    addComposerButton.addEventListener('click', function () {
        const composerFieldContainer = document.createElement('div');
        composerFieldContainer.classList.add('form-group');

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'form-control';
        inputField.name = 'composer[]';
        inputField.required = true;

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';

        // Event listener to delete the input field when the "Delete" button is clicked
        deleteButton.addEventListener('click', function () {
            composerFieldContainer.remove();
        });

        composerFieldContainer.appendChild(inputField);
        composerFieldContainer.appendChild(deleteButton);
        composerFieldsContainer.appendChild(composerFieldContainer);
    });

    addLyricistButton.addEventListener('click', function () {
        const lyricistFieldContainer = document.createElement('div');
        lyricistFieldContainer.classList.add('form-group');

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'form-control';
        inputField.name = 'lyricist[]';
        inputField.required = true;

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';

        // Event listener to delete the input field when the "Delete" button is clicked
        deleteButton.addEventListener('click', function () {
            lyricistFieldContainer.remove();
        });

        lyricistFieldContainer.appendChild(inputField);
        lyricistFieldContainer.appendChild(deleteButton);
        lyricistFieldsContainer.appendChild(lyricistFieldContainer);
    });
});