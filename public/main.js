// public/main.js
document.getElementById('createTransactionForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const buyOrder = document.getElementById('buyOrder').value;
    const sessionId = document.getElementById('sessionId').value;
    const amount = document.getElementById('amount').value;
    const returnUrl = document.getElementById('returnUrl').value;

    try {
        const response = await fetch('/transbank/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ buyOrder, sessionId, amount, returnUrl })
        });

        const data = await response.json();
        if (response.ok) {
            if (data.token) {
                const form = document.createElement('form');
                form.method = 'post';
                form.action = data.url; // URL proporcionada por Transbank

                const tokenInput = document.createElement('input');
                tokenInput.type = 'hidden';
                tokenInput.name = 'token_ws';
                tokenInput.value = data.token;

                form.appendChild(tokenInput);
                document.body.appendChild(form);
                form.submit();
            } else {
                alert('Unexpected error: ' + JSON.stringify(data));
            }
        } else {
            alert('Error creating transaction: ' + data.error);
        }
    } catch (error) {
        alert('Error creating transaction: ' + error.message);
    }
});

document.getElementById('commitTransactionForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const token = document.getElementById('token').value;

    try {
        const response = await fetch('/transbank/commit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });

        const data = await response.json();
        if (response.ok) {
            alert(JSON.stringify(data));
        } else {
            alert('Error committing transaction: ' + data.error);
        }
    } catch (error) {
        alert('Error committing transaction: ' + error.message);
    }
});
