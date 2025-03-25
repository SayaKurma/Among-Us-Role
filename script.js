const roles = {
    crewmate: [
        { name: 'Soothsayer', info: 'Selaku Soothsayer, kamu dapat memprediksikan siapa yang akan menjadi pembunuhmu. Jika prediksimu benar, identitas pelaku akan diumumkan kepada seluruh pemain setelah kamu terbunuh.' },
        { name: 'Gaulois', info: 'Selaku Gaulois, kamu dapat memberikan pemain lain peningkatan laju jalan secara permanen dengan menggunakan tombol Kill.' }, 
        { name: 'Sentry', info: 'Selaku Sentry, kamu dapat mengawasi sebuah ruangan dengan menekan tombol Pet. Jika tombol Pet digunakan lagi, kamu akan mengetahui siapa saja yang berada di ruangan tersebut, termasuk jika ada mayat. Selain itu, kamu juga akan mendapatkan notifikasi manakala ada yang mengakses ventilasi atau Shapeshift di ruangan yang diawasi.' }, 
        { name: 'Negotiator', info: 'Selaku Negotiator, kamu dapat memaksakan negosiasi yang tidak menyenangkan dengan memvoting target saat rapat. Target tersebut kemudian harus memilih salah satu dari empat konsekuensi: bunuh diri, menerima add-on yang merugikan, kehilangan jarak pandang, atau mengalami penurunan laju jalan secara permanen. Jika tidak memilih, konsekuensi defaultnya adalah bunuh diri. Target menyatakan pilihannya melalui perintah /neg {index}. Negosiasi hanya bisa dilakukan sekali dalam setiap rapat, dan kamu akan mengetahui pilihan target setelah rapat berakhir.' }
    ],
    impostor: [
        { name: 'Ventriloquist', info: 'Selaku Ventriloquist, kamu dapat memalsukan ucapan pemain lain. Pertama-tama, tentukan pemain yang identitasnya ingin kamu gunakan dengan perintah <b>/target {ID}</b>. Setelah itu, kirim pesan yang kamu inginkan dengan memanfaatkan identitas pemain tersebut melalui perintah <b>/chat {pesan}</b>.' },
        { name: 'Impostor 2', info: 'Informasi tentang Impostor 2' }, 
        { name: 'Impostor 3', info: 'Informasi tentang Impostor 3' }
    ],
    netral: [
        { name: 'Netral 1', info: 'Informasi tentang Netral 1' },
        { name: 'Netral 2', info: 'Informasi tentang Netral 2' }, 
        { name: 'Netral 3', info: 'Informasi tentang Netral 3' }
    ],
    coven: [
        { name: 'Coven 1', info: 'Informasi tentang Coven 1' },
        { name: 'Coven 2', info: 'Informasi tentang Coven 2' }, 
        { name: 'Coven 3', info: 'Informasi tentang Coven 3' }
    ],
    addon: [
        { name: 'Add-on 1', info: 'Informasi tentang Add-on 1' },
        { name: 'Add-on 2', info: 'Informasi tentang Add-on 2' }, 
        { name: 'Add-on 3', info: 'Informasi tentang Add-on 3' },
    ]
};

for (const category in roles) {
    roles[category].sort((a, b) => a.name.localeCompare(b.name));
}

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

        const categories = ['crewmate', 'impostor', 'netral', 'coven', 'addon'];
        categories.forEach(category => {
            const cell = document.createElement('td');
            if (roles[category][i]) {
                const role = roles[category][i];
                cell.innerHTML = `<a href="#" onclick="showInfo('${role.name}')">${role.name}</a>`;
            }
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    }
}

function showInfo(roleName) {
    const infoModal = document.getElementById('infoModal');
    const roleInfo = document.getElementById('roleInfo');
    const roleModalTitle = document.getElementById('roleModalTitle');

    for (const category in roles) {
        const role = roles[category].find(r => r.name === roleName);
        if (role) {
            roleModalTitle.textContent = role.name;
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

window.onload = populateTable;