document.addEventListener('DOMContentLoaded', function () {
    const addClaimButton = document.getElementById('addClaim');
    const claimFieldsContainer = document.getElementById('claimFields');
    addClaimButton.addEventListener('click', function () {
        const claimFieldContainer = document.createElement('div');
        claimFieldContainer.classList.add('form-group', 'row');

        const inputField1 = document.createElement('div');
        inputField1.classList.add('col-lg-6', 'mb-lg-0', 'p-2');

        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.className = 'form-control';
        input1.name = 'songname[]';
        input1.required = true;

        inputField1.appendChild(input1);

        const inputField2 = document.createElement('div');
        inputField2.classList.add('col-lg-6', 'mb-lg-0', 'p-2');

        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.className = 'form-control';
        input2.name = 'youtubelink[]';
        input2.required = true;

        inputField2.appendChild(input2);

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-primary';

        // Event listener to delete the input field when the "Delete" button is clicked
        deleteButton.addEventListener('click', function () {
            claimFieldContainer.remove();
        });

        claimFieldContainer.appendChild(inputField1);
        claimFieldContainer.appendChild(inputField2);
        claimFieldContainer.appendChild(deleteButton);
        claimFieldsContainer.appendChild(claimFieldContainer);
    });
});