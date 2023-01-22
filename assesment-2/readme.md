# Basic Test 2: Permasalahan harga request reverse geocoding

## Permasalahan
John ingin membuat aplikasi karyawan yang memerlukan absen 10 kali di tempat yg berbeda.

    harga request: $5 / 1000 request.

Total request dari aplikasi John: 1 user x 30 hari x 10 lokasi = 300 request => x 10 user = 3000 request atau $15

    Pendapatan: $10 per 10 user => $1 / user per bulan  

**Critical point** : Setiap kali karyawan ingin melakukan absensi di salah satu dari 10 tempat tersebut, aplikasi melakukan request ke API Geocoding yang seharga 0.005 / per request. Sehingga jika karyawan melakukan absensi penuh, maka biayanya akan seperti di Total request per 10 karyawan. Yang mana terjadi minus di income dan outcome-nya: 

    $15 - $10 = -$5

## Solusi
Berdasarkan analisis dan pemahaman saya, dapat diasumsikan bahwa sistem bisnis dari aplikasi/bisnis John mirip dengan pekerjaan seorang sales atau pekerjaan lapangan lain yang terdapat setiap checkpoint di lokasi yang berbeda-beda dan setiap checkpoint tersebut dapat berupa customer, kantor, toko, atau tempat sejenisnya yang memerlukan seorang karyawan mengunjungi tempat-tempat tersebut. 

Hubungannya dengan masalah tersebut bisa dibilang setiap karyawan yang sampai di checkpoint tersebut akan melakukan request API Geocoding setiap sampai.

Sehingga solusi permasalahan tersebut agar efisiensi biaya dapat dilakukan yaitu dengan request API bukan dari karyawan melainkan tempat-tempat tersebut. Berikut perkiraan biayanya:

    misalkan jumlah karyawan 1000 orang: $1000 / bulan

jumlah checkpoint dapat divariasikan, anggap saja 1 karyawan handle 10 lokasi berbeda masing-masing, namun tidak menutup kemungkinan berbagai karyawan mengunjungi tempat yang sama.

    Harga request: $5 / 1000 req.

    Total checkpoint: 10000 lokasi = 10000 request => $50

Saya asumsikan perbulan ada checkpoint yang berpindah tempat sebanyak 300 lokasi sehingga perlu update request API: 0.005 x 300 : $1.5 

    Total: $1000 - $51.5 = $948.5

Dengan metode objektivitas request ini yang mana berfokus pada objek dari pada subjek karyawan itu sendiri, dapat dipastikan biayanya jauh lebih efisien. Dan sisa biaya dapat dialokasikan ke biaya lain seperti gaji, biaya langganan cloud, biaya perawatan aplikasi, dll.

**Note**: Dengan solusi ini perlunya konfirmasi 2 pihak, yaitu dari pihak karyawan sendiri ataupun dari pihak checkpoint agar data absensi dapat dipercaya. Bisa juga disertai foto karyawan yang dikirim oleh pihak checkpoint.

**Untuk implementasi kodenya saya menggunakan simulasi API Geocoding karena saya mendapati masalah saat mencoba menggunakan API sample-nya.**