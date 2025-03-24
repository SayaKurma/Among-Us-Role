const roles = {
    crewmate: [
        { name: 'Soothsayer', info: 'Selaku Soothsayer, kamu dapat memprediksikan siapa yang akan menjadi pembunuhmu. Jika prediksimu benar, identitas pelaku akan diumumkan kepada seluruh pemain setelah kamu terbunuh.' },
        { name: 'Gaulois', info: '"Selaku Gaulois, kamu dapat memberikan pemain lain peningkatan laju jalan secara permanen dengan menggunakan tombol Kill.' }
    ],
    impostor: [
        { name: 'Ventriloquist', info: 'Selaku Ventriloquist, kamu dapat memalsukan ucapan pemain lain. Pertama-tama, tentukan pemain yang identitasnya ingin kamu gunakan dengan perintah <b>/target {ID}</b>. Setelah itu, kirim pesan yang kamu inginkan dengan memanfaatkan identitas pemain tersebut melalui perintah <b>/chat {pesan}</b>.' },
        { name: 'Impostor 2', info: 'Informasi tentang Impostor 2' }
    ],
    netral: [
        { name: 'Netral 1', info: 'Informasi tentang Netral 1' },
        { name: 'Netral 2', info: 'Informasi tentang Netral 2' }
    ],
    coven: [
        { name: 'Coven 1', info: 'Informasi tentang Coven 1' },
        { name: 'Coven 2', info: 'Informasi tentang Coven 2' }
    ],
    addon: [
        { name: 'Add-on 1', info: 'Informasi tentang Add-on 1' },
        { name: 'Add-on 2', info: 'Informasi tentang Add-on 2' }
    ]
};

function populateTable() {
    const tbody = document.getElementById('roleTableBody');
    tbody.innerHTML = '';

    const maxRows = Math.max(
        roles.crewmate.length,
        roles.impostor.length,
        roles.netral.length,
        roles.coven.length,
        roles.addon.length
    );

    for (let i = 0; i < maxRows; i++) {
        const row = document.createElement('tr');

        for (const category in roles) {
            const cell = document.createElement('td');
            if (roles[category][i]) {
                const role = roles[category][i];
                cell.innerHTML = `<a href="#" onclick="showInfo('${role.name}')">${role.name}</a>`;
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}

window.onload = populateTable;

function showInfo(roleName) {
    const infoModal = document.getElementById('infoModal');
    const roleInfo = document.getElementById('roleInfo');
    
    for (const category in roles) {
        const role = roles[category].find(r => r.name === roleName);
        if (role) {
            roleInfo.innerHTML = role.info;
            break;
        }
    }
    
    infoModal.style.display = "block";
}

function closeModal() {
    document.getElementById('infoModal').style.display = "none";
}

window.onclick = function(event) {
    const infoModal = document.getElementById('infoModal');
    if (event.target == infoModal) {
        infoModal.style.display = "none";
    }
}
