$(document).ready(function(){

	$('input#totalBelanja').keyup(function(){
		let totalBelanja = $('input#totalBelanja').val();
		let diskon = 0;
		if(totalBelanja >= 100000){
			diskon = 10;
		} else if(totalBelanja >= 50000){
			diskon = 5;
		}

		let totalHarga = $(this).val() - ((diskon/100)* $(this).val());

		$('td#diskon').text(`${diskon} %`);
		$('td#totalHarga').text(totalHarga);
	});

	$('input#tunai').keyup(function(){
		let kembalian = $(this).val() - $('td#totalHarga').text();

		$('td#kembalian').text(kembalian);
	});
});	