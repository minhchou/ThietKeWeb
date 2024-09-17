const data = [
  
    {
        id: 1,
        name: "BALO NỮ- BỘ SƯU TẬP NẮNG HẠ",
        auth: "nhà tiết kế thời trang bích thanh",
        kind: "bộ sưu tập",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl:"../images/balodeocheo.jpg",
        price: 599000,
    },
    {
        id: 2,
        name: "Balo -Bộ sưu tập Thanh Xuân",
        auth: "Nhà thiết kế Ánh Dương",
        kind: "bộ sưu tập",
        field: "bộ sưu tập thanh xuân",
        publishingYear: 2023,
        imgUrl: "../images/tuideocheo0804.jpg",
        price: 510000,
    },
    {
        id: 3,
        name: "giày xinh chất công sở",
        auth: " juno",
        kind: "giày dép",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl: "../images/caogot-G023.jpg",
        price: 590000,
    },
    {
        id: 4,
        name: "balo unisex_BST02",
        auth: " nhà thiết kế thời trang Bích Thanh",
        kind: "bộ sưu tập",
        field: "bộ sưu tập Thanh Xuân",
        publishingYear: 2023,
        imgUrl: "../images/unisex.jpg",
        price: 199000,
    },
    {
        id: 5,
        name: "BALO NỮ- BỘ SƯU TẬP NẮNG HẠ",
        auth: "nhà tiết kế thời trang bích thanh",
        kind: "bộ sưu tập",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl:"../images/balodeocheo.jpg",
        price: 599000,
    },
    {
        id: 6,
        name: "Balo -Bộ sưu tập Thanh Xuân",
        auth: "Nhà thiết kế Ánh Dương",
        kind: "bộ sưu tập",
        field: "bộ sưu tập thanh xuân",
        publishingYear: 2023,
        imgUrl: "../images/tuideocheo0804.jpg",
        price: 510000,
    },
    {
        id: 7,
        name: "giày xinh chất công sở",
        auth: " juno",
        kind: "giày dép",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl: "../images/caogot-G023.jpg",
        price: 590000,
    },
    {
        id: 8,
        name: "balo unisex_BST02",
        auth: " nhà thiết kế thời trang Bích Thanh",
        kind: "bộ sưu tập",
        field: "bộ sưu tập Thanh Xuân",
        publishingYear: 2023,
        imgUrl: "../images/unisex.jpg",
        price: 199000,
    },
	{
        id: 9,
        name: "giày xinh-BST Nắng Hạ",
        auth: " juno",
        kind: "giày dép",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl: "../images/caogot-G023.jpg",
        price: 590000,
    },
	{
        id: 10,
        name: "giày xinh chất công sở",
        auth: " juno",
        kind: "giày dép",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl: "../images/nangha-N001.jpg",
        price: 590000,
    },
	{
        id: 11,
        name: "balo- túi đeo chéo- G001s",
        auth: " juno",
        kind: "balos",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl: "../images/tuideocheo0804.jpg",
        price: 590000,
    },
	{
        id: 12,
        name: " cao gót công sở- 0815",
        auth: " juno",
        kind: "giày dép",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl: "../images/caogot-g4491.jpg",
        price: 590000,
    },
	{
        id: 13,
        name: "giày cao gót nơ-001",
        auth: " juno",
        kind: "giày dép",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl: "../images/mwc.jpg",
        price: 590000,
    },
	{
        id: 14,
        name: "giày cao gót G024",
        auth: " juno",
        kind: "giày dép",
        field: "bộ sưu tập nắng hạ",
        publishingYear: 2023,
        imgUrl: "../images/giaycaogot-G024.jpg",
        price: 590000,
    },{
        id: 15,
        name: "balo kekemi 0022",
        auth: " juno",
        kind: "balo",
        field: "bộ sưu tập Thanh Xuân",
        publishingYear: 2023,
        imgUrl: "../images/balokekemi.jpg",
        price: 590000,
    }


]

const container = document.getElementById('books');

        data.forEach(book => {
            const items = document.createElement('div');
            items.className = 'items';

            const image = document.createElement('img');
            image.src = book.imgUrl;
            image.alt = book.name;
            items.appendChild(image);

            const title = document.createElement('h4');
            title.textContent = book.name;
            items.appendChild(title);

            const price = document.createElement('p');
            price.textContent = 'Giá: ' + book.price.toLocaleString('vi-VN') + ' VND';
            items.appendChild(price);

            container.appendChild(items);
        });

const products = document.querySelectorAll('.items')

products.forEach((items,index) => {
    items.addEventListener('click', () => {
        localStorage.setItem('book',JSON.stringify(data[index]))
        window.location.href = "ChiTietSanPham.html"
    })
})

