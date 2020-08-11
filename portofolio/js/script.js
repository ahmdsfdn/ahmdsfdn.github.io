// event pada saat link di klik

// jquery tolong ambilkan elemen yang punya nama kelas pagescroll (jika ketemu) pada saat diklik jalankan fungsi berikut...
$('.page-scroll').on('click', function(e){

// //jalan apa nggak, untuk menuliskan sesuatu ke console javascript ke browser
// 	console.log('ok'); //jika tombol dklik keluar ok brrti aman


 //ambil isi href
 //this = a yang bersangkutan / yang dkilik aja
	var tujuan = $(this).attr('href');
	// tangkap elemen yang bersentuhan
	var elementujuan = $(tujuan);

//semua elemen punya fungsi yang namanya scrolltop = mengetahui jarak elemen ke posisi paling atas
//ketika halaman di scroll nilai scropll top nya berubah
	// console.log($('html,body').scrollTop());

	// console.log(elementujuan.offset().top);
	// pindahkan scroll
	// $('body').scrollTop('700');

	$('html,body').animate({
		scrollTop: $(elementujuan).offset().top-50
	},1000, 'easeInOutExpo');
	//50 mengurangi jarak, 1000 kecepatan per ms scroll
	e.preventDefault(); //supaya href nggak jalan tapi mengembalikan nilai 0
	// console.log(elementujuan.offset().top);


});


// menyimpan paraalllax

//about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

// tolong carikan elemen window pada saat di scroll jalankan fungsi berikut


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	//jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//protofolio

	//offset jaraknya dari atas

	if ( wScroll > $('.portofolio').offset().top - 50 ) {

		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function() {
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		// setiap elemen akan diberikan fungsi


		// $('.portofolio .thumbnail').addClass('muncul');

	}

});