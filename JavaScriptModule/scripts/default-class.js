export default class{
    constructor(nama){
        this.nama=nama;
    }

    panggil(nama){
        console.info(`Hallo ${nama} selamat datang di Default Class dari ${this.nama}`);
    }
}