window.onload = () => {
    const mesaImage = document.getElementById("main-mesa")
const table1 = document.getElementById("table-1")
const table2 = document.getElementById("table-2")
const table3 = document.getElementById("table-3")

table1.addEventListener('click', onTable1Click)
table2.addEventListener('click', onTable2Click)
table3.addEventListener('click', onTable3Click)

function onTable1Click(event) {
    console.log('aqui')
    mesaImage.src = "http://www.globilhares.com.br/r/w486-h293/product_gallery/1_1.jpg"
}

function onTable2Click(event) {
    mesaImage.src = "http://www.globilhares.com.br/r/w486-h293/product_gallery/1_2.jpg"
}

function onTable3Click(event) {
    mesaImage.src = "http://www.globilhares.com.br/r/w486-h293/product_gallery/1_3.jpg"
}
}